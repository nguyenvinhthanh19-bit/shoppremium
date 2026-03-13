import { motion } from "framer-motion";
import type { Category } from "@/data/services";

type Props = {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
};

const CategoryTabs = ({ categories, activeCategory, onSelect }: Props) => {
  return (
    <div className="py-6">
      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <motion.button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`
                flex flex-col items-center gap-2 px-5 py-4 rounded-2xl min-w-[100px] transition-all duration-200 shrink-0
                ${
                  isActive
                    ? "bg-primary/15 border-2 border-primary/40 shadow-[0_0_20px_hsl(175_80%_50%/0.1)]"
                    : "bg-card border-2 border-border hover:border-primary/20 hover:bg-card/80"
                }
              `}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span
                className={`text-xs font-semibold whitespace-nowrap ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {cat.name}
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
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
