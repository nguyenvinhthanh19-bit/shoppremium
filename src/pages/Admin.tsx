import { useEffect, useState } from "react";
import { ArrowLeft, Loader2, BadgeCheck, XCircle, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { formatVND } from "@/lib/payment";
import { toast } from "sonner";

type Tx = {
  id: string;
  user_id: string;
  amount: number;
  status: string;
  order_code: string | null;
  note: string | null;
  created_at: string;
};
type Order = {
  id: string;
  order_code: string;
  user_id: string;
  total: number;
  status: string;
  items: Array<{ name: string; plan: string; qty: number }>;
  created_at: string;
};

const Admin = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState<Tx[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    const [{ data: t }, { data: o }] = await Promise.all([
      supabase
        .from("wallet_transactions")
        .select("id,user_id,amount,status,order_code,note,created_at")
        .eq("type", "topup")
        .order("created_at", { ascending: false })
        .limit(50),
      supabase
        .from("orders")
        .select("id,user_id,order_code,total,status,items,created_at")
        .order("created_at", { ascending: false })
        .limit(50),
    ]);
    setPending((t ?? []) as Tx[]);
    setOrders((o ?? []) as Order[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const approve = async (id: string) => {
    const { error } = await supabase.rpc("topup_approve", { _tx_id: id });
    if (error) toast.error(error.message);
    else {
      toast.success("Đã duyệt — số dư đã được cộng");
      fetchAll();
    }
  };
  const reject = async (id: string) => {
    const { error } = await supabase.rpc("topup_reject", { _tx_id: id });
    if (error) toast.error(error.message);
    else {
      toast.success("Đã từ chối");
      fetchAll();
    }
  };
  const deliver = async (id: string) => {
    const { error } = await supabase.rpc("order_mark_delivered", { _order_id: id });
    if (error) toast.error(error.message);
    else {
      toast.success("Đã đánh dấu giao hàng");
      fetchAll();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border glass">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1">
            <h1 className="text-base font-bold">Quản trị · Vĩnh Thành Studio</h1>
            <p className="text-[11px] text-muted-foreground">Duyệt nạp tiền · Quản lý đơn hàng</p>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-6 space-y-8">
        {loading && (
          <div className="py-10 flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        {/* Topup queue */}
        <section>
          <h2 className="text-sm font-bold mb-3">
            🏦 Yêu cầu nạp tiền ({pending.filter((t) => t.status === "pending").length} chờ duyệt)
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary/60 text-muted-foreground">
                <tr>
                  <th className="text-left p-3">Thời gian</th>
                  <th className="text-left p-3">User</th>
                  <th className="text-left p-3">Mã CK</th>
                  <th className="text-right p-3">Số tiền</th>
                  <th className="text-center p-3">Trạng thái</th>
                  <th className="text-right p-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((t) => (
                  <tr key={t.id} className="border-t border-border">
                    <td className="p-3 whitespace-nowrap">{new Date(t.created_at).toLocaleString("vi-VN")}</td>
                    <td className="p-3 font-mono text-[10px] truncate max-w-[120px]">{t.user_id.slice(0, 8)}…</td>
                    <td className="p-3 font-mono font-bold text-primary">{t.order_code}</td>
                    <td className="p-3 text-right font-bold text-primary">{formatVND(t.amount)}</td>
                    <td className="p-3 text-center">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        t.status === "pending" ? "bg-amber-500/15 text-amber-400" :
                        t.status === "approved" ? "bg-emerald-500/15 text-emerald-400" :
                        "bg-red-500/15 text-red-400"
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      {t.status === "pending" && (
                        <div className="flex gap-1.5 justify-end">
                          <button
                            onClick={() => approve(t.id)}
                            className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500 hover:text-white text-[11px] font-bold flex items-center gap-1"
                          >
                            <BadgeCheck className="w-3 h-3" /> Duyệt
                          </button>
                          <button
                            onClick={() => reject(t.id)}
                            className="px-2.5 py-1 rounded-md bg-red-500/15 text-red-400 hover:bg-red-500 hover:text-white text-[11px] font-bold flex items-center gap-1"
                          >
                            <XCircle className="w-3 h-3" /> Từ chối
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {pending.length === 0 && (
                  <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">Chưa có yêu cầu nào</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Orders */}
        <section>
          <h2 className="text-sm font-bold mb-3">📦 Đơn hàng ({orders.length})</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary/60 text-muted-foreground">
                <tr>
                  <th className="text-left p-3">Thời gian</th>
                  <th className="text-left p-3">Mã đơn</th>
                  <th className="text-left p-3">Sản phẩm</th>
                  <th className="text-right p-3">Tổng</th>
                  <th className="text-center p-3">Trạng thái</th>
                  <th className="text-right p-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-t border-border">
                    <td className="p-3 whitespace-nowrap">{new Date(o.created_at).toLocaleString("vi-VN")}</td>
                    <td className="p-3 font-mono font-bold text-primary">{o.order_code}</td>
                    <td className="p-3 max-w-[280px]">
                      <p className="line-clamp-2">
                        {Array.isArray(o.items)
                          ? o.items.map((i) => `${i.name} (${i.plan}) x${i.qty}`).join(", ")
                          : ""}
                      </p>
                    </td>
                    <td className="p-3 text-right font-bold text-primary">{formatVND(o.total)}</td>
                    <td className="p-3 text-center">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        o.status === "delivered" ? "bg-emerald-500/15 text-emerald-400" :
                        o.status === "paid" ? "bg-blue-500/15 text-blue-400" :
                        "bg-amber-500/15 text-amber-400"
                      }`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      {o.status === "paid" && (
                        <button
                          onClick={() => deliver(o.id)}
                          className="px-2.5 py-1 rounded-md bg-primary/15 text-primary hover:bg-primary hover:text-primary-foreground text-[11px] font-bold flex items-center gap-1 ml-auto"
                        >
                          <Truck className="w-3 h-3" /> Đã giao
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">Chưa có đơn hàng</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
