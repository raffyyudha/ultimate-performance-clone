import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitLine Supplements",
  description: "Optimize your cellular nutrition, energy, and digestion with premium German FitLine supplements represented by Quatre Fitness.",
};

export default function FitLineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
