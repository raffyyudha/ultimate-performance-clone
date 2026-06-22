import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Quatre Fitness Group, a premium Singapore-based fitness and wellness lifestyle group delivering mobile coaching, Quatre Merch, and premium supplements.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      
      {/* 1. HERO HEADER BANNER OVERLAY */}
      <section className="relative h-[320px] md:h-[400px] w-full flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <Image
          src="/pt_history.png"
          alt="About Quatre Fitness Group"
          fill
          priority
          className="object-cover opacity-50 filter grayscale"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-3 animate-fadeIn">
          <p className="text-xs text-[#1E00FA] font-bold uppercase tracking-[0.25em]">ESTABLISHED IN SINGAPORE</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            About Quatre Fitness Group
          </h1>
          <p className="text-gray-300 mt-2 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Discover the team, history, and core pillars driving Singapore's premier integrated wellness ecosystem.
          </p>
        </div>
      </section>

      {/* 2. CORE STATEMENT INTRO SECTION */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs text-[#1E00FA] font-bold uppercase tracking-[0.2em]">OUR PURPOSE</p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
            The premium lifestyle standard in fitness and wellness for Singapore.
          </h2>
          <div className="w-16 h-1 bg-[#1E00FA] mx-auto rounded-full" />
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Quatre Fitness Group Pte Ltd is a Singapore-registered group established to deliver premium, accessible, and sustainable fitness and wellness solutions. We serve clients who value quality, discretion, flexibility, and long-term results.
          </p>
        </div>
      </section>

      {/* STAGGERED ALTERNATING SECTIONS */}
      <div className="space-y-0">

        {/* 3. SECTION: PROVEN EXCELLENCE (White Bg, Text Left, Image Right) */}
        <section className="bg-white py-20 border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xs font-bold text-[#1E00FA] uppercase tracking-[0.2em]">PROVEN EXCELLENCE</p>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                  Premium solutions.<br />Defined by lifestyle.
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg">
                  <p>
                    We believe fitness is not a short-term goal. It is a long-term lifestyle investment in health, performance, and confidence. We achieve this by integrating professional coaching, premium supplements, high-quality merchandise, and community experiences under one trusted group.
                  </p>
                  <p>
                    Our ecosystem manages every variable of your fitness journey, removing trial and error. Every element works together to maximize performance, build sustainable nutritional habits, and make your health progression certain.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[480px] w-full overflow-hidden rounded-[2.5rem] shadow-xl group border border-gray-100">
                <Image
                  src="/goal_longevity.png"
                  alt="Premium wellness"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION: OUR PHILOSOPHY (Cream Bg, Image Left, Text Right) */}
        <section className="bg-[#F5F5F7] py-20 border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[480px] w-full overflow-hidden rounded-[2.5rem] shadow-xl group border border-gray-100 order-2 md:order-1">
                <Image
                  src="/pt_philosophy.png"
                  alt="Fitness philosophy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2 md:pl-12">
                <p className="text-xs font-bold text-[#1E00FA] uppercase tracking-[0.2em]">OUR PHILOSOPHY</p>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                  Lifestyles,<br />not quick fixes.
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg">
                  <p>
                    We founded Quatre Fitness in response to a fitness industry saturated with quick fixes, crash diets, and low accountability. True transformation is built on consistency, discipline, structure, and mindset.
                  </p>
                  <p>
                    Our focus is on building habits, structured systems, and sustainable lifestyles that support long-term cellular health, physical strength, and mental confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION: OUR METHOD / PILLARS (White Bg, Text Left, Image Right) */}
        <section className="bg-white py-20 border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xs font-bold text-[#1E00FA] uppercase tracking-[0.2em]">OUR METHOD</p>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                  The ecosystem we built to elevate lives.
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg">
                  <p>
                    By operating across four strategic pillars—Home & Mobile Personal Training, Quatre Merch apparel, FitLine supplements, and Wellness Events—we manage every variable of your fitness journey, removing trial and error.
                  </p>
                  <p>
                    Every element works together to maximize performance, build sustainable nutritional habits, and make your health progression certain.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/services"
                    className="inline-block bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E00FA] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                  >
                    Explore Our Pillars
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[480px] w-full overflow-hidden rounded-[2.5rem] shadow-xl group border border-gray-100">
                <Image
                  src="/contact_hero.png"
                  alt="Quatre Fitness system"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECTION: OUR COACHES (Cream Bg, Image Left, Text Right) */}
        <section className="bg-[#F5F5F7] py-20 border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[480px] w-full overflow-hidden rounded-[2.5rem] shadow-xl group border border-gray-100 order-2 md:order-1">
                <Image
                  src="/2909780049.webp"
                  alt="Elite mobile trainers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2 md:pl-12">
                <p className="text-xs font-bold text-[#1E00FA] uppercase tracking-[0.2em]">OUR COACHES</p>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                  Bespoke guidance.<br />Absolute accountability.
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg">
                  <p>
                    Our mobile coaches are certified, full-time professionals who prioritize safety and biomechanical progression. They meet you at your home, condo gym, or office to guide every movement, diet, and lifestyle habit.
                  </p>
                  <p>
                    We believe in structured outcomes, posture correction, joint safety, and absolute support 7 days a week.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/trainers"
                    className="inline-block bg-white border border-gray-200 text-black px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                  >
                    Meet Our Coaches
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECTION: OUR HISTORY (White Bg, Text Left, Image Right) */}
        <section className="bg-white py-20 border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xs font-bold text-[#1E00FA] uppercase tracking-[0.2em]">OUR HISTORY</p>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                  Singapore-born.<br />Refined lifestyle focus.
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg">
                  <p>
                    Quatre Fitness Group was founded in Singapore to deliver a premium, integrated fitness and wellness lifestyle. What began as a dedicated personal training initiative grew through an unwavering commitment to client results and posture safety.
                  </p>
                  <p>
                    As our community expanded, Quatre Fitness grew carefully to maintain the absolute standard of excellence. We built a holistic ecosystem, integrating premium lifestyle apparel under Quatre Merch, scientifically backed active recovery nutrition with FitLine, and bespoke wellness events.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[480px] w-full overflow-hidden rounded-[2.5rem] shadow-xl group border border-gray-100">
                <Image
                  src="/pt_history.png"
                  alt="Quatre Fitness History"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 8. SECTION: IN THE PRESS (Cream Bg, Image Left, Text Right) */}
        <section className="bg-[#F5F5F7] py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[480px] w-full overflow-hidden rounded-[2.5rem] shadow-xl group border border-gray-100 order-2 md:order-1">
                <Image
                  src="/goal_longevity.png"
                  alt="Corporate Wellness Press"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2 md:pl-12">
                <p className="text-xs font-bold text-[#1E00FA] uppercase tracking-[0.2em]">IN THE PRESS</p>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                  The trusted authority in health and fitness.
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg">
                  <p>
                    When leading corporate wellness organizers and lifestyle media outlets in Singapore seek expert insight on training, body composition, and health, they turn to Quatre Fitness.
                  </p>
                  <p>
                    Our elite certified coaches and leadership team are regularly featured and recognized for bringing high-performance standards directly to homes, corporate offices, and events—reflecting the depth of expertise behind our method and results.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-block bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E00FA] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                  >
                    Read Press Coverage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
