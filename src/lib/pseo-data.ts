export interface Service {
  slug: string;
  title: string;
  indonesianTitle: string;
  description: string;
}

export interface Location {
  slug: string;
  name: string;
  regionSlug: string;
  regionName: string;
  country: "Singapore" | "Malaysia";
}

export const SERVICES: Service[] = [
  {
    slug: "personal-trainer",
    title: "Personal Trainer",
    indonesianTitle: "Personal Trainer",
    description:
      "Achieve your dream physique with highly qualified and experienced personal trainers.",
  },
  {
    slug: "home-personal-training",
    title: "Home Personal Training",
    indonesianTitle: "Personal Training di Rumah",
    description:
      "Get elite, one-on-one personal coaching delivered directly to your home gym or condo gym.",
  },
  {
    slug: "female-personal-trainer",
    title: "Female Personal Trainer",
    indonesianTitle: "Personal Trainer Wanita",
    description:
      "Dedicated female personal trainers for fat loss, pre/post-natal fitness, and body toning.",
  },
  {
    slug: "mobile-personal-trainer",
    title: "Mobile Personal Trainer",
    indonesianTitle: "Mobile Personal Trainer",
    description:
      "Expert trainers who travel to your location (home, office, condo) with customized equipment.",
  },
  {
    slug: "fitness-coach",
    title: "Fitness Coach",
    indonesianTitle: "Pelatih Kebugaran",
    description:
      "Professional fitness coaching to guide your lifestyle, nutrition, habits, and physical training.",
  },
  {
    slug: "weight-loss-coach",
    title: "Weight Loss Coach",
    indonesianTitle: "Pelatih Penurunan Berat Badan",
    description:
      "Scientific fat loss plans combining metabolic training, strength progress, and custom nutrition.",
  },
  {
    slug: "muscle-building-trainer",
    title: "Muscle Building Trainer",
    indonesianTitle: "Pelatih Pembentukan Otot",
    description:
      "Optimize muscle growth and strength through advanced hypertrophy training and posture correction.",
  },
  {
    slug: "condo-gym-personal-trainer",
    title: "Condo Gym Personal Trainer",
    indonesianTitle: "Personal Trainer Gym Kondominium",
    description:
      "Fully maximize your condo's private gym facility with a customized mobile personal coach.",
  },
  {
    slug: "private-fitness-coach",
    title: "Private Fitness Coach",
    indonesianTitle: "Pelatih Kebugaran Pribadi",
    description:
      "Confidential and completely custom coaching programs for busy executives and high-performance individuals.",
  },
  {
    slug: "corporate-wellness-coach",
    title: "Corporate Wellness Coach",
    indonesianTitle: "Pelatih Kebugaran Korporat",
    description:
      "Custom wellness seminars, physical training workshops, and team health audits for modern businesses.",
  },
];

export const REGIONS = [
  { slug: "sg-east", name: "Singapore East", country: "Singapore" as const },
  { slug: "sg-west", name: "Singapore West", country: "Singapore" as const },
  { slug: "sg-north", name: "Singapore North", country: "Singapore" as const },
  {
    slug: "sg-northeast",
    name: "Singapore Northeast",
    country: "Singapore" as const,
  },
  {
    slug: "sg-central",
    name: "Singapore Central",
    country: "Singapore" as const,
  },
  {
    slug: "sg-condos-1",
    name: "Singapore Condos A-L",
    country: "Singapore" as const,
  },
  {
    slug: "sg-condos-2",
    name: "Singapore Condos M-Z",
    country: "Singapore" as const,
  },
  { slug: "my-jb", name: "Johor Bahru", country: "Malaysia" as const },
  {
    slug: "my-kl-selangor",
    name: "Kuala Lumpur & Selangor",
    country: "Malaysia" as const,
  },
  {
    slug: "my-penang-other",
    name: "Penang & Major Cities",
    country: "Malaysia" as const,
  },
];

function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function generateLocations(): Location[] {
  const list: Location[] = [];
  const slugs = new Set<string>();

  const addLocation = (
    name: string,
    regionSlug: string,
    regionName: string,
    country: "Singapore" | "Malaysia",
  ) => {
    let slug = toSlug(name);
    if (slugs.has(slug)) {
      slug = `${slug}-${toSlug(regionSlug)}`;
    }
    slugs.add(slug);
    list.push({ slug, name, regionSlug, regionName, country });
  };

  const sgCoreEast = [
    "Tampines",
    "Bedok",
    "Pasir Ris",
    "Simei",
    "Changi",
    "Tanah Merah",
    "Kembangan",
    "Eunos",
    "Siglap",
    "Bayshore",
    "Joo Chiat",
    "Marine Parade",
    "Katong",
  ];
  const sgCoreWest = [
    "Jurong East",
    "Jurong West",
    "Clementi",
    "West Coast",
    "Boon Lay",
    "Pioneer",
    "Tuas",
    "Bukit Batok",
    "Bukit Panjang",
    "Choa Chu Kang",
    "Dover",
    "Buona Vista",
    "One North",
    "Kent Ridge",
    "Pasir Panjang",
  ];
  const sgCoreNorth = [
    "Woodlands",
    "Sembawang",
    "Yishun",
    "Marsiling",
    "Admiralty",
    "Kranji",
    "Mandai",
    "Lim Chu Kang",
    "Seletar",
  ];
  const sgCoreNortheast = [
    "Sengkang",
    "Punggol",
    "Hougang",
    "Serangoon",
    "Kovan",
    "Lorong Chuan",
    "Ang Mo Kio",
    "Bishan",
    "Braddell",
    "Potong Pasir",
    "Woodleigh",
  ];
  const sgCoreCentral = [
    "Orchard",
    "Newton",
    "Novena",
    "Bukit Timah",
    "Queenstown",
    "Redhill",
    "Tiong Bahru",
    "Bukit Merah",
    "Telok Blangah",
    "Sentosa Cove",
    "Marina Bay",
    "Downtown Core",
    "Raffles Place",
    "Chinatown",
    "Outram",
    "Clarke Quay",
    "Robertson Quay",
    "River Valley",
    "Tanglin",
    "Bugis",
    "Rochor",
    "Little India",
    "Farrer Park",
    "Balestier",
    "Toa Payoh",
    "MacPherson",
    "Aljunied",
    "Geylang",
    "Paya Lebar",
    "Kallang",
    "Bendemeer",
    "Boon Keng",
    "Whampoa",
    "Lavender",
    "Bugis Street",
  ];

  for (const name of sgCoreEast)
    addLocation(name, "sg-east", "Singapore East", "Singapore");
  for (const name of sgCoreWest)
    addLocation(name, "sg-west", "Singapore West", "Singapore");
  for (const name of sgCoreNorth)
    addLocation(name, "sg-north", "Singapore North", "Singapore");
  for (const name of sgCoreNortheast)
    addLocation(name, "sg-northeast", "Singapore Northeast", "Singapore");
  for (const name of sgCoreCentral)
    addLocation(name, "sg-central", "Singapore Central", "Singapore");

  const condoAreas = [
    "Keppel Bay",
    "Orchard",
    "Marina Bay",
    "River Valley",
    "Tanglin",
    "Newton",
    "Novena",
    "Bukit Timah",
    "Holland",
    "Sentosa",
    "Bishan",
    "Tampines",
    "Bedok",
    "Clementi",
    "Jurong",
    "Woodlands",
    "Punggol",
    "Sengkang",
    "Serangoon",
    "Pasir Ris",
    "Siglap",
    "East Coast",
    "Katong",
    "Marine Parade",
    "Tanjong Pagar",
    "Robertson",
    "Clarke",
    "Ardmore",
    "Nassim",
    "Cairnhill",
    "Grange",
    "Paterson",
    "Leonie",
    "Oxley",
    "Somerset",
    "Dover",
    "Pasir Panjang",
    "Telok Blangah",
    "Alexandra",
    "Redhill",
    "Jervois",
    "Cluny",
    "Stevens",
    "Balmoral",
    "Claymore",
  ];

  const condoSuffixes = [
    "Reflections",
    "Residences",
    "Suites",
    "Villas",
    "Loft",
    "Towers",
    "Mansion",
    "Court",
    "Crest",
    "Parc",
    "Grand",
    "Heights",
    "View",
    "Peak",
    "Ridge",
    "Grove",
    "Parkview",
    "Gardens",
    "Sanctuary",
    "Signature",
  ];

  for (const area of condoAreas) {
    for (const suffix of condoSuffixes) {
      const condoName = `${area} ${suffix}`;
      const firstChar = condoName.charAt(0).toUpperCase();
      const regionSlug =
        firstChar >= "A" && firstChar <= "L" ? "sg-condos-1" : "sg-condos-2";
      const regionName =
        regionSlug === "sg-condos-1"
          ? "Singapore Condos A-L"
          : "Singapore Condos M-Z";
      addLocation(condoName, regionSlug, regionName, "Singapore");
    }
  }

  const jbAreas = [
    "Mount Austin",
    "Bukit Indah",
    "Taman Sutera",
    "Taman Molek",
    "Johor Jaya",
    "Permas Jaya",
    "Skudai",
    "Kulai",
    "Horizon Hills",
    "Puteri Harbour",
    "Medini",
    "Pelangi",
    "Tebrau",
    "Senai",
    "Tampoi",
  ];
  const jbSuffixes = [
    "Heights",
    "Residences",
    "Villas",
    "Gardens",
    "Green",
    "Central",
    "Signature",
    "Premier",
    "Sanctuary",
    "View",
  ];

  for (const area of jbAreas) {
    for (const suffix of jbSuffixes) {
      addLocation(`${area} ${suffix}`, "my-jb", "Johor Bahru", "Malaysia");
    }
  }

  const klAreas = [
    "Bangsar",
    "Mont Kiara",
    "Damansara",
    "Sri Hartamas",
    "Bukit Bintang",
    "Ampang",
    "Cheras",
    "Kepong",
    "Bukit Jalil",
    "Sri Petaling",
    "Petaling Jaya",
    "Subang Jaya",
    "Sunway",
    "Puchong",
    "Shah Alam",
    "Cyberjaya",
    "Putrajaya",
    "Kajang",
    "Klang",
    "Setia Alam",
    "Kota Kemuning",
    "Kelana Jaya",
    "Ara Damansara",
    "Uptown",
    "Damansara Heights",
    "Taman Desa",
    "Kuchai Lama",
    "OUG",
    "Bangsar South",
    "Brickfields",
  ];
  const klSuffixes = [
    "Suites",
    "Residences",
    "Loft",
    "Towers",
    "Heights",
    "Villas",
    "Gardens",
    "Green",
    "Parc",
    "Crest",
    "Ridge",
    "Peak",
    "Signature",
    "Elite",
    "Prime",
    "Grand",
    "Sanctuary",
    "View",
    "Central",
    "Haven",
  ];

  for (const area of klAreas) {
    for (const suffix of klSuffixes) {
      addLocation(
        `${area} ${suffix}`,
        "my-kl-selangor",
        "Kuala Lumpur & Selangor",
        "Malaysia",
      );
    }
  }

  const otherAreas = [
    "Gurney Drive",
    "Tanjong Tokong",
    "Tanjung Bungah",
    "Batu Ferringhi",
    "Bayan Lepas",
    "Bayan Baru",
    "Gelugor",
    "Air Itam",
    "Jelutong",
    "Green Lane",
    "Pulau Tikus",
    "Butterworth",
    "Bukit Mertajam",
    "Ipoh Garden",
    "Meru Heights",
    "Melaka Raya",
    "Klebang",
    "Kota Kinabalu",
    "Likas",
    "Kuching City",
    "Miri Town",
    "Sibu Heights",
    "Bintulu Port",
    "Seremban 2",
    "Taiping Lake",
  ];
  const otherSuffixes = [
    "Residences",
    "Suites",
    "Villas",
    "Heights",
    "Gardens",
    "View",
    "Crest",
    "Parc",
    "Signature",
    "Valley",
  ];

  for (const area of otherAreas) {
    for (const suffix of otherSuffixes) {
      addLocation(
        `${area} ${suffix}`,
        "my-penang-other",
        "Penang & Major Cities",
        "Malaysia",
      );
    }
  }

  return list;
}

export const LOCATIONS = generateLocations();

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getLocationsByRegion(regionSlug: string): Location[] {
  return LOCATIONS.filter((l) => l.regionSlug === regionSlug);
}

export function getRelatedLocations(
  location: Location,
  limit = 12,
): Location[] {
  const regionLocs = getLocationsByRegion(location.regionSlug).filter(
    (l) => l.slug !== location.slug,
  );
  if (regionLocs.length <= limit) return regionLocs;

  let hash = 0;
  for (let i = 0; i < location.slug.length; i++) {
    hash = location.slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const startIndex = Math.abs(hash) % (regionLocs.length - limit);
  return regionLocs.slice(startIndex, startIndex + limit);
}

// Generate deterministic hash code
function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Structuring deterministic variations of layouts and contents for pSEO
export interface DynamicPageContent {
  layoutStyle: 0 | 1 | 2; // 3 different Hero layouts
  sectionOrder: 0 | 1 | 2; // 3 different Section order hierarchies
  ctaButtonText: string; // 4 different CTAs
  introParagraph: string; // 3 different intro copies
  testimonials: {
    // Pick deterministic quotes
    name: string;
    text: string;
    sub: string;
  }[];
  pillars: {
    // 3 different sets of descriptions for the 4 pillars
    title: string;
    desc: string;
    num: string;
  }[];
  faqs: {
    // 3 different sets of FAQs
    q: string;
    a: string;
  }[];
}

export function getDynamicPageContent(
  service: Service,
  location: Location,
): DynamicPageContent {
  const seed = getHash(service.slug + location.slug);

  const layoutStyle = (seed % 3) as 0 | 1 | 2;
  const sectionOrder = (Math.floor(seed / 4) % 3) as 0 | 1 | 2;

  // 1. CTA Button text variations
  const ctaOptions = [
    "Begin Your Journey Now",
    "Book A Complimentary Consultation",
    "Connect With A Coach Today",
    "Start Your Fitness Intake Form",
  ];
  const ctaButtonText = ctaOptions[Math.floor(seed / 16) % ctaOptions.length];

  // 2. Intro Paragraph variations
  const intros = [
    `Are you looking to elevate your fitness routine and achieve your true physical potential in **${location.name}**? At Quatre Fitness, we connect you with elite trainers specializing in **${service.title}**. Our results-driven coaching is custom-engineered to align with your busy schedule, ensuring maximum efficiency, posture correction, and physical progression.`,
    `Transform your health and body composition with professional **${service.title}** coaching serving **${location.name}**. The Quatre Fitness philosophy is built around a refined lifestyle ecosystem: combining bespoke physical workouts, premium nutrition strategies, and flexible mobile scheduling to match your everyday routine.`,
    `Elevate your lifestyle with custom-designed **${service.title}** programs in **${location.name}**. Our certified coaches design progressive strength and fat loss models tailored precisely to your biomechanics, ensuring a safe, sustainable journey towards your health and aesthetic goals.`,
  ];
  const introParagraph = intros[Math.floor(seed / 64) % intros.length];

  // 3. Testimonial variations
  const allTestimonials = [
    {
      name: "Julian Koh",
      text: `Convenient mobile training at my condo gym in ${location.name}. Saves commute time and gets real results.`,
      sub: `Verified Quatre Client • ${location.name}`,
    },
    {
      name: "Marcus Lim",
      text: `Using the FitLine supplements alongside my mobile coaching at ${location.name} upgraded my energy levels completely.`,
      sub: `Verified Client • ${location.name}`,
    },
    {
      name: "Robert Chen",
      text: `Best personal training experience in Singapore. Very structured tracking and customized biomechanics for my posture.`,
      sub: `Executive Client • ${location.name}`,
    },
    {
      name: "Ah Chuan",
      text: `Highly professional trainers. Lost 15kg in 4 months safely. Highly recommend their mobile trainer program.`,
      sub: `Weight Loss Client • ${location.name}`,
    },
    {
      name: "Hendra",
      text: `The accountability and structured nutrition program from Quatre Fitness made a huge difference in my consistency.`,
      sub: `Athletic Client • ${location.name}`,
    },
  ];
  // Select 2 testimonials deterministically
  const firstIndex = Math.floor(seed / 256) % allTestimonials.length;
  const secondIndex = Math.floor(seed / 512) % allTestimonials.length;
  const testimonials = [
    allTestimonials[firstIndex],
    allTestimonials[
      firstIndex === secondIndex
        ? (firstIndex + 1) % allTestimonials.length
        : secondIndex
    ],
  ];

  // 4. Pillars content variations
  const pillarsVariants = [
    [
      {
        num: "01 / TRAINING",
        title: "Bespoke Progression",
        desc: `Every session is custom-planned based on your biomechanics, posture, and strength level. We guide you safely to prevent injuries and optimize fat loss or muscle gain in ${location.name}.`,
      },
      {
        num: "02 / NUTRITION",
        title: "Premium Supplementation",
        desc: "Achieve maximum cellular absorption and cellular energy levels with German-engineered FitLine by PM International supplements, integrated directly into your daily routines.",
      },
      {
        num: "03 / CONVENIENCE",
        title: "Flexible Scheduling",
        desc: `Fit sessions seamlessly around your busy schedule. We train you early mornings, busy lunch hours, or late evenings based on your availability in ${location.name}.`,
      },
      {
        num: "04 / APPAREL",
        title: "High-Performance Merch",
        desc: "Maximize workout comfort and athletic aesthetics with premium, minimalist-designed Quatre lifestyle athletic apparel and merchandise.",
      },
    ],
    [
      {
        num: "01 / SYSTEM",
        title: "Scientific Coaching",
        desc: `We audit your posture, joint range, and physical baseline. Workouts in ${location.name} are structured around scientific recovery and progressive overload principles.`,
      },
      {
        num: "02 / RECOVERY",
        title: "Cellular Nutrition",
        desc: "Supplements are customized using FitLine's Nutrient Transport Concept (NTC®) to maximize your cellular nutrition absorption, optimizing daily recovery times.",
      },
      {
        num: "03 / LOCATION",
        title: "On-Site Delivery",
        desc: `Skip the crowded gym environments. Our coaches travel with complete equipment directly to your private gym, residence, or condo in ${location.name}.`,
      },
      {
        num: "04 / BRAND",
        title: "Premium Identity",
        desc: "We design premium lifestyle accessories and apparel to elevate your confidence, making fitness an intrinsic part of your personal identity.",
      },
    ],
    [
      {
        num: "01 / BASE",
        title: "Tailored Biomechanics",
        desc: `We customize exercise selection according to your unique bone length and joint health, ensuring every rep in ${location.name} builds muscle and burns fat safely.`,
      },
      {
        num: "02 / HABIT",
        title: "Nutrition Integration",
        desc: "We audit your daily diet and integrate premium German FitLine supplements to improve gut health, optimize metabolism, and sustain daily focus.",
      },
      {
        num: "03 / ACCESS",
        title: "Elite Convenience",
        desc: `Your time is highly valuable. Our trainers adapt fully to your schedule, delivering five-star mobile fitness coaching on your own terms in ${location.name}.`,
      },
      {
        num: "04 / STYLE",
        title: "Quatre Athletics",
        desc: "Refine your workout style with our functional fitness apparel line, tailored for premium comfort and high-level athletic performance.",
      },
    ],
  ];
  const pillars =
    pillarsVariants[Math.floor(seed / 1024) % pillarsVariants.length];

  // 5. FAQ variations
  const faqSets = [
    [
      {
        q: `Do I need to own my own workout equipment in ${location.name}?`,
        a: `No. Our mobile trainers travel to ${location.name} with custom personal training gear (resistance bands, adjustable weights, mats) to provide a comprehensive, challenging workout in any private residence or gym setting.`,
      },
      {
        q: `Can a trainer coach me at my condo gym in ${location.name}?`,
        a: `Absolutely. If your condominium at ${location.name} allows personal trainer visits, our coaches are fully experienced in making the most of your condo gym's specialized gear and machines.`,
      },
      {
        q: "How do I schedule sessions?",
        a: "Fill out our brief WhatsApp consultation form. We will match you with a trainer specializing in your goals and coordinate scheduling directly around your professional commitments.",
      },
    ],
    [
      {
        q: `What space requirements are needed for home training in ${location.name}?`,
        a: `Very minimal. All we need is a small clear space (roughly the size of two yoga mats) in your home or garden in ${location.name} to conduct a highly effective mobile coaching session.`,
      },
      {
        q: `What is the background of Quatre coaches serving ${location.name}?`,
        a: "All Quatre coaches hold international fitness certifications, undergo extensive internal training in biomechanics, and have multi-year track records in client body transformations.",
      },
      {
        q: "How long does it take to see results?",
        a: "Most clients notice improved energy and strength within 2-3 weeks, and visible fat loss or muscle definition transformations within 8-12 weeks when paired with our nutrition plan.",
      },
    ],
    [
      {
        q: `Are nutrition audits included in the ${location.name} coaching packages?`,
        a: "Yes. Every personal training package includes a thorough review of your nutritional habits, custom calorie/macronutrient setups, and recommendations for premium FitLine supplements.",
      },
      {
        q: `Can I train with a spouse or partner in ${location.name}?`,
        a: `Yes! We offer partner training packages in ${location.name} where you and your training partner can share sessions while still receiving customized movement audits.`,
      },
      {
        q: "What is your cancellation policy?",
        a: "We operate a standard 24-hour cancellation policy. Sessions cancelled with more than 24 hours notice can be rescheduled freely with your assigned coach.",
      },
    ],
  ];
  const faqs = faqSets[Math.floor(seed / 4096) % faqSets.length];

  return {
    layoutStyle,
    sectionOrder,
    ctaButtonText,
    introParagraph,
    testimonials,
    pillars,
    faqs,
  };
}
