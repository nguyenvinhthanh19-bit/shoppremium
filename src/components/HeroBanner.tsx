import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroLaptop from "@/assets/hero-laptop.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270_80%_75%/0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(250_85%_75%/0.18),transparent_60%)]" />

      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-xs font-semibold text-primary mb-5">
              <Zap className="w-3.5 h-3.5" />
              Tài Khoản Chính Hãng
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight">
              Mua Tài Khoản
              <br />
              <span className="text-primary">Uy Tín.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mt-5 max-w-md leading-relaxed">
              Cung cấp tài khoản phần mềm, ứng dụng học tập, giải trí và làm việc chất lượng cao. Giao ngay — bảo hành trọn gói.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="/nap-tien"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-[var(--shadow-brand)]"
              >
                Xem Tất Cả Sản Phẩm
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-card border border-border text-foreground font-bold text-sm hover:border-primary/40 transition-colors"
              >
                Học Tập & Khóa Học
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-9 pt-7 border-t border-border max-w-md">
              <Stat value="131+" label="Sản phẩm" />
              <Stat value="4.9" label="Đánh giá TB" />
              <Stat value="24h" label="Giao ngay" />
            </div>
          </motion.div>

          <motion.div
            className="hidden md:block relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/15 to-accent/15 p-6 shadow-[var(--shadow-elev)]">
              <img
                src={heroLaptop}
                alt="Tài khoản premium"
                width={1024}
                height={768}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="text-2xl md:text-3xl font-extrabold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
  </div>
);

export { HeroBanner };
