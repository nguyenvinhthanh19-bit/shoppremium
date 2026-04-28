import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Users, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(175_80%_50%/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(45_100%_55%/0.08),transparent_60%)]" />

      <div className="container max-w-7xl mx-auto px-4 py-10 md:py-14 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Uy tín #1 — Bảo hành trọn đời
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight">
              Tài Khoản <span className="text-primary">Premium</span>
              <br />
              Chính Hãng — Giá Sốc
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-md leading-relaxed">
              Netflix, Spotify, ChatGPT, Canva, Capcut... 170+ dịch vụ. Nạp ví — mua nhanh trong 30 giây.
            </p>

            {/* Stats badges */}
            <div className="flex flex-wrap gap-3 mt-5">
              <Stat icon={<Users className="w-3.5 h-3.5" />} label="5K+ khách" />
              <Stat icon={<Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />} label="4.9 / 5" />
              <Stat icon={<Shield className="w-3.5 h-3.5" />} label="Bảo hành 24/7" />
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/nap-tien"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-[var(--shadow-brand)]"
                >
                  💎 Nạp ví — Mua ngay
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.a
                href="#products"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
              >
                Xem sản phẩm
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center justify-center relative w-72 h-48"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["🎬", "🎵", "🤖", "🎨", "📚", "☁️"].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center text-2xl shadow-lg"
                style={{
                  left: `${(i % 3) * 38}%`,
                  top: `${Math.floor(i / 3) * 55}%`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-bold text-foreground">
    <span className="text-primary">{icon}</span> {label}
  </div>
);

export { HeroBanner };
