import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="relative mt-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Tìm kiếm dịch vụ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
      />
    </div>
  );
};

export { SearchBar };
