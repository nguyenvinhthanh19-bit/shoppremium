import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { createPortal } from "react-dom";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CartDrawer = ({ open, onClose }: Props) => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-md h-full bg-card border-l border-border flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">Giỏ hàng</h2>
                {totalItems > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-semibold">
                    {totalItems}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-3">
                  <ShoppingCart className="w-12 h-12 opacity-30" />
                  <p className="text-sm">Giỏ hàng trống</p>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 60 }}
                      className="rounded-xl border border-border bg-secondary/50 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {item.service.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {item.plan.accountType} — {item.plan.duration}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-primary">{item.plan.price}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tổng cộng</span>
                  <span className="text-lg font-bold text-primary">
                    {totalPrice.toLocaleString("vi-VN")} đ
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={clearCart}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium bg-muted text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition-colors"
                  >
                    Xoá tất cả
                  </button>
                  <motion.button
                    onClick={handleCheckout}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Thanh toán
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
