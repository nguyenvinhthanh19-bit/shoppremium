import type { Category } from "@/data/services";

type Props = {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
};

const CategoryTabs = ({ categories, activeCategory, onSelect }: Props) => {
  return (
    <div className="mt-8 -mx-4 px-4 overflow-x-auto scrollbar-none">
      <div className="flex gap-2 min-w-max pb-2">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }
              `}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-md ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cat.services.length}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { CategoryTabs };
