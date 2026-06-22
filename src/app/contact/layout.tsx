import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Enquiry",
  description: "Get in touch with Quatre Fitness Group today to book your free personal training consultation in Singapore.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
