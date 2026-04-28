import { useEffect, useState } from "react";
import { ArrowLeft, Wallet, LogOut, ShoppingBag, Loader2 } from "lucide-react";
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
  items: Array<{ name: string; plan: string; qty: number }>;
};

const Account = () => {
  const navigate = useNavigate();
  const { user, isAdmin, signOut } = useAuth();
  const { balance } = useWallet();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("orders")
      .select("id, order_code, total, status, created_at, items")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setOrders((data ?? []) as Order[]);
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border glass">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1">
            <h1 className="text-base font-bold">Tài khoản của tôi</h1>
            <p className="text-[11px] text-muted-foreground truncate">{user?.email}</p>
          </div>
          {isAdmin && (
            <Link to="/admin" className="text-xs px-3 py-1.5 rounded-lg bg-primary/15 text-primary font-bold border border-primary/30">
              Admin
            </Link>
          )}
          <button
            onClick={() => signOut().then(() => navigate("/"))}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-destructive/20 hover:text-destructive transition-colors"
            aria-label="Đăng xuất"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="container max-w-5xl mx-auto px-4 py-6 space-y-5">
        {/* Wallet card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-6 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-primary/30 flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Wallet className="w-3.5 h-3.5" /> Số dư ví
            </p>
            <p className="text-3xl font-extrabold text-primary mt-1">{formatVND(balance)}</p>
          </div>
          <Link
            to="/nap-tien"
            className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-[var(--shadow-brand)]"
          >
            + Nạp tiền
          </Link>
        </motion.div>

        {/* Orders */}
        <div>
          <h2 className="text-sm font-bold mb-3 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-primary" /> Đơn hàng của tôi
          </h2>
          {loading ? (
            <div className="py-10 flex justify-center">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : orders.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-10">Chưa có đơn hàng nào</p>
          ) : (
            <div className="space-y-2.5">
              {orders.map((o) => (
                <div key={o.id} className="rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-bold font-mono text-sm text-primary">{o.order_code}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {new Date(o.created_at).toLocaleString("vi-VN")} ·{" "}
                      {Array.isArray(o.items) ? o.items.length : 0} sản phẩm
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                      {Array.isArray(o.items) ? o.items.map((i) => i.name).join(", ") : ""}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-extrabold text-primary">{formatVND(o.total)}</p>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mt-1 ${
                      o.status === "delivered" ? "bg-emerald-500/15 text-emerald-400" :
                      o.status === "paid" ? "bg-blue-500/15 text-blue-400" :
                      "bg-amber-500/15 text-amber-400"
                    }`}>
                      {o.status === "delivered" ? "Đã giao" : o.status === "paid" ? "Đã thanh toán" : "Chờ xử lý"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
