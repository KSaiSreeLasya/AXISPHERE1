import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getSupabaseClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    // don't throw during module import — let callers handle the missing env
    // logging here helps with debugging when app is loaded without envs
    // (e.g. production build without vars set)
    // eslint-disable-next-line no-console
    console.warn("VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not set");
    return null;
  }
  return createClient(url, anon, {
    auth: { persistSession: true, autoRefreshToken: true },
  });
}

// NOTE: do not create client at module import time to avoid runtime errors
// export const supabase = getSupabaseClient();
