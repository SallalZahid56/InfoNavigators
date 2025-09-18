"use client";
import { CheckCircle } from "lucide-react";

export default function SeoTipsPage({ blog }) {
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

      {/* ✅ WHY SEO STILL MATTERS */}
      <Section title="Why SEO Still Matters in 2025">
        <Grid points={[
          "70% of online experiences begin with a search engine.",
          "Organic traffic is more cost-effective than paid ads.",
          "High-ranking websites gain trust and credibility in their industry.",
          "SEO is no longer optional—it’s essential for sustainable growth."
        ]}/>
      </Section>

      {/* ✅ KEY RANKING FACTORS */}
      <Section title="Key Ranking Factors in 2025">
        <Grid points={[
          "Content Quality & Relevance",
          "Search Intent Alignment",
          "Page Experience",
          "Backlinks & Authority",
          "Structured Data"
        ]}/>
      </Section>

      {/* ✅ ON-PAGE SEO */}
      <Section title="On-Page SEO in 2025">
        <List points={[
          "Writing keyword-rich title tags and meta descriptions.",
          "Using H1, H2, H3 headings strategically.",
          "Including LSI keywords (semantic terms) to improve topical depth.",
          "Adding internal links to related blog posts and pages.",
          "Optimizing images with alt text and compressed file sizes."
        ]}/>
      </Section>

      {/* ✅ TECHNICAL SEO */}
      <Section title="Technical SEO in 2025">
        <List points={[
          "Core Web Vitals (loading speed, interactivity, visual stability).",
          "Mobile-first optimization.",
          "XML sitemaps and robots.txt for proper indexing.",
          "HTTPS security (SSL certificates).",
          "Clean site architecture with proper URL structures."
        ]}/>
      </Section>

      {/* ✅ CONTENT MARKETING & EEAT */}
      <Section title="Content Marketing & EEAT">
        <List points={[
          "Demonstrate Experience (first-hand insights, case studies).",
          "Show Expertise (qualified authors, industry knowledge).",
          "Build Authoritativeness (backlinks, brand mentions, topical authority).",
          "Establish Trustworthiness (transparent sources, clear policies, safe browsing)."
        ]}/>
        <p className="mt-4 text-brandOrange font-semibold">✅ Pro Tip: Adding author bios, references, and updated statistics boosts EEAT.</p>
      </Section>

      {/* ✅ LINK BUILDING */}
      <Section title="Link Building in 2025">
        <List points={[
          "Guest posting on niche-relevant websites.",
          "Creating shareable content like infographics and original research.",
          "Digital PR campaigns to earn links from news outlets.",
          "Broken link building (finding and replacing dead links with your content)."
        ]}/>
      </Section>

      {/* ✅ LOCAL SEO */}
      <Section title="Local SEO in 2025">
        <List points={[
          "Optimize and update your Google Business Profile.",
          "Collect and respond to customer reviews.",
          "Use local keywords in titles and descriptions.",
          "Build local citations (business directories, maps, and listings)."
        ]}/>
      </Section>

      {/* ✅ VOICE SEARCH & AI */}
      <Section title="Voice Search & AI-Driven SEO">
        <List points={[
          "Target long-tail, conversational keywords.",
          "Use FAQ schema to answer voice queries.",
          "Ensure content is concise, clear, and easy to read."
        ]}/>
      </Section>

      {/* ✅ MEASURING SUCCESS */}
      <Section title="Measuring SEO Success in 2025">
        <List points={[
          "Organic traffic growth.",
          "Keyword rankings.",
          "Click-through rates (CTR).",
          "Backlink profile.",
          "User engagement metrics (time on page, bounce rate)."
        ]}/>
      </Section>
    </div>
  );
}

/* ✅ Small reusable UI helpers */
function Section({ title, children }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Grid({ points }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {points.map((point, i) => (
        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
          <CheckCircle className="text-brandOrange w-6 h-6" />
          <p className="text-gray-700">{point}</p>
        </div>
      ))}
    </div>
  );
}

function List({ points }) {
  return (
    <ul className="space-y-3 text-gray-700 max-w-3xl mx-auto">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle className="text-brandOrange w-5 h-5 mt-1" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
