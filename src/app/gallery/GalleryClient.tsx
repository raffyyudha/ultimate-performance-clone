"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryClientProps {
  content: Record<string, string> | null;
}

export default function GalleryClient({ content }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "ALL PHOTOS" },
    { id: "training", label: "MOBILE PT SESSIONS" },
  ];

  const galleryItems = [
    {
      category: "training",
      title: "One-on-One Biomechanics Coaching",
      img: "/pt_philosophy.png",
      heightClass: "h-[350px]",
    },
    {
      category: "training",
      title: "Quatre Elite Coaching Standards",
      img: "/pt_standards.png",
      heightClass: "h-[300px]",
    },
    {
      category: "training",
      title: "Weight Management & Nutrition Progress",
      img: "/goal_weight_management.png",
      heightClass: "h-[400px]",
    },
    {
      category: "training",
      title: "Longevity & Executive Health",
      img: "/goal_longevity.png",
      heightClass: "h-[320px]",
    },
    {
      category: "training",
      title: "Confidential Coach Consultation",
      img: "/contact_hero.png",
      heightClass: "h-[400px]",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      {/* HERO BANNER */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/pt_history.png"
          alt="Gallery Hero"
          fill
          priority
          className="object-cover opacity-60 filter grayscale"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs text-[#1E00FA] font-bold uppercase tracking-widest mb-3">
            {content?.hero_description ?? "VISUAL GALLERY"}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            {content?.hero_title ?? "The Quatre Fitness Lifestyle"}
          </h1>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[57px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-full ${
                activeCategory === cat.id
                  ? "bg-black text-white shadow"
                  : "bg-[#F5F5F7] border border-gray-200 text-gray-700 hover:border-black hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY STAGGERED GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className={`break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100/50 relative flex flex-col justify-end ${item.heightClass}`}
              onClick={() => setLightboxImage(item.img)}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="text-[10px] font-bold text-[#1E00FA] uppercase tracking-widest bg-white/95 px-2.5 py-1 rounded-md self-start mb-2">
                  {
                    categories
                      .find((c) => c.id === item.category)
                      ?.label.split(" ")[0]
                  }
                </span>
                <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#1E00FA] p-3 transition-colors bg-white/10 rounded-full focus:outline-none"
            onClick={() => setLightboxImage(null)}
            aria-label="Close Lightbox"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Lightbox View"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
