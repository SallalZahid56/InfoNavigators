"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Globe,
  FileText,
  Users,
  Database,
  BarChart2,
  Briefcase,
} from "lucide-react";
import FinalCTA from "../../../components/FinalCTA";

export default function SEOPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  const coreServices = [
    { title: "On-Page SEO Services", desc: "Improve metadata, headings, content and internal linking to maximize visibility.", icon: FileText },
    { title: "Off-Page SEO Services", desc: "Build authority with high-quality backlinks, outreach and digital PR.", icon: Users },
    { title: "Technical SEO Services", desc: "Fix crawl errors, boost site speed, mobile optimization and structured data.", icon: Database },
    { title: "Local SEO Services", desc: "Optimize Google Business Profile, local listings and maps visibility.", icon: Globe },
    { title: "E-commerce SEO Services", desc: "Optimize product listings, categories and site navigation for conversions.", icon: Briefcase },
    { title: "International SEO Services", desc: "Multilingual SEO, hreflang and geo-targeted strategies for global reach.", icon: BarChart2 },
  ];

  const tools = [
    "Ahrefs",
    "SEMrush",
    "Moz",
    "Screaming Frog",
    "Sitebulb",
    "SurferSEO",
    "Clearscope",
    "Google Analytics",
    "Search Console",
    "Yoast / RankMath",
  ];

  const industries = [
    "SaaS & IT Companies",
    "E-commerce & Retail Stores",
    "Healthcare & Medical Practices",
    "Real Estate & Local Businesses",
    "Financial Services & CPA Firms",
  ];

  const caseStudies = [
    {
      title: "Case Study 1 – SaaS Business",
      desc: "Technical SEO work increased organic traffic by 150% in 6 months.",
    },
    {
      title: "Case Study 2 – E-commerce Brand (Europe)",
      desc: "Tailored e-commerce SEO lifted conversions 40% and added ~$200K revenue in a quarter.",
    },
  ];

  const faqs = [
    {
      q: "Which SEO service is best for my business?",
      a: "If you need global reach choose International SEO. For local visibility start with Local SEO. We’ll advise based on audit findings.",
    },
    {
      q: "How long does SEO take?",
      a: "Most clients see measurable results in 3–6 months, depending on competition and site health.",
    },
    {
      q: "Do you provide SEO for e-commerce websites?",
      a: "Yes — we optimize product pages, categories, structured data and site navigation for higher conversions.",
    },
    {
      q: "Can you fix technical SEO issues?",
      a: "Absolutely. Our technical team handles crawl errors, speed, indexing, and schema implementation.",
    },
    {
      q: "What makes Info Navigators different?",
      a: "15+ years experience, advanced tools, transparent reporting and affordable, growth-focused SEO packages.",
    },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>SEO Services for Businesses | Rank Higher & Get More Traffic</title>
        <meta
          name="description"
          content="Info Navigators offers expert SEO services to help businesses rank higher on Google, drive organic traffic, and generate qualified leads worldwide."
        />
        <meta
          name="keywords"
          content="SEO services, professional SEO services, SEO company, SEO agency, technical SEO, on-page SEO, off-page SEO, local SEO, international SEO, e-commerce SEO services, SEO for businesses, affordable SEO agency, best SEO company"
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
        <Image
          src="/seo-banner.jpeg"
          alt="SEO Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold leading-snug">
            Why <span className="text-brandOrange">Choose SEO Services</span> for Your Business Growth?
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            Search engine optimization is essential for visibility and growth. At Info Navigators we combine technical SEO,
            content optimization and authority-building to increase rankings, drive organic traffic and generate qualified leads.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading"
            >
              Book a Free Consultation
            </a>
            <Link
              href="/services-page"
              className="inline-block px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition font-heading bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            👉 Related service:{" "}
            <Link href="/services-page/lead-generation" className="text-white underline">
              Lead Generation Services
            </Link>
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="core-services" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Our Core SEO Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border hover:border-brandOrange"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-10 h-10 text-brandOrange" />
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">{s.title}</h3>
                      <p className="text-gray-600 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Why Businesses Trust Info Navigators SEO Company</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brandOrange mt-1" />1,000+ successful projects across industries</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brandOrange mt-1" />Proven results in B2B & B2C SEO campaigns</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brandOrange mt-1" />Advanced tools: Ahrefs, SEMrush, Screaming Frog, Moz</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brandOrange mt-1" />Transparent reporting & measurable ROI</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brandOrange mt-1" />Affordable SEO agency with global reach</li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">We’re more than an SEO company — we’re your long-term growth partner.</p>
            <p className="mt-3 text-sm text-gray-500">👉 Related service: <Link href="/services-page/data-entry" className="text-blue-600 underline">Data Entry Services</Link></p>
          </div>

          <div className="md:w-1/2">
            <Image src="/seo.jpeg" alt="SEO team" width={600} height={400} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">SEO Tools & Technologies We Use</h2>
          <p className="text-gray-600 mb-6">Our strategies are powered by top SEO tools to deliver data-driven results.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full shadow text-sm font-semibold text-gray-700 border">{t}</span>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">👉 Related service: <Link href="/services-page/data-extraction" className="text-blue-600 underline">Data Extraction Services</Link></p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((it, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange text-center">
                <Globe className="w-10 h-10 text-brandOrange inline-block mb-3" />
                <h3 className="font-heading font-semibold mb-1">{it}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Case Studies: SEO Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange">
                <h3 className="text-lg font-heading font-semibold text-brandOrange mb-2">{cs.title}</h3>
                <p className="text-gray-600">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">FAQs – SEO Services</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50 font-heading font-semibold"
                >
                  <div className="text-sm sm:text-base">{f.q}</div>
                  <div className="text-brandOrange font-bold">{faqOpen === i ? "−" : "+"}</div>
                </button>
                {faqOpen === i && <div className="p-4 bg-gray-50 text-gray-700 text-sm sm:text-base">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
