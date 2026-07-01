import { getPageContent } from "@/lib/supabase";
import HomeClient from "./HomeClient";

export const runtime = "edge";

export default async function HomePage() {
  const content = await getPageContent("home");
  return <HomeClient content={content} />;
}
