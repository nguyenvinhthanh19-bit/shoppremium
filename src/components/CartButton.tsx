import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type Props = {
  onClick: () => void;
};

export const CartButton = ({ onClick }: Props) => {
  const { totalItems } = useCart();

  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <ShoppingCart className="w-5 h-5" />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            key={totalItems}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center"
          >
            {totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
