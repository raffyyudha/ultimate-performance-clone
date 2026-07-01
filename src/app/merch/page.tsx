import { getPageContent } from "@/lib/supabase";
import MerchClient from "./MerchClient";

export const runtime = "edge";

export const metadata = {
  title: "Merch",
  description: "Quatre Merch premium athletic and lifestyle apparel.",
};

export default async function MerchPage() {
  const content = await getPageContent("merch");
  return <MerchClient content={content} />;
}
