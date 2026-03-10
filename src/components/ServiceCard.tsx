import { useState } from "react";
import type { Service } from "@/data/services";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  service: Service;
  index: number;
};

const ServiceCard = ({ service, index }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const lowestPrice = service.plans
    .filter((p) => p.price !== "Liên hệ")
    .map((p) => parseInt(p.price.replace(/\./g, "").replace(" đ", "")))
    .sort((a, b) => a - b)[0];

  const displayPrice = lowestPrice
    ? `${lowestPrice.toLocaleString("vi-VN")} đ`
    : "Liên hệ";

  return (
    <div
      className="group rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <div className="shrink-0 text-right">
            <span className="text-xs text-muted-foreground">Từ</span>
            <p className="text-primary font-bold text-sm">{displayPrice}</p>
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
          {service.note}
        </p>

        {/* Plans toggle */}
        {service.plans.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {expanded ? "Ẩn bớt" : `Xem ${service.plans.length} gói`}
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        )}

        {/* Plans table */}
        <div
          className={`mt-3 space-y-1.5 transition-all duration-300 ${
            expanded || service.plans.length === 1 ? "block" : "hidden"
          }`}
        >
          {service.plans.map((plan, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-muted/50 text-xs"
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-foreground font-medium truncate">
                  {plan.accountType}
                </span>
                <span className="text-muted-foreground">{plan.duration}</span>
              </div>
              <span className="text-primary font-bold whitespace-nowrap">
                {plan.price}
              </span>
            </div>
          ))}
        </div>

        {/* Single plan inline */}
        {service.plans.length === 1 && !expanded && null}
      </div>

      {/* Bottom action */}
      <div className="px-4 py-3 border-t border-border bg-muted/30">
        <a
          href="https://zalo.me/0944308352"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-xs font-medium py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          💬 Liên hệ mua ngay
        </a>
      </div>
    </div>
  );
};

export { ServiceCard };
