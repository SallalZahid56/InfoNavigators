"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  FaBolt,
  FaWrench,
  FaDollarSign,
  FaCheckCircle,
  FaBook,
  FaSpider,
  FaGlobe,
  FaDownload,
  FaTable,
} from "react-icons/fa";
import { Plus, Minus } from "lucide-react";
import FinalCTA from "../../../components/FinalCTA";

const PythonScraping = () => {
  const faqs = [
    { question: "🛡️ Is Python scraping legal?", answer: "Yes, when applied to public data while respecting terms and laws." },
    { question: "⏱️ How fast can I get the data?", answer: "Anywhere from minutes to a few days based on scope and scale." },
    { question: "🔐 Can you scrape protected sites?", answer: "Yes, with tools like Selenium, as long as it's done ethically and legally." },
    { question: "📁 What data formats do you deliver?", answer: "CSV, Excel, JSON, Google Sheets, or CRM integration options." },
    { question: "🔄 Can scraping detect web changes?", answer: "Absolutely. Scheduled scripts monitor and flag page updates." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const whyCards = [
    { icon: <FaBolt className="text-brandOrange text-3xl" />, title: "Efficiency", text: "Scrape thousands of pages in minutes." },
    { icon: <FaWrench className="text-brandOrange text-3xl" />, title: "Flexibility", text: "Handle dynamic sites and custom fields." },
    { icon: <FaDollarSign className="text-brandOrange text-3xl" />, title: "Cost-Effective", text: "Open-source tools reduce expenses." },
    { icon: <FaCheckCircle className="text-brandOrange text-3xl" />, title: "Accuracy", text: "Validate and clean data on-the-fly." },
  ];

  const toolsCards = [
    { icon: <FaBook className="text-brandOrange text-3xl" />, title: "BeautifulSoup", text: "Parse HTML/XML easily." },
    { icon: <FaSpider className="text-brandOrange text-3xl" />, title: "Scrapy", text: "Powerful scalable scraping framework." },
    { icon: <FaGlobe className="text-brandOrange text-3xl" />, title: "Selenium", text: "For JS-heavy and login-required sites." },
    { icon: <FaDownload className="text-brandOrange text-3xl" />, title: "Requests", text: "Fetch web data efficiently." },
    { icon: <FaTable className="text-brandOrange text-3xl" />, title: "Pandas", text: "Transform and export structured data." },
  ];

  return (
    <div className="python-scraping-page">
      <Head>
        <title>Python Scraping Services for Lead Generation | InfoNavigators</title>
        <meta
          name="description"
          content="InfoNavigators’ Python scraping services unlock actionable data for lead generation. Custom web scraping solutions to extract emails, contacts, and sales-ready leads."
        />
        <meta
          name="keywords"
          content="Python scraping services, web scraping for leads, custom data extraction, email lead generation, sales-ready leads, InfoNavigators"
        />
      </Head>

      {/* ✅ HERO */}
      <section className="relative h-[100vh] flex items-center justify-center text-center text-white mt-14">
        <Image
          src="/python banner.jpeg"
          alt="Python Scraping Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Python Scraping Services: Unlock Actionable Data for Lead Generation
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Leverage Python-powered scraping for structured, real-time data that fuels smarter decisions.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* ✅ INTRO */}
        <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <Image src="/web scraping.png" alt="Intro" width={600} height={400} className="rounded-lg" />
          <div>
            <p className="mb-4 text-lg">
              In today’s competitive business landscape, access to structured, up-to-date data is a game-changer. Python scraping services empower businesses to collect accurate, timely information from diverse online sources, turning raw web data into actionable insights.
            </p>
            <p className="text-lg">
              This page explores how Python web scraping enhances lead generation, the tools involved, best practices, and key benefits.
            </p>
          </div>
        </section>

        {/* ✅ WHY USE */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Use Python Scraping for Lead Generation?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((card, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                  {card.icon}
                  <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
                  <p className="text-gray-600 mt-2">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ PROCESS */}
        <section className="py-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
            Python Scraping Process for Lead Generation
          </h2>
          <ul className="list-decimal pl-5 space-y-3 text-gray-700">
            <li><strong>Step 1 – Requirement Analysis:</strong> Define target fields such as emails, phone numbers, product info.</li>
            <li><strong>Step 2 – Source Selection:</strong> Identify sites like directories, forums, or marketplaces.</li>
            <li><strong>Step 3 – Script Development:</strong> Write and test Python code for scraping and parsing.</li>
            <li><strong>Step 4 – Data Cleaning & Validation:</strong> Remove duplicates and format entries correctly.</li>
            <li><strong>Step 5 – Storage & Delivery:</strong> Export as CSV, Excel, or direct CRM import.</li>
          </ul>
        </section>

        {/* ✅ TOOLS */}
        <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <Image src="/python libraries.png" alt="Tools" width={600} height={400} className="rounded-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-6">Popular Python Libraries & Tools</h2>
            <div className="space-y-4">
              {toolsCards.map((card, i) => (
                <div key={i} className="flex items-center gap-4">
                  {card.icon}
                  <div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-gray-600">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ BENEFITS */}
        <section className="py-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
            Benefits of Python Scraping in Lead Generation Services
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Benefit</th>
                  <th className="px-4 py-2 border">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-4 py-2">Scalability</td><td className="border px-4 py-2">Scrape from hundreds to millions of pages seamlessly.</td></tr>
                <tr><td className="border px-4 py-2">Customization</td><td className="border px-4 py-2">Scripts tailored to specific websites and data fields.</td></tr>
                <tr><td className="border px-4 py-2">Real-Time Updates</td><td className="border px-4 py-2">Scheduled scraping ensures fresh, timely information.</td></tr>
                <tr><td className="border px-4 py-2">Competitive Intelligence</td><td className="border px-4 py-2">Track pricing, product changes, and industry shifts.</td></tr>
                <tr><td className="border px-4 py-2">Cost Savings</td><td className="border px-4 py-2">Build your own data sets and reduce external licensing costs.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ✅ BEST PRACTICES */}
        <section className="py-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">Best Practices for Python Web Scraping</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>✅ Respect robots.txt and website ToS.</li>
            <li>⏱️ Use rate-limiting and avoid aggressive crawling.</li>
            <li>🔁 Rotate proxies/IPs to prevent blocks.</li>
            <li>🧠 Use Selenium for JavaScript-heavy websites.</li>
            <li>⚖️ Stay compliant with data privacy laws (e.g., GDPR, CCPA).</li>
          </ul>
        </section>

        {/* ✅ FAQ */}
        <section className="py-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">FAQs – Quick Answers</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded p-4 cursor-pointer bg-white shadow-sm"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <summary className="font-semibold">{faq.question}</summary>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-brandOrange" />
                  ) : (
                    <Plus className="w-5 h-5 text-brandOrange" />
                  )}
                </div>
                {openIndex === index && <p className="mt-3 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </div>
    </div>
  );
};

export default PythonScraping;
