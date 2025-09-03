"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import FinalCTA from "../../../components/FinalCTA";

const faqs = [
  {
    q: "What is the difference between On-Page and Off-Page SEO?",
    a: "On-page SEO involves content optimization, headings, and metadata, while Off-Page SEO Services focus on backlinks and authority.",
  },
  {
    q: "Do you optimize existing content or create new?",
    a: "Both. We refine your current pages and build new, keyword-rich content.",
  },
  {
    q: "How long until I see results?",
    a: "Typically 60–90 days, depending on your industry and competition.",
  },
  {
    q: "Can On-Page SEO help my e-commerce site?",
    a: "Yes! Our E-commerce SEO Services are tailored to optimize product pages and boost online sales.",
  },
];

const tools = [
  "Yoast SEO",
  "RankMath",
  "AIOSEO",
  "SurferSEO",
  "Screaming Frog",
  "Google Search Console",
];

const onPageSEOServices = [
  { title: "Metadata Optimization", desc: "Craft compelling title tags and meta descriptions with relevant SEO keywords." },
  { title: "Content Optimization", desc: "Ensure keyword-rich, structured, and reader-friendly pages using semantic keywords." },
  { title: "Heading Structure (H1, H2, H3)", desc: "Optimize headings for readability and search engine signals." },
  { title: "Internal Linking SEO", desc: "Improve site navigation, distribute authority, and boost ranking potential." },
  { title: "Image Optimization", desc: "Compress images and add SEO-friendly alt text for better accessibility and rankings." },
];

export default function OnPageSEOPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="font-sans">
      <Head>
        <title>On Page SEO Services | Info Navigators</title>
        <meta
          name="description"
          content="Professional On-Page SEO services by Info Navigators. Optimize metadata, headings, content, images, and internal linking to boost rankings, organic traffic, and conversions."
        />
        <meta
          name="keywords"
          content="on-page SEO, on-page SEO services, on-page SEO optimization, website SEO services, content optimization, SEO keywords, metadata optimization, internal linking SEO"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center text-white px-4 pt-24 sm:pt-28">
        <Image
          src="/seo-banner.jpeg"
          alt="On-Page SEO Services"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 leading-snug">
            On-Page SEO Services That Drive Higher Rankings
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            Expert on-page SEO services to optimize metadata, content, headings, internal linking, and images,
            helping your website rank higher, load faster, and convert more visitors.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading text-base sm:text-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Why On-Page SEO Matters */}
      <section className="py-12 md:py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">Why On-Page SEO Optimization Matters</h2>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base inline-block text-left">
            <li className="flex items-start gap-2">
              <FiCheckCircle className="text-brandOrange mt-1" /> Higher organic traffic
            </li>
            <li className="flex items-start gap-2">
              <FiCheckCircle className="text-brandOrange mt-1" /> Improved click-through rate (CTR)
            </li>
            <li className="flex items-start gap-2">
              <FiCheckCircle className="text-brandOrange mt-1" /> Increased dwell time & reduced bounce rates
            </li>
          </ul>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">Our Core On-Page SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onPageSEOServices.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-brandOrange">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 md:py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">Tools We Use for On-Page SEO</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Leveraging industry-leading tools to optimize metadata, content, and performance.
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

      {/* Case Studies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">Case Studies: On-Page SEO Success</h2>
          <div className="space-y-6">
            {[
              {
                title: "SaaS Business",
                desc: "Optimized metadata, headings, and internal linking, leading to a 72% traffic boost in 3 months.",
              },
              {
                title: "Local Business",
                desc: "Targeted on-page SEO improved schema markup and metadata, achieving #1 local rankings within 60 days.",
              },
            ].map((cs, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
                <h3 className="text-lg sm:text-xl font-bold text-brandOrange mb-2">{cs.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-center">FAQs – On-Page SEO Services</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50"
                >
                  <div className="font-semibold text-sm sm:text-base">{f.q}</div>
                  <div className="text-brandOrange font-bold">{openFAQ === i ? "−" : "+"}</div>
                </button>
                {openFAQ === i && (
                  <div className="p-4 bg-gray-50 text-gray-700 text-sm sm:text-base">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
