import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/data/services";
import { ChevronDown, ShoppingCart, Plus, Tag } from "lucide-react";
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
    ? `${lowestPrice.toLocaleString("vi-VN")}đ`
    : "Liên hệ";

  const handleAddToCart = (planIndex: number) => {
    const plan = service.plans[planIndex];
    addItem(service, plan);
    toast.success(`Đã thêm ${service.name} vào giỏ hàng`, {
      description: `${plan.accountType} — ${plan.duration}`,
      duration: 2000,
    });
  };

  // Get first emoji from note as icon
  const emojiMatch = service.note.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u);
  const icon = emojiMatch ? emojiMatch[0] : "📦";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.06 }}
      className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-[0_4px_24px_hsl(175_80%_50%/0.08)] transition-all duration-300"
    >
      {/* Card header with gradient */}
      <div className="relative h-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center overflow-hidden">
        <span className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        {/* Badge */}
        <div className="absolute top-2.5 left-2.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/15 border border-primary/20 text-[10px] font-semibold text-primary">
            <Tag className="w-2.5 h-2.5" />
            SẢN PHẨM
          </span>
        </div>
        {service.plans.length > 1 && (
          <div className="absolute top-2.5 right-2.5">
            <span className="inline-flex px-2 py-0.5 rounded-md bg-accent/15 border border-accent/20 text-[10px] font-semibold text-accent">
              {service.plans.length} gói
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {service.name}
        </h3>

        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed min-h-[2rem]">
          {service.note}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-base font-bold text-primary">{displayPrice}</span>
          {lowestPrice && service.plans.length > 1 && (
            <span className="text-[10px] text-muted-foreground">trở lên</span>
          )}
        </div>

        {/* Plans toggle */}
        {service.plans.length > 1 && (
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="mt-2.5 flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary transition-colors font-medium"
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

        {/* Expanded plans */}
        <AnimatePresence initial={false}>
          {(expanded || service.plans.length === 1) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2.5 space-y-1.5">
                {service.plans.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-secondary/60 text-xs hover:bg-secondary transition-colors"
                  >
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-foreground font-medium truncate">{plan.accountType}</span>
                      <span className="text-muted-foreground">{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-primary font-bold whitespace-nowrap">{plan.price}</span>
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
      <div className="px-4 py-3 border-t border-border/50 bg-secondary/20">
        <div className="flex gap-2">
          <motion.button
            onClick={() => handleAddToCart(0)}
            className="flex items-center justify-center gap-2 flex-1 text-xs font-semibold py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
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
            className="flex items-center justify-center text-xs font-medium py-2.5 px-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            💬
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export { ServiceCard };
