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

            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <div className="rounded-xl overflow-hidden bg-white p-2">
                <img src={qrImage} alt="QR Thanh toán" className="w-56 h-auto" />
              </div>
            </div>

            {/* Bank info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-xs">
                <span className="text-muted-foreground">Ngân hàng</span>
                <span className="text-foreground font-medium">{BANK_INFO.bank}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-xs">
                <span className="text-muted-foreground">Chủ TK</span>
                <span className="text-foreground font-medium">{BANK_INFO.name}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-xs">
                <span className="text-muted-foreground">Số TK</span>
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">{BANK_INFO.account}</span>
                  <button onClick={handleCopy} className="text-primary hover:text-primary/80 transition-colors">
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 text-xs">
                <span className="text-muted-foreground">Nội dung CK</span>
                <span className="text-foreground font-medium text-right max-w-[60%] truncate">{transferContent}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 mb-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Hướng dẫn:</span> Chuyển khoản theo thông tin trên, sau đó nhắn Zalo kèm ảnh chụp giao dịch để nhận tài khoản.
              </p>
            </div>

            {/* Zalo button */}
            <motion.a
              href="https://zalo.me/0944308352"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold py-3 rounded-xl bg-primary text-primary-foreground transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Nhắn Zalo xác nhận
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
