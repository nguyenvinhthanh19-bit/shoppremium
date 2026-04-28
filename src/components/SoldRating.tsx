import { Star, ShoppingBag } from "lucide-react";
import { getRating, getReviewCount, getSoldCount, formatCount } from "@/lib/social-proof";

type Props = { sku: string; compact?: boolean };

export const SoldRating = ({ sku, compact = false }: Props) => {
  const rating = getRating(sku);
  const reviews = getReviewCount(sku);
  const sold = getSoldCount(sku);

  return (
    <div className={`flex items-center gap-2 text-[11px] ${compact ? "" : "mt-1"}`}>
      <span className="inline-flex items-center gap-0.5 text-amber-400 font-bold">
        <Star className="w-3 h-3 fill-amber-400" />
        {rating.toFixed(1)}
      </span>
      <span className="text-muted-foreground">({formatCount(reviews)})</span>
      <span className="text-border">·</span>
      <span className="inline-flex items-center gap-1 text-muted-foreground">
        <ShoppingBag className="w-3 h-3" />
        Đã bán {formatCount(sold)}
      </span>
    </div>
  );
};
