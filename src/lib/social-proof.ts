// Deterministic social proof based on SKU hash (djb2)
// Same SKU always returns same numbers — stable across reloads.

const hash = (s: string): number => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h;
};

/** Returns a stable "sold count" between 50 and 2000. */
export const getSoldCount = (sku: string): number => {
  return 50 + (hash(sku) % 1951);
};

/** Returns a stable rating between 4.5 and 5.0 (1 decimal). */
export const getRating = (sku: string): number => {
  const v = (hash(sku + "r") >>> 8) % 51; // 0..50
  return Math.round((4.5 + v / 100) * 10) / 10;
};

/** Returns a stable review count between 10 and 500. */
export const getReviewCount = (sku: string): number => {
  return 10 + (hash(sku + "rv") % 491);
};

/** Format number as 1.2k, 985, 12k */
export const formatCount = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
};
