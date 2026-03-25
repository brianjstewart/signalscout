-- SignalScout Waitlist — Full Migration
-- Run this in the Supabase SQL editor:
-- https://supabase.com/dashboard/project/qhlhpbjuxpcjoluewmgl/sql/new

-- 1. Create the waitlist table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.signalscout_waitlist (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name   TEXT,
  email       TEXT NOT NULL,
  reason      TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  utm_source  TEXT,
  utm_medium  TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term    TEXT,
  referrer    TEXT
);

-- 2. Unique constraint on email (prevents duplicate signups)
ALTER TABLE public.signalscout_waitlist
  ADD CONSTRAINT signalscout_waitlist_email_unique UNIQUE (email);

-- 3. Enable Row Level Security
ALTER TABLE public.signalscout_waitlist ENABLE ROW LEVEL SECURITY;

-- 4. Allow anon inserts (form submissions from the website)
CREATE POLICY "Allow anon inserts" ON public.signalscout_waitlist
  FOR INSERT TO anon WITH CHECK (true);

-- 5. Service role full access (for admin reads)
CREATE POLICY "Service role full access" ON public.signalscout_waitlist
  FOR ALL TO service_role USING (true) WITH CHECK (true);
