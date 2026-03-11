import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import type { Service, ServicePlan } from "@/data/services";
import qrBank from "@/assets/qr-payment.png";
import qrMomo from "@/assets/qr-momo.png";

type Props = {
  open: boolean;
  onClose: () => void;
  service: Service;
  selectedPlan?: ServicePlan;
};

const BANK_INFO = {
  bank: "TPBank",
  name: "NGUYEN VINH THANH",
  account: "1000 2863 652",
};

export const PaymentModal = ({ open, onClose, service, selectedPlan }: Props) => {
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "momo">("bank");
  const [selectedIdx, setSelectedIdx] = useState(
    selectedPlan ? service.plans.indexOf(selectedPlan) : 0
  );

  const plan = service.plans[selectedIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(BANK_INFO.account.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transferContent = `${service.name} - ${plan?.accountType || ""} - ${plan?.duration || ""}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-lg overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <h2 className="text-lg font-bold text-foreground mb-1">Thanh toán</h2>
            <p className="text-sm text-muted-foreground mb-4">{service.name}</p>

            {/* Plan selector */}
            {service.plans.length > 1 && (
              <div className="space-y-1.5 mb-4">
                <label className="text-xs font-medium text-muted-foreground">Chọn gói:</label>
                <div className="space-y-1">
                  {service.plans.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIdx(i)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                        selectedIdx === i
                          ? "bg-primary/15 border border-primary/40 text-foreground"
                          : "bg-muted/50 border border-transparent text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <span>{p.accountType} — {p.duration}</span>
                      <span className="font-bold text-primary">{p.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Order summary - highlight what they're buying */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 mb-4">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Đơn hàng của bạn</p>
              <p className="text-sm font-bold text-foreground">{service.name}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">
                  {plan?.accountType} — {plan?.duration}
                </span>
                <span className="text-sm font-bold text-primary">{plan?.price}</span>
              </div>
            </div>

            {/* Payment method tabs */}
            <div className="flex gap-1 mb-4 p-1 rounded-lg bg-muted/50">
              <button
                onClick={() => setPaymentMethod("bank")}
                className={`flex-1 text-xs font-medium py-2 rounded-md transition-colors ${
                  paymentMethod === "bank"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🏦 Ngân hàng
              </button>
              <button
                onClick={() => setPaymentMethod("momo")}
                className={`flex-1 text-xs font-medium py-2 rounded-md transition-colors ${
                  paymentMethod === "momo"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                💜 MoMo
              </button>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <div className="rounded-xl overflow-hidden bg-white p-2">
                <img
                  src={paymentMethod === "bank" ? qrBank : qrMomo}
                  alt={paymentMethod === "bank" ? "QR Ngân hàng" : "QR MoMo"}
                  className="w-56 h-auto"
                />
              </div>
            </div>

            {/* Bank info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-xs">
                <span className="text-muted-foreground">{paymentMethod === "bank" ? "Ngân hàng" : "Ví"}</span>
                <span className="text-foreground font-medium">{paymentMethod === "bank" ? BANK_INFO.bank : "MoMo"}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-xs">
                <span className="text-muted-foreground">Chủ TK</span>
                <span className="text-foreground font-medium">{BANK_INFO.name}</span>
              </div>
              {paymentMethod === "bank" && (
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-xs">
                  <span className="text-muted-foreground">Số TK</span>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">{BANK_INFO.account}</span>
                    <button onClick={handleCopy} className="text-primary hover:text-primary/80 transition-colors">
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs">
                <span className="text-muted-foreground">Nội dung CK</span>
                <span className="text-primary font-bold text-right max-w-[60%]">{transferContent}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 mb-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Hướng dẫn:</span> Chuyển khoản với nội dung trên, sau đó bấm nút bên dưới để nhắn Zalo kèm ảnh chụp giao dịch. Mình sẽ gửi tài khoản cho bạn ngay!
              </p>
            </div>

            {/* Zalo button with pre-filled message */}
            <motion.a
              href={`https://zalo.me/0944308352`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold py-3 rounded-xl bg-primary text-primary-foreground transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Đã chuyển khoản — Nhắn Zalo nhận hàng
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
