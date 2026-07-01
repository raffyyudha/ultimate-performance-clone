"use client";

import Image from "next/image";
import Link from "next/link";

interface FitlineClientProps {
  content: Record<string, string> | null;
}

export default function FitlineClient({ content }: FitlineClientProps) {
  const products = [
    {
      name: "FitLine Basics",
      tagline: "Your Daily Cellular Foundation",
      focus: "Digestion & Immunity",
      desc: "A premium nutritional foundation that optimizes nutrient absorption, promotes healthy gut flora, and supports immune defenses. Packed with vitamins, soluble and insoluble fibers, digestive enzymes, and beneficial probiotics.",
      img: "/fitline_basics.png",
    },
    {
      name: "FitLine Activize Oxyplus",
      tagline: "Your Daily Energy & Concentration Booster",
      focus: "Energy & Performance",
      desc: "Specially formulated to support active energy metabolism, cognitive clarity, and physical endurance. Supplies vital B-vitamins and features a patented delivery system that aids in cellular oxygen supply.",
      img: "/fitline_activize.png",
    },
    {
      name: "FitLine Restorate",
      tagline: "Your Nighttime Regeneration",
      focus: "Recovery & Sleep",
      desc: "The perfect nighttime recovery drink rich in essential minerals and trace elements (magnesium, calcium, zinc, iron, vitamin D). Promotes rapid muscle repair, skeletal health, and deep restorative sleep.",
      img: "/fitline_restorate.png",
    },
  ];

  const focusAreas = [
    {
      title: "Daily Health & Immunity",
      desc: "Strengthen biological defenses and immune pathways with complete, bio-available micronutrient blends.",
      icon: (
        <svg
          className="w-6 h-6 text-[#1E00FA]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Energy, Performance & Endurance",
      desc: "Upgrade ATP cellular energy generation and mental focus, powering through heavy workouts and demanding business days.",
      icon: (
        <svg
          className="w-6 h-6 text-[#1E00FA]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Recovery & Cellular Health",
      desc: "Speed muscle cell recovery and reduce metabolic oxidative stress, ensuring quick rejuvenation between training sessions.",
      icon: (
        <svg
          className="w-6 h-6 text-[#1E00FA]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17"
          />
        </svg>
      ),
    },
    {
      title: "Longevity & Active Aging",
      desc: "Preserve skeletal strength, cardiovascular vitality, and optimal cognitive functions past age 40.",
      icon: (
        <svg
          className="w-6 h-6 text-[#1E00FA]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  const valueProps = [
    {
      title: "German Science",
      desc: "Formulated and manufactured in Germany under strict Good Manufacturing Practice (GMP) guidelines to guarantee pure, clean, premium quality.",
    },
    {
      title: "NTC® Concept",
      desc: "The patented Nutrient Transport Concept (NTC®) delivers nutrients precisely when and where they are needed at the cellular level for higher absorption.",
    },
    {
      title: "Global Trust",
      desc: "Recognized in over 40 countries, trusted by thousands of professional athletes, sports federations, and health-conscious executives worldwide.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-10" />
        <Image
          src="/fitline_optimal_set.png"
          alt="FitLine Supplements Hero"
          fill
          priority
          className="object-cover opacity-60 scale-102"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <p className="text-xs tracking-[0.2em] text-[#1E00FA] font-bold mb-3 uppercase">
            PREMIUM NUTRITION
          </p>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            {content?.hero_title ?? <>German Science.<br /><span className="italic text-red-100 font-normal">Optimal Cellular Energy.</span></>}
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base max-w-md leading-relaxed">
            {content?.hero_description ?? "Upgrade your health, energy, and recovery with FitLine by PM International—nutritional supplements built on the patented Nutrient Transport Concept (NTC®)."}
          </p>
        </div>
      </section>

      {/* CONCEPT BREAKDOWN */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
            PATENTED SCIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {content?.ntc_title ?? "The Nutrient Transport Concept (NTC®)"}
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              {content?.ntc_description ?? "Quatre Fitness Group proudly represents FitLine by PM International (Germany), a globally recognized premium nutrition brand present in over 40 countries. FitLine is built on the patented Nutrient Transport Concept (NTC®), designed to ensure that nutrients are delivered to the cells at the right time for optimal absorption and effectiveness."}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-[#1E00FA] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors duration-300 shadow-md"
            >
              Book Nutrition Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-black text-black px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            >
              Become a Customer / Partner
            </Link>
          </div>
        </div>
        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          <Image
            src="/fitline_optimal_set.png"
            alt="FitLine Supplements NTC Concept"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* PRODUCT CATALOG GRID */}
      <section className="bg-white py-24 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              QUATRE FITNESS RECOMMENDATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The Optimal Nutrition Roster
            </h2>
            <p className="text-gray-500 text-sm">
              Explore the premium, clinically designed core products that we
              integrate into our client programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod.name}
                className="bg-[#F5F5F7] rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="relative h-[260px] bg-white border-b border-gray-100/50">
                    <Image
                      src={prod.img}
                      alt={prod.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <span className="text-[10px] font-bold text-[#1E00FA] uppercase tracking-wider bg-[#1E00FA]/5 px-2.5 py-1 rounded">
                      {prod.focus}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-black">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-gray-400 italic">
                        {prod.tagline}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <Link
                    href="/contact"
                    className="w-full bg-black text-white hover:bg-[#1E00FA] text-center text-xs py-3 rounded-full font-bold uppercase tracking-wider block transition-colors shadow-sm"
                  >
                    Enquire for {prod.name.split(" ")[1] || "Supplement"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIMAL SET HIGHLIGHT BANNER */}
      <section className="bg-[#1E00FA]/5 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-[#EFEFEF] order-2 md:order-1">
            <Image
              src="/WhatsApp Image 2026-06-23 at 1.30.40 PM.jpeg"
              alt="FitLine Optimal Set Premium Banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              THE ULTIMATE CORE SYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              The FitLine Optimal Set
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The Optimal Set is PM International's flagship foundational
              nutrition system, combining three synergistic products:{" "}
              <strong>Basics</strong>, <strong>Activize Oxyplus</strong>, and{" "}
              <strong>Restorate</strong>.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              This powerful trio supplies your body with vital cellular
              nutrients from morning until night. By taking Basics and Activize
              Oxyplus in the morning to optimize digestion and cellular energy,
              followed by Restorate in the evening for mineral replenishment and
              sleep recovery, you cover all key biological bases. It is the
              absolute cornerstone of Quatre Fitness's supplement
              recommendations.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 shadow-md inline-block"
              >
                Enquire for the Optimal Set
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FITLINE WORKS */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              WHY FITLINE WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              German Engineering & Global Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((vp) => (
              <div
                key={vp.title}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#1E00FA] transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-white border-l-2 border-[#1E00FA] pl-3">
                  {vp.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {vp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
            FOCUS AREAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Targeted Health Benefits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-black leading-tight">
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NUTRITION PHILOSOPHY */}
      <section className="bg-[#F5F5F7] py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
            NUTRITION PHILOSOPHY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {content?.cta_title ?? "Supplements are not shortcuts."}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {content?.cta_description ?? "We believe premium training deserves premium nutrition. Supplements are not shortcuts—they are part of a smart, structured lifestyle system supporting long-term health and physical performance."}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="bg-[#1E00FA] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors duration-300 shadow-md inline-block"
            >
              Get Your FitLine Plan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
