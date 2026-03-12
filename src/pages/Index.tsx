import { useState } from "react";
import { categories } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { HeroHeader } from "@/components/HeroHeader";
import { SearchBar } from "@/components/SearchBar";
import { CartButton } from "@/components/CartButton";
import { CartDrawer } from "@/components/CartDrawer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const filteredServices = currentCategory.services.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <div className="container max-w-7xl mx-auto px-4 pb-20">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredServices.map((service, i) => (
            <ServiceCard key={service.name + i} service={service} index={i} />
          ))}
        </div>
        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            Không tìm thấy dịch vụ nào phù hợp.
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2026 Vĩnh Thành Studio. Mọi quyền được bảo lưu.</p>
          <p className="mt-2">
            Zalo: <span className="text-primary font-medium">0944.308.352</span> &bull; Hotline:{" "}
            <span className="text-primary font-medium">0775.502.008</span> &bull;{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61582723076533"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      </footer>

      <CartButton onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Index;
