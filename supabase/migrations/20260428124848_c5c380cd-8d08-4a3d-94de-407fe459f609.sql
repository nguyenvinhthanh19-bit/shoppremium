-- Roles enum + table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- has_role function (security definer to bypass RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users view own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins view all roles" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Profiles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles viewable by owner" ON public.profiles
  FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Profiles viewable by admin" ON public.profiles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Owner can update profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id);

-- Wallets
CREATE TABLE public.wallets (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  balance BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owner views own wallet" ON public.wallets
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admin views all wallets" ON public.wallets
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Wallet transactions
CREATE TYPE public.tx_type AS ENUM ('topup', 'purchase', 'refund', 'adjust');
CREATE TYPE public.tx_status AS ENUM ('pending', 'approved', 'rejected', 'completed');

CREATE TABLE public.wallet_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type public.tx_type NOT NULL,
  amount BIGINT NOT NULL,
  status public.tx_status NOT NULL DEFAULT 'pending',
  order_code TEXT,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  approved_at TIMESTAMPTZ,
  approved_by UUID REFERENCES auth.users(id)
);
ALTER TABLE public.wallet_transactions ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_wt_user ON public.wallet_transactions(user_id, created_at DESC);
CREATE INDEX idx_wt_status ON public.wallet_transactions(status, created_at DESC);

CREATE POLICY "Owner views own tx" ON public.wallet_transactions
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Owner can create own topup" ON public.wallet_transactions
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND type = 'topup' AND status = 'pending');
CREATE POLICY "Admin views all tx" ON public.wallet_transactions
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Orders
CREATE TYPE public.order_status AS ENUM ('pending', 'paid', 'delivered', 'cancelled');
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  order_code TEXT NOT NULL UNIQUE,
  items JSONB NOT NULL,
  total BIGINT NOT NULL,
  status public.order_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_orders_user ON public.orders(user_id, created_at DESC);

CREATE POLICY "Owner views own orders" ON public.orders
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admin views all orders" ON public.orders
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Trigger: auto profile + wallet + role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)));
  INSERT INTO public.wallets (user_id, balance) VALUES (NEW.id, 0);
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RPC: admin approves topup -> credit wallet atomically
CREATE OR REPLACE FUNCTION public.topup_approve(_tx_id UUID)
RETURNS VOID
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _tx RECORD;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'forbidden';
  END IF;

  SELECT * INTO _tx FROM public.wallet_transactions WHERE id = _tx_id FOR UPDATE;
  IF _tx IS NULL THEN RAISE EXCEPTION 'tx_not_found'; END IF;
  IF _tx.status <> 'pending' THEN RAISE EXCEPTION 'tx_not_pending'; END IF;
  IF _tx.type <> 'topup' THEN RAISE EXCEPTION 'not_topup'; END IF;

  UPDATE public.wallet_transactions
    SET status = 'approved', approved_at = now(), approved_by = auth.uid()
    WHERE id = _tx_id;

  UPDATE public.wallets
    SET balance = balance + _tx.amount, updated_at = now()
    WHERE user_id = _tx.user_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.topup_reject(_tx_id UUID)
RETURNS VOID
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'forbidden';
  END IF;
  UPDATE public.wallet_transactions
    SET status = 'rejected', approved_at = now(), approved_by = auth.uid()
    WHERE id = _tx_id AND status = 'pending';
END;
$$;

-- RPC: pay from wallet
CREATE OR REPLACE FUNCTION public.wallet_purchase(_items JSONB, _total BIGINT, _order_code TEXT)
RETURNS UUID
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _uid UUID := auth.uid();
  _bal BIGINT;
  _order_id UUID;
BEGIN
  IF _uid IS NULL THEN RAISE EXCEPTION 'unauthenticated'; END IF;
  IF _total <= 0 THEN RAISE EXCEPTION 'invalid_total'; END IF;

  SELECT balance INTO _bal FROM public.wallets WHERE user_id = _uid FOR UPDATE;
  IF _bal IS NULL THEN RAISE EXCEPTION 'wallet_missing'; END IF;
  IF _bal < _total THEN RAISE EXCEPTION 'insufficient_balance'; END IF;

  UPDATE public.wallets SET balance = balance - _total, updated_at = now() WHERE user_id = _uid;

  INSERT INTO public.orders (user_id, order_code, items, total, status)
  VALUES (_uid, _order_code, _items, _total, 'paid')
  RETURNING id INTO _order_id;

  INSERT INTO public.wallet_transactions (user_id, type, amount, status, order_code, note)
  VALUES (_uid, 'purchase', -_total, 'completed', _order_code, 'Thanh toán đơn hàng');

  RETURN _order_id;
END;
$$;

-- Admin: mark order delivered
CREATE OR REPLACE FUNCTION public.order_mark_delivered(_order_id UUID)
RETURNS VOID
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'forbidden';
  END IF;
  UPDATE public.orders SET status = 'delivered' WHERE id = _order_id;
END;
$$;