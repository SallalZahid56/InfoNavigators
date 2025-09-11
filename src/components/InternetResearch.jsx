"use client";

import { useState } from "react";
import { FiChevronDown, FiTarget } from "react-icons/fi";

const faqs = [
  {
    q: "What does an online internet researcher do?",
    a: "An online internet researcher gathers, verifies, and analyzes online data to support business decision-making."
  },
  {
    q: "How do I choose the right internet researcher?",
    a: "Look for proven experience, access to premium tools, and transparent processes."
  },
  {
    q: "Is your research process manual or automated?",
    a: "We use a hybrid approach — combining manual expertise with automation for accuracy and efficiency."
  },
  {
    q: "Can you handle large-scale projects?",
    a: "Yes, our internet researcher team is equipped to manage projects with tens of thousands of data points."
  },
  {
    q: "Do you offer ongoing research support?",
    a: "Absolutely — we provide one-off reports and continuous research services for long-term clients."
  }
];

export default function OnlineResearchServices() {
  const [open, setOpen] = useState(null);

  const services = [
    {
      title: "Social Media & Web Research",
      desc: "Analyze online conversations, brand mentions, and market trends across platforms.",
      img: "/internetResearch.png"
    },
    {
      title: "Market Research on the Internet",
      desc: "Competitive analysis, trend identification, and customer behavior research.",
      img: "/internet-research.jpeg"
    },
    {
      title: "Lead Research & Data Collection",
      desc: "Verified, high-quality leads for email, LinkedIn, or CRM campaigns.",
      img: "/internet.jpg"
    }
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HERO SECTION */}
      <section className="relative p-6 md:p-12 flex flex-col lg:flex-row items-center gap-10 mt-14">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Professional Online <span className="text-brandOrange">Internet Research Services</span> for Businesses
          </h1>
          <p className="mt-4 text-lg text-gray-900">
            In the digital-first world, information is the new currency. Info Navigators delivers tailored online research services to help your business make smarter decisions faster.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="/research.avif" alt="Online research hero" className="rounded-2xl w-full" />
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="container mx-auto p-6 md:p-10 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold mb-4">What Is Online Internet Research and Why It Matters</h2>
          <p className="mb-4">
            Online internet research involves gathering, analyzing, and interpreting online information to support strategic business decisions.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-900">
            <li>Competitive analysis to identify market gaps.</li>
            <li>Market trends and customer behavior insights.</li>
            <li>Supplier and vendor research for procurement decisions.</li>
            <li>Lead identification and contact info for B2B marketing.</li>
            <li>Brand monitoring across social platforms.</li>
          </ul>
        </div>
        <div>
          <img src="/internet.jpg" alt="Research concept" className="rounded-2xl w-full" />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="container mx-auto p-6 md:p-10 lg:p-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">Our Expert Online Research Service Offerings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-brandOrange text-white mb-4">
                <FiTarget />
              </div>
              <img src={s.img} alt={s.title} className="rounded-lg mb-4 w-full" />
              <h3 className="mt-2 font-semibold text-lg group-hover:text-brandOrange">{s.title}</h3>
              <p className="mt-2 text-gray-900">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap gap-4">
            {["Technology & SaaS","E-commerce & Retail","Finance & Investment","Healthcare & Pharma","Real Estate","Education & E-learning"].map((industry, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full border border-gray-300 hover:border-brandOrange hover:text-brandOrange transition">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="container mx-auto p-6 md:p-10 lg:p-12">
        <h2 className="text-3xl font-heading font-bold mb-8">Our Proven Internet Research Process</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { step: "Needs Assessment", desc: "Understand goals and objectives." },
            { step: "Source Identification", desc: "Use verified sources and databases." },
            { step: "In Web Research", desc: "Gather data from platforms and reports." },
            { step: "Data Verification", desc: "Cross-check for accuracy." },
            { step: "Report Delivery", desc: "Present insights in usable format." },
          ].map((p, i) => (
            <div key={i} className="relative rounded-2xl bg-white border border-gray-200 p-6">
              <div className="absolute -top-3 left-6 bg-brandOrange text-white text-xs font-bold px-3 py-1 rounded-full">{p.step}</div>
              <h3 className="mt-3 font-semibold text-lg">{p.step}</h3>
              <p className="mt-2 text-gray-900">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {faqs.map((item, idx) => (
              <div key={idx} className="p-5">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold">{item.q}</span>
                  <FiChevronDown className={`transition ${open === idx ? "rotate-180" : ""}`} />
                </button>
                {open === idx && (
                  <p className="mt-3 text-gray-900">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
