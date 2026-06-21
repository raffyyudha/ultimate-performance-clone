"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrainersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Default open first FAQ

  const faqs = [
    {
      q: "Do D'Quatre trainers have qualifications?",
      a: "Yes. Every single coach at D'Quatre holds recognized personal training and sports science qualifications. Furthermore, before they train any D'Quatre client, they must complete our intensive in-house training program and undergo ongoing education consisting of 200+ hours of structured training every year."
    },
    {
      q: "How do you match me with the right personal trainer?",
      a: "We match you based on your specific health history, biomechanics assessment, goals (e.g., body recomposition, post-injury rehab, active aging), and schedule. This ensures you work with a coach who is an expert in your exact area of need."
    },
    {
      q: "What's it like training with a D'Quatre trainer?",
      a: "Training with a D'Quatre coach is structured, intense, and highly focused. They manage every variable of your fitness journey: they log every weight you lift, track your nutrition diary daily, monitor sleep and supplement protocols, and adjust variables dynamically to keep you progressing."
    },
    {
      q: "Can I train around an injury or medical condition?",
      a: "Absolutely. Our trainers specialize in biomechanics assessment and rehabilitative exercise programming. We design joint-friendly resistance programs and consult with medical professionals if needed to ensure you build strength safely and effectively."
    },
    {
      q: "Is the process different at every location?",
      a: "No. The D'Quatre training systems, tracking methods, and accountability standards are standardized group-wide. Whether you train at home, in your condo gym, or at a private space, you will experience the exact same rigorous methodology and results-oriented coaching."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative h-[480px] w-full flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/contact_hero.png"
          alt="D'Quatre Trainers Hero"
          fill
          priority
          className="object-cover opacity-60 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Our trainers
          </h1>
        </div>
      </section>

      {/* SECTION 2: INTRO SECTION */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image of client training */}
          <div className="md:col-span-6 relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/pt_elite.png"
              alt="Elite Coaching Squat"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Copy & Call to Action */}
          <div className="md:col-span-6 space-y-6 md:pl-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Hand-selected. Elite-trained. Accountable for results.
            </h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                We don't hire ordinary personal trainers. We hand-select the best, develop them through 200+ hours of advanced learning every year, and hold them to the highest standards in the industry.
              </p>
              <p>
                Every trainer is measured on one thing alone: the quality of outcome they deliver for you, and for every client they work with.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 text-xs shadow-md inline-block"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RIGOROUS RECRUITMENT */}
      <section className="bg-[#F5F5F7] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="md:col-span-6 space-y-6 order-2 md:order-1">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              RIGOROUS RECRUITMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              We don't hire trainers. We handpick them.
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p className="font-semibold text-black">
                Thousands apply. Fewer than 1 in 100 make the cut. The top 1%.
              </p>
              <p>
                Every candidate goes through a six-stage recruitment process designed to test far more than technical skill. We look for trainers who are obsessed with results, thrive in a high-standards team environment, and take their clients' progress personally.
              </p>
              <p>
                When you work with a D'Quatre trainer, you're not choosing from a marketplace where quality is impossible to judge. You're being matched with one of the most rigorously selected coaching professionals in the industry.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/services"
                className="bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 shadow-sm inline-block"
              >
                SEE HOW OUR PERSONAL TRAINING WORKS
              </Link>
            </div>
          </div>

          {/* Right Column: Grayscale image of row training */}
          <div className="md:col-span-6 relative h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 order-1 md:order-2">
            <Image
              src="/pt_philosophy.png"
              alt="Rigorous Selection Assessment"
              fill
              className="object-cover filter grayscale"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: RELENTLESS EDUCATION */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-6 relative h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/2909780049.webp"
              alt="Trainer education session"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Copy */}
          <div className="md:col-span-6 space-y-6 md:pl-6">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              RELENTLESS EDUCATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Being selected is just the start
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p className="font-semibold text-black">
                Most personal trainers complete a short qualification, and that's where learning stops. At D'Quatre, development is continuous and non-negotiable.
              </p>
              <p>
                In their first year alone, every trainer completes over 200 hours of structured education. Case studies. Assessments. Mentorship. Team training. Practical application. All designed to embed the D'Quatre Method and the standards required to deliver consistently at the highest level.
              </p>
              <p>
                This means you work with a trainer operating at the leading edge of the industry. And you'll feel the difference.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/about"
                className="bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 shadow-sm inline-block"
              >
                WHY THE D'QUATRE METHOD IS SO EFFECTIVE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOCUS BY DESIGN */}
      <section className="bg-[#F5F5F7] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="md:col-span-6 space-y-6 order-2 md:order-1">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              FOCUS BY DESIGN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Most trainers have 10 jobs. Yours has one.
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p className="font-semibold text-black">
                We remove the distractions most personal trainers face. No selling. No marketing. No chasing leads.
              </p>
              <p>
                Your trainer's singular focus is mastering their craft and delivering the best results possible for you. Our trainers are measured, rewarded, and promoted based purely on the quality of outcomes they produce.
              </p>
              <p>
                What that means for you is simple. You get a coach whose full attention is exactly where it should be. On the details and decisions that drive your progress.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:col-span-6 relative h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 order-1 md:order-2">
            <Image
              src="/goal_longevity.png"
              alt="1-to-1 singular coach focus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: STANDARDS NEVER SLIP */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-6 relative h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/pt_standards.png"
              alt="Standards accountability check"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Copy */}
          <div className="md:col-span-6 space-y-6 md:pl-6">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              ACCOUNTABILITY AT EVERY LEVEL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Standards never slip
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Your trainer is responsible for your results. And behind them is a leadership structure that supports, challenges, and maintains the standards that make those results possible.
              </p>
              <p>
                Trainers at D'Quatre are measured on outcomes, not hours worked or sessions sold. Progress is constantly tracked, performance is monitored, and when momentum slows, we step in to adjust your plan judiciously.
              </p>
              <p className="font-semibold text-black">
                This level of accountability doesn't exist in any other personal training environment. And it shows in the outcomes: 97% of D'Quatre clients achieve their goals, compared to 70% who fall short with other methods.
              </p>
              <p>
                We don't let standards slip. We don't let progress drift. And we never leave your results to chance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: EXPERTISE EMPOWERED BY DATA */}
      <section className="bg-[#F5F5F7] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="md:col-span-6 space-y-6 order-2 md:order-1">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-widest block">
              DATA + TECH ADVANTAGE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Expertise empowered by data
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                We equip your trainer with advanced data-tracking tools to remove guesswork from the process. Your progress across training, nutrition, recovery, and daily habits is tracked clearly and consistently.
              </p>
              <p className="font-semibold text-black">
                But data alone doesn't drive results. What matters is how your trainer analyses it, interprets it, and applies it intelligently to your life.
              </p>
              <p>
                If sleep is disrupted, they notice. If appetite spikes, they explore why. If training plateaus, they adapt the approach with precision.
              </p>
              <p>
                The result is clarity and confidence. You know what's working, why it's working, and how each decision supports your progress.
              </p>
            </div>
          </div>

          {/* Right Column: Image with Custom Dashboard Overlay */}
          <div className="md:col-span-6 relative h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 order-1 md:order-2">
            <Image
              src="/goal_weight_management.png"
              alt="Data tracking platform"
              fill
              className="object-cover"
            />
            {/* Custom Overlay Dashboard Card */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl max-w-[240px] text-xs border border-gray-100/50 space-y-3 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="font-bold text-[#1a1a1a]">Client Metrics</span>
                <span className="bg-[#1E00FA] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">LIVE</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Weight:</span>
                  <span className="font-bold text-black">71.0 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Lean Mass (LBM):</span>
                  <span className="font-bold text-black">64.1 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Skinfold Sum:</span>
                  <span className="font-bold text-black">55.0 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Body Fat (BF%):</span>
                  <span className="font-bold text-[#1E00FA]">10.7%</span>
                </div>
              </div>
              {/* Minimal Line Graph representation */}
              <div className="h-10 w-full flex items-end justify-between gap-1 pt-1">
                <div className="bg-[#1E00FA] w-full h-[80%] rounded-sm"></div>
                <div className="bg-[#1E00FA] w-full h-[72%] rounded-sm"></div>
                <div className="bg-[#1E00FA] w-full h-[65%] rounded-sm"></div>
                <div className="bg-[#1E00FA] w-full h-[58%] rounded-sm"></div>
                <div className="bg-[#1E00FA] w-full h-[45%] rounded-sm"></div>
                <div className="bg-[#1E00FA] w-full h-[32%] rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
            Frequently asked questions about D'Quatre trainers
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F5F5F7] rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-sm md:text-base text-black">
                      {faq.q}
                    </span>
                    <span className="ml-4 shrink-0 text-gray-400 hover:text-black transition-colors">
                      {isOpen ? (
                        <div className="w-8 h-8 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-xs font-bold text-black bg-gray-100">
                          ✕
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-sm font-bold text-black bg-white">
                          ＋
                        </div>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-gray-500 leading-relaxed border-t border-gray-200/50 animate-in slide-in-from-top duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
