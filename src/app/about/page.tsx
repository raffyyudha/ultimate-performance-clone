import { getPageContent } from "@/lib/supabase";
import AboutClient from "./AboutClient";

export const runtime = "edge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quatre Fitness Group, a premium Singapore-based fitness and wellness lifestyle group delivering mobile coaching, Quatre Merch, and premium supplements.",
};

export default async function AboutPage() {
  const content = await getPageContent("about");
  return <AboutClient content={content} />;
}
