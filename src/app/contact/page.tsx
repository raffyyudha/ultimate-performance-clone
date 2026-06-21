"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    location: "Condo Gym",
    goals: [] as string[],
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const availableGoals = [
    "Weight loss & body recomposition",
    "Strength & muscle development",
    "Post-rehab & corrective exercise",
    "Executive lifestyle fitness",
    "Seniors & active aging",
    "FitLine Supplements",
    "Quatre Merch Apparel",
    "Corporate Wellness Partnerships",
  ];

  const locations = [
    "Condo Gym",
    "Private Home",
    "Office Gym",
    "Preferred Private Location",
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const exists = prev.goals.includes(goal);
      if (exists) {
        return { ...prev, goals: prev.goals.filter((g) => g !== goal) };
      } else {
        return { ...prev, goals: [...prev.goals, goal] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert("Please fill in your name, email, and contact number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans antialiased">
      
      {/* 1. HERO BANNER OVERLAY */}
      <section className="relative h-[320px] md:h-[400px] w-full flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <Image
          src="/contact_hero.png"
          alt="Contact D'Quatre Fitness Group"
          fill
          priority
          className="object-cover opacity-50 filter grayscale"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-3 animate-fadeIn">
          <p className="text-xs text-[#1E00FA] font-bold uppercase tracking-[0.25em]">START YOUR TRANSFORMATION</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Begin Your Journey
          </h1>
          <p className="text-gray-300 mt-2 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Fill out the consultation form below or connect directly with us via WhatsApp to start your lifestyle progression.
          </p>
        </div>
      </section>

      {/* 2. FORM & DETAILS grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-start">
        
        {/* INFO COLUMN */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-[#1E00FA] text-xs font-bold uppercase tracking-[0.2em] block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black leading-tight">
              Corporate & Personal Enquiries
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md font-medium">
              D’Quatre Fitness Group Pte Ltd is based in Singapore, delivering premium personal coaching, apparel collections, and nutrition systems directly to your location.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-200/80">
            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L32 503l138.2-36.2c32.5 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-82.1 21.5 21.9-80-4.4-7c-18.5-29.4-28.3-63.5-28.3-98.8 0-101.4 82.5-183.9 184-183.9 49.1 0 95.3 19.2 130 54s54 80.9 54 130c0 101.4-82.6 184-184.1 184.1zm102.2-139.3c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.4-2.3-5.2-3.7-10.9-6.5z"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[10px] uppercase tracking-wider text-gray-400">WhatsApp Hot Line</h4>
                <p className="text-sm">
                  <a
                    href="https://wa.me/6581379850?text=Hi%20D'Quatre%20Fitness%20Group,%20I'd%20like%20to%20enquire%20about%20personal%20training."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#25D366] font-extrabold text-base tracking-wide"
                  >
                    +65 8137 9850
                  </a>
                </p>
                <p className="text-[10px] text-gray-400 font-semibold">Immediate response within 1-2 hours</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#1E00FA]/5 text-[#1E00FA] rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[10px] uppercase tracking-wider text-gray-400">General Support</h4>
                <p className="text-sm font-extrabold text-gray-700 tracking-wide">support@dquatre.com</p>
                <p className="text-[10px] text-gray-400 font-semibold">Mon-Sun, 5 AM - 10 PM Singapore Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM COLUMN */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="bg-white p-10 rounded-[2rem] shadow-md border border-gray-100 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-[#1E00FA] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-black tracking-tight">Thank You, {formData.firstName}!</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed font-semibold">
                  Your consultation request for training at <strong>{formData.location}</strong> has been received. A D'Quatre coach will contact you within 24 hours.
                </p>
              </div>
              <div className="bg-[#F5F5F7] p-5 rounded-2xl text-left text-xs text-gray-600 max-w-md mx-auto space-y-3 border border-gray-200/50">
                <p className="font-extrabold text-black border-b border-gray-200 pb-1.5 mb-2 uppercase tracking-wider">Summary of request:</p>
                {formData.goals.length > 0 ? (
                  <ul className="list-disc pl-4 space-y-1 font-semibold">
                    {formData.goals.map((g, idx) => (
                      <li key={idx}>{g}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-semibold">General training & health consultation.</p>
                )}
                <p className="pt-2 text-[10px] text-gray-400 uppercase font-extrabold border-t border-gray-200">
                  Phone: {formData.phone} | Email: {formData.email}
                </p>
              </div>
              <div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E00FA] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter first name"
                    className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none font-semibold focus:border-[#1E00FA] focus:ring-1 focus:ring-[#1E00FA] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter last name"
                    className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none font-semibold focus:border-[#1E00FA] focus:ring-1 focus:ring-[#1E00FA] transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none font-semibold focus:border-[#1E00FA] focus:ring-1 focus:ring-[#1E00FA] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+65 8137 9850"
                    className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none font-semibold focus:border-[#1E00FA] focus:ring-1 focus:ring-[#1E00FA] transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">Preferred Location</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none bg-white cursor-pointer font-semibold focus:border-[#1E00FA] focus:ring-1 focus:ring-[#1E00FA] transition-all"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">Gender</label>
                  <div className="flex gap-2">
                    {["Male", "Female"].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setFormData({ ...formData, gender: g })}
                        className={`flex-1 p-3.5 text-xs font-bold border rounded-xl uppercase tracking-wider transition-all ${
                          formData.gender === g
                            ? "border-[#1E00FA] bg-[#1E00FA]/5 text-[#1E00FA]"
                            : "border-gray-200 text-gray-500 hover:border-black"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="block text-xs font-extrabold text-black uppercase tracking-wider mb-3">Services of Interest</span>
                <div className="flex flex-wrap gap-2">
                  {availableGoals.map((goal) => {
                    const isChecked = formData.goals.includes(goal);
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => handleGoalToggle(goal)}
                        className={`px-4 py-2.5 border rounded-full text-xs font-bold transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] ${
                          isChecked
                            ? "bg-black border-black text-white shadow-sm"
                            : "bg-[#F5F5F7] border-gray-200 text-gray-700 hover:border-black"
                        }`}
                      >
                        {goal}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-black uppercase tracking-wider mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Details regarding your preferred schedule, gym facilities, or training history..."
                  className="w-full p-3.5 border border-gray-200 rounded-xl text-sm outline-none resize-none font-semibold focus:border-[#1E00FA] focus:ring-1 focus:ring-[#1E00FA] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-[#1E00FA] py-4 rounded-full font-bold uppercase tracking-widest transition-all text-xs shadow-lg hover:scale-[1.01] active:scale-[0.99]"
              >
                Submit Consultation Request
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
