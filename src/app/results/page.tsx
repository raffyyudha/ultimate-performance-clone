import { getPageContent } from "@/lib/supabase";
import ResultsClient from "./ResultsClient";

export const runtime = "edge";

export const metadata = {
  title: "Results",
  description: "Real body transformation results from Quatre Fitness clients.",
};

export default async function ResultsPage() {
  const content = await getPageContent("results");
  return <ResultsClient content={content} />;
}
