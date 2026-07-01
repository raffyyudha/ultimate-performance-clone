import { getPageContent } from "@/lib/supabase";
import ContactClient from "./ContactClient";

export const runtime = "edge";

export const metadata = {
  title: "Contact Us",
  description: "Connect with Quatre Fitness to start your premium personal coaching transformation.",
};

export default async function ContactPage() {
  const content = await getPageContent("contact");
  return <ContactClient content={content} />;
}
