import { getPageContent } from "@/lib/supabase";
import GalleryClient from "./GalleryClient";

export const runtime = "edge";

export const metadata = {
  title: "Gallery",
  description: "Visual gallery showcasing training sessions, community events, and lifestyle at Quatre Fitness.",
};

export default async function GalleryPage() {
  const content = await getPageContent("gallery");
  return <GalleryClient content={content} />;
}
