"use client";

import { useState } from "react";
import { CheckCircle, Globe, Users, FileText, Database, Layers } from "lucide-react";
import Image from "next/image";

export default function OffPageSEOPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  const faqs = [
    { q: "What is the difference between Off-Page SEO and Technical SEO?", a: "Off-Page SEO focuses on external signals like backlinks & PR, while Technical SEO Services improve site performance and crawlability." },
    { q: "Do you use black-hat SEO tactics?", a: "No. We only use white-hat link building services that comply with Google guidelines." },
    { q: "How long does it take to see results?", a: "Typically 3–6 months, depending on competition and your current authority." },
    { q: "Can Off-Page SEO help with international rankings?", a: "Yes! Combined with International SEO Services, off-page strategies strengthen your global visibility." },
  ];

  const coreServices = [
    { title: "White Hat Link Building", desc: "Secure high-quality backlinks from trusted websites to boost authority and rankings." },
    { title: "Guest Posting & Blogger Outreach", desc: "Connect with niche bloggers, influencers, and publications to drive referral traffic." },
    { title: "Digital PR Services", desc: "Increase brand mentions across media and industry websites to build credibility." },
    { title: "Social Signals & Engagement", desc: "Amplify social media presence to create ranking-influencing signals." },
    { title: "Brand Mentions & Citations", desc: "Manage local citations and mentions to reinforce authority." },
  ];

  const tools = ["Ahrefs", "SEMrush", "Moz Link Explorer", "BuzzStream", "Pitchbox", "HARO", "Google Alerts"];

  const caseStudies = [
    { title: "E-commerce Brand", desc: "Guest posting strategy + 200+ backlinks increased organic sales by 64% in 6 months." },
    { title: "SaaS Startup", desc: "Digital PR campaigns boosted domain authority from 18 to 45 within 8 months." },
  ];

  return (
    <div className="font-sans">
      {/* ✅ SEO Head */}

      {/* ✅ Hero Section */}
<section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
  <Image
    src="/seo-banner.jpeg"   // ✅ Direct path from /public
    alt="Off-Page SEO Services"
    fill
    priority
    className="absolute inset-0 object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="relative z-10 max-w-3xl mx-auto">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 leading-snug">
      Off-Page SEO Services That Build Authority & Rankings
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
      Our white-hat link building, digital PR, guest posting, and outreach strategies help your business rank higher and stay ahead of competitors.
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


      {/* ✅ Why Off-Page SEO Matters */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
            Why Off-Page SEO Optimization is Crucial
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base max-w-xl mx-auto">
            <li>✅ Improves domain authority (DA)</li>
            <li>✅ Increases organic traffic</li>
            <li>✅ Strengthens brand reputation</li>
            <li>✅ Helps beat competitors in SERPs</li>
          </ul>
        </div>
      </section>

      {/* ✅ Core Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">
            Our Core Off-Page SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreServices.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-brandOrange">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Tools Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">Tools We Use for Off-Page SEO</h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Backlink analysis, outreach, and brand monitoring tools for measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tools.map((tool, i) => (
              <span key={i} className="bg-gray-100 px-3 py-2 rounded-full font-semibold text-gray-700 shadow text-sm sm:text-base">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Case Studies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">
            Case Studies: Off-Page SEO Success
          </h2>
          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
                <h3 className="text-lg sm:text-xl font-bold text-brandOrange mb-2">{cs.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-center">
            FAQs – Off-Page SEO Services
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50"
                >
                  <div className="font-semibold text-sm sm:text-base">{f.q}</div>
                  <div className="text-brandOrange font-bold">{faqOpen === i ? "−" : "+"}</div>
                </button>
                {faqOpen === i && (
                  <div className="p-4 bg-gray-50 text-gray-700 text-sm sm:text-base">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
