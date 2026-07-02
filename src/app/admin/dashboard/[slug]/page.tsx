"use client";

export const runtime = "edge";

import { useState, useEffect, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getPageContent, upsertPageContent, supabase } from "@/lib/supabase";

interface FieldDef {
  key: string;
  label: string;
  type: "text" | "textarea";
  placeholder: string;
}

const PAGE_FIELDS: Record<string, { label: string; fields: FieldDef[] }> = {
  home: {
    label: "Home Page",
    fields: [
      { key: "hero_image", label: "Hero Background Image Path/URL", type: "text", placeholder: "/HEROIMAGES.jpeg" },
      { key: "hero_subtitle", label: "Hero Subtitle", type: "text", placeholder: "QUATRE FITNESS" },
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "WE Shape YOU Up!" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "A premium Singapore-based fitness and wellness group..." },
      { key: "hero_button", label: "Hero Button Text", type: "text", placeholder: "Begin Your Journey" },
      { key: "intro_title", label: "Intro Section Title", type: "text", placeholder: "Where fitness becomes a lifestyle." },
      { key: "intro_description", label: "Intro Description", type: "textarea", placeholder: "At Quatre, we believe fitness is not a short-term goal..." },
      { key: "method_subtitle", label: "Method Subtitle", type: "text", placeholder: "THE QUATRE WAY" },
      { key: "method_title", label: "Method Title", type: "text", placeholder: "Refined ecosystem, tailored to the individual." },
      { key: "method_description", label: "Method Description", type: "textarea", placeholder: "Elevate your lifestyle with professional personal coaching..." },
      { key: "pillar1_image", label: "Pillar 1 Image Path/URL", type: "text", placeholder: "/whatsapp_pt_1.jpeg" },
      { key: "pillar1_title", label: "Pillar 1 Title", type: "text", placeholder: "Home & Mobile Personal Training" },
      { key: "pillar1_description", label: "Pillar 1 Description", type: "textarea", placeholder: "A discreet, premium, and fully personalised coaching service..." },
      { key: "pillar2_image", label: "Pillar 2 Image Path/URL", type: "text", placeholder: "/whatsapp_merch_4.jpeg" },
      { key: "pillar2_title", label: "Pillar 2 Title", type: "text", placeholder: "Quatre Merch – Premium Apparel" },
      { key: "pillar2_description", label: "Pillar 2 Description", type: "textarea", placeholder: "Our in-house premium apparel and lifestyle merchandise brand..." },
      { key: "pillar3_image", label: "Pillar 3 Image Path/URL", type: "text", placeholder: "/GANTI_ORANGNYA_JADI_SINGAPOREAN_202606211917.jpeg" },
      { key: "pillar3_title", label: "Pillar 3 Title", type: "text", placeholder: "Premium Nutrition – FitLine by PM International" },
      { key: "pillar3_description", label: "Pillar 3 Description", type: "textarea", placeholder: "Proudly representing FitLine (Germany)..." },
      { key: "pillar4_image", label: "Pillar 4 Image Path/URL", type: "text", placeholder: "/whatsapp_pt_3.jpeg" },
      { key: "pillar4_title", label: "Pillar 4 Title", type: "text", placeholder: "Fitness & Wellness Events" },
      { key: "pillar4_description", label: "Pillar 4 Description", type: "textarea", placeholder: "We curate corporate wellness programs..." },
      { key: "quote_text", label: "Quote Text", type: "textarea", placeholder: "The Goldman Sachs, Real Madrid, and Apple of Personal Training..." },
      { key: "quote_source", label: "Quote Source", type: "text", placeholder: "MENS FITNESS" },
      { key: "results_title", label: "Results Section Title", type: "text", placeholder: "REAL CLIENTS. LIFESTYLE RESULTS" },
      { key: "results_description", label: "Results Description", type: "textarea", placeholder: "Real people who integrated fitness, apparel, and supplements..." },
    ],
  },
  services: {
    label: "Services Page",
    fields: [
      { key: "hero_image", label: "Hero Background Image Path/URL", type: "text", placeholder: "/contact_hero.png" },
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "Personal training at Quatre Fitness" },
      { key: "intro_title", label: "Intro Title", type: "text", placeholder: "The world's most effective personal training method" },
      { key: "intro_p1", label: "Intro Paragraph 1", type: "textarea", placeholder: "We don't do fads, fashion, or quick fixes..." },
      { key: "intro_p2", label: "Intro Paragraph 2", type: "textarea", placeholder: "Our home and mobile personal training programs..." },
      { key: "system_title", label: "System Overview Title", type: "text", placeholder: "Everything you need – in one proven system" },
      { key: "system_description", label: "System Overview Description", type: "textarea", placeholder: "We leave nothing to chance..." },
      { key: "process_title", label: "Process Title", type: "text", placeholder: "How personal training works at Quatre Fitness" },
      { key: "process_description", label: "Process Description", type: "textarea", placeholder: "Our step-by-step process is designed to support you..." },
      { key: "results_title", label: "Results Section Title", type: "text", placeholder: "Thousands of clients. Predictable progress. Proven results." },
      { key: "results_description", label: "Results Description", type: "textarea", placeholder: "We help people achieve life-changing physical results..." },
      { key: "science_title", label: "Science Section Title", type: "text", placeholder: "Backed by science. Driven by data." },
      { key: "science_description", label: "Science Description", type: "textarea", placeholder: "We collect metrics from thousands of training sessions..." },
      { key: "tracking_image", label: "Tracking Mockup Image Path/URL", type: "text", placeholder: "/goal_weight_management.png" },
      { key: "tracking_title", label: "Tracking Section Title", type: "text", placeholder: "Real-time progress, support, and guidance" },
      { key: "tracking_p1", label: "Tracking Paragraph 1", type: "textarea", placeholder: "Our structured tracking method keeps you..." },
      { key: "tracking_p2", label: "Tracking Paragraph 2", type: "textarea", placeholder: "Having your training log, progress pictures..." },
      { key: "doubts_title", label: "Doubts Section Title", type: "text", placeholder: "Built to work for real people" },
      { key: "doubts_description", label: "Doubts Description", type: "textarea", placeholder: "It's normal to question whether personal training will work..." },
    ],
  },
  about: {
    label: "About Page",
    fields: [
      { key: "hero_image", label: "Hero Background Image Path/URL", type: "text", placeholder: "/contact_hero.png" },
      { key: "hero_subtitle", label: "Hero Subtitle", type: "text", placeholder: "ESTABLISHED IN SINGAPORE" },
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "About Quatre Fitness Group" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "Discover the team, history, and core pillars..." },
      { key: "purpose_title", label: "Purpose Title", type: "text", placeholder: "The premium lifestyle standard in fitness and wellness..." },
      { key: "purpose_description", label: "Purpose Description", type: "textarea", placeholder: "Quatre Fitness Group Pte Ltd is a Singapore-registered group..." },
      { key: "excellence_title", label: "Excellence Title", type: "text", placeholder: "Premium solutions. Defined by lifestyle." },
      { key: "excellence_p1", label: "Excellence Paragraph 1", type: "textarea", placeholder: "We believe fitness is not a short-term goal..." },
      { key: "excellence_p2", label: "Excellence Paragraph 2", type: "textarea", placeholder: "Our ecosystem manages every variable..." },
      { key: "philosophy_title", label: "Philosophy Title", type: "text", placeholder: "Lifestyles, not quick fixes." },
      { key: "philosophy_p1", label: "Philosophy Paragraph 1", type: "textarea", placeholder: "We founded Quatre Fitness in response..." },
      { key: "philosophy_p2", label: "Philosophy Paragraph 2", type: "textarea", placeholder: "Our focus is on building habits..." },
      { key: "method_image", label: "Method Showcase Image Path/URL", type: "text", placeholder: "/whatsapp_about_1.jpeg" },
      { key: "method_title", label: "Method Title", type: "text", placeholder: "The ecosystem we built to elevate lives." },
      { key: "method_p1", label: "Method Paragraph 1", type: "textarea", placeholder: "By operating across four strategic pillars..." },
      { key: "method_p2", label: "Method Paragraph 2", type: "textarea", placeholder: "Every element works together..." },
      { key: "coaches_title", label: "Coaches Section Title", type: "text", placeholder: "Bespoke guidance. Absolute accountability." },
      { key: "coaches_p1", label: "Coaches Paragraph 1", type: "textarea", placeholder: "Our mobile coaches are certified..." },
      { key: "history_title", label: "History Title", type: "text", placeholder: "Singapore-born. Refined lifestyle focus." },
      { key: "history_p1", label: "History Paragraph 1", type: "textarea", placeholder: "Quatre Fitness Group was founded in Singapore..." },
      { key: "history_p2", label: "History Paragraph 2", type: "textarea", placeholder: "As our community expanded..." },
      { key: "press_title", label: "Press Title", type: "text", placeholder: "The trusted authority in health and fitness." },
      { key: "press_p1", label: "Press Paragraph 1", type: "textarea", placeholder: "When leading corporate wellness organizers..." },
      { key: "press_p2", label: "Press Paragraph 2", type: "textarea", placeholder: "Our elite certified coaches..." },
    ],
  },
  trainers: {
    label: "Trainers Page",
    fields: [
      { key: "hero_image", label: "Hero Background Image Path/URL", type: "text", placeholder: "/pt_standards.png" },
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "Our trainers" },
      { key: "intro_title", label: "Intro Title", type: "text", placeholder: "Hand-selected. Elite-trained. Accountable for results." },
      { key: "intro_p1", label: "Intro Paragraph 1", type: "textarea", placeholder: "We don't hire ordinary personal trainers..." },
      { key: "intro_p2", label: "Intro Paragraph 2", type: "textarea", placeholder: "Every trainer is measured on one thing alone..." },
      { key: "recruitment_title", label: "Recruitment Title", type: "text", placeholder: "We don't hire trainers. We handpick them." },
      { key: "recruitment_stat", label: "Recruitment Stat", type: "text", placeholder: "Thousands apply. Fewer than 1 in 100 make the cut." },
      { key: "recruitment_p1", label: "Recruitment Paragraph 1", type: "textarea", placeholder: "Every candidate goes through a six-stage recruitment process..." },
      { key: "recruitment_p2", label: "Recruitment Paragraph 2", type: "textarea", placeholder: "When you work with a Quatre Fitness trainer..." },
      { key: "education_title", label: "Education Title", type: "text", placeholder: "Being selected is just the start" },
      { key: "education_stat", label: "Education Bold Stat", type: "text", placeholder: "Most personal trainers complete a short qualification..." },
      { key: "education_p1", label: "Education Paragraph 1", type: "textarea", placeholder: "In their first year alone, every trainer completes..." },
      { key: "education_p2", label: "Education Paragraph 2", type: "textarea", placeholder: "This means you work with a trainer operating..." },
      { key: "focus_title", label: "Focus Section Title", type: "text", placeholder: "Most trainers have 10 jobs. Yours has one." },
      { key: "focus_stat", label: "Focus Bold Statement", type: "text", placeholder: "We remove the distractions most personal trainers face." },
      { key: "standards_title", label: "Standards Title", type: "text", placeholder: "Standards never slip" },
      { key: "data_title", label: "Data Section Title", type: "text", placeholder: "Expertise empowered by data" },
    ],
  },
  results: {
    label: "Results Page",
    fields: [
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "Client Results" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "Real transformations from real clients..." },
      { key: "intro_title", label: "Intro Title", type: "text", placeholder: "Proven Results" },
      { key: "intro_description", label: "Intro Description", type: "textarea", placeholder: "Our clients achieve life-changing results..." },
      { key: "cta_title", label: "CTA Title", type: "text", placeholder: "Start Your Transformation" },
      { key: "cta_description", label: "CTA Description", type: "textarea", placeholder: "Ready to transform your body and life?" },
    ],
  },
  gallery: {
    label: "Gallery Page",
    fields: [
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "Gallery" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "Explore our training sessions, events, and transformations." },
      { key: "section_title", label: "Section Title", type: "text", placeholder: "Our Journey in Photos" },
      { key: "section_description", label: "Section Description", type: "textarea", placeholder: "From intense training sessions to community events..." },
    ],
  },
  merch: {
    label: "Merch Page",
    fields: [
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "Quatre Merch" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "Premium athletic apparel designed for performance..." },
      { key: "intro_title", label: "Intro Title", type: "text", placeholder: "Premium Apparel Collection" },
      { key: "intro_description", label: "Intro Description", type: "textarea", placeholder: "Our in-house premium apparel and lifestyle merchandise brand..." },
      { key: "philosophy_title", label: "Philosophy Title", type: "text", placeholder: "Designed with Purpose" },
      { key: "philosophy_description", label: "Philosophy Description", type: "textarea", placeholder: "Every piece in the Quatre Merch collection..." },
      { key: "cta_title", label: "CTA Title", type: "text", placeholder: "Ready to Elevate Your Wardrobe?" },
      { key: "cta_description", label: "CTA Description", type: "textarea", placeholder: "Explore our latest collection..." },
    ],
  },
  fitline: {
    label: "FitLine Page",
    fields: [
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "FitLine by PM International" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "German-engineered premium nutrition supplements..." },
      { key: "intro_title", label: "Intro Title", type: "text", placeholder: "Premium Nutrition" },
      { key: "intro_description", label: "Intro Description", type: "textarea", placeholder: "Proudly representing FitLine Germany..." },
      { key: "ntc_title", label: "NTC Section Title", type: "text", placeholder: "Nutrient Transport Concept" },
      { key: "ntc_description", label: "NTC Description", type: "textarea", placeholder: "FitLine's patented NTC technology..." },
      { key: "cta_title", label: "CTA Title", type: "text", placeholder: "Start Your FitLine Journey" },
      { key: "cta_description", label: "CTA Description", type: "textarea", placeholder: "Discover why professional athletes trust FitLine..." },
    ],
  },
  calculator: {
    label: "Calculator Page",
    fields: [
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "Fitness Calculator" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "Calculate your BMI, body fat percentage..." },
      { key: "intro_title", label: "Intro Title", type: "text", placeholder: "Know Your Numbers" },
      { key: "intro_description", label: "Intro Description", type: "textarea", placeholder: "Understanding your body composition..." },
      { key: "cta_title", label: "CTA Title", type: "text", placeholder: "Want Expert Analysis?" },
      { key: "cta_description", label: "CTA Description", type: "textarea", placeholder: "Our coaches can provide in-depth body composition analysis..." },
    ],
  },
  contact: {
    label: "Contact Page",
    fields: [
      { key: "hero_title", label: "Hero Title", type: "text", placeholder: "Contact Us" },
      { key: "hero_description", label: "Hero Description", type: "textarea", placeholder: "Get in touch with Quatre Fitness..." },
      { key: "form_title", label: "Form Title", type: "text", placeholder: "Start Your Journey" },
      { key: "form_description", label: "Form Description", type: "textarea", placeholder: "Fill in the form below and we'll be in touch..." },
      { key: "location_title", label: "Location Title", type: "text", placeholder: "Our Location" },
      { key: "location_address", label: "Address", type: "textarea", placeholder: "Singapore" },
      { key: "whatsapp_number", label: "WhatsApp Number", type: "text", placeholder: "6581379850" },
      { key: "email_address", label: "Email Address", type: "text", placeholder: "info@quatrefitness.com" },
    ],
  },
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function AdminPageEditor({ params }: Props) {
  const router = useRouter();
  const { slug } = use(params);

  const [fields, setFields] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const pageConfig = PAGE_FIELDS[slug];

  const fetchContent = useCallback(async () => {
    setLoading(true);
    const data = await getPageContent(slug);
    if (data) {
      setFields(data);
    } else {
      setFields({});
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    async function verifyAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/admin");
        return;
      }
      if (!pageConfig) {
        router.replace("/admin/dashboard");
        return;
      }
      fetchContent();
    }
    verifyAuth();
  }, [router, pageConfig, fetchContent, slug]);

  const handleFieldChange = (key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setToast(null);

    const result = await upsertPageContent(slug, fields);

    if (result.success) {
      setToast({ type: "success", message: "Content saved successfully!" });
    } else {
      setToast({ type: "error", message: result.error || "Failed to save content." });
    }

    setSaving(false);

    // Auto-dismiss toast
    setTimeout(() => setToast(null), 4000);
  };

  const handleReset = () => {
    setFields({});
    setToast({ type: "success", message: "Fields reset to default placeholders. Click Save to apply." });
    setTimeout(() => setToast(null), 4000);
  };

  if (loading) {
    return (
      <div className="p-12 text-center space-y-4">
        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-gray-400">Loading editor...</p>
      </div>
    );
  }

  if (!pageConfig) return null;

  return (
    <div className="p-8 md:p-12 max-w-4xl">
      {/* Editor Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-6 mb-10 gap-4">
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Currently Editing
          </span>
          <h1 className="text-2xl font-black tracking-tight text-black mt-1">
            {pageConfig.label}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Path: <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-600">/{slug === "home" ? "" : slug}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={slug === "home" ? "/" : `/${slug}`}
            target="_blank"
            className="text-xs font-bold text-gray-400 hover:text-black border border-gray-200 rounded-xl px-4 py-2.5 bg-white transition-all shadow-sm hover:shadow"
          >
            Preview Page ↗
          </Link>
          <button
            onClick={handleReset}
            className="text-xs font-bold text-gray-400 hover:text-red-500 border border-gray-200 hover:border-red-200 rounded-xl px-4 py-2.5 bg-white transition-all shadow-sm hover:shadow"
          >
            Reset Fields
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-black text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-[0.99]"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-right duration-300">
          <div
            className={`px-4 py-3.5 rounded-xl text-xs font-bold shadow-xl border ${
              toast.type === "success"
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      {/* Form Fields */}
      <div className="space-y-8 bg-white border border-gray-200/80 p-8 rounded-2xl shadow-sm">
        {pageConfig.fields.map((field) => (
          <div key={field.key} className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label
                htmlFor={`field-${field.key}`}
                className="block text-xs font-bold text-black uppercase tracking-wider"
              >
                {field.label}
              </label>
              <span className="text-[10px] text-gray-400 font-mono">
                {field.key}
              </span>
            </div>
            
            {field.type === "textarea" ? (
              <textarea
                id={`field-${field.key}`}
                value={fields[field.key] || ""}
                onChange={(e) => handleFieldChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={4}
                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all placeholder:text-gray-300 resize-y leading-relaxed"
              />
            ) : (
              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <input
                    id={`field-${field.key}`}
                    type="text"
                    value={fields[field.key] || ""}
                    onChange={(e) => handleFieldChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="flex-1 px-4 py-3.5 border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all placeholder:text-gray-300 font-medium"
                  />
                  {field.key.includes("image") && (
                    <label className="cursor-pointer shrink-0 bg-gray-100 hover:bg-black hover:text-white border border-gray-200 hover:border-black text-black px-4 py-3.5 rounded-xl text-xs font-bold transition-all shadow-sm">
                      Upload File
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // Check file size (limit to 3MB to prevent DB overhead)
                            if (file.size > 3 * 1024 * 1024) {
                              alert("Image is too large. Please select an image under 3MB.");
                              return;
                            }
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              if (typeof reader.result === "string") {
                                handleFieldChange(field.key, reader.result);
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
                {field.key.includes("image") && (
                  <div className="mt-2 border border-gray-150 rounded-xl p-3 bg-gray-50/50 max-w-sm">
                    <p className="text-[9px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Live Image Preview</p>
                    <div className="relative h-32 w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200/50 flex items-center justify-center">
                      <img
                        src={fields[field.key] || field.placeholder}
                        alt={`${field.label} preview`}
                        className="object-contain max-h-full max-w-full"
                        onError={(e) => {
                          // Standard fallback image when path is invalid
                          e.currentTarget.src = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop";
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <p className="text-[10px] text-gray-400 leading-normal pl-1">
              <span className="font-bold text-gray-500">Default fallback: </span>
              <span className="italic">{field.placeholder}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Save panel at bottom */}
      <div className="mt-8 flex items-center justify-between bg-gray-50 border border-gray-200/80 p-6 rounded-2xl shadow-sm">
        <p className="text-xs text-gray-400 font-medium">
          Leave input blank to instantly use the default placeholder.
        </p>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-black text-white px-8 py-3.5 rounded-xl text-xs font-bold hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-[0.99]"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
