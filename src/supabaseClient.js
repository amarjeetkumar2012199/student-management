import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://your-https://zqxoaageojuqedereqdz.supabase.co"; // Replace this
const supabaseAnonKey = "youreyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxeG9hYWdlb2p1cWVkZXJlcWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNzU5MzcsImV4cCI6MjA2NDk1MTkzN30.bu7Saj19sKI1S1e7h9smUglKZYnwTpCHvJiIDBTX7qw-anon-key"; // Replace this

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
