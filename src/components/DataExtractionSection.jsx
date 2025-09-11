"use client";
import { useState } from "react";
import {
  CheckCircle,
  Globe,
  FileText,
  Users,
  Database,
  Layers,
} from "lucide-react";



export default function DataExtractionPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the difference between data scraping and data extraction?",
      a: "Data scraping extracts raw data from websites, while data extraction involves structuring and cleaning that data for business use.",
    },
    {
      q: "Do you provide global data extraction services?",
      a: "Yes, we serve clients across USA, Europe, Middle East, and Asia.",
    },
    {
      q: "Can you handle LinkedIn data extraction?",
      a: "Yes. Our LinkedIn data extraction services are fully verified and compliance-checked.",
    },
    {
      q: "How do you ensure accuracy in extracted data?",
      a: "We use a 3-step verification process — automated cleaning, manual review, and formatting.",
    },
    {
      q: "In what formats will I receive the data?",
      a: "We deliver data in CSV, Excel, Google Sheets, SQL, or JSON, based on client needs.",
    },
    {
      q: "Can I outsource large-scale projects to you?",
      a: "Absolutely. As a global data extraction services company, we specialize in large-scale projects with quick turnaround.",
    },
  ];

  return (
    <div className="font-sans">
      {/* ✅ HERO SECTION */}
      <section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
        {/* Background Image */}
        <img
          src="/banner.webp"
          alt="Data Extraction Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 leading-snug">
            Why Businesses Need Data Extraction Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            Transform unstructured data into actionable insights. We help
            businesses worldwide extract clean, accurate, and structured data
            for smarter decisions.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading text-base sm:text-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ✅ WHAT MAKES US RELIABLE */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-10">
            What Makes Us the Most Reliable Data Extraction Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, text: "Global Expertise – Serving clients worldwide" },
              { icon: Users, text: "15+ Years of Industry Experience" },
              {
                icon: CheckCircle,
                text: "End-to-End Accuracy – Clean, verified datasets",
              },
              { icon: Layers, text: "Custom Solutions for LinkedIn, PDFs, and more" },
              { icon: Database, text: "Scalable Data Extraction for any business" },
              { icon: FileText, text: "Outsource and Save Time & Costs" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-brandOrange mb-4" />
                <p className="font-semibold text-gray-700 text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CORE SOLUTIONS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">
            Our Core Data Extraction Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Web Data Extraction Services",
                desc: "Extract product data, competitor pricing, and reviews for e-commerce and research companies.",
              },
              {
                title: "PDF & Document Data Extraction",
                desc: "Convert unstructured reports and invoices into structured databases.",
              },
              {
                title: "LinkedIn Data Extraction Services",
                desc: "Get verified B2B contacts and leads for sales and recruitment.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-brandOrange">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ WHY OUTSOURCE */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/data extraction.png"
            alt="Why Outsource"
            className="w-full md:w-1/2 rounded-2xl"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
              Why Outsource Data Extraction Services?
            </h2>
            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
              <li>✅ Cost-Effective – Affordable vs in-house staffing</li>
              <li>✅ Scalable – Handle large data volumes quickly</li>
              <li>✅ Reliable – 99% accuracy with validation</li>
              <li>✅ Flexible Formats – Excel, CSV, JSON, and more</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ TOOLS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
            Tools & Technologies We Use
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Combining automation with manual verification for maximum accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "Python",
              "BeautifulSoup",
              "Selenium",
              "Octoparse",
              "Tabula",
              "Abbyy",
              "Apify",
              "Scrapy",
            ].map((tool, i) => (
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

      {/* ✅ CASE STUDIES */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">
            Case Studies – Data Extraction in Action
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "E-commerce Price Monitoring",
                desc: "A European retailer used our services to track competitor pricing, increasing sales margin by 18% in 30 days.",
              },
              {
                title: "Financial Services Data Extraction",
                desc: "A US-based firm outsourced their PDF data project, saving 200+ working hours and improving compliance.",
              },
            ].map((cs, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
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

      {/* ✅ FAQs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-center">
            FAQs – Data Extraction Services
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
                  <div className="font-semibold text-sm sm:text-base">{f.q}</div>
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
}
