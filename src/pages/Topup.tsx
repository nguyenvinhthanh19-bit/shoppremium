import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, MessageCircle, Wallet, Clock, BadgeCheck, XCircle, Loader2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useWallet } from "@/hooks/useWallet";
import { supabase } from "@/integrations/supabase/client";
import {
  BANK_INFO,
  buildVietQR,
  formatVND,
  generateTopupCode,
  buildTopupZalo,
} from "@/lib/payment";
import { toast } from "sonner";

const PRESETS = [50_000, 100_000, 200_000, 500_000, 1_000_000, 2_000_000];

type Tx = {
  id: string;
  amount: number;
  status: "pending" | "approved" | "rejected" | "completed";
  order_code: string | null;
  created_at: string;
  type: string;
};

const Topup = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { balance } = useWallet();
  const [amount, setAmount] = useState<number>(100_000);
  const [copied, setCopied] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [history, setHistory] = useState<Tx[]>([]);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const orderCode = useMemo(() => (user ? generateTopupCode(user.id) : ""), [user, submitted]);
  const qr = useMemo(
    () => buildVietQR({ amount, addInfo: orderCode }),
    [amount, orderCode],
  );
  const zalo = buildTopupZalo(orderCode, amount);

  const fetchHistory = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("wallet_transactions")
      .select("id, amount, status, order_code, created_at, type")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(10);
    setHistory((data ?? []) as Tx[]);
  };

  useEffect(() => {
    fetchHistory();
    if (!user) return;
    const ch = supabase
      .channel(`tx-${user.id}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "wallet_transactions", filter: `user_id=eq.${user.id}` },
        () => fetchHistory(),
      )
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [user]);

  const copy = (txt: string, key: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleSubmitted = async () => {
    if (!user) return;
    if (amount < 10_000) {
      toast.error("Số tiền tối thiểu 10.000đ");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("wallet_transactions").insert({
      user_id: user.id,
      type: "topup",
      amount,
      status: "pending",
      order_code: orderCode,
      note: `Nạp ${formatVND(amount)}`,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Không gửi được yêu cầu", { description: error.message });
      return;
    }
    toast.success("Đã ghi nhận! Shop sẽ duyệt sau ít phút", { duration: 3500 });
    setSubmitted(orderCode);
    window.open(zalo, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border glass">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1">
            <h1 className="text-base font-bold flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" /> Nạp tiền vào ví
            </h1>
            <p className="text-[11px] text-muted-foreground">
              Số dư hiện tại: <span className="text-primary font-bold">{formatVND(balance)}</span>
            </p>
          </div>
          <Link
            to="/tai-khoan"
            className="text-xs text-primary hover:underline font-semibold"
          >
            Tài khoản →
          </Link>
        </div>
      </header>

      <div className="container max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Notes + history */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
            <h3 className="font-bold text-sm text-foreground mb-2">⚠️ Lưu ý quan trọng</h3>
            <ul className="text-[12px] text-muted-foreground space-y-1.5 leading-relaxed">
              <li>✅ Tốc độ duyệt 1–10 phút (giờ hành chính)</li>
              <li>✅ Sai nội dung CK → tiền sẽ về chậm. Hãy QUÉT QR cho chuẩn.</li>
              <li>✅ Sau khi CK xong, bấm nút bên phải để báo Zalo cho shop duyệt nhanh.</li>
              <li>✅ Số dư có thể dùng thanh toán mọi sản phẩm trong shop.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4">
            <h3 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Lịch sử nạp gần đây
            </h3>
            {history.length === 0 ? (
              <p className="text-xs text-muted-foreground py-3 text-center">Chưa có giao dịch</p>
            ) : (
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {history.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-secondary/50 text-xs"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground truncate">
                        {t.type === "topup" ? "Nạp" : t.type === "purchase" ? "Mua" : t.type}{" "}
                        <span className={t.amount >= 0 ? "text-emerald-400" : "text-red-400"}>
                          {t.amount >= 0 ? "+" : ""}
                          {formatVND(t.amount)}
                        </span>
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono truncate">
                        {t.order_code} · {new Date(t.created_at).toLocaleString("vi-VN")}
                      </p>
                    </div>
                    <StatusBadge status={t.status} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Topup form + QR */}
        <div className="lg:col-span-3 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Số tiền nạp
            </label>
            <div className="flex items-center gap-2 mt-2 px-4 py-3.5 rounded-xl bg-secondary/60 border border-border focus-within:border-primary">
              <input
                type="number"
                min={10000}
                step={10000}
                value={amount}
                onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value || "0")))}
                className="flex-1 bg-transparent outline-none text-2xl font-extrabold text-primary"
              />
              <span className="text-sm font-bold text-muted-foreground">VND</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    amount === p
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary/20 hover:text-primary"
                  }`}
                >
                  {(p / 1000).toLocaleString("vi-VN")}k
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div className="sm:col-span-2 flex flex-col items-center">
              <div className="rounded-xl bg-white p-2">
                <img src={qr} alt="QR nạp tiền" className="w-44 h-44 object-contain" />
              </div>
              <p className="text-[10px] text-center text-muted-foreground mt-2">
                Quét QR — số tiền & nội dung đã điền sẵn
              </p>
            </div>
            <div className="sm:col-span-3 space-y-1.5">
              <Row label="Ngân hàng" value={BANK_INFO.bankName} />
              <Row label="Chủ TK" value={BANK_INFO.accountName} />
              <Row
                label="Số TK"
                value={BANK_INFO.accountFormatted}
                onCopy={() => copy(BANK_INFO.account, "acc")}
                copied={copied === "acc"}
              />
              <Row
                label="Số tiền"
                value={formatVND(amount)}
                highlight
                onCopy={() => copy(String(amount), "amt")}
                copied={copied === "amt"}
              />
              <div className="flex items-start justify-between gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Nội dung CK
                  </p>
                  <p className="text-primary font-bold font-mono break-all">{orderCode}</p>
                </div>
                <button onClick={() => copy(orderCode, "ct")} className="text-primary mt-1">
                  {copied === "ct" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          <motion.button
            onClick={handleSubmitted}
            disabled={submitting}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-[var(--shadow-brand)] disabled:opacity-60"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageCircle className="w-4 h-4" />}
            Tôi đã chuyển khoản — Báo Zalo cho shop
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const Row = ({
  label,
  value,
  onCopy,
  copied,
  highlight,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
  copied?: boolean;
  highlight?: boolean;
}) => (
  <div
    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs ${
      highlight ? "bg-primary/10 border border-primary/25" : "bg-secondary/50"
    }`}
  >
    <span className="text-muted-foreground">{label}</span>
    <div className="flex items-center gap-2">
      <span className={`font-semibold ${highlight ? "text-primary font-extrabold" : "text-foreground"}`}>
        {value}
      </span>
      {onCopy && (
        <button onClick={onCopy} className="text-primary">
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const map: Record<string, { label: string; cls: string; icon: JSX.Element }> = {
    pending: { label: "Chờ duyệt", cls: "bg-amber-500/15 text-amber-400 border-amber-500/30", icon: <Clock className="w-3 h-3" /> },
    approved: { label: "Đã duyệt", cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", icon: <BadgeCheck className="w-3 h-3" /> },
    completed: { label: "Hoàn tất", cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", icon: <BadgeCheck className="w-3 h-3" /> },
    rejected: { label: "Từ chối", cls: "bg-red-500/15 text-red-400 border-red-500/30", icon: <XCircle className="w-3 h-3" /> },
  };
  const s = map[status] ?? map.pending;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold whitespace-nowrap ${s.cls}`}>
      {s.icon} {s.label}
    </span>
  );
};

export default Topup;
