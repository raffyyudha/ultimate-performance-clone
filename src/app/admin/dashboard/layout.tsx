"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const MENU_ITEMS = [
  { slug: "home", label: "Home Page", icon: "🏠" },
  { slug: "services", label: "Services Page", icon: "💪" },
  { slug: "about", label: "About Page", icon: "ℹ️" },
  { slug: "trainers", label: "Trainers Page", icon: "🏋️" },
  { slug: "results", label: "Results Page", icon: "📊" },
  { slug: "gallery", label: "Gallery Page", icon: "📸" },
  { slug: "merch", label: "Merch Page", icon: "👕" },
  { slug: "fitline", label: "FitLine Page", icon: "🧬" },
  { slug: "calculator", label: "Calculator Page", icon: "🧮" },
  { slug: "contact", label: "Contact Page", icon: "📧" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("quatre_admin_auth");
    if (auth !== "true") {
      router.replace("/admin");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("quatre_admin_auth");
    router.replace("/admin");
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-white text-black">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-gray-200 bg-white flex flex-col justify-between h-screen sticky top-0 shrink-0">
        <div>
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-extrabold text-sm">Q</span>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-black">
                Quatre Fitness
              </h2>
              <p className="text-[10px] text-gray-400">Content Management</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-200px)]">
            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Web Pages
            </p>

            <Link
              href="/admin/dashboard"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                pathname === "/admin/dashboard"
                  ? "bg-black text-white"
                  : "text-gray-500 hover:text-black hover:bg-gray-50"
              }`}
            >
              <span className="text-sm">📊</span>
              <span>Overview</span>
            </Link>

            {MENU_ITEMS.map((item) => {
              const href = `/admin/dashboard/${item.slug}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Utilities */}
        <div className="p-4 border-t border-gray-100 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-gray-500 hover:text-black hover:bg-gray-50 transition-all"
          >
            <span>🌐</span>
            <span>View Live Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-gray-400 hover:text-red-600 hover:bg-red-50/50 transition-all text-left"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto min-h-screen bg-gray-50/30">
        {children}
      </main>
    </div>
  );
}
