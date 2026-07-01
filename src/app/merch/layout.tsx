import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quatre Merch",
  description:
    "Shop Quatre Merch, our premium in-house fitness and lifestyle apparel brand designed for performance, comfort, and refined aesthetics.",
};

export default function MerchLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
