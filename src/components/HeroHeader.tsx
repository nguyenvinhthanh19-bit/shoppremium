const HeroHeader = () => {
  return (
    <header className="relative overflow-hidden border-b border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(175_80%_50%/0.08),transparent_60%)]" />
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xl">
                🎯
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Vĩnh Thành <span className="text-primary">Studio</span>
              </h1>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base">
              Chuyên cung cấp dịch vụ nâng cấp tài khoản Premium uy tín, giá tốt nhất thị trường.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-sm">
            <a
              href="https://zalo.me/0944308352"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors font-medium"
            >
              💬 Zalo: 0944.308.352
            </a>
            <a
              href="tel:0775502008"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium"
            >
              📞 Hotline: 0775.502.008
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export { HeroHeader };
