import { Facebook, MessageCircle, Phone, Mail, Wallet, ShoppingBag, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { BANK_INFO } from "@/lib/payment";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-12">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="VT Studio" width={36} height={36} className="w-9 h-9" loading="lazy" />
              <h3 className="text-base font-bold text-foreground">
                Vĩnh Thành <span className="text-primary">Studio</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chuyên cung cấp tài khoản Premium chính hãng, giá tốt nhất thị trường. Bảo hành uy tín, hỗ trợ 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> Liên hệ
            </h4>
            <div className="space-y-3">
              <a href={`tel:${BANK_INFO.hotline}`} className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> {BANK_INFO.hotlineDisplay}
              </a>
              <a href={`https://zalo.me/${BANK_INFO.zalo}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" /> Zalo: {BANK_INFO.zaloDisplay}
              </a>
              <a href={BANK_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">👤 Tài khoản</h4>
            <div className="space-y-3">
              <Link to="/auth" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <LogIn className="w-4 h-4" /> Đăng nhập / Đăng ký
              </Link>
              <Link to="/nap-tien" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Wallet className="w-4 h-4" /> Nạp tiền vào ví
              </Link>
              <Link to="/tai-khoan" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ShoppingBag className="w-4 h-4" /> Đơn hàng của tôi
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">🏦 Thanh toán</h4>
            <div className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
              <p><span className="text-foreground font-bold">{BANK_INFO.bankName}</span></p>
              <p>STK: <span className="text-primary font-mono font-bold">{BANK_INFO.accountFormatted}</span></p>
              <p>Chủ TK: <span className="text-foreground">{BANK_INFO.accountName}</span></p>
              <p className="pt-1">✅ Bảo hành 100% thời gian sử dụng</p>
              <p>✅ Hỗ trợ 24/7 qua Zalo</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Vĩnh Thành Studio. Mọi quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export { Footer };
