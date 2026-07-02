import Link from "next/link";
import { notFound } from "next/navigation";

export const runtime = "edge";
import { LOCATIONS, SERVICES, getLocation } from "@/lib/pseo-data";

interface Props {
  params: Promise<{
    location: string;
  }>;
}


export async function generateMetadata({ params }: Props) {
  const { location } = await params;
  const loc = getLocation(location);

  if (!loc) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `Elite Personal Training & Fitness Services in ${loc.name}`,
    description: `Explore premium personal training, mobile coaching, weight loss, and fitness services in ${loc.name}, ${loc.country}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const loc = getLocation(location);

  if (!loc) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">
          <Link href="/find" className="hover:text-maroon transition-colors">
            Directory
          </Link>
          <span>/</span>
          <Link
            href={`/find/locations/${loc.regionSlug}`}
            className="hover:text-maroon transition-colors"
          >
            {loc.regionName}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{loc.name}</span>
        </div>

        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <h1 className="font-sans text-3xl md:text-4xl font-black text-black">
              {loc.name}
            </h1>
            <span className="text-xs font-bold bg-maroon/5 text-maroon px-3 py-1 rounded-full uppercase tracking-wider">
              {loc.country}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Choose from our range of bespoke fitness and training services
            tailored for clients in **{loc.name}**. Our elite coaches bring
            result-driven programs directly to your preferred schedule.
          </p>
        </div>

        {/* Services List */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-4">
          <h2 className="font-sans text-lg font-bold text-black border-b border-gray-100 pb-3">
            Available Services in {loc.name}
          </h2>
          <div className="divide-y divide-gray-50">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/find/${service.slug}/${loc.slug}`}
                className="py-4 flex items-center justify-between group"
              >
                <div>
                  <h3 className="font-sans text-sm font-bold text-black group-hover:text-maroon transition-colors">
                    {service.title} in {loc.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {service.description}
                  </p>
                </div>
                <span className="text-maroon group-hover:translate-x-1.5 transition-transform duration-300 text-xs font-black flex items-center gap-1">
                  VIEW SERVICE
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
