"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpfulContentEEAT2025() {

  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const faqs = [
    {
      q: "What happens if my site is hit by Google’s Helpful Content Update?",
      a: "Your rankings may decline if Google detects too much low-value content. Review analytics, prune weak pages, and rewrite others with unique insights.",
    },
    {
      q: "Can small websites still compete with large brands?",
      a: "Absolutely. Small sites can leverage speed, niche focus, and first-hand experience to outshine larger competitors.",
    },
    {
      q: "How long does it take to recover after fixing content?",
      a: "Typically 2–3 months for Google to reassess your site quality, but faster if you make major improvements.",
    },
    {
      q: "Can I use AI tools for writing?",
      a: "Yes — but ensure human editing, fact-checking, and experience-driven context to meet E-E-A-T requirements.",
    },
    {
      q: "How can internal linking help SEO?",
      a: "Internal linking between Lead Generation, B2B Leads, and Email Marketing pages helps Google understand topic relationships and increases your site’s authority.",
    },
  ];

  return (
    <article className="bg-white text-gray-800 leading-relaxed">
      {/* ✅ HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white mt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/11th-blog.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl px-6 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Google’s Helpful Content Update & E-E-A-T in 2025:
            <span className="text-brandOrange block">
              How AI Is Transforming Internet Research and Lead Generation
            </span>
          </h1>
          <p className="text-lg text-gray-200">
            A complete guide on adapting your content strategy to Google’s
            evolving algorithms while maintaining authenticity, quality, and
            user satisfaction.
          </p>
        </div>
      </section>

      {/* ✅ INTRODUCTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
        <p className="mb-4">
          Ioogle’s ranking systems evolve constantly — and two of the biggest game-changers for small websites are the Helpful Content Update (HCU) and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
        </p>
        <p>
          If your website’s traffic dropped suddenly, or if your pages no longer rank despite solid keyword optimization, you’re not alone. Thousands of small websites have seen similar effects due to these updates.
        </p>
      </section>

      {/* ✅ SECTION 1: WHAT IS HELPFUL CONTENT */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Understanding Google’s Helpful Content Update
            </h2>
            <p className="mb-4">
              Google’s Helpful Content Update was first introduced in 2022 and has since been improved multiple times (including major rollouts in 2023–2025).
              The goal? To reward people-first content and demote pages that seem written for algorithms rather than humans.
            </p>
            <ul className="space-y-3">
              {[
                "WWhat It Means for Small Websites:",
                "Does this page genuinely help users, or was it created mainly to get clicks?",
                "Thin, repetitive, or AI-stuffed articles",
                "Content without personal insight or real examples",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80">
            <Image
              src="/google-content.jpeg"
              alt="Helpful Content Update illustration"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ✅ SECTION 2: E-E-A-T */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            What Is <span className="text-brandOrange">E-E-A-T</span> and Why It Matters More Than Ever
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            E-E-A-T stands for <strong>Experience, Expertise, Authoritativeness, and Trustworthiness.</strong><br />
            It’s not a direct ranking factor — but it’s the foundation Google’s evaluators use to decide whether your content deserves visibility.
          </p>

          {/* Breakdown Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[{
              title: "Experience",
              desc: "Does the content come from real-world knowledge or first-hand experience?",
              example: (
                <>
                  Example: A blog about LinkedIn outreach written by someone who’s actually done{" "}
                  <Link
                    href="/services-page/linkedin-list"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    LinkedIn List Building
                  </Link>.
                </>
              ),
            },
            {
              title: "Expertise",
              desc: "is the author qualified to talk about the subject?",
              example: (
                <>
                  Example: If you write about lead generation, showcase results from your <Link
                    href="/services-page/lead-generation"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Lead Generation
                  </Link>. campaigns.{" "}
                </>
              ),
            },
            {
              title: "Authoritativeness",
              desc: "Do others trust your brand?",
              example:
                "Earned through backlinks, citations, and mentions on reputable sites.",
            },
            {
              title: "Trustworthiness",
              desc: "Is your content honest, accurate, and transparent?",
              example:
                "Ensure clear contact info, privacy policy, and updated references.",
            },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-2 text-brandOrange">{item.title}</h3>
                <p className="text-gray-700 mb-2">{item.desc}</p>
                <p className="text-sm text-gray-500 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ SECTION 3: Why Small Websites Are Hit Hard */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why These Updates Hit <span className="text-brandOrange">Small Websites</span> Hard
          </h2>

          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Smaller websites are often more vulnerable because they lack authority and brand signals Google values most.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Common Weaknesses</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Lack an established brand presence",
                  "Fewer backlinks or mentions from trusted sources",
                  "Publishing generic or AI-generated content",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brandOrange text-lg mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Common Signs You’ve Been Affected</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Sudden drop in traffic after an update",
                  "Pages indexed but not ranking",
                  "Old content losing impressions",
                  "‘Helpful content’ warnings in Search Console",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brandOrange text-lg mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-brandOrange/10 border-l-4 border-brandOrange rounded-xl p-6 text-gray-800">
            <p className="text-lg">
              The key issue isn’t necessarily <strong>penalties</strong> — it’s <strong>devaluation</strong>.
              Google doesn’t “punish” you — it simply prefers showing others instead.
            </p>
          </div>
        </div>
      </section>


      {/* HOW TO RECOVER */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-8 text-brandOrange"
          >
            How to Recover: Step-by-Step Strategy
          </motion.h2>

          <div className="space-y-10 text-lg">
            <div>
              <h3 className="font-semibold text-2xl mb-2">
                Step 1: Audit and Clean Up Low-Quality Content
              </h3>
              <p>Remove or merge:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pages with &lt;400 words and no backlinks</li>
                <li>Blog posts that don’t bring traffic or conversions</li>
                <li>Outdated listicles or duplicated guides</li>
              </ul>
              <p className="mt-2">
                Use tools like <strong>Ahrefs, SurferSEO, or Google Search Console</strong> to analyze which pages drag down your site’s average performance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-2">
                Step 2: Focus on “People-First” Content
              </h3>
              <p>
                When creating new content, focus on solving real user problems — not just fitting in keywords.
              </p>
              <blockquote className="border-l-4 border-brandOrange pl-4 italic mt-2">
                Example: Instead of writing “Top Email Marketing Tools in 2025”, write “How Small Businesses Can Automate Cold Outreach Using Email Marketing Tools Like Apollo & Snov.io”.
              </blockquote>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-2">
                Step 3: Show Experience and Authority
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Add author names and short bios (showing expertise)</li>
                <li>Include real data, screenshots, or case studies</li>
                <li>Show testimonials or stats from actual clients</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-2">
                Step 4: Strengthen Internal Linking and Site Structure
              </h3>
              <p>
                Use internal links to form topic clusters:
              </p>
              <ul className="list-disc pl-6">
                <li>List-building → Contact Email List Building</li>
                <li>Lead generation → B2B Leads</li>
                <li>Marketing strategy → Email Marketing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-2">
                Step 5: Improve “About,” “Contact,” and “Service” Pages
              </h3>
              <p>Make sure they are detailed, updated, and linked in main navigation.</p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-2">
                Step 6: Use the Right Tools for SEO & Contact List Building
              </h3>
              <table className="w-full border border-gray-300 text-left text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3">Category</th>
                    <th className="p-3">Tools to Use</th>
                    <th className="p-3">Why They Help</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Lead Generation</td>
                    <td className="p-3">Apollo.io, Snov.io, Seamless.ai</td>
                    <td className="p-3">Build verified leads for cold outreach</td>
                  </tr>
                  <tr>
                    <td className="p-3">Contact Email List Building</td>
                    <td className="p-3">Hunter.io, RocketReach, Lusha</td>
                    <td className="p-3">Verify professional emails with high accuracy</td>
                  </tr>
                  <tr>
                    <td className="p-3">CRM & Automation</td>
                    <td className="p-3">HubSpot, Zoho, Pipedrive</td>
                    <td className="p-3">Track customer touchpoints</td>
                  </tr>
                  <tr>
                    <td className="p-3">SEO Optimization</td>
                    <td className="p-3">Ahrefs, SEMrush, SurferSEO</td>
                    <td className="p-3">Identify low-performing pages</td>
                  </tr>
                  <tr>
                    <td className="p-3">Outreach Marketing</td>
                    <td className="p-3">Lemlist, Instantly.ai, Woodpecker</td>
                    <td className="p-3">Automate LinkedIn and email campaigns</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* BUILDING E-E-A-T */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-brandOrange">
          Building E-E-A-T Naturally
        </h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Element</th>
              <th className="p-3">How to Implement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">Experience</td>
              <td className="p-3">
                Share personal case studies and results from your campaigns.
              </td>
            </tr>
            <tr>
              <td className="p-3">Expertise</td>
              <td className="p-3">
                Add author bios showing relevant qualifications or industry experience.
              </td>
            </tr>
            <tr>
              <td className="p-3">Authoritativeness</td>
              <td className="p-3">
                Earn backlinks by contributing to guest blogs or podcasts.
              </td>
            </tr>
            <tr>
              <td className="p-3">Trustworthiness</td>
              <td className="p-3">
                Keep policies transparent, use HTTPS, and cite data sources.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center text-brandOrange">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-300 rounded-lg">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="flex justify-between w-full p-4 text-left font-medium text-lg"
                >
                  {faq.q}
                  <ChevronDown
                    className={`transition-transform ${openFAQ === i ? "rotate-180 text-brandOrange" : ""
                      }`}
                  />
                </button>
                {openFAQ === i && (
                  <div className="p-4 pt-0 text-gray-700">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
