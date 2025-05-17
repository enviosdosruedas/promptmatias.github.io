
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.error("Supabase URL is not defined. Please set NEXT_PUBLIC_SUPABASE_URL in your .env.local file.");
  // In a server environment, throwing an error here can be more direct.
  // For client-side, you might handle this differently or let createClient handle it.
  throw new Error("CRITICAL: Supabase URL is not defined.");
}

if (!supabaseAnonKey) {
  console.error("Supabase anonymous key is not defined. Please set NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.");
  throw new Error("CRITICAL: Supabase anonymous key is not defined.");
}

// Create a single supabase client for interacting with your database
// The assertion "as SupabaseClient" is used because createClient can return SupabaseClient | null
// based on some older patterns, but with valid URL/Key it should always return SupabaseClient.
// However, to be super safe, you could check if it's null, though it's unlikely here.
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
