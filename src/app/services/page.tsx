import { getPageContent } from "@/lib/supabase";
import ServicesClient from "./ServicesClient";

export const runtime = "edge";

export const metadata = {
  title: "Services",
  description: "Explore Quatre Fitness personal training services, our proven method, and how we help clients achieve lasting results.",
};

export default async function ServicesPage() {
  const content = await getPageContent("services");
  return <ServicesClient content={content} />;
}
