"use client"; // Needed for useState interactivity

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import {
  FiCheckCircle,
  FiDatabase,
  FiLayers,
  FiAlertCircle,
  FiDownload,
  FiTool,
  FiGlobe,
  FiHeart,
  FiBarChart2,
  FiUsers,
  FiHome,
} from "react-icons/fi";

export default function DataCleaningExportPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const offerings = [
    {
      title: "Duplicate Removal & Validation",
      description:
        "Identify and remove duplicates while validating names, emails, phone numbers, and addresses.",
      icon: <FiCheckCircle />,
    },
    {
      title: "Data Standardization & Formatting",
      description:
        "Ensure consistent formats (CSV, Excel, SQL, JSON) for easy import into CRMs, ERPs, or databases.",
      icon: <FiLayers />,
    },
    {
      title: "Error Detection & Correction",
      description:
        "Detect typos, missing values, and incorrect entries that can disrupt your business operations.",
      icon: <FiAlertCircle />,
    },
    {
      title: "Data Export & Integration",
      description:
        "Export data in your preferred format and integrate with Salesforce, Zoho, HubSpot, or custom CRMs.",
      icon: <FiDownload />,
    },
  ];

  const tools = [
    { name: "Python (Pandas, NumPy)", text: "For advanced data processing & cleaning" },
    { name: "Excel & Google Sheets", text: "Quick formatting & exporting" },
    { name: "OpenRefine", text: "For handling large, messy datasets" },
    { name: "SQL Databases", text: "Structured data cleaning & transformation" },
    { name: "Custom Scripts", text: "For client-specific needs" },
  ];

  const industries = [
    { title: "E-commerce", text: "Product listings, customer data, reviews", icon: <FiGlobe /> },
    { title: "Healthcare", text: "Patient records, research datasets", icon: <FiHeart /> },
    { title: "Finance", text: "Transaction records, financial reports", icon: <FiBarChart2 /> },
    { title: "Marketing Agencies", text: "Contact lists, email databases", icon: <FiUsers /> },
    { title: "Real Estate", text: "Property listings, agent contacts", icon: <FiHome /> },
  ];

  const caseStudies = [
    {
      title: "Case Study 1 – US Marketing Firm",
      text: "Cleaned 50,000+ email records full of duplicates and errors, resulting in 40% higher email deliverability.",
    },
    {
      title: "Case Study 2 – European E-commerce Brand",
      text: "Standardized 100K+ product listings, enabling seamless integration into pricing analysis software.",
    },
  ];

  const faqs = [
    {
      question: "What is data cleaning?",
      answer:
        "Data cleaning is the process of detecting and correcting errors, inconsistencies, and duplicates in datasets to ensure accuracy.",
    },
    {
      question: "Can you export data directly into my CRM?",
      answer: "Yes. We integrate cleaned data into Salesforce, HubSpot, Zoho, and custom CRM systems.",
    },
    {
      question: "What formats do you deliver cleaned data in?",
      answer: "We provide data in Excel, CSV, JSON, Google Sheets, or SQL databases.",
    },
    {
      question: "How often should data cleaning be performed?",
      answer: "For accuracy, businesses should clean and validate data at least quarterly.",
    },
    {
      question: "Do you offer one-time and ongoing data cleaning?",
      answer: "Yes, we provide both one-time projects and ongoing maintenance services.",
    },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>Professional Data Cleaning & Export Services | Reliable Data Solutions</title>
        <meta
          name="description"
          content="Professional data cleaning & export services for businesses in USA, Europe & worldwide. Ensure accurate, clean datasets with seamless export in Excel, CSV, or CRM formats."
        />
        <meta
          name="keywords"
          content="data cleaning services, data cleaning, data cleansing, clean data, data cleanup, data cleaning process, database cleaning, data cleaning tools, data cleaning services company, data export services, clean dataset"
        />
      </Head>

      {/* ✅ Hero Section */}
      <section className="relative overflow-hidden py-16 px-6 text-center bg-gradient-to-br from-brandOrange/10 via-orange-100/30 to-white mt-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
            Why Data Cleaning & Export Matters for Your Business
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Data is the backbone of modern business, but raw data often contains errors, duplicates, and inconsistencies.
            Without cleaning, you risk making poor decisions. Our services ensure accuracy, consistency, and usability.
          </p>
          <ul className="mt-6 space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-brandOrange mt-1" /> Accurate and verified datasets
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-brandOrange mt-1" /> Standardized formats for seamless integration
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-brandOrange mt-1" /> Clean data ready for marketing, sales, and reporting
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-brandOrange mt-1" /> Improved decision-making with reliable insights
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
              className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading"
            >
              Book a Free Call
            </Link>
            <Link
              href="/services-page/data-entry"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition font-heading"
            >
              Related: Data Entry Services
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Offerings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">What We Offer in Data Cleaning & Export</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offer, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange"
              >
                <div className="text-brandOrange text-3xl mb-4">{offer.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Tools & Technologies We Use</h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md border hover:border-brandOrange"
              >
                <FiTool className="text-brandOrange text-2xl" />
                <div>
                  <div className="font-heading font-semibold">{tool.name}</div>
                  <div className="text-gray-600 text-sm">{tool.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="text-gray-800 font-semibold">Related: </span>
            <Link
              href="/services-page/web-scraping"
              className="text-blue-600 font-semibold hover:underline"
            >
              Web Scraping with Python Libraries →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">
            Industries That Benefit from Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange flex flex-col items-center text-center"
              >
                <div className="text-brandOrange text-3xl mb-4">{ind.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{ind.title}</h3>
                <p className="text-gray-600">{ind.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Case Studies Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Case Studies: Turning Messy Data into Insights</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange">
                <h3 className="font-heading text-xl font-semibold mb-2">{cs.title}</h3>
                <p className="text-gray-600">{cs.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">FAQs – Data Cleaning & Export Services</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 font-heading font-semibold"
                >
                  {faq.question}
                  <span>{openFAQ === i ? "-" : "+"}</span>
                </button>
                {openFAQ === i && <div className="p-4 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
