import { useState } from "react";
import { categories } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
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
      <Navbar
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setCartOpen(true)}
      />
      <HeroBanner />

      <div className="container max-w-7xl mx-auto px-4 pb-8">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Section heading */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              🔥 {currentCategory.name}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {filteredServices.length} sản phẩm có sẵn
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Index;
