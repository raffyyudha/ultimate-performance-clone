"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Question 1 open by default

  const doubtsSlides = [
    {
      doubt: "I am too overweight to start",
      body: "Beginning with a large amount of weight to lose can feel daunting. What matters is having a clear process, expert guidance, and consistent support from Day 1.",
      story: "Ah Chuan trusted the Quatre Fitness Method, followed the process step by step, and lost 53kg (117lbs) and transformed his long-term health.",
      name: "AH CHUAN'S STORY",
      link: "/results",
      img: "/result3.jpeg"
    },
    {
      doubt: "I am too old to build muscle",
      body: "Many believe that strength training is only for the young. But science and our results prove that you can build muscle and improve bone density at any age.",
      story: "Seng started at 57, trained with a customized mobile program, lost 40kg, and built significant muscle definition while eliminating joint pain.",
      name: "SENG'S STORY",
      link: "/results",
      img: "/result2.jpeg"
    },
    {
      doubt: "I don't have time for this",
      body: "Busy corporate schedules make it hard to prioritize fitness. Our mobile coaches meet you at your home or condo gym, maximizing efficiency.",
      story: "Hendra integrated 3 hours of weekly training with our nutrition system and lost 21kg without sacrificing his executive career.",
      name: "HENDRA'S STORY",
      link: "/results",
      img: "/result1.jpeg"
    },
    {
      doubt: "I have past injuries",
      body: "Training with injuries can be scary. Our certified coaches design post-rehabilitative strength and posture programs to build stability safely.",
      story: "Jun overcame chronic back issues, improved his posture, and lost 14kg under close coaching supervision.",
      name: "JUN'S STORY",
      link: "/results",
      img: "/result5.jpeg"
    }
  ];

  const faqs = [
    {
      q: "Do I need to be fit before I start?",
      a: "Absolutely not. Most of our clients come to us with little or no gym experience and basic fitness. Our process is designed to meet you where you are – whether you're a total beginner or haven't trained in years. You'll build strength, fitness, and confidence from day one at a pace that is right for you."
    },
    {
      q: "How long before I see results?",
      a: "You will notice improvements in your energy, sleep, and performance within the first 1-2 weeks. Visible body composition changes and weight loss are typically measurable within 2-4 weeks, provided you follow your customized nutrition and training plan consistently."
    },
    {
      q: "What happens after I reach my goal?",
      a: "We focus on sustainability from day one. Once you reach your primary goal, we transition you to a maintenance program where we help you consolidate your habits, maintain your strength, and integrate fitness permanently into your lifestyle so you never regress."
    },
    {
      q: "How much does personal training cost?",
      a: "Our pricing varies based on the number of sessions, whether you train at home, in a condo gym, or at a private space, and the duration of your package. We offer flexible plans tailored to your specific needs. Please contact us for a detailed quote based on your goals."
    },
    {
      q: "Why is this different from other personal training?",
      a: "Unlike standard personal trainers who just count reps, Quatre Fitness provides a comprehensive lifestyle ecosystem. We manage your training, nutrition plans, daily accountability check-ins, supplement schedules (with premium FitLine supplements), and track data points continuously to guarantee your success."
    }
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % doubtsSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + doubtsSlides.length) % doubtsSlides.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative h-[480px] w-full flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/contact_hero.png"
          alt="Personal Training Hero"
          fill
          priority
          className="object-cover opacity-60 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Personal training at Quatre Fitness
          </h1>
        </div>
      </section>

      {/* SECTION 2: INTRO GRID */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              The world's most effective personal training method
            </h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
              <p>
                We don't do fads, fashion, or quick fixes. We deliver life-changing results. Quatre Fitness is the premium personal training group built for clients who want structure, evidence-based training, and total accountability.
              </p>
              <p>
                Our home and mobile personal training programs in Singapore are designed to make your goals inevitable. Whether you want to lose weight, build strength, rehab an injury, or improve your longevity, we manage every variable of your training, nutrition, and lifestyle to guarantee progress.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <Link
              href="/contact"
              className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 text-xs shadow-md inline-block text-center whitespace-nowrap"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM OVERVIEW */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need – in one proven system
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We leave nothing to chance. Your results are guaranteed through our comprehensive approach to training, nutrition, tracking, and daily accountability.
          </p>
        </div>

        {/* SECTION 4: THE 6 SYSTEM CARDS */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Clarity, not guesswork</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                No generic templates. Your coach builds a customized roadmap based on your initial strength, body composition, and movement analysis.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Precision training, tailored to you</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Every workout is supervised, tracked, and modified dynamically to ensure safe progressive overload and optimal mechanical tension.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Nutrition made simple</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                A bespoke nutrition protocol designed for your lifestyle. No starving, just clear, sustainable dietary changes paired with premium German FitLine supplements.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Accountability that drives your progress</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Daily check-ins, food diary monitoring, and constant communication with your coach keep you focused and motivated when it matters most.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Certainty through data</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We track every lift, calorie, and bio-marker to monitor your rate of progress and make precise adjustments based on real metrics.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Support when it matters</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                24/7 access to your coach. We provide the advice, guidance, and adjustments you need to stay on track, even when traveling or dining out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS STEPS (1-5) */}
      <section className="bg-white py-20 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How personal training works at Quatre Fitness
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Our step-by-step process is designed to support you from day one to the day you achieve your goal.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-16 space-y-12">
          {/* Step 1 */}
          <div className="flex gap-6 items-start relative pb-6 border-l border-dashed border-gray-200 pl-6 ml-4">
            <div className="absolute -left-[17px] top-0 bg-white border-2 border-[#1E00FA] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#1E00FA]">
              1
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Consultation & Assessment</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We analyze your health history, joint mobility, body composition, and daily schedule to build your baseline profile.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 items-start relative pb-6 border-l border-dashed border-gray-200 pl-6 ml-4">
            <div className="absolute -left-[17px] top-0 bg-white border-2 border-[#1E00FA] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#1E00FA]">
              2
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Dedicated Coach</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                You are matched with an elite coach who takes 100% ownership of your results, managing your programming, nutrition, and habits.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 items-start relative pb-6 border-l border-dashed border-gray-200 pl-6 ml-4">
            <div className="absolute -left-[17px] top-0 bg-white border-2 border-[#1E00FA] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#1E00FA]">
              3
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Custom Blueprint</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We design a detailed workout and dietary plan tailored to your specific biomechanics, food preferences, and availability.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6 items-start relative pb-6 border-l border-dashed border-gray-200 pl-6 ml-4">
            <div className="absolute -left-[17px] top-0 bg-white border-2 border-[#1E00FA] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#1E00FA]">
              4
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Train with Purpose</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Focus on perfect execution and intensity. Your coach guides you through every session, optimizing mechanical load and safety.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-6 items-start relative pl-6 ml-4">
            <div className="absolute -left-[17px] top-0 bg-white border-2 border-[#1E00FA] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#1E00FA]">
              5
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Data-Driven Progression</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Weekly weight, measurement, and strength tracking allow us to adjust variables continuously, ensuring you never hit a plateau.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6: ENQUIRE BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 text-xs shadow-md inline-block"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </section>

      {/* SECTION 7: TRANSFORM STORIES GRID */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Thousands of clients. Predictable progress. Proven results.
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
                We help people achieve life-changing physical results with no guesswork. Explore some of our local client success stories.
              </p>
            </div>
            <div>
              <Link
                href="/results"
                className="border-2 border-black text-black px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-colors duration-300 inline-block text-center whitespace-nowrap"
              >
                SEE ALL GLOBAL RESULTS
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Client 1: Hendra */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-[280px]">
                <Image
                  src="/result1.jpeg"
                  alt="Hendra Transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-bold text-base text-black">Hendra</h4>
                <p className="text-[#1E00FA] text-xs font-bold uppercase tracking-wider">Lost 21kg & 18% body fat</p>
                <p className="text-gray-400 text-[11px] font-semibold">TIMELINE: 12 WEEKS</p>
              </div>
            </div>

            {/* Client 2: Seng */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-[280px]">
                <Image
                  src="/result2.jpeg"
                  alt="Seng Transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-bold text-base text-black">Seng</h4>
                <p className="text-[#1E00FA] text-xs font-bold uppercase tracking-wider">40kg loss & muscle gain</p>
                <p className="text-gray-400 text-[11px] font-semibold">TIMELINE: 24 WEEKS</p>
              </div>
            </div>

            {/* Client 3: Ah Chuan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-[280px]">
                <Image
                  src="/result3.jpeg"
                  alt="Ah Chuan Transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-bold text-base text-black">Ah Chuan</h4>
                <p className="text-[#1E00FA] text-xs font-bold uppercase tracking-wider">53kg weight loss & toning</p>
                <p className="text-gray-400 text-[11px] font-semibold">TIMELINE: 36 WEEKS</p>
              </div>
            </div>

            {/* Client 4: Jun */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-[280px]">
                <Image
                  src="/result5.jpeg"
                  alt="Jun Transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-bold text-base text-black">Jun</h4>
                <p className="text-[#1E00FA] text-xs font-bold uppercase tracking-wider">Lost 14kg & improved posture</p>
                <p className="text-gray-400 text-[11px] font-semibold">TIMELINE: 12 WEEKS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SCIENCE & DATA */}
      <section className="bg-white py-20 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Backed by science. Driven by data.
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We collect metrics from thousands of training sessions to design the most effective programs. Our statistics speak for themselves.
          </p>
        </div>

        {/* SECTION 9: THE 6 METRIC CARDS */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Metric 1 */}
          <div className="bg-[#F5F5F7] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-[#1E00FA]">92.6%</p>
                <h4 className="font-bold text-sm text-black">Increase in strength</h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Measured through composite tracking of major compound movements within the first 12 weeks.
              </p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-[#F5F5F7] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-[#1E00FA]">8.6kg</p>
                <h4 className="font-bold text-sm text-black">Average weight loss</h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Achieved by our fat loss clients following our custom nutrition plans for a 12-week block.
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-[#F5F5F7] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-[#1E00FA]">-20.7mmHg</p>
                <h4 className="font-bold text-sm text-black">Blood pressure reduction</h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Measured in hypertensive clients after adopting consistent resistance training and mineral control.
              </p>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="bg-[#F5F5F7] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-[#1E00FA]">+41%</p>
                <h4 className="font-bold text-sm text-black">Sex drive increase</h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Self-reported marker improvement resulting from natural hormone optimization and fat reduction.
              </p>
            </div>
          </div>

          {/* Metric 5 */}
          <div className="bg-[#F5F5F7] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-[#1E00FA]">+29%</p>
                <h4 className="font-bold text-sm text-black">Mood improvement</h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Significant decrease in stress hormones and increase in sleep quality metrics.
              </p>
            </div>
          </div>

          {/* Metric 6 */}
          <div className="bg-[#F5F5F7] p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#1E00FA] w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E00FA]/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-[#1E00FA]">91%</p>
                <h4 className="font-bold text-sm text-black">Maintain results long-term</h4>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Clients who continue tracking and follow maintenance protocols retain their body recomposition permanently.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
          <p className="text-gray-400 text-[10px] italic">
            *Based on strength (1RM) and health marker studies tracking Quatre Fitness clients over 12-week cycles. Individual results may vary.
          </p>
        </div>
      </section>

      {/* SECTION 10: PROGRESS TRACKING FEATURE */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-[#1E00FA] text-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full">
              QUATRE FITNESS PROGRESS TRACKING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Real-time progress, support, and guidance
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Our structured tracking method keeps you directly connected to your coach, who logs every workout, tracks nutrition and supplements (including PM International FitLine protocols), and visualizes your progress metrics.
              </p>
              <p>
                Having your training log, progress pictures, strength curves, and dietary tracking compiled and managed systematically eliminates guesswork and maximizes efficiency.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/goal_weight_management.png"
              alt="Quatre Fitness Progress Tracking"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 11: DOUBTS CAROUSEL */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built to work for real people
          </h2>
          <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              It's normal to question whether personal training will work for you. Almost every client we work with had doubts before they started – about age, fitness level, past experiences, injuries, or their ability to stay consistent.
            </p>
            <p>
              What they discovered is that following a structured process, guided by an expert at Quatre Fitness, removed uncertainty and helped them confidently achieve results. Below are some of the most common doubts clients arrive with – and how the process worked for them.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto px-6 mt-16">
          <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative">
            <div className="grid md:grid-cols-12 gap-8 items-center min-h-[350px]">
              {/* Left Side: Image */}
              <div className="md:col-span-6 relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={doubtsSlides[activeSlide].img}
                  alt={doubtsSlides[activeSlide].doubt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Side: Copy */}
              <div className="md:col-span-6 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
                    '{doubtsSlides[activeSlide].doubt}'
                  </h3>
                  <div className="text-gray-600 text-xs md:text-sm leading-relaxed space-y-3">
                    <p>{doubtsSlides[activeSlide].body}</p>
                    <p className="font-semibold text-black">{doubtsSlides[activeSlide].story}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={doubtsSlides[activeSlide].link}
                    className="bg-black text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#1E00FA] transition-colors duration-300 shadow-sm inline-block"
                  >
                    READ {doubtsSlides[activeSlide].name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation and Indicators Row */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200/50">
              {/* Dots indicator */}
              <div className="flex gap-2">
                {doubtsSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === index ? "w-8 bg-black" : "w-2.5 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow navigation buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrevSlide}
                  className="w-10 h-10 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-gray-600 hover:text-black transition-colors duration-200 bg-white"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-10 h-10 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-gray-600 hover:text-black transition-colors duration-200 bg-white"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: ACCORDION FAQ */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-sm md:text-base text-black">
                      {faq.q}
                    </span>
                    <span className="ml-4 shrink-0 text-gray-400 hover:text-black transition-colors">
                      {isOpen ? (
                        <div className="w-8 h-8 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-xs font-bold text-black bg-gray-50">
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
                    <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-gray-500 leading-relaxed border-t border-gray-50 animate-in slide-in-from-top duration-300">
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
