"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * B2B Lead Generation page (full content integrated exactly as provided)
 * - Alternating image/text layout for early sections
 * - All sections from your content included (Strategies, Tools, Mistakes, KPIs, Why InfoNav, Final Thoughts)
 * - FAQ accordion + JSON-LD schema included
 *
 * Save as: B2BLeadGeneration2025.jsx (or .tsx) and import/use in your Next.js route.
 */

const PillButton = ({ children }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all">
    {children}
  </button>
);

export default function B2BLeadGeneration2025() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: "What is B2B lead generation?",
      a:
        "B2B lead generation is the process of identifying and attracting businesses that are likely to become your customers. It involves collecting accurate contact data, nurturing relationships, and converting potential clients into qualified leads. Our Lead Generation Services are designed to help companies build consistent pipelines using verified B2B data.",
    },
    {
      q: "What are the best tools for building a contact email list?",
      a:
        "Some of the most reliable tools for building verified B2B contact email lists in 2025 include Apollo.io, Snov.io, Seamless.ai, Hunter.io, RocketReach, and Lusha. These tools help marketers find, verify, and segment leads efficiently. You can also explore our Contact Email List Building Service for custom, human-verified email lists.",
    },
    {
      q: "How does LinkedIn help in B2B lead generation?",
      a:
        "LinkedIn is one of the most powerful platforms for finding and engaging with B2B decision-makers. Through advanced search filters, group interactions, and personalized messaging, you can connect with high-intent prospects. Our LinkedIn List Building Service helps you create precise lists of verified contacts for targeted outreach.",
    },
    {
      q: "What’s the difference between inbound and outbound B2B lead generation?",
      a:
        "Inbound lead generation attracts prospects through valuable content (blogs, SEO, webinars), while outbound lead generation involves direct outreach such as cold emailing or calling. A mix of both strategies, supported by our B2B Leads Services, ensures higher conversion rates and faster pipeline growth.",
    },
    {
      q: "How can email marketing improve my B2B sales?",
      a:
        "Email marketing helps businesses nurture leads, build trust, and convert them into customers through automated and personalized campaigns. By using advanced segmentation and drip campaigns, your conversions increase significantly. Learn more about our Email Marketing Services designed to help you convert cold leads into loyal clients.",
    },
    {
      q: "What are some proven strategies for B2B lead generation in 2025?",
      a:
        "Personalizing outreach through AI-driven data tools, building verified email lists with platforms like Apollo or Snov.io, leveraging LinkedIn for decision-maker targeting, using email automation and CRM integrations, and offering valuable gated content such as eBooks and reports. If you want a complete lead funnel setup, our Lead Generation experts can handle everything for you — from list building to conversion tracking.",
    },
    {
      q: "Why should I choose InfoNav for B2B lead generation?",
      a:
        "InfoNav specializes in end-to-end lead generation, offering a full suite of services including Lead Generation, B2B Leads, LinkedIn List Building, Email Marketing, and Contact Email List Building. Our team uses both automation tools and manual verification to ensure you get only qualified, accurate leads ready to convert.",
    },
    {
      q: "How can I measure the success of my lead generation campaign?",
      a:
        "You can measure success through KPIs such as number of qualified leads generated, conversion rate per campaign, cost per lead (CPL), email open and response rates, and ROI from closed deals. Our B2B Leads Services include in-depth analytics to help you track and optimize every campaign for better results.",
    },
  ];

  // JSON-LD provided by you (FAQ schema)
  const faqJsonLd = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B2B lead generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B2B lead generation is the process of identifying and attracting businesses that are likely to become your customers. It involves collecting accurate contact data, nurturing relationships, and converting potential clients into qualified leads. InfoNav’s Lead Generation Services are designed to help companies build consistent pipelines using verified B2B data."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best tools for building a contact email list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some of the most reliable tools for building verified B2B contact email lists in 2025 include Apollo.io, Snov.io, Seamless.ai, Hunter.io, RocketReach, and Lusha. These tools help marketers find, verify, and segment leads efficiently. You can also explore InfoNav’s Contact Email List Building Service for custom, human-verified email lists."
      }
    },
    {
      "@type": "Question",
      "name": "How does LinkedIn help in B2B lead generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LinkedIn is one of the most powerful platforms for finding and engaging with B2B decision-makers. Through advanced search filters, group interactions, and personalized messaging, you can connect with high-intent prospects. InfoNav’s LinkedIn List Building Service helps you create precise lists of verified contacts for targeted outreach."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the difference between inbound and outbound B2B lead generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inbound lead generation attracts prospects through valuable content such as blogs, SEO, and webinars, while outbound lead generation involves direct outreach such as cold emailing or calling. A mix of both strategies, supported by InfoNav’s B2B Leads Services, ensures higher conversion rates and faster pipeline growth."
      }
    },
    {
      "@type": "Question",
      "name": "How can email marketing improve my B2B sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email marketing helps businesses nurture leads, build trust, and convert them into customers through automated and personalized campaigns. By using advanced segmentation and drip campaigns, your conversions increase significantly. InfoNav’s Email Marketing Services are designed to help you convert cold leads into loyal clients."
      }
    },
    {
      "@type": "Question",
      "name": "What are some proven strategies for B2B lead generation in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some proven B2B lead generation strategies in 2025 include personalizing outreach using AI-driven data tools, building verified email lists with platforms like Apollo or Snov.io, leveraging LinkedIn for decision-maker targeting, using email automation and CRM integrations, and offering valuable gated content such as eBooks and reports. InfoNav’s Lead Generation experts can handle everything — from list building to conversion tracking."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I choose InfoNav for B2B lead generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfoNav specializes in end-to-end lead generation, offering a full suite of services including Lead Generation, B2B Leads, LinkedIn List Building, Email Marketing, and Contact Email List Building. Our team uses both automation tools and manual verification to ensure you get only qualified, accurate leads ready to convert."
      }
    },
    {
      "@type": "Question",
      "name": "How can I measure the success of my lead generation campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can measure success through KPIs such as number of qualified leads generated, conversion rate per campaign, cost per lead (CPL), email open and response rates, and ROI from closed deals. InfoNav’s B2B Leads Services include in-depth analytics to help you track and optimize every campaign for better results."
      }
    }
  ]
}`;

  return (
    <>
      <Head>
        <title>Proven B2B Lead Generation Strategies for 2025 | InfoNav</title>
        <meta
          name="description"
          content="Discover actionable B2B lead generation strategies for 2025 — from LinkedIn list building to email marketing tools like Apollo, Snov.io, and Seamless.ai. Learn how InfoNav helps you grow."
        />
        <meta
          name="keywords"
          content="B2B Lead Generation, Lead Generation 2025, LinkedIn List Building, Contact Email List Building, Email Marketing Tools, Apollo.io, Snov.io, Seamless.ai"
        />
        <script
          type="application/ld+json"
          // JSON-LD from your provided content
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      </Head>

      {/* HERO */}
      <section
        className="relative h-[100vh] flex items-center justify-center text-center text-white"
        aria-label="Hero - Proven B2B Lead Generation Strategies"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Proven B2B Lead Generation Strategies for 2025: Build Stronger Pipelines
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Discover actionable B2B lead generation strategies for 2025 — from LinkedIn list building to email marketing tools like Apollo, Snov.io, and Seamless.ai. Learn how InfoNav helps you grow.
          </p>
        </motion.div>
      </section>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-gray-700">
        {/* 1. What Is B2B Lead Generation? (text left, image right) */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">1. What Is B2B Lead Generation?</h2>
            <p>
              B2B Lead Generation is the process of finding potential business customers and converting them into qualified sales leads. These are companies or decision-makers genuinely interested in your solutions.
              In 2025, successful Lead Generation relies on data-driven strategies, automation, and personalization — not mass outreach. Businesses that master this balance achieve faster pipelines and higher ROI.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/b2b-leads.png"
              alt="What is B2B Lead Generation"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* 2. Define Your Ideal Customer & Lead Qualification (image left, text right) */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/ideal-customer.webp"
              alt="Define Ideal Customer"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">2. Define Your Ideal Customer & Lead Qualification</h2>
            <p>
              Before reaching out, you need clarity on who you’re targeting. Build an Ideal Customer Profile (ICP) based on:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Industry</li>
              <li>Company size</li>
              <li>Job title or decision-making power</li>
              <li>Pain points and budget</li>
            </ul>
            <p className="mt-4">
              Once identified, segment them into:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Marketing Qualified Leads (MQLs) — interested, but not ready to buy.</li>
              <li>Sales Qualified Leads (SQLs) — actively exploring or ready for contact.</li>
            </ul>
            <p className="mt-4">
              When this foundation is strong, every tactic that follows — from B2B Leads to Email Marketing — works better.
            </p>
          </div>
        </section>

        {/* 3. 9 Proven Strategies (text left, image right) */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">3. 9 Proven Strategies to Generate B2B Leads</h2>

            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Content Marketing & Thought Leadership</strong>
                <p className="mt-1">
                  Publish data-driven blogs, whitepapers, and reports that solve your target audience’s problems.
                  This builds trust and attracts inbound leads. Use strong calls-to-action (CTAs) to collect email addresses, fueling your Contact Email List Building campaigns.
                </p>
              </li>

              <li>
                <strong>Webinars & Case Studies</strong>
                <p className="mt-1">
                  Host educational webinars or share real-world case studies that demonstrate value. Gate them behind forms to collect verified business emails.
                  This approach naturally feeds into Email Marketing automation sequences.
                </p>
              </li>

              <li>
                <strong>Visitor Identification & IP Tracking</strong>
                <p className="mt-1">
                  Use tools like Leadfeeder, Albacross, or Clearbit Reveal to identify anonymous visitors.
                  Turn those insights into actionable outreach lists — ideal for nurturing B2B Leads.
                </p>
              </li>

              <li>
                <strong>LinkedIn List Building</strong>
                <p className="mt-1">
                  LinkedIn remains the #1 channel for B2B connections.
                  Use Sales Navigator, LinkedIn Filters, and automation tools to find your ideal prospects.
                  At InfoNav’s LinkedIn List Building service, we craft verified LinkedIn-based contact lists to ensure outreach accuracy.
                </p>
              </li>

              <li>
                <strong>Email Marketing & Nurturing</strong>
                <p className="mt-1">
                  Once you’ve gathered leads, nurture them through personalized campaigns.
                  Segment your list, tailor content to their buyer stage, and use automation platforms like HubSpot, Mailchimp, or ActiveCampaign to convert cold leads into warm ones.
                </p>
              </li>

              <li>
                <strong>Paid Advertising & Retargeting</strong>
                <p className="mt-1">
                  Run laser-targeted ads on LinkedIn, Google, and Meta.
                  Use retargeting to re-engage website visitors — a simple but powerful tactic that complements your Lead Generation campaigns.
                </p>
              </li>

              <li>
                <strong>Partnerships & Guest Posting</strong>
                <p className="mt-1">
                  Collaborate with industry influencers or complementary businesses to expand your reach and authority.
                  High-value backlinks also boost your domain authority and support long-term SEO.
                </p>
              </li>

              <li>
                <strong>Account-Based Marketing (ABM)</strong>
                <p className="mt-1">
                  Focus your marketing efforts on a curated list of high-value target accounts.
                  ABM tools like Demandbase and Terminus help personalize ads, emails, and touchpoints for specific decision-makers.
                </p>
              </li>

              <li>
                <strong>AI and Automation in Lead Generation</strong>
                <p className="mt-1">
                  Use AI-driven platforms like ChatGPT (for personalization), Seamless.ai (for data), or Clay (for outreach automation) to streamline and scale B2B lead generation efforts.
                </p>
              </li>
            </ol>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
              alt="B2B strategies"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* 4. Best Tools for Contact Email List Building (image left, text right) */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80"
              alt="Tools for contact list building"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">4. Best Tools for Contact Email List Building</h2>

            <p>Here’s where technology truly makes a difference. Building accurate, verified contact lists ensures your campaigns don’t waste effort or budget.</p>

            <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700">
              <li>
                <strong>Apollo.io</strong>
                <div>A full-suite sales intelligence tool offering verified B2B contact data, email enrichment, and outreach automation. You can filter by industry, company size, or role to find the perfect leads.</div>
              </li>

              <li>
                <strong>Snov.io</strong>
                <div>Great for smaller teams, Snov.io helps with email finding, domain searches, and verification. It integrates with CRMs and supports drip campaigns — ideal for Email Marketing.</div>
              </li>

              <li>
                <strong>Seamless.ai</strong>
                <div>An AI-powered platform that continuously updates B2B contact data. It’s perfect for Contact Email List Building because it focuses on accuracy and integrates with LinkedIn and Salesforce.</div>
              </li>

              <li>
                <strong>Hunter.io</strong>
                <div>Used for domain-based email searches. You can find company emails, verify them, and export clean lists directly into your CRM.</div>
              </li>

              <li>
                <strong>RocketReach</strong>
                <div>Helps find verified business emails, phone numbers, and social profiles from a single dashboard.</div>
              </li>

              <li>
                <strong>Lusha</strong>
                <div>Trusted for GDPR-compliant B2B contact data enrichment. It’s especially useful for outreach teams doing LinkedIn List Building.</div>
              </li>

              <li>
                <strong>InfoNav’s Custom Email List Building</strong>
                <div>Our team at InfoNav combines these advanced tools with human verification to create high-quality, targeted contact lists that deliver real results — ensuring every campaign hits the right inbox.</div>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Common Mistakes to Avoid */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold mb-4">5. Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Sending bulk, non-personalized emails</li>
            <li>Using unverified or outdated data</li>
            <li>Ignoring follow-up sequences</li>
            <li>Not integrating CRM and marketing tools</li>
            <li>Failing to measure and refine campaigns</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Even a great strategy fails without data hygiene and smart automation.
          </p>
        </section>

        {/* 6. How to Measure & Scale Your Lead Generation */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">6. How to Measure & Scale Your Lead Generation</h2>
            <p className="mb-4">Track these KPIs for consistent growth:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Conversion rate (visitor → lead → sale)</li>
              <li>Cost per lead (CPL)</li>
              <li>Engagement rate (email opens, CTRs)</li>
              <li>Pipeline value</li>
              <li>Source performance (LinkedIn, email, ads)</li>
            </ul>
            <p className="mt-4">
              Tools like HubSpot, Zoho, or Google Analytics 4 make it easy to visualize your ROI.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/tech-lead-generation.png"
              alt="Measure and scale lead generation"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* 7. Why InfoNav’s Services Can Help */}
        <section className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-4">7. Why InfoNav’s Services Can Help</h2>

          <p className="mb-4">
            At InfoNav, we combine data, tools, and strategy to deliver full-cycle lead generation:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>✅ Lead Generation: Custom-built B2B funnels tailored to your audience.</li>
            <li>✅ B2B Leads: Verified business leads ready for sales outreach.</li>
            <li>✅ Contact Email List Building: Human-verified and tool-supported data lists.</li>
            <li>✅ LinkedIn List Building: Curated LinkedIn contacts with job titles and company info.</li>
            <li>✅ Email Marketing: Automated, segmented, and conversion-focused campaigns.</li>
          </ul>

          <p className="mt-4">
            With the right strategy and execution, InfoNav helps your business grow predictably and profitably.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions (FAQs)</h2>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-800">{f.q}</span>
                  <span className="text-2xl text-blue-600">{openFAQ === idx ? "−" : "+"}</span>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === idx ? "auto" : 0,
                    opacity: openFAQ === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.28 }}
                  className="px-6 pb-5 text-gray-600"
                >
                  <p>{f.a}</p>
                </motion.div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
