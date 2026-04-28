import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Service } from "@/data/services";
import { ChevronDown, ShoppingCart, Plus, BadgeCheck, Zap } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { parsePrice, formatVND } from "@/lib/payment";
import { SoldRating } from "@/components/SoldRating";

type Props = {
  service: Service;
  index: number;
};

const ServiceCard = ({ service, index }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const numericPrices = service.plans
    .map((p) => parsePrice(p.price))
    .filter((n) => n > 0);
  const lowestPrice = numericPrices.length ? Math.min(...numericPrices) : 0;
  const displayPrice = lowestPrice ? formatVND(lowestPrice) : "Liên hệ";

  const addToCart = (planIndex: number) => {
    const plan = service.plans[planIndex];
    addItem(service, plan);
    toast.success(`Đã thêm ${service.name}`, {
      description: `${plan.accountType} — ${plan.duration}`,
      duration: 1500,
    });
  };

  const buyNow = (planIndex: number) => {
    addToCart(planIndex);
    setTimeout(() => navigate("/checkout"), 200);
  };

  const { color1, color2, emoji } = service.brand;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-elev)] hover:-translate-y-0.5 flex flex-col"
    >
      {/* Brand header */}
      <div
        className="relative h-24 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.25),transparent_60%)]" />
        <span
          className="relative text-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300"
          aria-hidden
        >
          {emoji}
        </span>

        <div className="absolute top-2.5 left-2.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-sm text-[10px] font-bold text-white tracking-wide">
            <BadgeCheck className="w-3 h-3" />
            {service.sku}
          </span>
        </div>

        {service.plans.length > 1 && (
          <div className="absolute top-2.5 right-2.5">
            <span className="inline-flex px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-sm text-[10px] font-bold text-white">
              {service.plans.length} gói
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {service.name}
        </h3>

        <SoldRating sku={service.sku} />

        <p className="text-[11px] text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed min-h-[1.75rem]">
          {service.note || "Tài khoản chính hãng — bảo hành uy tín"}
        </p>

        {/* Price */}
        <div className="mt-2.5 flex items-baseline gap-1">
          <span className="text-base font-extrabold text-primary">{displayPrice}</span>
          {lowestPrice > 0 && service.plans.length > 1 && (
            <span className="text-[10px] text-muted-foreground">trở lên</span>
          )}
        </div>

        {/* Plans toggle */}
        {service.plans.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1.5 text-[11px] text-primary/90 hover:text-primary transition-colors font-semibold"
          >
            {expanded ? "Ẩn bớt" : `Xem ${service.plans.length} gói`}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </button>
        )}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2.5 space-y-1.5">
                {service.plans.map((plan, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-secondary/60 text-[11px] hover:bg-secondary transition-colors"
                  >
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-foreground font-medium truncate">{plan.accountType}</span>
                      <span className="text-muted-foreground">{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-primary font-bold whitespace-nowrap">{plan.price}</span>
                      <motion.button
                        onClick={() => addToCart(i)}
                        className="w-6 h-6 rounded-md bg-primary/15 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileTap={{ scale: 0.85 }}
                        aria-label={`Thêm ${plan.accountType}`}
                      >
                        <Plus className="w-3 h-3" />
                      </motion.button>
                      <motion.button
                        onClick={() => buyNow(i)}
                        className="w-6 h-6 rounded-md bg-emerald-500/15 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        whileTap={{ scale: 0.85 }}
                        aria-label={`Mua ngay ${plan.accountType}`}
                      >
                        <Zap className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1 min-h-2" />

        {/* Bottom actions: Cart + Buy Now */}
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <motion.button
            onClick={() => addToCart(0)}
            className="flex items-center justify-center gap-1 text-[11px] font-bold py-2.5 rounded-xl bg-secondary text-foreground hover:bg-primary/15 hover:text-primary transition-colors border border-border"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Giỏ hàng
          </motion.button>
          <motion.button
            onClick={() => buyNow(0)}
            className="flex items-center justify-center gap-1 text-[11px] font-bold py-2.5 rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-brand)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-3.5 h-3.5" />
            Mua ngay
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export { ServiceCard };
