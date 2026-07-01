import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness Calculators",
  description:
    "Use our advanced fitness calculators to determine your body fat, strength ratio, macro distribution, and training volume targets.",
};

export default function CalculatorLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
