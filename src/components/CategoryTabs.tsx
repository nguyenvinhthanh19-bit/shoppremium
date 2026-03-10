import { motion } from "framer-motion";
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
            <motion.button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`
                relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap
                ${
                  isActive
                    ? "text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg bg-primary shadow-[var(--shadow-glow)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.icon}</span>
              <span className="relative z-10">{cat.name}</span>
              <span
                className={`relative z-10 text-xs px-1.5 py-0.5 rounded-md ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cat.services.length}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export { CategoryTabs };
