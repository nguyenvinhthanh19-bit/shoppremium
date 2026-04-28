import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft, Copy, Check, Trash2, MessageCircle, ShoppingCart, BadgeCheck, Plus, Minus,
  Wallet, Zap, Loader2, AlertCircle,
} from "lucide-react";
import {
  BANK_INFO, buildVietQR, buildTransferContent, buildZaloMessage,
  generateCartOrderCode, formatVND,
} from "@/lib/payment";
import { useAuth } from "@/hooks/useAuth";
import { useWallet } from "@/hooks/useWallet";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import qrMomo from "@/assets/qr-momo.png";

type Method = "wallet" | "bank" | "momo";

const Checkout = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { balance, refresh } = useWallet();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [method, setMethod] = useState<Method>(user ? "wallet" : "bank");
  const [paying, setPaying] = useState(false);

  const orderCode = useMemo(() => generateCartOrderCode(), []);
  const itemsLabel = items.map((i) => i.service.sku).join("+");
  const transferContent = buildTransferContent(orderCode, itemsLabel);
  const qrUrl = buildVietQR({ amount: totalPrice, addInfo: transferContent });
  const zaloUrl = buildZaloMessage({
    orderCode, total: totalPrice,
    itemsLabel: items.map((i) => `${i.service.name} (${i.plan.duration})`).join(", "),
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1800);
  };

  const payWithWallet = async () => {
    if (!user) {
      navigate("/auth", { state: { from: "/checkout" } });
      return;
    }
    if (balance < totalPrice) {
      toast.error("Số dư không đủ", { description: "Vui lòng nạp thêm tiền vào ví" });
      return;
    }
    setPaying(true);
    const itemsPayload = items.map((i) => ({
      sku: i.service.sku,
      name: i.service.name,
      plan: `${i.plan.accountType} ${i.plan.duration}`,
      price: i.plan.price,
      qty: i.quantity,
    }));
    const { data, error } = await supabase.rpc("wallet_purchase", {
      _items: itemsPayload,
      _total: totalPrice,
      _order_code: orderCode,
    });
    setPaying(false);
    if (error) {
      const msg = error.message.includes("insufficient_balance") ? "Số dư không đủ" : error.message;
      toast.error("Thanh toán thất bại", { description: msg });
      return;
    }
    toast.success("🎉 Thanh toán thành công!", {
      description: "Shop sẽ liên hệ giao tài khoản qua Zalo.",
      duration: 5000,
    });
    clearCart();
    refresh();
    navigate("/tai-khoan");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-4">
        <ShoppingCart className="w-16 h-16 text-muted-foreground/30" />
        <p className="text-muted-foreground text-lg">Giỏ hàng trống</p>
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-[var(--shadow-brand)]"
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại mua hàng
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border glass">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate("/")} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1">
            <h1 className="text-base font-bold">Thanh toán</h1>
            <p className="text-[11px] text-muted-foreground">
              Mã đơn: <span className="font-mono font-bold text-primary">{orderCode}</span>
            </p>
          </div>
        </div>
      </header>

      <div className="container max-w-5xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: items */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Đơn hàng ({items.length} sản phẩm)
            </h2>

            <AnimatePresence initial={false}>
              {items.map((item) => {
                const { color1, color2, emoji } = item.service.brand;
                return (
                  <motion.div
                    key={item.id} layout
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -40 }}
                    className="rounded-2xl border border-border bg-card p-3 flex items-center gap-3"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}>
                      {emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground truncate">{item.service.name}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {item.plan.accountType} — {item.plan.duration}
                      </p>
                      <p className="text-[10px] font-mono text-primary/80 mt-0.5">SKU: {item.service.sku}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-sm font-extrabold text-primary whitespace-nowrap">{item.plan.price}</span>
                      <div className="flex items-center gap-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary">
                          <Plus className="w-3 h-3" />
                        </button>
                        <button onClick={() => removeItem(item.id)} className="ml-1 w-6 h-6 rounded-md text-muted-foreground hover:text-destructive flex items-center justify-center">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <div className="rounded-2xl border-2 border-primary/40 bg-primary/5 p-5 flex items-center justify-between shadow-[var(--shadow-brand)]">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Tổng thanh toán</p>
                <p className="text-2xl font-extrabold text-primary mt-0.5">{formatVND(totalPrice)}</p>
              </div>
              <BadgeCheck className="w-10 h-10 text-primary/40" />
            </div>
          </div>

          {/* Right: Payment */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Phương thức thanh toán
            </h2>

            <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-muted/50">
              <TabBtn active={method === "wallet"} onClick={() => setMethod("wallet")}>💎 Ví</TabBtn>
              <TabBtn active={method === "bank"} onClick={() => setMethod("bank")}>🏦 QR</TabBtn>
              <TabBtn active={method === "momo"} onClick={() => setMethod("momo")}>💜 MoMo</TabBtn>
            </div>

            {/* WALLET */}
            {method === "wallet" && (
              <div className="space-y-3">
                {!user ? (
                  <div className="rounded-2xl border border-border bg-card p-5 text-center space-y-3">
                    <Wallet className="w-10 h-10 text-primary mx-auto" />
                    <p className="text-sm text-foreground">Đăng nhập để thanh toán bằng ví — nhanh & dễ.</p>
                    <Link
                      to="/auth"
                      state={{ from: "/checkout" }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold shadow-[var(--shadow-brand)]"
                    >
                      Đăng nhập / Đăng ký
                    </Link>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-primary/5 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Số dư hiện tại</p>
                        <p className="text-2xl font-extrabold text-primary">{formatVND(balance)}</p>
                      </div>
                      <Wallet className="w-9 h-9 text-primary/50" />
                    </div>
                    <div className="text-xs flex items-center justify-between p-2.5 rounded-lg bg-background/40">
                      <span className="text-muted-foreground">Cần thanh toán</span>
                      <span className="font-bold">{formatVND(totalPrice)}</span>
                    </div>
                    <div className={`text-xs flex items-center justify-between p-2.5 rounded-lg ${balance >= totalPrice ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                      <span>Còn lại sau khi mua</span>
                      <span className="font-bold">{formatVND(balance - totalPrice)}</span>
                    </div>

                    {balance >= totalPrice ? (
                      <motion.button
                        onClick={payWithWallet}
                        disabled={paying}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-[var(--shadow-brand)] disabled:opacity-60"
                      >
                        {paying ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                        Thanh toán bằng ví
                      </motion.button>
                    ) : (
                      <Link
                        to="/nap-tien"
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        Nạp thêm {formatVND(totalPrice - balance)}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* BANK / MOMO */}
            {method !== "wallet" && (
              <>
                <div className="rounded-2xl border border-border bg-card p-4 flex flex-col items-center gap-2">
                  <div className="rounded-xl overflow-hidden bg-white p-2">
                    {method === "bank" ? (
                      <img src={qrUrl} alt={`QR VietQR ${formatVND(totalPrice)}`} className="w-56 h-56 object-contain" />
                    ) : (
                      <img src={qrMomo} alt="QR MoMo" className="w-56 h-56 object-contain" />
                    )}
                  </div>
                  {method === "bank" && (
                    <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
                      Quét QR — số tiền & nội dung CK đã điền sẵn ✨
                    </p>
                  )}
                </div>

                {method === "bank" && (
                  <div className="space-y-1.5">
                    <Row label="Ngân hàng" value={BANK_INFO.bankName} />
                    <Row label="Chủ TK" value={BANK_INFO.accountName} />
                    <Row label="Số TK" value={BANK_INFO.accountFormatted} copy={BANK_INFO.account} copied={copiedField === "acc"} onCopy={() => handleCopy(BANK_INFO.account, "acc")} />
                    <Row label="Số tiền" value={formatVND(totalPrice)} copy={String(totalPrice)} copied={copiedField === "amt"} onCopy={() => handleCopy(String(totalPrice), "amt")} highlight />
                    <div className="flex items-start justify-between gap-2 px-3 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-xs">
                      <div className="min-w-0">
                        <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Nội dung CK</span>
                        <span className="text-primary font-bold font-mono text-[11px] break-all">{transferContent}</span>
                      </div>
                      <button onClick={() => handleCopy(transferContent, "ct")} className="text-primary mt-1">
                        {copiedField === "ct" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                )}

                <div className="rounded-xl bg-accent/10 border border-accent/30 p-3.5">
                  <p className="text-[11px] text-foreground leading-relaxed">
                    <span className="text-accent font-bold">3 bước:</span> ① Quét QR → ② Chuyển khoản → ③ Nhắn Zalo (đã điền sẵn mã đơn{" "}
                    <span className="font-mono text-primary">{orderCode}</span>).
                  </p>
                </div>

                <motion.a
                  href={zaloUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-sm font-bold py-3.5 rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-brand)]"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" /> Đã chuyển khoản — Nhắn Zalo
                </motion.a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TabBtn = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`text-xs font-bold py-2.5 rounded-lg transition-colors ${
      active ? "bg-primary text-primary-foreground shadow-[var(--shadow-brand)]" : "text-muted-foreground hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

const Row = ({ label, value, copy, copied, onCopy, highlight }: {
  label: string; value: string; copy?: string; copied?: boolean; onCopy?: () => void; highlight?: boolean;
}) => (
  <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs ${highlight ? "bg-primary/10 border border-primary/25" : "bg-secondary/50"}`}>
    <span className="text-muted-foreground">{label}</span>
    <div className="flex items-center gap-2">
      <span className={`font-semibold ${highlight ? "text-primary font-extrabold" : "text-foreground"}`}>{value}</span>
      {copy && onCopy && (
        <button onClick={onCopy} className="text-primary">
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  </div>
);

export default Checkout;
