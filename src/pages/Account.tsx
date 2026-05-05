import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Wallet, LogOut, ShoppingBag, Loader2, Search, TrendingUp, Award, Coins } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useWallet } from "@/hooks/useWallet";
import { supabase } from "@/integrations/supabase/client";
import { formatVND } from "@/lib/payment";
import { motion } from "framer-motion";

type Order = {
  id: string;
  order_code: string;
  total: number;
  status: string;
  created_at: string;
  items: Array<{ name: string; plan?: string; qty?: number }>;
};

type Tx = {
  id: string;
  type: string;
  amount: number;
  status: string;
  order_code: string | null;
  note: string | null;
  created_at: string;
};

const Account = () => {
  const navigate = useNavigate();
  const { user, isAdmin, signOut } = useAuth();
  const { balance } = useWallet();
  const [orders, setOrders] = useState<Order[]>([]);
  const [txs, setTxs] = useState<Tx[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"orders" | "topups">("orders");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) return;
    Promise.all([
      supabase
        .from("orders")
        .select("id, order_code, total, status, created_at, items")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false }),
      supabase
        .from("wallet_transactions")
        .select("id, type, amount, status, order_code, note, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false }),
    ]).then(([o, t]) => {
      setOrders((o.data ?? []) as Order[]);
      setTxs((t.data ?? []) as Tx[]);
      setLoading(false);
    });
  }, [user]);

  const totalSpent = useMemo(
    () => orders.reduce((s, o) => s + Number(o.total || 0), 0),
    [orders],
  );
  const totalTopupApproved = useMemo(
    () =>
      txs
        .filter((t) => t.type === "topup" && t.status === "approved")
        .reduce((s, t) => s + Number(t.amount || 0), 0),
    [txs],
  );
  const monthTopup = useMemo(() => {
    const now = new Date();
    return txs
      .filter((t) => {
        if (t.type !== "topup" || t.status !== "approved") return false;
        const d = new Date(t.created_at);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      })
      .reduce((s, t) => s + Number(t.amount || 0), 0);
  }, [txs]);

  const filteredOrders = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return orders;
    return orders.filter(
      (o) =>
        o.order_code.toLowerCase().includes(q) ||
        (Array.isArray(o.items) &&
          o.items.some((i) => i.name?.toLowerCase().includes(q))),
    );
  }, [orders, search]);

  const topupTxs = txs.filter((t) => t.type === "topup");
  const filteredTopups = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return topupTxs;
    return topupTxs.filter(
      (t) =>
        (t.order_code ?? "").toLowerCase().includes(q) ||
        (t.note ?? "").toLowerCase().includes(q),
    );
  }, [topupTxs, search]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur-xl">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold">Tài khoản của tôi</h1>
            <p className="text-[11px] text-muted-foreground truncate">{user?.email}</p>
          </div>
          {isAdmin && (
            <Link
              to="/admin"
              className="text-xs px-3 py-1.5 rounded-lg bg-primary/15 text-primary font-bold border border-primary/30"
            >
              Admin
            </Link>
          )}
          <button
            onClick={() => signOut().then(() => navigate("/"))}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-destructive/15 hover:text-destructive transition-colors"
            aria-label="Đăng xuất"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Stats grid (như hình 2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <StatCard
            icon={<Wallet className="w-5 h-5" />}
            value={formatVND(balance)}
            label="Số dư hiện tại"
            color="primary"
          />
          <StatCard
            icon={<Coins className="w-5 h-5" />}
            value={formatVND(monthTopup)}
            label="Tổng nạp tháng"
            color="orange"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            value={formatVND(totalTopupApproved)}
            label="Tổng nạp"
            color="green"
          />
          <StatCard
            icon={<Award className="w-5 h-5" />}
            value={totalSpent >= 5_000_000 ? "VIP" : totalSpent >= 1_000_000 ? "Bạc" : "Đồng"}
            label="Cấp độ"
            color="purple"
          />
        </div>

        {/* Quick actions */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/nap-tien"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-[var(--shadow-brand)] hover:opacity-90 transition-opacity"
          >
            <Wallet className="w-4 h-4" /> + Nạp tiền
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border font-bold text-sm hover:border-primary/40 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" /> Tiếp tục mua sắm
          </Link>
        </div>

        {/* Tabs */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="flex border-b border-border">
            <TabBtn active={tab === "orders"} onClick={() => setTab("orders")} count={orders.length}>
              <ShoppingBag className="w-4 h-4" /> Lịch sử mua hàng
            </TabBtn>
            <TabBtn active={tab === "topups"} onClick={() => setTab("topups")} count={topupTxs.length}>
              <Wallet className="w-4 h-4" /> Lịch sử nạp tiền
            </TabBtn>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  tab === "orders"
                    ? "Tìm theo mã đơn hoặc tên sản phẩm..."
                    : "Tìm theo mã giao dịch hoặc ghi chú..."
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/70 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>
          </div>

          <div className="p-4">
            {loading ? (
              <div className="py-12 flex justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : tab === "orders" ? (
              filteredOrders.length === 0 ? (
                <Empty text={search ? "Không tìm thấy đơn hàng" : "Chưa có đơn hàng nào"} />
              ) : (
                <div className="space-y-2.5">
                  {filteredOrders.map((o) => (
                    <motion.div
                      key={o.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-border bg-background/40 p-4 flex items-center justify-between gap-3 hover:border-primary/30 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="font-bold font-mono text-sm text-primary">{o.order_code}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {new Date(o.created_at).toLocaleString("vi-VN")} ·{" "}
                          {Array.isArray(o.items) ? o.items.length : 0} sản phẩm
                        </p>
                        <p className="text-[11px] text-foreground/80 mt-0.5 line-clamp-1">
                          {Array.isArray(o.items) ? o.items.map((i) => i.name).join(", ") : ""}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-extrabold text-primary">{formatVND(o.total)}</p>
                        <StatusPill status={o.status} kind="order" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )
            ) : filteredTopups.length === 0 ? (
              <Empty text={search ? "Không tìm thấy giao dịch" : "Chưa có giao dịch nạp tiền"} />
            ) : (
              <div className="space-y-2.5">
                {filteredTopups.map((t) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-border bg-background/40 p-4 flex items-center justify-between gap-3 hover:border-primary/30 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="font-bold font-mono text-sm text-primary">
                        {t.order_code ?? "—"}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {new Date(t.created_at).toLocaleString("vi-VN")}
                      </p>
                      {t.note && (
                        <p className="text-[11px] text-foreground/80 mt-0.5 line-clamp-1">{t.note}</p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-extrabold text-emerald-600">
                        + {formatVND(t.amount)}
                      </p>
                      <StatusPill status={t.status} kind="tx" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: "primary" | "orange" | "green" | "purple";
}) => {
  const map = {
    primary: { ring: "ring-primary/20", bg: "bg-primary/10", text: "text-primary" },
    orange: { ring: "ring-orange-200", bg: "bg-orange-100", text: "text-orange-600" },
    green: { ring: "ring-emerald-200", bg: "bg-emerald-100", text: "text-emerald-600" },
    purple: { ring: "ring-purple-200", bg: "bg-purple-100", text: "text-purple-600" },
  }[color];
  return (
    <div className="rounded-2xl bg-card border border-border p-4 md:p-5 shadow-[var(--shadow-card)] flex items-center gap-3">
      <div className={`w-12 h-12 rounded-2xl ring-4 ${map.ring} ${map.bg} ${map.text} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-base md:text-lg font-extrabold text-foreground truncate">{value}</p>
        <p className="text-[11px] text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

const TabBtn = ({
  active,
  onClick,
  count,
  children,
}: {
  active: boolean;
  onClick: () => void;
  count: number;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold transition-colors relative ${
      active ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
    }`}
  >
    {children}
    <span
      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
        active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
      }`}
    >
      {count}
    </span>
    {active && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
  </button>
);

const StatusPill = ({ status, kind }: { status: string; kind: "order" | "tx" }) => {
  const cfg =
    kind === "order"
      ? status === "delivered"
        ? { c: "bg-emerald-100 text-emerald-700", t: "Đã giao" }
        : status === "paid"
          ? { c: "bg-blue-100 text-blue-700", t: "Đã thanh toán" }
          : { c: "bg-amber-100 text-amber-700", t: "Chờ xử lý" }
      : status === "approved"
        ? { c: "bg-emerald-100 text-emerald-700", t: "Thành công" }
        : status === "rejected"
          ? { c: "bg-red-100 text-red-700", t: "Từ chối" }
          : { c: "bg-amber-100 text-amber-700", t: "Chờ duyệt" };
  return (
    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mt-1 ${cfg.c}`}>
      {cfg.t}
    </span>
  );
};

const Empty = ({ text }: { text: string }) => (
  <p className="text-sm text-muted-foreground text-center py-12">{text}</p>
);

export default Account;
