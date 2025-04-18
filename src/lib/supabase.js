import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is missing from environment variables.");
  // Depending on your needs, you might want to throw an error here
  // throw new Error("Supabase URL and Anon Key must be defined.");
}

// Handle potential undefined values during build gracefully
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

// Optional: Add a check function if you need to ensure it's configured before use in certain places
export function isSupabaseConfigured() {
  return supabaseUrl && supabaseAnonKey;
}
