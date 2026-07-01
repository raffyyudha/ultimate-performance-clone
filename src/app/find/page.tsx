import Link from "next/link";
export const dynamic = "force-static";
import { REGIONS, getLocationsByRegion } from "@/lib/pseo-data";

export const metadata = {
  title: "Fitness Coach & Personal Trainer Directory",
  description:
    "Browse our comprehensive directory of mobile personal trainers, condo gym fitness coaches, and wellness locations across Singapore and Malaysia.",
};

export default function FindPage() {
  const regionsWithCounts = REGIONS.map((region) => {
    const locationsCount = getLocationsByRegion(region.slug).length;
    return {
      ...region,
      count: locationsCount,
    };
  });

  const singaporeRegions = regionsWithCounts.filter(
    (r) => r.country === "Singapore",
  );
  const malaysiaRegions = regionsWithCounts.filter(
    (r) => r.country === "Malaysia",
  );

  return (
    <main className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="text-xs border border-maroon text-maroon px-3 py-1 rounded-full uppercase tracking-wider font-extrabold bg-maroon/5">
            PSEO DIRECTORY
          </span>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            Find Your Elite Coach
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Browse our comprehensive directory of premium mobile personal
            trainers, condo fitness coaches, and wellness locations across
            Singapore and Malaysia. Select a region to get started.
          </p>
        </div>

        {/* Singapore Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-sans text-2xl font-black text-black tracking-wide uppercase">
              Singapore Coverage
            </h2>
            <div className="h-[2px] bg-maroon/20 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {singaporeRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/find/locations/${region.slug}`}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-maroon shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                    SINGAPORE
                  </span>
                  <h3 className="font-sans text-xl font-bold text-black group-hover:text-maroon transition-colors mt-2">
                    {region.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">
                    Premium mobile training at your home, office, or condominium
                    gym.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-bold bg-maroon/5 text-maroon px-3 py-1.5 rounded-full">
                    {region.count} Locations
                  </span>
                  <span className="text-maroon group-hover:translate-x-1.5 transition-transform duration-300 text-sm font-bold flex items-center gap-1">
                    BROWSE
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Malaysia Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-sans text-2xl font-black text-black tracking-wide uppercase">
              Malaysia Coverage
            </h2>
            <div className="h-[2px] bg-maroon/20 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {malaysiaRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/find/locations/${region.slug}`}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-maroon shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                    MALAYSIA
                  </span>
                  <h3 className="font-sans text-xl font-bold text-black group-hover:text-maroon transition-colors mt-2">
                    {region.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">
                    Bespoke training at our premium JB hotel gym facility or
                    mobile coaching.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-bold bg-maroon/5 text-maroon px-3 py-1.5 rounded-full">
                    {region.count} Locations
                  </span>
                  <span className="text-maroon group-hover:translate-x-1.5 transition-transform duration-300 text-sm font-bold flex items-center gap-1">
                    BROWSE
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
