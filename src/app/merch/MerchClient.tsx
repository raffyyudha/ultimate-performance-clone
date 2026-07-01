"use client";

import Image from "next/image";
import Link from "next/link";

interface MerchClientProps {
  content: Record<string, string> | null;
}

export default function MerchClient({ content }: MerchClientProps) {
  const values = [
    {
      title: "Performance",
      desc: "Premium athletic cuts and sweat-wicking materials engineered specifically for clean, unrestricted movement.",
    },
    {
      title: "Comfort",
      desc: "Ultra-breathable premium fabrics built to withstand heavy training sessions as well as daily lifestyle wear.",
    },
    {
      title: "Design",
      desc: "A clean, modern, and understated look. Minimalist aesthetic that represents discipline and mental focus.",
    },
    {
      title: "Identity",
      desc: "Apparel created as identity wear for individuals who embody the fitness lifestyle, both inside and outside the gym.",
    },
  ];

  const products = [
    {
      title: "Signature Performance Tee",
      price: "SGD 45.00",
      desc: "Lightweight, sweat-wicking athletic tee designed for high-intensity training. Features custom athletic fit and minimal branding.",
      img: "/merch_item_1.jpg",
      waText:
        "Hi Quatre, I would like to enquire about the Signature Performance Tee (SGD 45.00).",
    },
    {
      title: "Elite Oversized Hoodie",
      price: "SGD 85.00",
      desc: "Premium heavyweight cotton drop-shoulder hoodie. Designed for comfort, warmth, and a strong athletic presence.",
      img: "/merch_item_2.jpg",
      waText:
        "Hi Quatre, I would like to enquire about the Elite Oversized Hoodie (SGD 85.00).",
    },
    {
      title: "Urban Athlete Joggers",
      price: "SGD 65.00",
      desc: "Flexible, four-way stretch joggers designed to transition seamlessly from the training floor to urban recovery.",
      img: "/merch_item_3.jpg",
      waText:
        "Hi Quatre, I would like to enquire about the Urban Athlete Joggers (SGD 65.00).",
    },
    {
      title: 'Quatre "Undefeated" Premium Gift Box',
      price: "SGD 150.00",
      desc: "A premium lifestyle gift set featuring our signature white 'Undefeated' tee, a classic structured athletic cap, custom training socks, and a sleek black hoodie, all housed in a luxury custom presentation box.",
      img: "/WhatsApp Image 2026-06-23 at 1.27.46 PM.jpeg",
      waText:
        'Hi Quatre, I would like to enquire about the Quatre "Undefeated" Premium Gift Box (SGD 150.00).',
    },
    {
      title: 'Quatre "Stronger" Premium Gift Box',
      price: "SGD 150.00",
      desc: "An elite performance gift set containing our signature black 'Stronger' tee, a structured athlete cap, training socks, and exclusive Quatre sticker pack, presented in a luxury custom presentation box.",
      img: "/WhatsApp Image 2026-06-23 at 1.27.47 PM.jpeg",
      waText:
        'Hi Quatre, I would like to enquire about the Quatre "Stronger" Premium Gift Box (SGD 150.00).',
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      {/* HERO STATEMENT */}
      <section className="relative h-[65vh] flex items-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-10" />
        <Image
          src="/merch_item_2.jpg"
          alt="Quatre Merch Hero"
          fill
          priority
          className="object-cover opacity-60 filter grayscale contrast-115 scale-102"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <p className="text-xs tracking-[0.2em] text-[#1E00FA] font-bold mb-3 uppercase">
            QUATRE MERCH
          </p>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            {content?.hero_title ?? <>Wear the Discipline.<br /><span className="italic text-red-100 font-normal">Live the Lifestyle.</span></>}
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base max-w-md leading-relaxed">
            {content?.hero_description ?? "Premium fitness & lifestyle apparel designed for individuals who live by performance, comfort, and modern style."}
          </p>
        </div>
      </section>

      {/* PHILOSOPHY / OVERVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
            DESIGN PHILOSOPHY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {content?.philosophy_title ?? "Understated Premium Style"}
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              {content?.philosophy_description ?? "Quatre Merch is the in-house premium apparel and lifestyle merchandise brand of Quatre Fitness Group. Designed for individuals who value performance, comfort, and refined aesthetics, Quatre Merch represents the identity of a modern fitness lifestyle — in training and beyond."}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#collection"
              className="bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 shadow-md"
            >
              Discover Collection
            </a>
            <Link
              href="/contact"
              className="border-2 border-black text-black px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            >
              Partner with us
            </Link>
          </div>
        </div>
        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-[#E0E0E0]">
          <Image
            src="/WhatsApp Image 2026-06-23 at 1.53.30 PM.jpeg"
            alt="Quatre Merch Premium Showcase"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* PRODUCT CATALOG GRID */}
      <section
        id="collection"
        className="bg-white py-24 border-t border-b border-gray-100 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              THE QUATRE COLLECTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Premium Athletic Roster
            </h2>
            <p className="text-gray-500 text-sm">
              Premium materials, tailored fit, and absolute durability. Click to
              enquire stock and sizes directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod.title}
                className="bg-[#F5F5F7] rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="relative h-[360px] bg-white border-b border-gray-100/50 p-4">
                    <Image
                      src={prod.img}
                      alt={prod.title}
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-500 p-2"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-black max-w-[70%] leading-tight">
                        {prod.title}
                      </h3>
                      <span className="text-sm font-extrabold text-[#1E00FA] whitespace-nowrap bg-[#1E00FA]/5 px-2.5 py-1 rounded">
                        {prod.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <a
                    href={`https://wa.me/6581379850?text=${encodeURIComponent(prod.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black text-white hover:bg-[#1E00FA] text-center text-xs py-3.5 rounded-full font-bold uppercase tracking-wider block transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    {/* WhatsApp Icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48.002 9.932-4.444 9.935-9.923.002-2.653-1.03-5.148-2.906-7.025C16.427 1.78 13.939.75 11.29.75c-5.485 0-9.94 4.451-9.943 9.933-.001 1.554.49 3.076 1.419 4.502l-.993 3.626 3.884-.961zm12.445-6.388c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.568-1.78-4.737-3.136-5.207-3.946-.275-.475-.03-.73.207-.967.214-.213.475-.55.713-.825.24-.275.318-.462.477-.775.16-.312.08-.587-.04-.837-.12-.25-.975-2.35-1.338-3.225-.353-.85-.714-.734-.975-.75-.25-.015-.537-.015-.825-.015s-.75.112-1.137.537c-.388.425-1.488 1.45-1.488 3.537 0 2.088 1.525 4.1 1.738 4.388.212.288 3.012 4.6 7.3 6.45 1.02.44 1.815.703 2.438.9.155.03.388.016.536.002.26-.039.75-.407.854-.8.104-.393.104-.73.073-.8-.03-.07-.113-.112-.413-.262z" />
                    </svg>
                    Enquire via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES & MATERIALS SECTION */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              OUR VALUES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Engineered for the Dedicated
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#1E00FA] transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-white border-l-2 border-[#1E00FA] pl-3">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO-BRANDING CTA */}
      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
            TEAM WEAR & CO-BRANDING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {content?.cta_title ?? "Looking for Co-Branded Team Wear?"}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {content?.cta_description ?? "We partner with corporate teams, fitness clubs, and athletic organizations in Singapore to provide customized, high-quality Quatre apparel tailored to your group's specifications."}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="bg-[#1E00FA] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors duration-300 shadow-md inline-block"
            >
              Contact Our Corporate Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
