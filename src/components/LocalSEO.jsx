"use client";
import { useState } from "react";

const LocalSEOPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      q: "How is Local SEO different from regular SEO?",
      a: "Local SEO focuses on location-based searches, while Technical SEO and On-Page SEO cover site-wide optimization.",
    },
    {
      q: "Do I need Local SEO for my business?",
      a: "Yes—if you want to attract customers in your city or region, Local SEO is essential.",
    },
    {
      q: "How long does it take to see results?",
      a: "Most businesses see improvements within 2–3 months, depending on competition.",
    },
    {
      q: "Can Local SEO help e-commerce stores?",
      a: "Yes, especially if you also run physical outlets. For online-only stores, check our E-commerce SEO Services.",
    },
  ];

  const tools = [
    "Google Business Profile Manager",
    "BrightLocal & Whitespark",
    "SEMrush & Ahrefs",
    "Moz Local",
    "Google Maps Insights",
  ];

  const services = [
    {
      title: "Google My Business Optimization",
      desc: "Optimize your Google Business Profile (GBP) to rank higher in Maps, including images, posts, and reviews.",
    },
    {
      title: "Local Citations & Directory Listings",
      desc: "Build and manage local citations across trusted directories like Yelp, Yellow Pages, and niche-specific sites.",
    },
    {
      title: "Local Keyword Research",
      desc: "Find location-based keywords such as 'best pizza in New York' to target high-intent local customers.",
    },
    {
      title: "Local Link Building",
      desc: "Build links from community sites, local blogs, and regional directories.",
    },
    {
      title: "Review & Reputation Management",
      desc: "Collect, manage, and respond to reviews to build credibility and customer trust.",
    },
  ];

  const caseStudies = [
    {
      title: "Law Firm (USA)",
      desc: "We optimized their Google My Business listing and built citations, resulting in a 65% increase in phone calls within 3 months.",
    },
    {
      title: "Restaurant (Europe)",
      desc: "By improving Google Maps SEO and collecting 150+ new reviews, foot traffic increased by 40% in 90 days.",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
        <img
          src="/seo-banner.jpeg"
          alt="Local SEO Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 leading-snug">
            Local SEO Services That Attract Nearby Customers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            Help your business rank on Google Maps, local search results, and voice searches. Our local SEO strategies ensure your customers can easily find you.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading text-base sm:text-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* WHY LOCAL SEO */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-10">
            Why Local SEO is Crucial for Business Growth
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li>✅ Appear in Google Maps & Local Pack</li>
            <li>✅ Boost calls, visits, and inquiries</li>
            <li>✅ Build trust with reviews & ratings</li>
            <li>✅ Improve visibility in local searches</li>
            <li>✅ Strengthen brand authority in your area</li>
          </ul>
        </div>
      </section>

      {/* LOCAL SEO SERVICES */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">
            Our Local SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
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
            Tools We Use for Local SEO Optimization
          </h2>
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
            Case Studies: Local SEO Success
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
            FAQs – Local SEO Services
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
    </div>
  );
};

export default LocalSEOPage;
