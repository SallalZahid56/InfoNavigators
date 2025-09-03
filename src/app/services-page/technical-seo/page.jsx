"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import FinalCTA from "../../../components/FinalCTA";

const TechnicalSEOPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      q: "What’s the difference between Technical SEO and Off-Page SEO?",
      a: "Technical SEO improves site performance, speed, and indexing, while Off-Page SEO builds authority through backlinks and PR.",
    },
    {
      q: "Do you optimize Core Web Vitals?",
      a: "Yes. We optimize LCP, CLS, and FID for better rankings and user experience.",
    },
    {
      q: "How often should I get a Technical SEO audit?",
      a: "At least twice a year, or before/after a major website redesign.",
    },
    {
      q: "Can you help with international site optimization?",
      a: "Absolutely. We provide hreflang implementation as part of International SEO Services.",
    },
  ];

  const tools = [
    "Google Search Console",
    "Screaming Frog SEO Spider",
    "GTmetrix & PageSpeed Insights",
    "Ahrefs & SEMrush",
    "Schema.org & JSON-LD",
  ];

  const coreServices = [
    {
      title: "Website SEO Audits",
      desc: "Comprehensive audits to identify technical gaps and deliver actionable solutions.",
    },
    {
      title: "Website Speed Optimization",
      desc: "Improve page load speed with caching, image optimization, and code enhancements.",
    },
    {
      title: "Mobile SEO Optimization",
      desc: "Ensure your site is fully optimized for mobile devices with mobile-first indexing.",
    },
    {
      title: "Crawlability & Indexation",
      desc: "Fix robots.txt, XML sitemaps, canonical tags, and redirects for proper crawling.",
    },
    {
      title: "Structured Data & Schema Markup SEO",
      desc: "Implement schema markup for rich snippets, improving CTR in search results.",
    },
    {
      title: "Core Web Vitals Optimization",
      desc: "Optimize LCP, CLS, and FID metrics to meet Google's ranking signals.",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Store",
      desc: "After optimizing Core Web Vitals and mobile SEO, the store saw a 45% increase in organic conversions in 90 days.",
    },
    {
      title: "SaaS Company",
      desc: "By fixing crawl errors, duplicate content, and schema markup, we boosted impressions by 73% in 6 months.",
    },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>Technical SEO Services | Info Navigators</title>
        <meta
          name="description"
          content="Improve site performance, speed, and crawlability with our expert Technical SEO services. Info Navigators ensures your website is optimized for search engines and users."
        />
        <meta
          name="keywords"
          content="technical SEO, technical SEO services, technical SEO optimization, website speed optimization, SEO site audit, crawlability optimization, structured data SEO, schema markup SEO, mobile SEO optimization, SEO technical audit, technical SEO company"
        />
      </Head>

      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
        <Image
          src="/seo-banner.jpeg"
          alt="Technical SEO Services"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 leading-snug">
            Technical SEO Services to Power Your Website Performance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            Enhance your website’s performance, structure, and crawlability. Our
            technical SEO experts ensure search engines can crawl, index, and
            rank your site without barriers.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading text-base sm:text-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* WHY TECHNICAL SEO */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-10">
            Why Technical SEO Optimization Matters
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li>✅ Improves site speed & performance</li>
            <li>✅ Ensures mobile-first indexing</li>
            <li>✅ Boosts crawlability & indexation</li>
            <li>✅ Enhances user experience (UX)</li>
            <li>✅ Strengthens ranking potential for competitive keywords</li>
          </ul>
        </div>
      </section>

      {/* CORE TECHNICAL SEO SERVICES */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">
            Core Technical SEO Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-brandOrange">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
            Tools We Use for Technical SEO
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Combining technical audits with the best SEO tools to optimize your
            website.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="bg-gray-100 px-3 py-2 rounded-full font-semibold text-gray-700 shadow text-sm sm:text-base"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">
            Case Studies: Technical SEO in Action
          </h2>
          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl font-bold text-brandOrange mb-2">
                  {cs.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-center">
            FAQs – Technical SEO Services
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50"
                >
                  <div className="font-semibold text-sm sm:text-base">
                    {f.q}
                  </div>
                  <div className="text-brandOrange font-bold">
                    {faqOpen === i ? "−" : "+"}
                  </div>
                </button>
                {faqOpen === i && (
                  <div className="p-4 bg-gray-50 text-gray-700 text-sm sm:text-base">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default TechnicalSEOPage;
