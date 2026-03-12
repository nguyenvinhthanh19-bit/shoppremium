import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/data/services";
import { ChevronDown, ShoppingCart, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

type Props = {
  service: Service;
  index: number;
};

const ServiceCard = ({ service, index }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { addItem } = useCart();

  const lowestPrice = service.plans
    .filter((p) => p.price !== "Liên hệ")
    .map((p) => parseInt(p.price.replace(/\./g, "").replace(" đ", "")))
    .sort((a, b) => a - b)[0];

  const displayPrice = lowestPrice
    ? `${lowestPrice.toLocaleString("vi-VN")} đ`
    : "Liên hệ";

  const handleAddToCart = (planIndex: number) => {
    const plan = service.plans[planIndex];
    addItem(service, plan);
    toast.success(`Đã thêm ${service.name} vào giỏ hàng`, {
      description: `${plan.accountType} — ${plan.duration}`,
      duration: 2000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-[0_0_24px_hsl(175_80%_50%/0.1)] transition-[border-color,box-shadow] duration-300"
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors duration-200">
            {service.name}
          </h3>
          <motion.div
            className="shrink-0 text-right"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Từ</span>
            <p className="text-primary font-bold text-sm">{displayPrice}</p>
          </motion.div>
        </div>

        {/* Note */}
        <p className="text-xs text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed">
          {service.note}
        </p>

        {/* Plans toggle */}
        {service.plans.length > 1 && (
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
            whileTap={{ scale: 0.97 }}
          >
            {expanded ? "Ẩn bớt" : `Xem ${service.plans.length} gói`}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </motion.button>
        )}

        {/* Plans list */}
        <AnimatePresence initial={false}>
          {(expanded || service.plans.length === 1) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-1.5">
                {service.plans.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-muted/50 text-xs hover:bg-muted transition-colors duration-150"
                  >
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-foreground font-medium truncate">
                        {plan.accountType}
                      </span>
                      <span className="text-muted-foreground">{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-primary font-bold whitespace-nowrap">
                        {plan.price}
                      </span>
                      <motion.button
                        onClick={() => handleAddToCart(i)}
                        className="w-6 h-6 rounded-md bg-primary/15 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileTap={{ scale: 0.85 }}
                      >
                        <Plus className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom action */}
      <div className="px-4 py-3 border-t border-border bg-muted/30 flex gap-2">
        <motion.button
          onClick={() => handleAddToCart(0)}
          className="flex items-center justify-center gap-2 flex-1 text-xs font-medium py-2.5 rounded-lg bg-primary text-primary-foreground transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Thêm vào giỏ
        </motion.button>
        <motion.a
          href="https://zalo.me/0944308352"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs font-medium py-2.5 px-3 rounded-lg bg-primary/10 text-primary transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          💬
        </motion.a>
      </div>
    </motion.div>
  );
};

export { ServiceCard };
