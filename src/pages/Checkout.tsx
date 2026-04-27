import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Copy, Check, Trash2, MessageCircle, ShoppingCart, BadgeCheck, Plus, Minus } from "lucide-react";
import {
  BANK_INFO,
  buildVietQR,
  buildTransferContent,
  buildZaloMessage,
  generateCartOrderCode,
  formatVND,
} from "@/lib/payment";
import qrMomo from "@/assets/qr-momo.png";

const Checkout = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "momo">("bank");

  // Stable order code for this checkout session
  const orderCode = useMemo(() => generateCartOrderCode(), []);

  const itemsLabel = items.map((i) => i.service.sku).join("+");
  const transferContent = buildTransferContent(orderCode, itemsLabel);
  const qrUrl = buildVietQR({ amount: totalPrice, addInfo: transferContent });
  const zaloUrl = buildZaloMessage({
    orderCode,
    total: totalPrice,
    itemsLabel: items.map((i) => `${i.service.name} (${i.plan.duration})`).join(", "),
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1800);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-4">
        <ShoppingCart className="w-16 h-16 text-muted-foreground/30" />
        <p className="text-muted-foreground text-lg">Giỏ hàng trống</p>
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-[var(--shadow-brand)]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại mua hàng
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border glass">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <motion.button
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Quay lại"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
          <div className="flex-1">
            <h1 className="text-base font-bold text-foreground">Thanh toán</h1>
            <p className="text-[11px] text-muted-foreground">
              Mã đơn: <span className="font-mono font-bold text-primary">{orderCode}</span>
            </p>
          </div>
        </div>
      </header>

      <div className="container max-w-5xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Order items */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Đơn hàng ({items.length} sản phẩm)
            </h2>

            <AnimatePresence initial={false}>
              {items.map((item) => {
                const { color1, color2, emoji } = item.service.brand;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="rounded-2xl border border-border bg-card p-3 flex items-center gap-3 overflow-hidden"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
                    >
                      {emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-foreground truncate">
                          {item.service.name}
                        </p>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {item.plan.accountType} — {item.plan.duration}
                      </p>
                      <p className="text-[10px] font-mono text-primary/80 mt-0.5">
                        SKU: {item.service.sku}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-sm font-extrabold text-primary whitespace-nowrap">
                        {item.plan.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-md bg-secondary text-foreground flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                          aria-label="Giảm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-md bg-secondary text-foreground flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                          aria-label="Tăng"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-1 w-6 h-6 rounded-md text-muted-foreground hover:text-destructive transition-colors flex items-center justify-center"
                          aria-label="Xoá"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Total */}
            <div className="rounded-2xl border-2 border-primary/40 bg-primary/5 p-5 flex items-center justify-between shadow-[var(--shadow-brand)]">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Tổng thanh toán</p>
                <p className="text-2xl font-extrabold text-primary mt-0.5">
                  {formatVND(totalPrice)}
                </p>
              </div>
              <BadgeCheck className="w-10 h-10 text-primary/40" />
            </div>
          </div>

          {/* Right: Payment */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Phương thức thanh toán
            </h2>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-xl bg-muted/50">
              <button
                onClick={() => setPaymentMethod("bank")}
                className={`flex-1 text-xs font-bold py-2.5 rounded-lg transition-colors ${
                  paymentMethod === "bank"
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-brand)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🏦 Ngân hàng (VietQR)
              </button>
              <button
                onClick={() => setPaymentMethod("momo")}
                className={`flex-1 text-xs font-bold py-2.5 rounded-lg transition-colors ${
                  paymentMethod === "momo"
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-brand)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                💜 MoMo
              </button>
            </div>

            {/* QR */}
            <div className="rounded-2xl border border-border bg-card p-4 flex flex-col items-center gap-2">
              <div className="rounded-xl overflow-hidden bg-white p-2">
                {paymentMethod === "bank" ? (
                  <img
                    src={qrUrl}
                    alt={`QR VietQR ${formatVND(totalPrice)}`}
                    className="w-56 h-56 object-contain"
                  />
                ) : (
                  <img src={qrMomo} alt="QR MoMo" className="w-56 h-56 object-contain" />
                )}
              </div>
              {paymentMethod === "bank" && (
                <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
                  Quét QR bằng app ngân hàng — số tiền & nội dung CK đã điền sẵn ✨
                </p>
              )}
            </div>

            {/* Bank details */}
            {paymentMethod === "bank" && (
              <div className="space-y-1.5">
                <Row label="Ngân hàng" value={BANK_INFO.bankName} />
                <Row label="Chủ TK" value={BANK_INFO.accountName} />
                <Row
                  label="Số TK"
                  value={BANK_INFO.accountFormatted}
                  copy={BANK_INFO.account}
                  copied={copiedField === "acc"}
                  onCopy={() => handleCopy(BANK_INFO.account, "acc")}
                />
                <Row
                  label="Số tiền"
                  value={formatVND(totalPrice)}
                  copy={String(totalPrice)}
                  copied={copiedField === "amt"}
                  onCopy={() => handleCopy(String(totalPrice), "amt")}
                  highlight
                />
                <div className="flex items-start justify-between gap-2 px-3 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-xs">
                  <div className="min-w-0">
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">
                      Nội dung CK
                    </span>
                    <span className="text-primary font-bold font-mono text-[11px] break-all">
                      {transferContent}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(transferContent, "ct")}
                    className="text-primary hover:text-primary/80 transition-colors shrink-0 mt-1"
                    aria-label="Copy nội dung"
                  >
                    {copiedField === "ct" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="rounded-xl bg-accent/10 border border-accent/30 p-3.5">
              <p className="text-[11px] text-foreground leading-relaxed">
                <span className="text-accent font-bold">3 bước:</span> ① Quét QR → ② Chuyển khoản
                → ③ Bấm nút bên dưới nhắn Zalo (đã điền sẵn mã đơn{" "}
                <span className="font-mono text-primary">{orderCode}</span>).
              </p>
            </div>

            {/* Zalo CTA */}
            <motion.a
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-bold py-3.5 rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-brand)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Đã chuyển khoản — Nhắn Zalo
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({
  label,
  value,
  copy,
  copied,
  onCopy,
  highlight,
}: {
  label: string;
  value: string;
  copy?: string;
  copied?: boolean;
  onCopy?: () => void;
  highlight?: boolean;
}) => (
  <div
    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs ${
      highlight ? "bg-primary/10 border border-primary/25" : "bg-secondary/50"
    }`}
  >
    <span className="text-muted-foreground">{label}</span>
    <div className="flex items-center gap-2">
      <span className={`font-semibold ${highlight ? "text-primary font-extrabold" : "text-foreground"}`}>
        {value}
      </span>
      {copy && onCopy && (
        <button onClick={onCopy} className="text-primary hover:text-primary/80 transition-colors">
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  </div>
);

export default Checkout;
