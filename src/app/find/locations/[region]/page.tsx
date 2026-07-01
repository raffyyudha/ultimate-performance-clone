import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
import { REGIONS, getLocationsByRegion } from "@/lib/pseo-data";

interface Props {
  params: Promise<{
    region: string;
  }>;
}

export async function generateStaticParams() {
  return REGIONS.map((r) => ({
    region: r.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { region } = await params;
  const regionData = REGIONS.find((r) => r.slug === region);

  if (!regionData) {
    return {
      title: "Region Not Found",
    };
  }

  return {
    title: `${regionData.name} Fitness Locations`,
    description: `Explore premium mobile personal training and wellness coaching locations in ${regionData.name}.`,
  };
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const regionData = REGIONS.find((r) => r.slug === region);

  if (!regionData) {
    notFound();
  }

  const locations = getLocationsByRegion(region);

  return (
    <main className="min-h-screen bg-cream pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">
          <Link href="/find" className="hover:text-maroon transition-colors">
            Directory
          </Link>
          <span>/</span>
          <span className="text-gray-900">{regionData.name}</span>
        </div>

        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <h1 className="font-sans text-3xl md:text-4xl font-black text-black">
              {regionData.name}
            </h1>
            <span className="text-xs font-bold bg-maroon/5 text-maroon px-3 py-1 rounded-full uppercase tracking-wider">
              {regionData.country}
            </span>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl leading-relaxed">
            Select your specific neighborhood or condominium gym below to see
            the specialized personal training and coaching services available in
            your area.
          </p>
          <div className="text-xs text-gray-400 font-bold">
            SHOWING {locations.length} LATEST LOCATIONS
          </div>
        </div>

        {/* Locations Grid */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/find/location/${loc.slug}`}
                className="text-xs font-bold text-gray-700 hover:text-maroon transition-colors py-2 border-b border-gray-50/80 block hover:translate-x-1 transition-transform"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
