import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Copy, Check, Trash2, MessageCircle, ShoppingCart } from "lucide-react";
import qrBank from "@/assets/qr-payment.png";
import qrMomo from "@/assets/qr-momo.png";

const BANK_INFO = {
  bank: "TPBank",
  name: "NGUYEN VINH THANH",
  account: "1000 2863 652",
};

const Checkout = () => {
  const { items, removeItem, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "momo">("bank");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transferContent = items
    .map((item) => `${item.service.name}-${item.plan.accountType}`)
    .join(", ");

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-4">
        <ShoppingCart className="w-16 h-16 text-muted-foreground/30" />
        <p className="text-muted-foreground text-lg">Giỏ hàng trống</p>
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm"
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
      <header className="sticky top-0 z-30 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <motion.button
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
          <h1 className="text-lg font-bold text-foreground">Thanh toán</h1>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Order items */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Đơn hàng ({items.length} sản phẩm)
            </h2>

            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {item.service.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.plan.accountType} — {item.plan.duration}
                    </p>
                    <p className="text-xs text-muted-foreground">SL: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-bold text-primary">{item.plan.price}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Total */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Tổng thanh toán</span>
              <span className="text-xl font-bold text-primary">
                {totalPrice.toLocaleString("vi-VN")} đ
              </span>
            </div>
          </div>

          {/* Right: Payment */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Phương thức thanh toán
            </h2>

            {/* Payment method tabs */}
            <div className="flex gap-1 p-1 rounded-xl bg-muted/50">
              <button
                onClick={() => setPaymentMethod("bank")}
                className={`flex-1 text-xs font-semibold py-2.5 rounded-lg transition-colors ${
                  paymentMethod === "bank"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🏦 Ngân hàng
              </button>
              <button
                onClick={() => setPaymentMethod("momo")}
                className={`flex-1 text-xs font-semibold py-2.5 rounded-lg transition-colors ${
                  paymentMethod === "momo"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                💜 MoMo
              </button>
            </div>

            {/* QR */}
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden bg-white p-2">
                <img
                  src={paymentMethod === "bank" ? qrBank : qrMomo}
                  alt={paymentMethod === "bank" ? "QR Ngân hàng" : "QR MoMo"}
                  className="w-52 h-auto"
                />
              </div>
            </div>

            {/* Bank details */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-secondary/50 text-xs">
                <span className="text-muted-foreground">
                  {paymentMethod === "bank" ? "Ngân hàng" : "Ví"}
                </span>
                <span className="text-foreground font-medium">
                  {paymentMethod === "bank" ? BANK_INFO.bank : "MoMo"}
                </span>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-secondary/50 text-xs">
                <span className="text-muted-foreground">Chủ TK</span>
                <span className="text-foreground font-medium">{BANK_INFO.name}</span>
              </div>
              {paymentMethod === "bank" && (
                <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-secondary/50 text-xs">
                  <span className="text-muted-foreground">Số TK</span>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">{BANK_INFO.account}</span>
                    <button
                      onClick={() => handleCopy(BANK_INFO.account)}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-xs">
                <span className="text-muted-foreground">Nội dung CK</span>
                <span className="text-primary font-bold text-right max-w-[55%] text-[11px] leading-tight">
                  {transferContent}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-3.5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Hướng dẫn:</span> Chuyển khoản với nội
                dung trên, sau đó bấm nút bên dưới để nhắn Zalo kèm ảnh chụp giao dịch.
              </p>
            </div>

            {/* Zalo CTA */}
            <motion.a
              href="https://zalo.me/0944308352"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold py-3.5 rounded-xl bg-primary text-primary-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Đã chuyển khoản — Nhắn Zalo nhận hàng
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
