"use client";

import { useState } from "react";
import Image from "next/image";

interface Transformation {
  name: string;
  age: number;
  goalType: "fatloss" | "muscle" | "over40";
  result: string;
  timeline: string;
  img: string;
  quote: string;
  story: string;
}

export default function ResultsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "ALL RESULTS" },
    { id: "fatloss", label: "FAT LOSS" },
    { id: "muscle", label: "MUSCLE GAIN" },
    { id: "over40", label: "OVER 40s" },
  ];

  const transformations: Transformation[] = [
    {
      name: "Susan",
      age: 51,
      goalType: "fatloss",
      result: "Lost 21kg & 18% body fat",
      timeline: "12 Weeks",
      img: "/result1.jpeg",
      quote: "D'Quatre changed my entire relationship with nutrition.",
      story: "Before joining D'Quatre, I felt fatigued and had tried countless crash diets that never lasted. My dedicated coach rebuilt my nutrition from scratch, tailoring it to my active lifestyle at age 51. The private training was progressive, structured, and fit into my busy corporate schedule.",
    },
    {
      name: "Roy",
      age: 57,
      goalType: "over40",
      result: "40kg weight loss & muscle gain",
      timeline: "24 Weeks",
      img: "/result2.jpeg",
      quote: "I thought age was a barrier. D'Quatre proved me completely wrong.",
      story: "I had knee pain and high cholesterol when I first started. The coaches developed a joint-friendly, strength-focused mobile program that completely rehabilitated my movement. I am now in the best shape of my life at age 57.",
    },
    {
      name: "Zrinka",
      age: 34,
      goalType: "fatloss",
      result: "53kg weight loss & body toning",
      timeline: "36 Weeks",
      img: "/result3.jpeg",
      quote: "A complete mental and physical transformation.",
      story: "Losing over 50kg seemed like an impossible task. The secret was the absolute accountability. My coach checked in on my food and supplement diary every single day, keeping me focused. We did not use any extreme methods, just steady, scientific progression.",
    },
    {
      name: "David",
      age: 29,
      goalType: "muscle",
      result: "Gained 12kg of lean muscle mass",
      timeline: "16 Weeks",
      img: "/result4.jpeg",
      quote: "The details in their strength tracking is unparalleled.",
      story: "I wanted to break through a strength plateau. D'Quatre's focus on progressive overload, mechanical execution, and high-quality FitLine supplementation helped me gain clean lean muscle without gaining excess body fat.",
    },
    {
      name: "Sarah",
      age: 46,
      goalType: "over40",
      result: "Lost 14kg & improved bone density",
      timeline: "12 Weeks",
      img: "/result5.jpeg",
      quote: "I feel 15 years younger, with boundless daily energy.",
      story: "As a busy mother, I put my health on the back burner. The mobile training program taught me how to incorporate clean macros and resistance training into my life. My posture has improved dramatically and my daily energy is amazing.",
    },
    {
      name: "Michael",
      age: 42,
      goalType: "muscle",
      result: "Replaced 8kg fat with solid muscle",
      timeline: "12 Weeks",
      img: "/result6.jpeg",
      quote: "Absolute efficiency. Just 3 hours per week.",
      story: "I did not believe a transformation could be done in under 3 hours a week of home/condo training. By focusing on high-effort training and meticulous nutritional control, we achieved a total body recomposition in just 90 days.",
    },
  ];

  const filteredItems = transformations.filter(
    (t) => filter === "all" || t.goalType === filter
  );

  const toggleStory = (name: string) => {
    if (expandedStory === name) {
      setExpandedStory(null);
    } else {
      setExpandedStory(name);
    }
  };

  return (
    <main className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <section className="grid md:grid-cols-12 items-stretch gap-0 bg-white border-b border-gray-200 overflow-hidden">
        <div className="col-span-12 md:col-span-5 px-6 py-16 md:px-12 lg:px-16 flex flex-col justify-center bg-cream">
          <p className="text-xs text-maroon font-bold uppercase tracking-widest mb-3">PROOF OF RESULTS</p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-6 tracking-tight">
            Exceptional results.<br />Delivered as standard.
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Use the filters below to explore results by sex, age, and timeframe. Or{" "}
            <a href="/contact" className="text-maroon hover:underline font-bold">
              hear what our clients say
            </a>{" "}
            about the D'Quatre experience in their own words.
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 h-[350px] md:h-[500px] lg:h-[550px] relative overflow-hidden">
          <Image
            src="/clientresulthero.jpeg"
            alt="Client Results Hero"
            fill
            priority
            className="object-cover filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[57px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setExpandedStory(null);
              }}
              className={`px-5 py-2 text-xs font-bold tracking-wider transition-all uppercase ${
                filter === cat.id
                  ? "bg-maroon text-white"
                  : "bg-cream border border-gray-200 text-gray-700 hover:border-black hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((client) => {
            const isExpanded = expandedStory === client.name;
            return (
              <div key={client.name} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  {/* Image wrapper */}
                  <div className="relative h-[380px] bg-black">
                    <Image
                      src={client.img}
                      alt={client.name}
                      fill
                      className="object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-sans text-2xl font-bold text-black">{client.name}</h3>
                        <p className="text-xs text-gray-400 font-semibold mt-1">Age: {client.age} | Duration: {client.timeline}</p>
                      </div>
                      <span className="bg-maroon/10 text-maroon text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {client.result}
                      </span>
                    </div>

                    <p className="italic text-gray-700 text-sm border-l-2 border-maroon pl-3 py-1 font-medium">
                      "{client.quote}"
                    </p>

                    {/* Expandable Story */}
                    {isExpanded && (
                      <div className="pt-2 text-xs text-gray-600 leading-relaxed space-y-2 border-t border-gray-100 mt-2 animate-in slide-in-from-top duration-300">
                        <p className="font-bold text-black uppercase">THE TRANSFORMATION STORY:</p>
                        <p>{client.story}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => toggleStory(client.name)}
                    className="w-full btn-outline text-xs py-2.5 uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-white"
                  >
                    {isExpanded ? "Hide Story" : "Read Success Story"}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
