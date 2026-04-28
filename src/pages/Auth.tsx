import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Mail, Lock, ArrowLeft, Loader2, User as UserIcon } from "lucide-react";
import logo from "@/assets/logo.png";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const from = (location.state as { from?: string } | null)?.from || "/";

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [user, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { display_name: name || email.split("@")[0] },
          },
        });
        if (error) throw error;
        toast.success("Đăng ký thành công!", { description: "Bạn đã có thể đăng nhập." });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Đăng nhập thành công");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Có lỗi xảy ra";
      const friendly = msg.includes("Invalid login")
        ? "Email hoặc mật khẩu không đúng"
        : msg.includes("already registered")
        ? "Email này đã được đăng ký"
        : msg;
      toast.error(friendly);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background grid-bg flex items-center justify-center p-4">
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Trang chủ
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elev)]"
      >
        <div className="flex flex-col items-center text-center mb-5">
          <img src={logo} alt="VT Studio" width={64} height={64} className="w-16 h-16 mb-2" />
          <h1 className="text-xl font-bold text-foreground">
            {mode === "signin" ? "Đăng nhập" : "Đăng ký"} — Vĩnh Thành Studio
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            {mode === "signin"
              ? "Đăng nhập để nạp tiền vào ví và mua hàng nhanh hơn"
              : "Tạo tài khoản để có ví riêng và lưu lịch sử đơn hàng"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <Field icon={<UserIcon className="w-4 h-4" />}>
              <input
                type="text"
                placeholder="Tên hiển thị"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent outline-none text-sm"
              />
            </Field>
          )}
          <Field icon={<Mail className="w-4 h-4" />}>
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-sm"
            />
          </Field>
          <Field icon={<Lock className="w-4 h-4" />}>
            <input
              type="password"
              required
              minLength={6}
              placeholder="Mật khẩu (≥ 6 ký tự)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-sm"
            />
          </Field>

          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-[var(--shadow-brand)] disabled:opacity-60"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {mode === "signin" ? "Đăng nhập" : "Tạo tài khoản"}
          </motion.button>
        </form>

        <div className="mt-5 text-center text-xs text-muted-foreground">
          {mode === "signin" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="text-primary font-semibold hover:underline"
          >
            {mode === "signin" ? "Đăng ký ngay" : "Đăng nhập"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Field = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl bg-secondary/60 border border-border focus-within:border-primary/50 focus-within:bg-secondary transition-colors">
    <span className="text-muted-foreground">{icon}</span>
    {children}
  </div>
);

export default Auth;
