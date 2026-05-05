import { motion } from "framer-motion";
import { Search, ShoppingCart, MessageCircle, Facebook, Wallet, User as UserIcon, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { useWallet } from "@/hooks/useWallet";
import { BANK_INFO } from "@/lib/payment";
import logo from "@/assets/logo.png";

type Props = {
  searchValue: string;
  onSearchChange: (val: string) => void;
  onCartClick: () => void;
};

const Navbar = ({ searchValue, onSearchChange, onCartClick }: Props) => {
  const { totalItems } = useCart();
  const { user } = useAuth();
  const { balance } = useWallet();

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-xl border-b border-border">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 py-3">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="VT Studio" width={40} height={40} className="w-10 h-10" />
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-foreground leading-tight">
                Vĩnh Thành <span className="text-primary">Studio</span>
              </h1>
              <p className="text-[10px] text-muted-foreground leading-none">Premium Accounts</p>
            </div>
          </Link>

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

          <div className="flex items-center gap-1.5 shrink-0">
            {user ? (
              <Link
                to="/tai-khoan"
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 border border-primary/25 hover:bg-primary/15 transition-colors"
              >
                <Wallet className="w-4 h-4 text-primary" />
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Số dư</p>
                  <p className="text-xs font-bold text-primary">
                    {balance.toLocaleString("vi-VN")} đ
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                to="/auth"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <LogIn className="w-4 h-4" />
                Đăng nhập
              </Link>
            )}

            <Link
              to="/nap-tien"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <Wallet className="w-4 h-4" />
              Nạp tiền
            </Link>

            <motion.button
              onClick={onCartClick}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-primary/10 transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Giỏ hàng"
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

            {user && (
              <Link
                to="/tai-khoan"
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-primary/10"
                aria-label="Tài khoản"
              >
                <UserIcon className="w-5 h-5 text-foreground" />
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 pb-2 overflow-x-auto scrollbar-none -mx-4 px-4">
          <Link
            to="/nap-tien"
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-400 whitespace-nowrap"
          >
            <Wallet className="w-3.5 h-3.5" /> Nạp tiền
          </Link>
          <a
            href={`https://zalo.me/${BANK_INFO.zalo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Zalo
          </a>
          <a
            href={BANK_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            <Facebook className="w-3.5 h-3.5" /> Facebook
          </a>
          <div className="hidden md:flex items-center gap-4 ml-auto text-xs text-muted-foreground">
            <a
              href={`https://zalo.me/${BANK_INFO.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-primary" />
              <span>Zalo: <span className="text-foreground font-medium">{BANK_INFO.zaloDisplay}</span></span>
            </a>
            <span className="text-border">|</span>
            <a
              href={BANK_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 text-primary" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
