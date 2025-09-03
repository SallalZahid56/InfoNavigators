// pages/data-verification.js (Next.js Pages Router)
// or app/data-verification/page.js (App Router, just remove 'export default function Page()')
"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle,
  Database,
  Search,
  ShieldCheck,
  FileText,
  ChevronDown,
  ClipboardList,
  ThumbsUp,
} from "lucide-react";
import FinalCTA from "../../../components/FinalCTA";

export default function DataVerificationPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What’s the difference between data verification and fact-checking?",
      a: "Data verification focuses on accuracy in databases and contact lists, while fact-checking ensures information, claims, or statistics are true and sourced correctly.",
    },
    {
      q: "Can you verify leads from my existing CRM?",
      a: "Yes — our CRM data entry and verification process ensures every contact is accurate, up-to-date, and free from duplicates.",
    },
    {
      q: "Do you provide ongoing verification services?",
      a: "Absolutely. We offer one-time cleanups and ongoing validation services for businesses that rely on continuously updated data.",
    },
  ];

  return (
    <div className="bg-white text-black font-sans">
      <Head>
        <title>Data Verification & Fact-Checking Services | Info Navigators</title>
        <meta
          name="description"
          content="Ensure your business decisions are based on accurate information with our professional data verification & fact-checking services. Reliable, precise, and trusted worldwide."
        />
        <meta
          name="keywords"
          content="data verification services, fact-checking services, validation services, verify data accuracy, data quality check, online research fact-checking, data verification for business"
        />
      </Head>

      {/* ✅ Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center mt-10">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Data Verification &{" "}
          <span className="text-brandOrange">Fact-Checking Services</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Inaccurate or outdated data can cost your business opportunities,
          damage your credibility, and lead to costly mistakes. At{" "}
          <span className="font-semibold">Info Navigators</span>, our data
          verification services and fact-checking services ensure your
          information is accurate, complete, and trustworthy before it’s used
          for decision-making.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
          className="inline-block bg-brandOrange text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-black transition"
        >
          Get a Free Consultation
        </a>
      </section>

      {/* ✅ Why Data Verification Matters */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Why <span className="text-brandOrange">Data Verification</span>{" "}
            Matters in the Digital Age
          </h2>
          <p className="text-gray-700 mb-6">
            Every day, businesses receive large amounts of data from multiple
            sources — but not all of it is reliable. Without proper data
            validation services, you risk basing your strategies on errors,
            duplicate entries, or outdated records.
          </p>
          <div className="grid gap-4">
            {[
              "Maintaining brand credibility",
              "Making informed decisions",
              "Reducing bounce rates in outreach campaigns",
              "Improving ROI on marketing efforts",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-gray-50 p-3 rounded-lg shadow"
              >
                <CheckCircle className="text-brandOrange w-6 h-6 mr-3" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/data-verification.jpg"
            alt="Data Verification"
            width={500}
            height={400}
            className="rounded-xl max-h-80 object-cover"
          />
        </div>
      </section>

      {/* ✅ Core Solutions (Cards) */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
            Our Core{" "}
            <span className="text-brandOrange">
              Data Verification & Fact-Checking Solutions
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Business Data Verification",
                desc: "We verify company names, employee counts, revenue ranges, and contact details for B2B campaigns.",
                icon: Database,
              },
              {
                title: "Fact-Checking for Online Content",
                desc: "From verifying statistics to confirming event details, we cross-reference data with trusted sources.",
                icon: FileText,
              },
              {
                title: "Source Validation",
                desc: "Every claim is confirmed with a credible, traceable source to maintain factual integrity.",
                icon: ShieldCheck,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <card.icon className="w-10 h-10 text-brandOrange mb-4 mx-auto" />
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Tools & Methods */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Tools & Methods{" "}
            <span className="text-brandOrange">We Use to Verify Data</span>
          </h2>
          <div className="grid gap-4">
            {[
              "Email validation software to reduce bounce rates",
              "CRM cross-matching for duplicate removal",
              "Government and industry database checks",
              "Multi-source cross-verification for factual accuracy",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-gray-50 p-3 rounded-lg shadow"
              >
                <Search className="text-brandOrange w-6 h-6 mr-3" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/tools-data-verification.webp"
            alt="Verification Tools"
            width={500}
            height={400}
            className="rounded-xl shadow-lg max-h-80 object-cover"
          />
        </div>
      </section>

      {/* ✅ Industries Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
            Industries That{" "}
            <span className="text-brandOrange">Benefit from Our Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Market research companies",
              "Financial services teams",
              "B2B marketing agencies",
              "E-commerce businesses",
              "Healthcare market research services",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow p-4 rounded-lg flex items-center"
              >
                <CheckCircle className="text-brandOrange w-6 h-6 mr-3" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Our Proven Process */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
          Our Proven{" "}
          <span className="text-brandOrange">
            Verification & Fact-Checking Process
          </span>
        </h2>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            "Data Intake & Assessment",
            "Cross-Referencing Sources",
            "Fact Verification",
            "Error Correction & Cleaning",
            "Final Quality Assurance",
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <ClipboardList className="w-10 h-10 text-brandOrange mb-4 mx-auto" />
              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
            Benefits of Our{" "}
            <span className="text-brandOrange">
              Data Verification & Fact-Checking Services
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Eliminate errors before they reach your customers",
              "Improve decision-making confidence",
              "Protect your brand reputation",
              "Ensure compliance with industry regulations",
              "Save time by working with clean, validated datasets",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white shadow p-4 rounded-lg"
              >
                <ThumbsUp className="text-brandOrange w-6 h-6 mr-3" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQ Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6">
            Frequently Asked <span className="text-brandOrange">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold"
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-3 text-gray-600">{faq.a}</div>
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
