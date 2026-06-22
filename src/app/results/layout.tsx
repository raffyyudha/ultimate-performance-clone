import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Success Stories",
  description: "Read real success stories and see body composition transformation results from clients who trained with Quatre Fitness.",
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
