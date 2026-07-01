import { getPageContent } from "@/lib/supabase";
import FitlineClient from "./FitlineClient";

export const runtime = "edge";

export const metadata = {
  title: "FitLine",
  description: "FitLine premium German nutritional supplements at Quatre Fitness.",
};

export default async function FitlinePage() {
  const content = await getPageContent("fitline");
  return <FitlineClient content={content} />;
}
