"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type CalcType = "bmi" | "bmr" | "macro" | "bodyfat" | "ibw" | "whr" | "onerm" | "thr" | "water";

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<CalcType>("bmi");

  // Input states
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(178);
  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<number>(1.55); // Moderately active default
  const [goal, setGoal] = useState<"loss" | "maintain" | "gain">("loss");
  const [neck, setNeck] = useState<number>(38);
  const [waist, setWaist] = useState<number>(85);
  const [hip, setHip] = useState<number>(95);
  const [liftWeight, setLiftWeight] = useState<number>(100);
  const [reps, setReps] = useState<number>(5);
  const [rhr, setRhr] = useState<number>(65); // resting heart rate
  const [exercise, setExercise] = useState<number>(45); // exercise minutes

  // Calculated variables
  const heightInMeters = height / 100;
  const bmi = heightInMeters > 0 ? parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1)) : 0;

  let bmiCategory = "";
  let bmiColor = "";
  let bmiPercent = 0; // for gauge styling (from 15 to 40)
  if (bmi > 0) {
    bmiPercent = Math.min(100, Math.max(0, ((bmi - 15) / 25) * 100));
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
      bmiColor = "text-sky-400";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = "Normal Weight";
      bmiColor = "text-emerald-400";
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory = "Overweight";
      bmiColor = "text-yellow-400";
    } else {
      bmiCategory = "Obese";
      bmiColor = "text-red-500";
    }
  }

  const bmr = gender === "male"
    ? Math.round(10 * weight + 6.25 * height - 5 * age + 5)
    : Math.round(10 * weight + 6.25 * height - 5 * age - 161);

  const tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  if (goal === "loss") targetCalories = Math.round(tdee - 500);
  else if (goal === "gain") targetCalories = Math.round(tdee + 300);

  let pRatio = 0.35, cRatio = 0.35, fRatio = 0.30;
  if (goal === "loss") { pRatio = 0.40; cRatio = 0.30; fRatio = 0.30; }
  else if (goal === "gain") { pRatio = 0.30; cRatio = 0.50; fRatio = 0.20; }

  const macros = {
    protein: Math.max(0, Math.round((targetCalories * pRatio) / 4)),
    carbs: Math.max(0, Math.round((targetCalories * cRatio) / 4)),
    fat: Math.max(0, Math.round((targetCalories * fRatio) / 9)),
  };

  let bodyFat = 0;
  if (gender === "male") {
    const diff = waist - neck;
    if (diff > 0 && height > 0) {
      bodyFat = parseFloat((86.01 * Math.log10(diff) - 70.041 * Math.log10(height) + 36.76).toFixed(1));
    }
  } else {
    const diff = waist + hip - neck;
    if (diff > 0 && height > 0) {
      bodyFat = parseFloat((163.205 * Math.log10(diff) - 97.684 * Math.log10(height) - 78.387).toFixed(1));
    }
  }
  bodyFat = Math.max(0, bodyFat);
  const fatMass = parseFloat(((weight * bodyFat) / 100).toFixed(1));
  const leanMass = parseFloat((weight - fatMass).toFixed(1));

  const heightInInches = height / 2.54;
  const inchesOver5Feet = Math.max(0, heightInInches - 60);
  const idealWeight = gender === "male"
    ? parseFloat((50.0 + 2.3 * inchesOver5Feet).toFixed(1))
    : parseFloat((45.5 + 2.3 * inchesOver5Feet).toFixed(1));

  const whr = hip > 0 ? parseFloat((waist / hip).toFixed(2)) : 0;
  let whrRisk = "";
  let whrColor = "";
  if (gender === "male") {
    if (whr < 0.90) { whrRisk = "Low Risk"; whrColor = "text-emerald-400"; }
    else if (whr >= 0.90 && whr < 1.0) { whrRisk = "Moderate Risk"; whrColor = "text-yellow-400"; }
    else { whrRisk = "High Risk"; whrColor = "text-red-500"; }
  } else {
    if (whr < 0.80) { whrRisk = "Low Risk"; whrColor = "text-emerald-400"; }
    else if (whr >= 0.80 && whr < 0.90) { whrRisk = "Moderate Risk"; whrColor = "text-yellow-400"; }
    else { whrRisk = "High Risk"; whrColor = "text-red-500"; }
  }

  const oneRepMax = reps > 0 ? Math.round(liftWeight * (1 + reps / 30)) : 0;
  const percentages = [
    { reps: 1, pct: 1.0 },
    { reps: 2, pct: 0.95 },
    { reps: 4, pct: 0.90 },
    { reps: 6, pct: 0.85 },
    { reps: 8, pct: 0.80 },
    { reps: 10, pct: 0.75 },
    { reps: 12, pct: 0.70 },
  ];
  const repMaxes = percentages.map((p) => ({
    reps: p.reps,
    weight: Math.round(oneRepMax * p.pct)
  }));

  // Target Heart Rate (Karvonen)
  const maxHR = 220 - age;
  const hrr = maxHR - rhr;
  const thrZones = [
    { zone: "Zone 1: Warm Up", pct: "50-60%", range: `${Math.round(hrr * 0.5 + rhr)} - ${Math.round(hrr * 0.6 + rhr)}`, color: "border-sky-500/20 text-sky-400 bg-sky-500/5", desc: "Recovery training, cardiovascular prep" },
    { zone: "Zone 2: Fat Burn", pct: "60-70%", range: `${Math.round(hrr * 0.6 + rhr)} - ${Math.round(hrr * 0.7 + rhr)}`, color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5", desc: "Optimal lipid metabolism, endurance" },
    { zone: "Zone 3: Cardio/Aerobic", pct: "70-80%", range: `${Math.round(hrr * 0.7 + rhr)} - ${Math.round(hrr * 0.8 + rhr)}`, color: "border-yellow-500/20 text-yellow-400 bg-yellow-500/5", desc: "Aerobic fitness, heart stroke volume" },
    { zone: "Zone 4: Anaerobic", pct: "80-90%", range: `${Math.round(hrr * 0.8 + rhr)} - ${Math.round(hrr * 0.9 + rhr)}`, color: "border-orange-500/20 text-orange-400 bg-orange-500/5", desc: "Lactate threshold builder, speed strength" },
    { zone: "Zone 5: Max Effort", pct: "90-100%", range: `${Math.round(hrr * 0.9 + rhr)} - ${maxHR}`, color: "border-red-500/20 text-red-400 bg-red-500/5", desc: "High intensity capacity, neural performance" },
  ];

  // Daily Water Intake (hydration)
  const baselineWater = weight * 0.033;
  const exerciseWater = (exercise / 30) * 0.35;
  const totalWater = parseFloat((baselineWater + exerciseWater).toFixed(2));
  const waterCups = parseFloat((totalWater / 0.25).toFixed(1));

  // Determine what parameters to display
  const showWeight = ["bmi", "bmr", "macro", "bodyfat", "water"].includes(activeTab);
  const showHeight = ["bmi", "bmr", "macro", "bodyfat", "ibw"].includes(activeTab);
  const showAge = ["bmr", "macro", "thr"].includes(activeTab);
  const showGender = ["bmr", "macro", "bodyfat", "ibw", "whr"].includes(activeTab);
  const showActivity = ["macro"].includes(activeTab);
  const showGoal = ["macro"].includes(activeTab);
  const showNeck = ["bodyfat"].includes(activeTab);
  const showWaist = ["bodyfat", "whr"].includes(activeTab);
  const showHip = ["bodyfat", "whr"].includes(activeTab) && (activeTab !== "bodyfat" || gender === "female");
  const showLiftWeight = ["onerm"].includes(activeTab);
  const showReps = ["onerm"].includes(activeTab);
  const showRhr = ["thr"].includes(activeTab);
  const showExercise = ["water"].includes(activeTab);

  const calcTabs = [
    {
      id: "bmi",
      label: "BMI Scale",
      desc: "Body Mass Index",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      id: "bmr",
      label: "BMR Rate",
      desc: "Basal Metabolic",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    {
      id: "macro",
      label: "TDEE & Macros",
      desc: "Macros & Target",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: "bodyfat",
      label: "Body Fat %",
      desc: "Navy Method BF%",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M8 4v4M16 4v4M8 16v4M16 16v4" />
        </svg>
      )
    },
    {
      id: "ibw",
      label: "Ideal Weight",
      desc: "Devine Formula",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "whr",
      label: "WHR Risk",
      desc: "Waist-to-Hip",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "onerm",
      label: "1RM Strength",
      desc: "Strength Max",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M6 5v10m12-10v10m-8-7h4" />
        </svg>
      )
    },
    {
      id: "thr",
      label: "Target HR",
      desc: "THR Zones",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h1l2-3 2 6 1-3h1" />
        </svg>
      )
    },
    {
      id: "water",
      label: "Hydration",
      desc: "Water Target",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13c0 5-3.5 7-8 7s-8-2-8-7c0-3.5 3-7.5 8-11.5 5 4 8 8 8 11.5z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      {/* HERO BANNER OVERLAY */}
      <section className="relative h-[320px] md:h-[400px] w-full flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <Image
          src="/4122906706.avif"
          alt="Fitness & Nutrition Calculators"
          fill
          priority
          className="object-cover opacity-45 filter grayscale"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-3">
          <p className="text-xs text-[#1B365D] font-bold uppercase tracking-[0.25em]">DATA-DRIVEN FITNESS ECOSYSTEM</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Fitness & Nutrition Calculators
          </h1>
          <p className="text-gray-300 mt-2 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Establish your baseline health metrics, training cardiovascular zones, and daily macronutrient targets using peer-reviewed physiological formulas.
          </p>
        </div>
      </section>

      {/* CALCULATOR WORKSPACE */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: NAVIGATION & CONTROLS */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Select Calculator</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {calcTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as CalcType)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                        isActive
                          ? "bg-black text-white border-black shadow-md scale-[1.02]"
                          : "bg-[#F5F5F7] border-gray-200 text-gray-600 hover:border-black hover:text-black hover:scale-[1.01]"
                      }`}
                    >
                      <div className={`mb-1.5 transition-colors ${isActive ? "text-[#1B365D]" : "text-gray-400"}`}>
                        {tab.icon}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONDITIONAL DYNAMIC INPUTS PANEL */}
            <div className="border-t border-gray-100 pt-6 space-y-5">
              <h3 className="text-xs font-bold text-black uppercase tracking-widest text-[#1B365D] pb-1 border-b border-gray-100">
                Input Metrics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Weight Input */}
                {showWeight && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Math.max(10, parseInt(e.target.value) || 0))}
                      className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] transition-all font-semibold"
                    />
                  </div>
                )}

                {/* Height Input */}
                {showHeight && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Height (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Math.max(50, parseInt(e.target.value) || 0))}
                      className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] transition-all font-semibold"
                    />
                  </div>
                )}

                {/* Age Input */}
                {showAge && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Age (years)</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] transition-all font-semibold"
                    />
                  </div>
                )}

                {/* Resting Heart Rate Input */}
                {showRhr && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Resting HR (bpm)</label>
                    <input
                      type="number"
                      value={rhr}
                      onChange={(e) => setRhr(Math.max(30, parseInt(e.target.value) || 0))}
                      className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] transition-all font-semibold"
                    />
                  </div>
                )}

                {/* Daily Exercise Minutes Input */}
                {showExercise && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Exercise (min/day)</label>
                    <input
                      type="number"
                      value={exercise}
                      onChange={(e) => setExercise(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] transition-all font-semibold"
                    />
                  </div>
                )}

                {/* Lift Weight Input */}
                {showLiftWeight && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Lift Weight (kg)</label>
                    <input
                      type="number"
                      value={liftWeight}
                      onChange={(e) => setLiftWeight(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] transition-all font-semibold"
                    />
                  </div>
                )}

                {/* Reps Input */}
                {showReps && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Repetitions</label>
                    <input
                      type="number"
                      value={reps}
                      onChange={(e) => setReps(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] transition-all font-semibold"
                    />
                  </div>
                )}

                {/* Gender Toggle */}
                {showGender && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">Gender</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setGender("male")}
                        className={`flex-1 p-3 text-xs font-bold border rounded-xl uppercase tracking-wider transition-all ${
                          gender === "male"
                            ? "border-[#1B365D] bg-[#1B365D]/5 text-[#1B365D]"
                            : "border-gray-200 text-gray-500 hover:border-black"
                        }`}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender("female")}
                        className={`flex-1 p-3 text-xs font-bold border rounded-xl uppercase tracking-wider transition-all ${
                          gender === "female"
                            ? "border-[#1B365D] bg-[#1B365D]/5 text-[#1B365D]"
                            : "border-gray-200 text-gray-500 hover:border-black"
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Waist, Neck, Hip Circumferences (Body Fat % / WHR) */}
              {(showNeck || showWaist || showHip) && (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-[#1B365D] uppercase tracking-widest">Circumferences</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {showNeck && (
                      <div>
                        <label className="block text-[10px] font-bold text-black uppercase mb-1">Neck (cm)</label>
                        <input
                          type="number"
                          value={neck}
                          onChange={(e) => setNeck(Math.max(10, parseInt(e.target.value) || 0))}
                          className="w-full p-2.5 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#1B365D] font-semibold text-center"
                        />
                      </div>
                    )}
                    {showWaist && (
                      <div>
                        <label className="block text-[10px] font-bold text-black uppercase mb-1">Waist (cm)</label>
                        <input
                          type="number"
                          value={waist}
                          onChange={(e) => setWaist(Math.max(10, parseInt(e.target.value) || 0))}
                          className="w-full p-2.5 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#1B365D] font-semibold text-center"
                        />
                      </div>
                    )}
                    {showHip && (
                      <div>
                        <label className="block text-[10px] font-bold text-black uppercase mb-1">Hip (cm)</label>
                        <input
                          type="number"
                          value={hip}
                          onChange={(e) => setHip(Math.max(10, parseInt(e.target.value) || 0))}
                          className="w-full p-2.5 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#1B365D] font-semibold text-center"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Activity Level Selection (Macros/TDEE) */}
              {showActivity && (
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <label className="block text-xs font-bold text-black uppercase tracking-wider">Activity Level</label>
                  <select
                    value={activity}
                    onChange={(e) => setActivity(parseFloat(e.target.value))}
                    className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none bg-white cursor-pointer transition-colors focus:border-[#1B365D] font-semibold"
                  >
                    <option value={1.2}>Sedentary (Little to no daily movement)</option>
                    <option value={1.375}>Lightly Active (Training 1-3 times/week)</option>
                    <option value={1.55}>Moderately Active (Training 3-5 times/week)</option>
                    <option value={1.725}>Very Active (Heavy training 6-7 times/week)</option>
                    <option value={1.9}>Athlete / Extreme Labor (Twice daily training)</option>
                  </select>
                </div>
              )}

              {/* Primary Goal Selection (Macros/TDEE) */}
              {showGoal && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-black uppercase tracking-wider">Primary Goal</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "loss", label: "Fat Loss" },
                      { id: "maintain", label: "Maintenance" },
                      { id: "gain", label: "Muscle Gain" },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGoal(g.id as "loss" | "maintain" | "gain")}
                        className={`p-3 text-xs font-bold border rounded-xl uppercase tracking-wider transition-all text-center ${
                          goal === g.id
                            ? "border-[#1B365D] bg-[#1B365D]/5 text-[#1B365D]"
                            : "border-gray-200 text-gray-500 hover:border-black"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          <p className="text-[10px] text-gray-400 font-bold leading-relaxed pt-6 border-t border-gray-100 uppercase tracking-widest italic">
            *Calculated values are based on established clinical and physiological equations.
          </p>
        </div>

        {/* RIGHT COLUMN: PREMIUM RESULTS DASHBOARD CONSOLE */}
        <div className="lg:col-span-7 bg-[#1A1A1A] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between border border-white/5 bg-gradient-to-br from-[#161616] via-black to-[#1E1114]">
          
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-4 flex justify-between items-center">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B365D]">
                Live Results Dashboard
              </h3>
              <span className="text-[9px] bg-[#1B365D] text-white font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                D'Quatre Analytics
              </span>
            </div>

            {/* 1. BMI OUTPUT */}
            {activeTab === "bmi" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Body Mass Index (BMI)</p>
                  <p className="text-6xl md:text-7xl font-extrabold mt-2 tracking-tight">
                    {bmi}
                  </p>
                </div>
                
                <div className="space-y-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span>Category: <strong className={`font-extrabold ${bmiColor}`}>{bmiCategory}</strong></span>
                    <span className="text-gray-400">Normal Range: 18.5 - 24.9</span>
                  </div>

                  {/* Multi-segmented progress bar */}
                  <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                    <div className="h-full bg-sky-400/80" style={{ width: "20%" }}></div>
                    <div className="h-full bg-emerald-500/80" style={{ width: "30%" }}></div>
                    <div className="h-full bg-yellow-500/80" style={{ width: "25%" }}></div>
                    <div className="h-full bg-red-600/80" style={{ width: "25%" }}></div>
                  </div>
                  
                  {/* Gauge marker */}
                  <div className="relative w-full h-2">
                    <span
                      className="absolute -top-3.5 w-3.5 h-3.5 bg-white rounded-full border border-black shadow-md transition-all duration-300"
                      style={{ left: `${bmiPercent}%`, transform: 'translateX(-50%)' }}
                    ></span>
                  </div>

                  <div className="grid grid-cols-4 text-[9px] font-extrabold text-center text-gray-400 uppercase tracking-wider pt-2">
                    <span>&lt; 18.5</span>
                    <span>18.5 - 24.9</span>
                    <span>25.0 - 29.9</span>
                    <span>&ge; 30.0</span>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed pt-2">
                  *Note: BMI is a general population screening tool. It does not measure body fat directly and may overestimate adiposity in muscular athletic profiles.
                </p>
              </div>
            )}

            {/* 2. BMR OUTPUT */}
            {activeTab === "bmr" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Basal Metabolic Rate (BMR)</p>
                  <p className="text-5xl md:text-6xl font-extrabold mt-2 tracking-tight text-white">
                    {bmr} <span className="text-lg font-bold text-gray-400 uppercase tracking-widest">kcal/day</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Hourly Energy Burn</p>
                    <p className="text-2xl font-bold mt-1 text-[#1B365D]">{(bmr / 24).toFixed(1)} <span className="text-xs text-white">kcal</span></p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Formula Applied</p>
                    <p className="text-xs font-extrabold mt-2 text-white uppercase tracking-wider">Mifflin-St Jeor</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">Understanding BMR</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Your BMR is the baseline metabolic energy required to maintain core vital biological processes (cardiac function, cellular respiration, thermoregulation, neural activity) at complete rest.
                  </p>
                </div>
              </div>
            )}

            {/* 3. CALORIES & MACROS (TDEE) OUTPUT */}
            {activeTab === "macro" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Maintenance (TDEE)</p>
                    <p className="text-2xl font-bold mt-1 text-gray-300">{tdee} kcal</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider text-[#1B365D]">Daily Target Calories</p>
                    <p className="text-3xl font-extrabold mt-1 text-[#1B365D]">{targetCalories} kcal</p>
                  </div>
                </div>

                <div className="space-y-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B365D]">Target Daily Macronutrients</h4>
                  
                  {/* Protein */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Protein (Muscle synthesis)</span>
                      <span className="font-bold text-[#1B365D]">{macros.protein}g ({macros.protein * 4} kcal)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1B365D]" style={{ width: `${goal === "loss" ? 40 : 30}%` }}></div>
                    </div>
                  </div>

                  {/* Carbs */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Carbohydrates (Performance energy)</span>
                      <span className="font-bold text-blue-400">{macros.carbs}g ({macros.carbs * 4} kcal)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${goal === "loss" ? 30 : goal === "gain" ? 50 : 40}%` }}></div>
                    </div>
                  </div>

                  {/* Fat */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Fats (Hormonal balance)</span>
                      <span className="font-bold text-yellow-400">{macros.fat}g ({macros.fat * 9} kcal)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: `${goal === "gain" ? 20 : 30}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. BODY FAT OUTPUT */}
            {activeTab === "bodyfat" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Estimated Body Fat Percentage</p>
                  <p className="text-6xl md:text-7xl font-extrabold mt-2 tracking-tight text-[#1B365D]">
                    {bodyFat}%
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Lean Body Mass</p>
                    <p className="text-2xl font-bold mt-1 text-emerald-400">{leanMass} <span className="text-xs text-white">kg</span></p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Total Fat Mass</p>
                    <p className="text-2xl font-bold mt-1 text-red-500">{fatMass} <span className="text-xs text-white">kg</span></p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Analysis Range Reference</h4>
                  <div className="text-xs text-gray-400 leading-relaxed space-y-1">
                    <p>• Essential Fat: 2-5% (Men) | 10-13% (Women)</p>
                    <p>• Athlete: 6-13% (Men) | 14-20% (Women)</p>
                    <p>• Fitness Level: 14-17% (Men) | 21-24% (Women)</p>
                    <p>• Acceptable Level: 18-24% (Men) | 25-31% (Women)</p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. IDEAL BODY WEIGHT OUTPUT */}
            {activeTab === "ibw" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Ideal Body Weight (IBW)</p>
                  <p className="text-6xl md:text-7xl font-extrabold mt-2 tracking-tight text-[#1B365D]">
                    {idealWeight} <span className="text-2xl font-bold text-gray-400 uppercase">kg</span>
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">Devine Formula Estimation</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    The Devine Formula provides a clinical benchmark weight based on height over 5 feet, adjusting per inch. This weight represents an optimal health ratio baseline.
                  </p>
                  <div className="border-t border-white/5 pt-3">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Equivalent Healthy BMI weight range</p>
                    <p className="text-sm font-bold text-white mt-1">
                      {parseFloat((18.5 * heightInMeters * heightInMeters).toFixed(1))} - {parseFloat((24.9 * heightInMeters * heightInMeters).toFixed(1))} kg
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. WAIST TO HIP RATIO (WHR) OUTPUT */}
            {activeTab === "whr" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Waist-to-Hip Ratio (WHR)</p>
                  <p className="text-6xl md:text-7xl font-extrabold mt-2 tracking-tight">
                    {whr}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span>Cardiovascular Risk: <strong className={`font-extrabold ${whrColor}`}>{whrRisk}</strong></span>
                    <span className="text-gray-400">Threshold: {gender === "male" ? "< 0.90" : "< 0.80"}</span>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    WHR measures abdominal fat deposition. Higher ratios suggest a concentration of visceral fat around core organs, elevating risk profile for cardiovascular and metabolic disorders.
                  </p>
                </div>
              </div>
            )}

            {/* 7. 1RM STRENGTH OUTPUT */}
            {activeTab === "onerm" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Estimated One-Rep Max (1RM)</p>
                  <p className="text-5xl md:text-6xl font-extrabold mt-2 tracking-tight text-[#1B365D]">
                    {oneRepMax} <span className="text-xl font-bold text-gray-400 uppercase">kg</span>
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-1">Sub-Maximal Load Projections</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-400">
                    {repMaxes.map((item) => (
                      <div key={item.reps} className="flex justify-between border-b border-white/5 pb-1">
                        <span>{item.reps} Rep{item.reps > 1 ? "s" : ""} Target:</span>
                        <strong className="text-white">{item.weight} kg</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 8. TARGET HEART RATE (THR) OUTPUT */}
            {activeTab === "thr" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Max Heart Rate</p>
                    <p className="text-xl font-bold mt-0.5 text-gray-200">{maxHR} bpm</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Heart Rate Reserve (HRR)</p>
                    <p className="text-xl font-bold mt-0.5 text-[#1B365D]">{hrr} bpm</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B365D]">Karvonen Training Zones</h4>
                  <div className="space-y-2">
                    {thrZones.map((zone) => (
                      <div key={zone.zone} className={`p-3.5 border rounded-xl flex items-center justify-between transition-all ${zone.color}`}>
                        <div className="space-y-0.5 pr-2">
                          <p className="text-xs font-extrabold uppercase tracking-wide">{zone.zone} ({zone.pct})</p>
                          <p className="text-[10px] text-gray-400 font-medium leading-tight">{zone.desc}</p>
                        </div>
                        <div className="text-right whitespace-nowrap">
                          <p className="text-sm font-black">{zone.range}</p>
                          <p className="text-[9px] uppercase tracking-wider font-extrabold text-gray-500">BPM Range</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 9. WATER INTAKE OUTPUT */}
            {activeTab === "water" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Daily Hydration Target</p>
                  <p className="text-6xl md:text-7xl font-extrabold mt-2 tracking-tight text-[#1B365D]">
                    {totalWater} <span className="text-2xl font-bold text-gray-400 uppercase">Liters</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Glasses Equivalent</p>
                      <p className="text-3xl font-extrabold mt-1 text-sky-400">{waterCups} <span className="text-sm text-white">Cups</span></p>
                    </div>
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-2">*1 Cup = 250ml</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-2">Hydration Progress Gauge</p>
                    <div className="flex items-center gap-4">
                      {/* Water drop graphic simulation */}
                      <div className="w-12 h-16 border-2 border-sky-400 rounded-t-full rounded-b-3xl relative overflow-hidden flex items-end">
                        <div
                          className="w-full bg-sky-400/80 animate-pulse transition-all duration-500"
                          style={{ height: `${Math.min(100, (totalWater / 4.5) * 100)}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-gray-400 font-semibold space-y-1">
                        <p>• Baseline Weight Need: {baselineWater.toFixed(2)}L</p>
                        <p>• Exercise Hydration: {exerciseWater.toFixed(2)}L</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Importance of Hydration</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Sufficient hydration maintains joint lubrication, supports optimal nutrient cellular delivery, improves athletic focus, and speeds up exercise muscle cell recovery.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* BOTTOM CALL TO ACTION PANEL */}
          <div className="pt-6 border-t border-white/10 mt-8">
            <Link
              href="/contact"
              className="bg-white text-black hover:bg-[#1B365D] hover:text-white transition-all py-4 text-center rounded-full text-xs font-bold uppercase tracking-widest block shadow-md scale-100 hover:scale-[1.01] active:scale-[0.99]"
            >
              Request Customized Programming
            </Link>
          </div>

        </div>

      </section>
    </main>
  );
}
