"use client";
import { CheckCircle } from "lucide-react";

export default function SeoBoostTipsPage({ blog }) {
  const tips = [
    {
      title: "Focus on High-Quality, Helpful Content",
      description: `Google’s Helpful Content Update emphasizes content written for people—not search engines. Create content with EEAT: expertise, experience, and trustworthiness.`,
      proTip: "Avoid thin or duplicate content. Invest in long-form posts, case studies, and FAQs.",
    },
    {
      title: "Optimize for Search Intent",
      description: `Every keyword reflects a user’s search intent: informational, navigational, transactional. Matching your content improves engagement and conversions.`,
      proTip: "Use SEMrush, Ahrefs, or GSC to analyze intent and identify gaps.",
    },
    {
      title: "Improve Website Speed & Core Web Vitals",
      description: `Google ranks sites that are fast and stable. Optimize LCP, FID, and CLS.`,
      proTip: "Use lazy loading, compress images, and a reliable CDN.",
    },
    {
      title: "Use Structured Data (Schema Markup)",
      description: `Schema helps Google understand your content and show rich snippets.`,
      proTip: "Validate with Schema.org or Google’s Rich Results Test.",
    },
    {
      title: "Optimize On-Page SEO Elements",
      description: `Titles, meta descriptions, H1-H3 headings, and semantic keywords are still powerful signals.`,
      proTip: "Write for humans, optimize for search engines.",
    },
    {
      title: "Build Topical Authority with Internal Linking",
      description: `Pillar content + internal linking signals depth and authority.`,
      proTip: "Use descriptive anchor text instead of “click here.”",
    },
    {
      title: "Leverage AI and SEO Tools",
      description: `AI platforms like SurferSEO, SEMrush, and Ahrefs improve keyword research and content optimization.`,
      proTip: "Combine AI insights with human expertise.",
    },
    {
      title: "Prioritize Mobile-First Optimization",
      description: `Most searches are mobile. Responsive design is non-negotiable.`,
      proTip: "Run Google’s Mobile-Friendly Test to fix usability issues.",
    },
    {
      title: "Invest in High-Quality Backlinks",
      description: `Focus on authoritative, niche-relevant links over quantity.`,
      proTip: "Publish original research & collaborate with influencers.",
    },
    {
      title: "Track Performance and Update Regularly",
      description: `SEO is ongoing. Track, measure, and improve continuously.`,
      proTip: "Update older posts with fresh data and keywords.",
    },
  ];

  return (
    <div className="font-sans">
      {/* ✅ HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-24 px-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
            {blog.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">{blog.description}</p>
        </div>
      </section>

      {/* ✅ INTRO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-gray-700">
          <p className="mb-6">
            Search engine optimization (SEO) is no longer just about inserting keywords—it’s
            about creating value for users while aligning with Google’s ever-evolving algorithms.
          </p>
          <p>
            Below are <strong>10 proven SEO tips</strong> to boost rankings in 2025, crafted with
            Google’s latest updates, EEAT signals, and ranking factors in mind.
          </p>
        </div>
      </section>

      {/* ✅ TIPS LIST */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            10 SEO Tips for 2025
          </h2>
          <div className="grid gap-8">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="p-6 rounded-xl shadow bg-gray-50 hover:shadow-md transition"
              >
                <h3 className="flex items-center gap-3 text-xl font-semibold mb-2 text-brandOrange">
                  <CheckCircle className="w-6 h-6" /> {i + 1}. {tip.title}
                </h3>
                <p className="text-gray-700 mb-2">{tip.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>✅ Pro Tip:</strong> {tip.proTip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
