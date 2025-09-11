"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const WebScrapingPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    { q: "Is web scraping legal?", a: "Yes, when done ethically. We only extract publicly available information and comply with data protection laws." },
    { q: "Can you handle large-scale scraping projects?", a: "Absolutely. Our web scraping services are built to process millions of records efficiently." },
    { q: "How do you deliver the extracted data?", a: "We provide results in CSV, Excel, JSON, or SQL depending on your needs." },
    { q: "Can you scrape LinkedIn data?", a: "Yes, through our LinkedIn data extraction services, with full verification and compliance." },
    { q: "Do you offer ongoing data scraping?", a: "Yes. Many clients hire us for monthly/weekly automated scraping to keep datasets updated." },
  ];

  return (
    <div className="font-sans">
      {/* ✅ SEO Meta Tags */}

      {/* ✅ HERO SECTION */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center text-center text-white mt-14 px-4 sm:px-6 py-10 sm:py-16">
        <Image
          src="/banner.webp"
          alt="Web Scraping Services"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold mb-4">
            Why Web Scraping Services Are Essential for Businesses
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Unlock structured insights from unstructured web data. Our web scraping services help businesses extract product listings, pricing, and competitor insights at scale.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            className="bg-brandOrange text-white px-5 py-3 rounded-xl shadow hover:bg-black transition font-heading text-sm sm:text-base inline-block"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ✅ WHAT WE OFFER */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-10">
            What We Offer with Our Web Data Extraction Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "E-commerce Scraping", desc: "Extract product details, SKUs, descriptions, and prices." },
              { title: "Real Estate Scraping", desc: "Property listings, market rates, and agent details." },
              { title: "Travel & Hospitality Scraping", desc: "Flight, hotel, and booking platform data." },
              { title: "B2B Lead Extraction", desc: "Business contacts, LinkedIn data, and verified emails." },
              { title: "Social Media Scraping", desc: "Engagement metrics, influencer data, and content trends." },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
                <h3 className="font-bold text-xl mb-3 text-brandOrange">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Why Choose Our Website Data Scraping Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Most Reliable Data Extraction Service – Trusted by 1,000+ businesses worldwide.",
              "Scalable Solutions – From small datasets to millions of records.",
              "Global Coverage – Supporting businesses in USA, UK, EU, Middle East, Asia.",
              "Outsource Web Scraping – Save time & costs with expert-managed solutions.",
              "Flexible Formats – Delivery in CSV, Excel, Google Sheets, SQL, or JSON.",
            ].map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex items-center">
                <CheckCircle className="w-6 h-6 text-brandOrange mr-3" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ TOOLS & TECHNIQUES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Tools & Techniques We Use for Web Scraping
          </h2>
          <p className="text-gray-600 mb-8">
            We use advanced scraping tools and manual validation for quality results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "Scrapy", "BeautifulSoup", "Selenium", "Octoparse", "Apify", "Proxies", "Data Cleaning"].map((tool, i) => (
              <span
                key={i}
                className="bg-white px-4 py-2 rounded-full font-semibold text-gray-700 shadow"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ INDUSTRIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">
            Industries That Benefit from Web Scraping Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            {[
              "E-commerce & Retail – Track competitor pricing & product availability.",
              "Finance & Investment – Monitor stock prices & financial reports.",
              "Healthcare & Pharma – Research medical databases & product data.",
              "Real Estate – Collect property listings & rental comparisons.",
              "Marketing Agencies – Extract audience insights for B2B lead generation.",
            ].map((industry, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CASE STUDIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">
            Case Studies – Web Scraping in Action
          </h2>
          <div className="space-y-6">
            {[
              { title: "E-commerce Competitor Analysis", desc: "A US-based retailer outsourced our web scraping services to monitor competitor prices. They increased sales margins by 15% within 60 days." },
              { title: "Real Estate Data Extraction", desc: "A European property agency used our website data scraping services to collect 50,000+ listings, helping them launch a competitive rental comparison platform." },
            ].map((cs, i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-brandOrange mb-2">{cs.title}</h3>
                <p className="text-gray-600">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">FAQs – Web Scraping Services</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50"
                >
                  <div className="font-semibold">{f.q}</div>
                  <div className="text-brandOrange font-bold">{faqOpen === i ? "−" : "+"}</div>
                </button>
                {faqOpen === i && (
                  <div className="p-4 bg-gray-50 text-gray-700">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebScrapingPage;
