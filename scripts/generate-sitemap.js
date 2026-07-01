const fs = require("fs");
const path = require("path");

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function generateLocations() {
  const list = [];
  const slugs = new Set();

  const addLocation = (name, regionSlug) => {
    let slug = toSlug(name);
    if (slugs.has(slug)) {
      slug = `${slug}-${toSlug(regionSlug)}`;
    }
    slugs.add(slug);
    list.push({ slug });
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

  for (const name of sgCoreEast) addLocation(name, "sg-east");
  for (const name of sgCoreWest) addLocation(name, "sg-west");
  for (const name of sgCoreNorth) addLocation(name, "sg-north");
  for (const name of sgCoreNortheast) addLocation(name, "sg-northeast");
  for (const name of sgCoreCentral) addLocation(name, "sg-central");

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
      addLocation(condoName, regionSlug);
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
      addLocation(`${area} ${suffix}`, "my-jb");
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
      addLocation(`${area} ${suffix}`, "my-kl-selangor");
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
      addLocation(`${area} ${suffix}`, "my-penang-other");
    }
  }

  return list;
}

const REGIONS = [
  "sg-east",
  "sg-west",
  "sg-north",
  "sg-northeast",
  "sg-central",
  "sg-condos-1",
  "sg-condos-2",
  "my-jb",
  "my-kl-selangor",
  "my-penang-other",
];

const SERVICES = [
  "personal-trainer",
  "home-personal-training",
  "female-personal-trainer",
  "mobile-personal-trainer",
  "fitness-coach",
  "weight-loss-coach",
  "muscle-building-trainer",
  "condo-gym-personal-trainer",
  "private-fitness-coach",
  "corporate-wellness-coach",
];

const locations = generateLocations();
const baseUrl = "https://quatrefitness.com";
const lastmod = new Date().toISOString().split("T")[0];

console.log("Generating physical sitemap.xml for 22,000+ pages...");

const xmlStream = fs.createWriteStream(
  path.join(__dirname, "..", "public", "sitemap.xml"),
);

xmlStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
xmlStream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

// Write static routes
const staticRoutes = [
  "",
  "/services",
  "/results",
  "/trainers",
  "/merch",
  "/fitline",
  "/gallery",
  "/calculator",
  "/contact",
  "/about",
  "/find",
];

for (const route of staticRoutes) {
  xmlStream.write(`  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>\n`);
}

// Write regions
for (const reg of REGIONS) {
  xmlStream.write(`  <url>
    <loc>${baseUrl}/find/locations/${reg}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`);
}

// Write locations
for (const loc of locations) {
  xmlStream.write(`  <url>
    <loc>${baseUrl}/find/location/${loc.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`);
}

// Write service-locations (20,000 landing pages)
for (const s of SERVICES) {
  for (const l of locations) {
    xmlStream.write(`  <url>
      <loc>${baseUrl}/find/${s}/${l.slug}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>\n`);
  }
}

xmlStream.write("</urlset>\n");
xmlStream.end();

console.log("Physical sitemap.xml successfully created in /public/sitemap.xml!");
