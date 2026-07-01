import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://yvorihxnzeyhvyqccnzk.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2b3JpaHhuemV5aHZ5cWNjbnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MTMyNzIsImV4cCI6MjA5ODQ4OTI3Mn0.32GXOkakWJhTfImsyNW9Hx7GsIl-VzsW9rdRHTdVveQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Types ──────────────────────────────────────────────────────────
export interface PageContent {
  id: string;
  page_slug: string;
  sections: Record<string, string>;
  updated_at: string;
}

// ── Server-side helper: fetch page content ─────────────────────────
export async function getPageContent(
  slug: string,
): Promise<Record<string, string> | null> {
  try {
    const { data, error } = await supabase
      .from("page_content")
      .select("sections")
      .eq("page_slug", slug)
      .single();

    if (error || !data) return null;
    return data.sections as Record<string, string>;
  } catch {
    return null;
  }
}

// ── Client-side helper: upsert page content ────────────────────────
export async function upsertPageContent(
  slug: string,
  sections: Record<string, string>,
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from("page_content").upsert(
      {
        page_slug: slug,
        sections,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "page_slug" },
    );

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

// ── Fetch all pages for dashboard listing ──────────────────────────
export async function getAllPages(): Promise<PageContent[]> {
  try {
    const { data, error } = await supabase
      .from("page_content")
      .select("*")
      .order("page_slug");

    if (error || !data) return [];
    return data as PageContent[];
  } catch {
    return [];
  }
}
