import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Phone, MessageCircle, Facebook } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type Props = {
  searchValue: string;
  onSearchChange: (val: string) => void;
  onCartClick: () => void;
};

const Navbar = ({ searchValue, onSearchChange, onCartClick }: Props) => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-xl border-b border-border">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center gap-4 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-lg">
              🎯
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-foreground leading-tight">
                Vĩnh Thành <span className="text-primary">Studio</span>
              </h1>
              <p className="text-[10px] text-muted-foreground leading-none">Premium Accounts</p>
            </div>
          </a>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            <motion.a
              href="https://zalo.me/0944308352"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Zalo</span>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=61582723076533"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </motion.a>
            <motion.button
              onClick={onCartClick}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-primary/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div className="flex items-center gap-1 pb-2 overflow-x-auto scrollbar-none -mx-4 px-4">
          <a
            href="https://zalo.me/0944308352"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Zalo
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582723076533"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            <Facebook className="w-3.5 h-3.5" />
            Facebook
          </a>
          <div className="hidden md:flex items-center gap-4 ml-auto text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>Hotline: <span className="text-foreground font-medium">0775.502.008</span></span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-primary" />
              <span>Zalo: <span className="text-foreground font-medium">0944.308.352</span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
