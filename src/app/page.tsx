"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Form State
  const [coverage, setCoverage] = useState("Singapore (Mobile PT Coverage)");
  const [location, setLocation] = useState("Preferred Training Location");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPillars, setSelectedPillars] = useState<string[]>([]);

  const handlePillarChange = (pillar: string) => {
    setSelectedPillars((prev) =>
      prev.includes(pillar)
        ? prev.filter((p) => p !== pillar)
        : [...prev, pillar]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pillarsText = selectedPillars.length > 0 ? selectedPillars.join(", ") : "None selected";
    const message = `Hi Quatre Fitness Group, I would like to enquire about your services:
- Name: ${firstName} ${lastName}
- Coverage: ${coverage}
- Location: ${location}
- Email: ${email}
- WhatsApp/Contact: ${phone}
- Pillars of Interest: ${pillarsText}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6581379850?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black text-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 z-10" />
        <Image
          src="/HEROIMAGES.jpeg"
          alt="Hero background"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
          <p className="text-sm tracking-[0.2em] mb-4 font-semibold text-maroon">QUATRE FITNESS</p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            WE Shape<br />
            YOU Up!<br />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            A premium Singapore-based fitness and wellness group building a refined, results-driven lifestyle ecosystem.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-maroon hover:text-white transition-all">
            Begin Your Journey
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-sans text-4xl md:text-5xl font-bold italic mb-6">
            Where fitness becomes<br />a lifestyle.
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            At Quatre, we believe fitness is not a short-term goal. It is a long-term lifestyle investment in health, performance, and confidence.
          </p>
        </div>
      </section>

      {/* Proven Methods Section */}
      <section className="bg-maroon text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs border border-white/30 text-gray-300 px-3 py-1 rounded-full uppercase font-semibold">THE QUATRE WAY</span>
            <h2 className="font-sans text-3xl md:text-4xl mb-6">
              <span className="text-red-300 italic">Refined ecosystem,</span><br />
              tailored to the individual.
            </h2>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Elevate your lifestyle with professional personal coaching, premium nutritional supplements, custom-engineered performance apparel, and curated corporate wellness experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">100%</p>
                <p className="text-sm text-gray-300">Bespoke Customization</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">4</p>
                <p className="text-sm text-gray-300">Strategic Pillars</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Singapore</p>
                <p className="text-sm text-gray-300">Registered Premium Group</p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px]">
            <Image
              src="/pt_philosophy.png"
              alt="Training"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Method Cards - The 4 Pillars */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Card 1: Home & Mobile PT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[2/3] w-full max-w-[340px] md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100/60 bg-white">
              <Image src="/WhatsApp Image 2026-06-19 at 10.29.03 PM (1).jpeg" alt="Home & Mobile PT" fill className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-maroon uppercase tracking-widest">PILLAR 01</span>
              <h3 className="font-sans text-3xl font-bold mb-4 mt-2">Home & Mobile Personal Training</h3>
              <p className="text-gray-600 mb-6">A discreet, premium, and fully personalised coaching service delivered directly to your home, condominium gym, office, or preferred private location.</p>
              <a href="/services" className="btn-outline inline-block">EXPLORE TRAINING SERVICES</a>
            </div>
          </div>

          {/* Card 2: Quatre Merch */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs font-bold text-maroon uppercase tracking-widest">PILLAR 02</span>
              <h3 className="font-sans text-3xl font-bold mb-4 mt-2">Quatre Merch – Premium Apparel</h3>
              <p className="text-gray-600 mb-6">Our in-house premium apparel and lifestyle merchandise brand. Designed with minimalist aesthetics, exceptional comfort, and athletic performance in mind.</p>
              <a href="/merch" className="btn-outline inline-block">SHOP QUATRE MERCH</a>
            </div>
            <div className="relative aspect-[2/3] w-full max-w-[340px] md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100/60 bg-white order-1 md:order-2">
              <Image src="/WhatsApp Image 2026-06-19 at 10.42.50 PM.jpeg" alt="Quatre Merch" fill className="object-cover" />
            </div>
          </div>

          {/* Card 3: FitLine Supplements */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] w-full max-w-[340px] md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100/60 bg-white">
              <Image src="/GANTI_ORANGNYA_JADI_SINGAPOREAN_202606211917.jpeg" alt="FitLine Nutrition" fill className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-maroon uppercase tracking-widest">PILLAR 03</span>
              <h3 className="font-sans text-3xl font-bold mb-4 mt-2">Premium Nutrition – FitLine by PM International</h3>
              <p className="text-gray-600 mb-6">Proudly representing FitLine (Germany), a globally trusted nutrition system based on the patented Nutrient Transport Concept (NTC®) for maximum cellular absorption.</p>
              <a href="/fitline" className="btn-outline inline-block">EXPLORE FITLINE NUTRITION</a>
            </div>
          </div>

          {/* Card 4: Events */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs font-bold text-maroon uppercase tracking-widest">PILLAR 04</span>
              <h3 className="font-sans text-3xl font-bold mb-4 mt-2">Fitness & Wellness Events</h3>
              <p className="text-gray-600 mb-6">We curate corporate wellness programs, private fitness experiences, and education seminars to strengthen motivation, engagement, and team culture.</p>
              <a href="/services" className="btn-outline inline-block">DISCOVER WELLNESS EVENTS</a>
            </div>
            <div className="relative aspect-[2/3] w-full max-w-[340px] md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100/60 bg-white order-1 md:order-2">
              <Image src="/WhatsApp Image 2026-06-19 at 10.29.03 PM (3).jpeg" alt="Events" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-maroon text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-sans text-2xl md:text-4xl italic leading-relaxed mb-6">
            "The Goldman Sachs, Real Madrid, and Apple of Personal Training. They're that far ahead of the field."
          </p>
          <p className="text-sm tracking-[0.2em] font-semibold">MENS FITNESS</p>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-sm border border-maroon text-maroon px-3 py-1 rounded-full uppercase font-semibold">CLIENTS STORIES</span>
              <h2 className="font-sans text-4xl md:text-5xl font-bold mt-4">
                REAL CLIENTS.<br />LIFESTYLE RESULTS
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl text-sm">
                Real people who integrated fitness, apparel, and supplements into their daily schedules with Quatre Fitness.
              </p>
            </div>
            <a href="/results" className="mt-6 md:mt-0 inline-flex items-center gap-2 btn-outline text-xs font-bold uppercase tracking-wider">
              SEE MORE SUCCESS STORIES
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Susan", result: "Lost 21kg & 18% body fat", img: "/result1.jpeg" },
              { name: "Roy", result: "40kg transformation at 57", img: "/result2.jpeg" },
              { name: "Zrinka", result: "53kg weight loss", img: "/result3.jpeg" },
            ].map((client, i) => (
              <div key={i} className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer">
                <div className="relative h-[350px]">
                  <Image src={client.img} alt={client.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-sans text-xl font-bold mb-2">{client.name}</h4>
                  <p className="text-gray-400 text-xs mb-4">{client.result}</p>
                  <a href="/results" className="text-xs font-bold uppercase tracking-wider border-b border-white pb-1 hover:text-gray-300 transition-colors">READ NOW</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Than Just Training */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-sm border border-maroon text-maroon px-3 py-1 rounded-full">MORE THAN JUST TRAINING</span>
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <h2 className="font-sans text-4xl md:text-5xl font-bold">
              An integrated fitness & lifestyle ecosystem
            </h2>
            <div>
              <p className="text-gray-600 mb-6">
                Most personal training focuses purely on hourly sessions. Quatre Fitness Group takes a long-term approach by managing your home physical training, daily nutrition supplements, lifestyle habits, and custom athletic apparel.
              </p>
              <a href="/services" className="inline-flex items-center gap-2 btn-outline">
                EXPLORE ALL PILLARS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-sm border border-maroon text-maroon px-3 py-1 rounded-full">DESIGNED FOR RESULTS</span>
              <h2 className="font-sans text-4xl md:text-5xl font-bold mt-4">
                WHATEVER YOUR GOAL,<br />QUATRE DELIVERS.
              </h2>
              <p className="text-gray-600 mt-4">From weight management and muscle building to corporate performance and longevity.</p>
            </div>
            <a href="/contact" className="mt-6 md:mt-0 inline-flex items-center gap-2 btn-outline">
              EXPLORE SPECIALISATIONS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Weight management", desc: "Sustainable weight loss and body recomposition plans.", img: "/goal_weight_management.png" },
              { title: "Muscle development", desc: "Biomechanical progression to build strength and lean mass.", img: "/GANTI_ORANGNYA_JADI_SINGAPOREAN_202606211917.jpeg" },
              { title: "Longevity & Health", desc: "Active aging and lifestyle systems for busy executives and seniors.", img: "/goal_longevity.png" },
            ].map((goal, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-[250px] grayscale group-hover:grayscale-0 transition-all">
                  <Image src={goal.img} alt={goal.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-sans text-xl font-bold mb-2 uppercase">{goal.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{goal.desc}</p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-sm font-medium hover:text-maroon">
                    LEARN MORE
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-sm border border-white/50 px-3 py-1 rounded-full">CLIENT REVIEWS</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold mt-6 mb-4">
            Highly Recommended Fitness<br />Group in Singapore
          </h2>
          <p className="text-gray-300 mb-8">Refined training, premium supplements, and lifestyle results. Here's what they say.</p>
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="text-5xl font-bold">5.0</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { name: "Julian Koh", loc: "Sentosa Cove", text: "The convenience of mobile training at my condo gym is unmatched. The coach's professionalism and structured tracking keeps me extremely consistent." },
              { name: "Sarah Lim", loc: "Orchard Road", text: "Using FitLine supplements alongside my mobile training completely upgraded my daily energy levels. Highly recommend Quatre Fitness!" },
              { name: "Robert Chen", loc: "Marina Bay", text: "Quatre Fitness has built a true lifestyle ecosystem. The training plans are bespoke, the Quatre apparel is premium, and my posture is fully restored." },
            ].map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-sm text-gray-400 mb-4">{review.loc}</p>
                <p className="text-gray-200 text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm border border-maroon text-maroon px-3 py-1 rounded-full">SERVICE AREA</span>
              <h2 className="font-sans text-4xl md:text-5xl font-bold mt-4 uppercase">
                MOBILE COACHING ACROSS SINGAPORE
              </h2>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Our certified coaches deliver personalized personal training directly to your home, office, condominium gym, or preferred private location anywhere in Singapore. No crowds, no commutes, maximum efficiency.
              </p>
              <a href="https://wa.me/6581379850" className="inline-flex items-center gap-2 btn-outline text-maroon font-bold border-maroon">
                CONTACT VIA WHATSAPP
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <Image src="/singapore_mobile_coaching.png" alt="Singapore map" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 bg-cream border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-semibold">Our Strategic Brands & Alliances</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
            <span className="text-xl md:text-2xl font-sans font-bold text-black tracking-widest">QUATRE FITNESS TRAINING</span>
            <span className="text-xl md:text-2xl font-sans font-bold text-black tracking-widest">QUATRE MERCH</span>
            <span className="text-xl md:text-2xl font-sans font-bold text-black tracking-widest">FITLINE (GERMANY)</span>
            <span className="text-xl md:text-2xl font-sans font-bold text-black tracking-widest">PM INTERNATIONAL</span>
          </div>
        </div>
      </section>

      {/* Enquire Form Section */}
      <section id="enquire" className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs border border-maroon text-maroon px-3 py-1 rounded-full uppercase font-semibold">ENQUIRE NOW</span>
            <h2 className="font-sans text-4xl font-bold mb-2 mt-4">Begin Your Transformation</h2>
            <p className="text-gray-600">Get in touch to check package availability and schedule a consultation</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <select
                value={coverage}
                onChange={(e) => setCoverage(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg bg-white outline-none focus:border-maroon text-sm font-semibold"
              >
                <option value="Singapore (Mobile PT Coverage)">Singapore (Mobile PT Coverage)</option>
              </select>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg bg-white outline-none focus:border-maroon text-sm"
              >
                <option value="Preferred Training Location">Preferred Training Location</option>
                <option value="Condo Gym">Condo Gym</option>
                <option value="Private Home">Private Home</option>
                <option value="Office Gym">Office Gym</option>
                <option value="Other / Preferred Location">Other / Preferred Location</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-sm outline-none focus:border-maroon"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-sm outline-none focus:border-maroon"
              />
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-sm outline-none focus:border-maroon"
            />

            <input
              type="tel"
              placeholder="WhatsApp / Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-sm outline-none focus:border-maroon"
            />

            <div>
              <p className="font-semibold text-sm mb-3">Which pillar are you interested in?</p>
              <div className="grid grid-cols-2 gap-3">
                {["Home Personal Training", "Quatre Merch Apparel", "FitLine Supplements", "Corporate Wellness Events"].map((p) => {
                  const isChecked = selectedPillars.includes(p);
                  return (
                    <label
                      key={p}
                      className={`flex items-center justify-start p-3 border rounded-lg cursor-pointer transition-all text-xs font-semibold ${
                        isChecked
                          ? "border-maroon bg-maroon/5 text-maroon"
                          : "border-gray-200 hover:border-maroon text-gray-700"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="pillars"
                        value={p}
                        checked={isChecked}
                        onChange={() => handlePillarChange(p)}
                        className="mr-3 accent-maroon"
                      />
                      {p}
                    </label>
                  );
                })}
              </div>
            </div>

            <button type="submit" className="w-full btn-primary py-4 text-center font-bold tracking-wider text-sm uppercase">
              Submit Enquiry via WhatsApp
            </button>

            <p className="text-xs text-gray-400 text-center">
              Or directly chat with us via <a href="https://wa.me/6581379850" className="text-maroon font-bold underline">WhatsApp: +65 8137 9850</a>.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
