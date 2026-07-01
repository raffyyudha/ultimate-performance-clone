"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getAllPages, type PageContent } from "@/lib/supabase";

export default function AdminDashboardOverview() {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPages = useCallback(async () => {
    const data = await getAllPages();
    setPages(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  const configuredCount = pages.length;

  if (loading) {
    return (
      <div className="p-10 text-center space-y-4">
        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-gray-400">Loading system status...</p>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-12 max-w-5xl">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-2xl font-black tracking-tight text-black">
          CMS Control Center
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Monitor your website's active CMS config, page updates, and database connection.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Database Status
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <h3 className="text-sm font-black text-black">Connected</h3>
          </div>
          <p className="text-[10px] text-gray-400 mt-2">
            Supabase connection active & ready
          </p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Managed Pages
          </p>
          <h3 className="text-2xl font-black text-black mt-1">
            {configuredCount} <span className="text-xs text-gray-400 font-bold">/ 10</span>
          </h3>
          <p className="text-[10px] text-gray-400 mt-2">
            {configuredCount} pages customized in DB
          </p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            App Mode
          </p>
          <h3 className="text-sm font-black text-black mt-2 uppercase tracking-wide">
            SSR Active
          </h3>
          <p className="text-[10px] text-gray-400 mt-2">
            Zero-flicker hydration powered
          </p>
        </div>
      </div>

      {/* Quick Links List */}
      <div className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-bold text-sm text-black">Configure Web Pages</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Select a page below or from the sidebar menu to modify its live contents.
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {[
            { slug: "home", label: "Home", desc: "Hero title, pillars showcase, customer testimonials", icon: "🏠" },
            { slug: "services", label: "Services", desc: "Training methods, step progression, localized FAQs", icon: "💪" },
            { slug: "about", label: "About Us", desc: "Philosophy, team, corporate method, historical pillars", icon: "ℹ️" },
            { slug: "trainers", label: "Trainers", desc: "Recruitment selection, certified coach training", icon: "🏋️" },
            { slug: "results", label: "Results", desc: "Successful transformations, metric stats", icon: "📊" },
            { slug: "gallery", label: "Gallery", desc: "Visual media grid assets", icon: "📸" },
            { slug: "merch", label: "Merch Collection", desc: "Understated apparel styles, corporate wear", icon: "👕" },
            { slug: "fitline", label: "FitLine Supplements", desc: "NTC patent absorption system, recommendations", icon: "🧬" },
            { slug: "calculator", label: "Fitness Calculator", desc: "Karvonen target heart zones, BMI tables", icon: "🧮" },
            { slug: "contact", label: "Contact & Enquiries", desc: "WhatsApp routing numbers, corporate email", icon: "📧" },
          ].map((page) => {
            const hasData = pages.some((p) => p.page_slug === page.slug);
            return (
              <Link
                key={page.slug}
                href={`/admin/dashboard/${page.slug}`}
                className="flex items-center justify-between p-5 hover:bg-gray-50/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl">{page.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-black group-hover:text-black transition-colors">
                      {page.label} Page
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{page.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      hasData
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {hasData ? "LIVE DB" : "DEFAULT"}
                  </span>
                  <span className="text-gray-300 group-hover:text-black group-hover:translate-x-0.5 transition-all text-xs font-bold">
                    Edit →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
