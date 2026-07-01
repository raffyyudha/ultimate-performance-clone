import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Elite Trainers",
  description:
    "Meet our team of rigorously selected coaching professionals in Singapore. Every coach holds recognized personal training and sports science qualifications.",
};

export default function TrainersLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
