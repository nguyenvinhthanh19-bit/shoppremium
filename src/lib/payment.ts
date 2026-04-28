// Payment helpers — VietQR dynamic generation & order codes
// Bank: TPBank — 10002863652 — NGUYEN VINH THANH

export const BANK_INFO = {
  bin: "970423", // TPBank
  bankCode: "TPB",
  bankName: "TPBank",
  account: "10002863652",
  accountFormatted: "1000 2863 652",
  accountName: "NGUYEN VINH THANH",
  zalo: "0775502008",
  zaloDisplay: "0775.502.008",
  hotline: "0775502008",
  hotlineDisplay: "0775.502.008",
  facebook: "https://www.facebook.com/profile.php?id=61586797331724",
} as const;

/** Strip Vietnamese accents and special chars for bank transfer content */
const stripAccents = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");

const sanitize = (s: string) =>
  stripAccents(s)
    .replace(/[^A-Za-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();

/** Generate a per-order code: {SKU}-{BASE36 timestamp} */
export const generateOrderCode = (sku: string): string => {
  const cleanSku = sanitize(sku).replace(/\s+/g, "").slice(0, 10) || "VTS";
  // Use base36 of last 7 hex digits of timestamp for compact yet unique code
  const ts = Date.now().toString(36).toUpperCase().slice(-6);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 4);
  return `${cleanSku}${ts}${rand}`;
};

/** Generate a cart-level order code: VT-{ts}{rand} */
export const generateCartOrderCode = (): string => {
  const ts = Date.now().toString(36).toUpperCase().slice(-6);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `VT${ts}${rand}`;
};

/** Build the bank transfer description (under 50 chars ideally) */
export const buildTransferContent = (orderCode: string, label?: string) => {
  const base = sanitize(label || "");
  const max = 50 - orderCode.length - 1;
  const trimmed = base.slice(0, Math.max(0, max));
  return `${orderCode}${trimmed ? ` ${trimmed}` : ""}`.trim();
};

/** Parse Vietnamese price ("1.585.000 đ") to number */
export const parsePrice = (price: string): number => {
  if (!price || price === "Liên hệ") return 0;
  return parseInt(price.replace(/\./g, "").replace(/[^\d]/g, "")) || 0;
};

/** Format VND number to "1.585.000 đ" */
export const formatVND = (n: number) =>
  `${n.toLocaleString("vi-VN")} đ`;

/**
 * Build VietQR.io dynamic QR image URL.
 * Template "compact2" = compact + amount + content. We use img.vietqr.io which
 * returns a PNG image directly — no API key needed.
 *
 * Docs: https://www.vietqr.io/danh-sach-api/link-tao-ma-qr/
 */
export const buildVietQR = ({
  amount,
  addInfo,
  template = "compact2",
}: {
  amount: number;
  addInfo: string;
  template?: "compact" | "compact2" | "qr_only" | "print";
}) => {
  const params = new URLSearchParams();
  if (amount > 0) params.set("amount", String(amount));
  if (addInfo) params.set("addInfo", addInfo);
  params.set("accountName", BANK_INFO.accountName);
  return `https://img.vietqr.io/image/${BANK_INFO.bankCode}-${BANK_INFO.account}-${template}.png?${params.toString()}`;
};

/** Build the prefilled Zalo message link */
export const buildZaloMessage = ({
  orderCode,
  total,
  itemsLabel,
}: {
  orderCode: string;
  total: number;
  itemsLabel: string;
}) => {
  const text = `Xin chào shop, mình vừa chuyển khoản đơn ${orderCode} - ${formatVND(total)} cho ${itemsLabel}. Mong shop kiểm tra và gửi tài khoản giúp mình ạ!`;
  return `https://zalo.me/${BANK_INFO.zalo}?body=${encodeURIComponent(text)}`;
};

/** Build a topup order code for wallet recharges: NAP{userIdShort}{ts} */
export const generateTopupCode = (userId: string): string => {
  const uid = userId.replace(/-/g, "").toUpperCase().slice(0, 6);
  const ts = Date.now().toString(36).toUpperCase().slice(-6);
  return `NAP${uid}${ts}`;
};

/** Build prefilled Zalo message for a topup */
export const buildTopupZalo = (orderCode: string, amount: number) => {
  const text = `Xin chào shop, mình vừa nạp tiền vào ví. Mã giao dịch: ${orderCode} - Số tiền: ${formatVND(amount)}. Mong shop kiểm tra và duyệt giúp mình ạ!`;
  return `https://zalo.me/${BANK_INFO.zalo}?body=${encodeURIComponent(text)}`;
};
