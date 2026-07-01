import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Quatre Fitness",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      {children}
    </div>
  );
}
