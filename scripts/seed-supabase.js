const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://yvorihxnzeyhvyqccnzk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2b3JpaHhuemV5aHZ5cWNjbnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MTMyNzIsImV4cCI6MjA5ODQ4OTI3Mn0.32GXOkakWJhTfImsyNW9Hx7GsIl-VzsW9rdRHTdVveQ";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DEFAULT_SEEDS = {
  home: {
    hero_subtitle: "QUATRE FITNESS",
    hero_title: "WE Shape\nYOU Up!",
    hero_description: "A premium Singapore-based fitness and wellness group building a refined, results-driven lifestyle ecosystem.",
    hero_button: "Begin Your Journey",
    intro_title: "Where fitness becomes\na lifestyle.",
    intro_description: "At Quatre, we believe fitness is not a short-term goal. It is a long-term lifestyle investment in health, performance, and confidence.",
    method_subtitle: "THE QUATRE WAY",
    method_title: "Refined ecosystem, tailored to the individual.",
    method_description: "Elevate your lifestyle with professional personal coaching, premium nutritional supplements, custom-engineered performance apparel, and curated corporate wellness experiences.",
    pillar1_title: "Home & Mobile Personal Training",
    pillar1_description: "A discreet, premium, and fully personalised coaching service delivered directly to your home, condominium gym, office, or preferred private location.",
    pillar2_title: "Quatre Merch – Premium Apparel",
    pillar2_description: "Our in-house premium apparel and lifestyle merchandise brand. Designed with minimalist aesthetics, exceptional comfort, and athletic performance in mind.",
    pillar3_title: "Premium Nutrition – FitLine by PM International",
    pillar3_description: "Proudly representing FitLine (Germany), a globally trusted nutrition system based on the patented Nutrient Transport Concept (NTC®) for maximum cellular absorption.",
    pillar4_title: "Fitness & Wellness Events",
    pillar4_description: "We curate corporate wellness programs, private fitness experiences, and education seminars to strengthen motivation, engagement, and team culture.",
    quote_text: "\"The Goldman Sachs, Real Madrid, and Apple of Personal Training. They're that far ahead of the field.\"",
    quote_source: "MENS FITNESS",
    results_title: "REAL CLIENTS.\nLIFESTYLE RESULTS",
    results_description: "Real people who integrated fitness, apparel, and supplements into their daily schedules with Quatre Fitness."
  },
  services: {
    hero_title: "Personal training at Quatre Fitness",
    intro_title: "The world's most effective personal training method",
    intro_p1: "We don't do fads, fashion, or quick fixes. We deliver life-changing results. Quatre Fitness is the premium personal training group built for clients who want structure, evidence-based training, and total accountability.",
    intro_p2: "Our home and mobile personal training programs in Singapore are designed to make your goals inevitable. Whether you want to lose weight, build strength, rehab an injury, or improve your longevity, we manage every variable of your training, nutrition, and lifestyle to guarantee progress.",
    system_title: "Everything you need – in one proven system",
    system_description: "We leave nothing to chance. Your results are guaranteed through our comprehensive approach to training, nutrition, tracking, and daily accountability.",
    process_title: "How personal training works at Quatre Fitness",
    process_description: "Our step-by-step process is designed to support you from day one to the day you achieve your goal.",
    results_title: "Thousands of clients. Predictable progress. Proven results.",
    results_description: "We help people achieve life-changing physical results with no guesswork. Explore some of our local client success stories.",
    science_title: "Backed by science. Driven by data.",
    science_description: "We collect metrics from thousands of training sessions to design the most effective programs. Our statistics speak for themselves.",
    tracking_title: "Real-time progress, support, and guidance",
    tracking_p1: "Our structured tracking method keeps you directly connected to your coach, who logs every workout, tracks nutrition and supplements (including PM International FitLine protocols), and visualizes your progress metrics.",
    tracking_p2: "Having your training log, progress pictures, strength curves, and dietary tracking compiled and managed systematically eliminates guesswork and maximizes efficiency.",
    doubts_title: "Built to work for real people",
    doubts_description: "It's normal to question whether personal training will work for you. Almost every client we work with had doubts before they started – about age, fitness level, past experiences, injuries, or their ability to stay consistent."
  },
  about: {
    hero_subtitle: "ESTABLISHED IN SINGAPORE",
    hero_title: "About Quatre Fitness Group",
    hero_description: "Discover the team, history, and core pillars driving Singapore's premier integrated wellness ecosystem.",
    purpose_title: "The premium lifestyle standard in fitness and wellness for Singapore.",
    purpose_description: "Quatre Fitness Group Pte Ltd is a Singapore-registered group established to deliver premium, accessible, and sustainable fitness and wellness solutions. We serve clients who value quality, discretion, flexibility, and long-term results.",
    excellence_title: "Premium solutions. Defined by lifestyle.",
    excellence_p1: "We believe fitness is not a short-term goal. It is a long-term lifestyle investment in health, performance, and confidence. We achieve this by integrating professional coaching, premium supplements, high-quality merchandise, and community experiences under one trusted group.",
    excellence_p2: "Our ecosystem manages every variable of your fitness journey, removing trial and error. Every element works together to maximize performance, build sustainable nutritional habits, and make your health progression certain.",
    philosophy_title: "Lifestyles, not quick fixes.",
    philosophy_p1: "We founded Quatre Fitness in response to a fitness industry saturated with quick fixes, crash diets, and low accountability. True transformation is built on consistency, discipline, structure, and mindset.",
    philosophy_p2: "Our focus is on building habits, structured systems, and sustainable lifestyles that support long-term cellular health, physical strength, and mental confidence.",
    method_title: "The ecosystem we built to elevate lives.",
    method_p1: "By operating across four strategic pillars—Home & Mobile Personal Training, Quatre Merch apparel, FitLine supplements, and Wellness Events—we manage every variable of your fitness journey, removing trial and error.",
    method_p2: "Every element works together to maximize performance, build sustainable nutritional habits, and make your health progression certain.",
    coaches_title: "Bespoke guidance. Absolute accountability.",
    coaches_p1: "Our mobile coaches are certified, full-time professionals who prioritize safety and biomechanical progression. They meet you at your home, condo gym, or office to guide every movement, diet, and lifestyle habit.",
    history_title: "Singapore-born. Refined lifestyle focus.",
    history_p1: "Quatre Fitness Group was founded in Singapore to deliver a premium, integrated fitness and wellness lifestyle. What began as a dedicated personal training initiative grew through an unwavering commitment to client results and posture safety.",
    history_p2: "As our community expanded, Quatre Fitness grew carefully to maintain the absolute standard of excellence. We built a holistic ecosystem, integrating premium lifestyle apparel under Quatre Merch, scientifically backed active recovery nutrition with FitLine, and bespoke wellness events.",
    press_title: "The trusted authority in health and fitness.",
    press_p1: "When leading corporate wellness organizers and lifestyle media outlets in Singapore seek expert insight on training, body composition, and health, they turn to Quatre Fitness.",
    press_p2: "Our elite certified coaches and leadership team are regularly featured and recognized for bringing high-performance standards directly to homes, corporate offices, and events—reflecting the depth of expertise behind our method and results."
  },
  trainers: {
    hero_title: "Our trainers",
    intro_title: "Hand-selected. Elite-trained. Accountable for results.",
    intro_p1: "We don't hire ordinary personal trainers. We hand-select the best, develop them through 200+ hours of advanced learning every year, and hold them to the highest standards in the industry.",
    intro_p2: "Every trainer is measured on one thing alone: the quality of outcome they deliver for you, and for every client they work with.",
    recruitment_title: "We don't hire trainers. We handpick them.",
    recruitment_stat: "Thousands apply. Fewer than 1 in 100 make the cut.",
    recruitment_p1: "Every candidate goes through a six-stage recruitment process designed to test far more than technical skill. We look for trainers who are obsessed with results, thrive in a high-standards team environment, and take their clients' progress personally.",
    recruitment_p2: "When you work with a Quatre Fitness trainer, you're not choosing from a marketplace where quality is impossible to judge. You're being matched with one of the most rigorously selected coaching professionals in the industry.",
    education_title: "Being selected is just the start",
    education_stat: "Most personal trainers complete a short qualification, and that's where learning stops. At Quatre Fitness, development is continuous and non-negotiable.",
    education_p1: "In their first year alone, every trainer completes over 200 hours of structured education. Case studies. Assessments. Mentorship. Team training. Practical application. All designed to embed the Quatre Fitness Method and the standards required to deliver consistently at the highest level.",
    education_p2: "This means you work with a trainer operating at the leading edge of the industry. And you'll feel the difference.",
    focus_title: "Most trainers have 10 jobs. Yours has one.",
    focus_stat: "We remove the distractions most personal trainers face. No selling. No marketing. No chasing leads.",
    standards_title: "Standards never slip",
    data_title: "Expertise empowered by data"
  },
  results: {
    hero_title: "Exceptional results.\nDelivered as standard.",
    hero_description: "Use the filters below to explore results by sex, age, and timeframe. Or hear what our clients say about the Quatre Fitness experience in their own words.",
    intro_title: "Proven Results",
    intro_description: "Our clients achieve life-changing results through scientific coaching and nutrition.",
    cta_title: "Start Your Transformation",
    cta_description: "Ready to transform your body and life? Book a consultation today."
  },
  gallery: {
    hero_title: "The Quatre Fitness Lifestyle",
    hero_description: "VISUAL GALLERY"
  },
  merch: {
    hero_title: "Wear the Discipline.\nLive the Lifestyle.",
    hero_description: "Premium fitness & lifestyle apparel designed for individuals who live by performance, comfort, and modern style.",
    philosophy_title: "Understated Premium Style",
    philosophy_description: "Quatre Merch is the in-house premium apparel and lifestyle merchandise brand of Quatre Fitness Group. Designed for individuals who value performance, comfort, and refined aesthetics, Quatre Merch represents the identity of a modern fitness lifestyle — in training and beyond.",
    cta_title: "Looking for Co-Branded Team Wear?",
    cta_description: "We partner with corporate teams, fitness clubs, and athletic organizations in Singapore to provide customized, high-quality Quatre apparel tailored to your group's specifications."
  },
  fitline: {
    hero_title: "German Science.\nOptimal Cellular Energy.",
    hero_description: "Upgrade your health, energy, and recovery with FitLine by PM International—nutritional supplements built on the patented Nutrient Transport Concept (NTC®).",
    ntc_title: "The Nutrient Transport Concept (NTC®)",
    ntc_description: "Quatre Fitness Group proudly represents FitLine by PM International (Germany), a globally recognized premium nutrition brand present in over 40 countries. FitLine is built on the patented Nutrient Transport Concept (NTC®), designed to ensure that nutrients are delivered to the cells at the right time for optimal absorption and effectiveness.",
    cta_title: "Supplements are not shortcuts.",
    cta_description: "We believe premium training deserves premium nutrition. Supplements are not shortcuts—they are part of a smart, structured lifestyle system supporting long-term health and physical performance."
  },
  calculator: {
    hero_title: "Fitness & Nutrition Calculators",
    hero_description: "Establish your baseline health metrics, training cardiovascular zones, and daily macronutrient targets using peer-reviewed physiological formulas."
  },
  contact: {
    hero_title: "Begin Your Journey",
    hero_description: "Fill out the consultation form below or connect directly with us via WhatsApp to start your lifestyle progression.",
    form_title: "Corporate & Personal Enquiries",
    form_description: "Quatre Fitness Group Pte Ltd is based in Singapore, delivering premium personal coaching, apparel collections, and nutrition systems directly to your location."
  }
};

async function seed() {
  console.log("Seeding default content to page_content...");

  for (const [slug, sections] of Object.entries(DEFAULT_SEEDS)) {
    const { data, error } = await supabase
      .from("page_content")
      .upsert({
        page_slug: slug,
        sections: sections,
        updated_at: new Date().toISOString()
      }, { onConflict: "page_slug" });

    if (error) {
      console.error(`Error seeding ${slug}:`, error.message);
    } else {
      console.log(`Successfully seeded ${slug}`);
    }
  }

  console.log("Seeding process completed.");
}

seed();
