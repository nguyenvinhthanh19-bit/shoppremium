import { Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-12">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-lg">
                🎯
              </div>
              <h3 className="text-base font-bold text-foreground">
                Vĩnh Thành <span className="text-primary">Studio</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chuyên cung cấp tài khoản Premium chính hãng, giá tốt nhất thị trường. Bảo hành uy tín.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Liên hệ
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0775502008"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                0775.502.008
              </a>
              <a
                href="https://zalo.me/0944308352"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Zalo: 0944.308.352
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              🔗 Liên kết
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/profile.php?id=61582723076533"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="https://zalo.me/0944308352"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Nhắn tin Zalo
              </a>
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
