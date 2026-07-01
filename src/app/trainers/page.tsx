import { getPageContent } from "@/lib/supabase";
import TrainersClient from "./TrainersClient";

export const runtime = "edge";

export default async function TrainersPage() {
  const content = await getPageContent("trainers");
  return <TrainersClient content={content} />;
}
