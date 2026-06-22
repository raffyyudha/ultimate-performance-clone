import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Training Services",
  description: "Explore our premium home and mobile personal training programs in Singapore. We manage your training, nutrition, and supplements to guarantee results.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
