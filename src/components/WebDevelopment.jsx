"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Globe,
  FileText,
  Users,
  Database,
  Briefcase,
} from "lucide-react";

const WebsiteDevelopmentPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  const coreServices = [
    {
      title: "Custom Website Development",
      desc: "Strategic, responsive, and scalable web solutions tailored for your business.",
      icon: FileText,
    },
    {
      title: "CMS Platforms",
      desc: "WordPress, Shopify, Webflow, Joomla, Drupal, Laravel, Headless CMS support.",
      icon: Users,
    },
    {
      title: "Speed Optimization",
      desc: "Image compression, CDN, caching, and Core Web Vitals improvements.",
      icon: Database,
    },
    {
      title: "Maintenance & Support",
      desc: "Monthly updates, backups, and monitoring to keep your site secure.",
      icon: Globe,
    },
    {
      title: "SEO + UX Design",
      desc: "Optimized UX, structured data, and SEO-friendly architecture.",
      icon: Briefcase,
    },
  ];

  const tools = [
    "WordPress",
    "Shopify",
    "Joomla",
    "Drupal",
    "Laravel",
    "Webflow",
    "Strapi",
    "Contentful",
    "CDN",
    "Core Web Vitals",
  ];

  const industries = [
    "Law Firms",
    "Medical Clinics",
    "Logistics Companies",
    "Restaurants & Cafes",
    "E-commerce Brands",
    "NGOs",
  ];

  const caseStudies = [
    {
      title: "UAE Real Estate Developer",
      desc: "Investor portal + multilingual site for international reach.",
    },
    {
      title: "Texas eCommerce Brand",
      desc: "Migrated from Wix to WooCommerce + SEO boost.",
    },
    {
      title: "NGO in Pakistan",
      desc: "Donation site with accessibility and usability focus.",
    },
  ];

  const faqs = [
    {
      q: "🧰 What platforms do you develop in?",
      a: "WordPress, Shopify, Joomla, Laravel, Webflow, and headless CMS.",
    },
    {
      q: "🔒 Are your websites secure?",
      a: "HTTPS, firewalls, code audits, and regular updates included.",
    },
    {
      q: "📱 Will my website be mobile-responsive?",
      a: "Yes — all websites are built mobile-first and tested on all screen sizes.",
    },
    {
      q: "⚡ How fast will my website load?",
      a: "Lazy loading, CDN, caching, and minified code ensure fast load times.",
    },
    {
      q: "📦 Do you provide post-launch support?",
      a: "Monthly care plans available for updates, backups, and optimizations.",
    },
    {
      q: "🌍 Do you work with international clients?",
      a: "Yes — US, UK, Canada, UAE, Australia, Pakistan, and more.",
    },
  ];

  return (
    <div className="font-sans">
      {/* SEO Head */}

      {/* HERO */}
      <section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
        <Image
          src="/web-banner.jpg"
          alt="Website Development"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold leading-snug">
            Website Development Services{" "}
            <span className="text-brandOrange">for Growth & Scale</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            We build high-performance CMS websites that convert, perform, and
            scale globally.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
              className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Consultation
            </a>
            <Link
              href="/services-page/"
              className="inline-block px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition font-heading bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="core-services" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">
            Our Core Website Development Services
          </h2>
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
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        {s.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
            Tools & Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <span
                key={i}
                className="bg-white px-4 py-2 rounded-full shadow text-sm font-semibold text-gray-700 border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((it, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange text-center"
              >
                <div className="text-brandOrange text-3xl mb-3">
                  <Globe className="w-10 h-10 inline-block" />
                </div>
                <h3 className="font-heading font-semibold mb-1">{it}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange"
              >
                <h3 className="text-lg font-heading font-semibold text-brandOrange mb-2">
                  {cs.title}
                </h3>
                <p className="text-gray-600">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50 font-heading font-semibold"
                >
                  <div className="text-sm sm:text-base">{f.q}</div>
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
    </div>
  );
};

export default WebsiteDevelopmentPage;
