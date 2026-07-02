import Link from "next/link";
import { notFound } from "next/navigation";

export const runtime = "edge";
import {
  SERVICES,
  LOCATIONS,
  getService,
  getLocation,
  getRelatedLocations,
  getDynamicPageContent,
} from "@/lib/pseo-data";
import IntakeForm from "@/components/IntakeForm";

interface Props {
  params: Promise<{
    service: string;
    location: string;
  }>;
}


export async function generateMetadata({ params }: Props) {
  const { service, location } = await params;
  const s = getService(service);
  const l = getLocation(location);

  if (!s || !l) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${s.title} in ${l.name} | Premium Coaching`,
    description: `Looking for a professional ${s.title} in ${l.name}? Quatre Fitness offers premium, results-driven coaching at your convenience. Book a consultation today!`,
  };
}

export default async function PseoLandingPage({ params }: Props) {
  const { service, location } = await params;
  const s = getService(service);
  const l = getLocation(location);

  if (!s || !l) {
    notFound();
  }

  const content = getDynamicPageContent(s, l);
  const relatedLocations = getRelatedLocations(l, 12);
  const isCondo = l.regionSlug.startsWith("sg-condos");
  const isMalaysia = l.country === "Malaysia";

  // Render Hero based on layoutStyle (0, 1, 2)
  const renderHero = () => {
    if (content.layoutStyle === 0) {
      return (
        <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-maroon/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">
              <Link href="/find" className="hover:text-white transition-colors">
                Directory
              </Link>
              <span>/</span>
              <Link
                href={`/find/locations/${l.regionSlug}`}
                className="hover:text-white transition-colors"
              >
                {l.regionName}
              </Link>
              <span>/</span>
              <Link
                href={`/find/location/${l.slug}`}
                className="hover:text-white transition-colors"
              >
                {l.name}
              </Link>
              <span>/</span>
              <span className="text-white">{s.title}</span>
            </div>
            <div className="max-w-4xl space-y-4">
              <span className="text-xs border border-maroon text-maroon px-3 py-1 rounded-full uppercase tracking-wider font-extrabold bg-maroon/10">
                {l.country === "Singapore"
                  ? "Singapore Mobile PT"
                  : "Malaysia Fitness Network"}
              </span>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Bespoke {s.title} <br className="hidden sm:inline" />
                in <span className="text-maroon">{l.name}</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Achieve sustainable health, fat loss, or athletic development
                with elite personal trainers. We deliver customized coaching
                plans and nutrition programs tailored around your schedule.
              </p>
            </div>
          </div>
        </section>
      );
    }

    if (content.layoutStyle === 1) {
      return (
        <section className="relative bg-maroon text-white pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-white/50 uppercase tracking-widest mb-6">
              <Link href="/find" className="hover:text-white transition-colors">
                Directory
              </Link>
              <span>/</span>
              <Link
                href={`/find/locations/${l.regionSlug}`}
                className="hover:text-white transition-colors"
              >
                {l.regionName}
              </Link>
              <span>/</span>
              <Link
                href={`/find/location/${l.slug}`}
                className="hover:text-white transition-colors"
              >
                {l.name}
              </Link>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="text-xs border border-white/40 text-white px-3 py-1 rounded-full uppercase tracking-widest font-extrabold">
                {l.name} • {s.title}
              </span>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight uppercase">
                {s.title} <br className="hidden sm:inline" />
                In {l.name}
              </h1>
              <p className="text-gray-200 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Experience premium private coaching tailored specifically to
                your body type, goals, and daily commitments. Right in the heart
                of {l.name}.
              </p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="relative bg-[#0F0F0F] text-white pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute right-10 top-10 w-72 h-72 bg-maroon/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-gray-500 uppercase mb-8">
            <Link href="/find" className="hover:text-white transition-colors">
              Directory
            </Link>
            <span>&gt;</span>
            <Link
              href={`/find/locations/${l.regionSlug}`}
              className="hover:text-white transition-colors"
            >
              {l.regionSlug}
            </Link>
            <span>&gt;</span>
            <span className="text-white">{l.name}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-maroon uppercase">
                QUATRE PREMIUM COACHING
              </span>
              <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
                {s.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Service Area: {l.name}
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4 border-l border-white/10 pl-6 py-2">
              <p className="text-gray-400 text-xs leading-relaxed">
                Elite results-driven ecosystem combining personalized training
                workouts, custom gut-health nutrition models, and
                high-performance lifestyle adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Render components
  const introComponent = (
    <div key="intro" className="space-y-6">
      <h2 className="font-sans text-2xl font-black text-black uppercase tracking-wide">
        Refining Your Fitness Journey
      </h2>
      <div
        className="text-gray-600 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: content.introParagraph.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>",
          ),
        }}
      />

      {isCondo ? (
        <div className="bg-maroon/5 border-l-4 border-maroon p-6 rounded-r-xl space-y-2">
          <h4 className="font-sans text-sm font-black text-maroon uppercase tracking-wide">
            Optimized Condominium Gym Coaching
          </h4>
          <p className="text-gray-700 text-xs leading-relaxed">
            We bring professional personal training directly to the private
            condo gym at **{l.name}**. Skip the public gym crowds, eliminate
            commutes, and achieve elite results using your own building's gym
            facilities in complete comfort and privacy.
          </p>
        </div>
      ) : isMalaysia ? (
        <div className="bg-maroon/5 border-l-4 border-maroon p-6 rounded-r-xl space-y-2">
          <h4 className="font-sans text-sm font-black text-maroon uppercase tracking-wide">
            Premium Johor Bahru Gym Facility & Mobile Coaching
          </h4>
          <p className="text-gray-700 text-xs leading-relaxed">
            Whether you prefer mobile coaching at your private residence or
            accessing our state-of-the-art conditioning facilities at the
            **Kingston 16 Hotel (Johor Bahru)**, Quatre provides the perfect
            ecosystem to support your athletic progress.
          </p>
        </div>
      ) : (
        <div className="bg-maroon/5 border-l-4 border-maroon p-6 rounded-r-xl space-y-2">
          <h4 className="font-sans text-sm font-black text-maroon uppercase tracking-wide">
            Premium Mobile Coaching in {l.name}
          </h4>
          <p className="text-gray-700 text-xs leading-relaxed">
            Our certified instructors travel directly to your preferred training
            venue in **{l.name}**, Singapore — whether that's your home,
            condominium gym, office gym, or a local outdoor park.
          </p>
        </div>
      )}
    </div>
  );

  const pillarsComponent = (
    <div key="pillars" className="space-y-8">
      <h3 className="font-sans text-xl font-bold text-black border-b border-gray-100 pb-3 uppercase tracking-wider">
        The Quatre Lifestyle Ecosystem
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {content.pillars.map((p, idx) => (
          <div key={idx} className="space-y-2">
            <span className="text-xs font-bold text-maroon">{p.num}</span>
            <h4 className="font-bold text-sm text-black">{p.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const reviewsComponent = (
    <div
      key="reviews"
      className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6"
    >
      <div className="flex items-center gap-1.5 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-black font-extrabold text-sm ml-2">
          5.0 / 5.0 Rating
        </span>
      </div>
      <div className="space-y-6 divide-y divide-gray-50">
        {content.testimonials.map((t, idx) => (
          <div key={idx} className={idx > 0 ? "pt-6 space-y-2" : "space-y-2"}>
            <p className="italic text-gray-700 text-sm leading-relaxed">
              "{t.text}"
            </p>
            <div>
              <p className="font-bold text-xs text-black">{t.name}</p>
              <p className="text-[10px] text-gray-400">{t.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const faqsComponent = (
    <div key="faqs" className="space-y-6">
      <h3 className="font-sans text-xl font-bold text-black border-b border-gray-100 pb-3 uppercase tracking-wider">
        Frequently Asked Questions
      </h3>
      <div className="divide-y divide-gray-150 space-y-4">
        {content.faqs.map((faq, idx) => (
          <div key={idx} className="pt-4 space-y-2">
            <h4 className="font-bold text-sm text-black">{faq.q}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    // Generate sections dynamically based on sectionOrder (0, 1, 2)
    if (content.sectionOrder === 0) {
      return [
        introComponent,
        pillarsComponent,
        reviewsComponent,
        faqsComponent,
      ];
    }
    if (content.sectionOrder === 1) {
      return [
        pillarsComponent,
        introComponent,
        reviewsComponent,
        faqsComponent,
      ];
    }
    return [introComponent, reviewsComponent, faqsComponent, pillarsComponent];
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero rendering */}
      {renderHero()}

      {/* Main Content & Form Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Content (2 cols) */}
          <div className="lg:col-span-2 space-y-16">{renderContent()}</div>

          {/* Right Column: Sticky Form (1 col) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <IntakeForm
                serviceTitle={s.title}
                locationName={l.name}
                country={l.country}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Mesh Section */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <h3 className="font-sans text-sm font-black text-black uppercase tracking-wider">
            Other Areas We Serve Nearby in {l.regionName}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {relatedLocations.map((rel) => (
              <Link
                key={rel.slug}
                href={`/find/${s.slug}/${rel.slug}`}
                className="text-[10px] text-gray-500 hover:text-maroon font-bold transition-colors py-1.5 px-3 bg-gray-50/50 hover:bg-maroon/5 border border-gray-100/50 rounded-lg text-center truncate"
              >
                {s.title} {rel.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
