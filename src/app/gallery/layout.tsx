import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Gallery",
  description:
    "View photos and media showcasing the Quatre Fitness training, client community, events, and modern fitness lifestyle.",
};

export default function GalleryLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
