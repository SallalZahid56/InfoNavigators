"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  FiCheckCircle,
  FiZap,
  FiDatabase,
  FiCode,
  FiBookOpen,
  FiSettings,
  FiGlobe,
  FiBarChart,
  FiBriefcase,
  FiHome,
  FiUsers,
} from "react-icons/fi";
import FinalCTA from "../../../components/FinalCTA";

const stats = [
  { icon: <FiZap />, value: "Fast", label: "Execution" },
  { icon: <FiDatabase />, value: "Accurate", label: "Data" },
  { icon: <FiCode />, value: "Custom", label: "Solutions" },
];

const libraries = [
  {
    title: "BeautifulSoup Scraping",
    description:
      "Perfect for HTML parsing and structured data extraction. Ideal for e-commerce products, blogs, and cleaning messy HTML.",
    icon: <FiBookOpen />,
  },
  {
    title: "Scrapy Web Scraping",
    description:
      "Fast, scalable scraping framework for large datasets like product listings, competitor pricing, and research data.",
    icon: <FiZap />,
  },
  {
    title: "Selenium Web Scraping",
    description:
      "Best for dynamic sites and SPAs. Automates logins, form submissions, and scrapes social media or JS-heavy pages.",
    icon: <FiSettings />,
  },
  {
    title: "Pandas for Data Cleaning",
    description:
      "Removes duplicates, standardizes formats, and exports to CSV, Excel, or SQL databases for clean, ready-to-use data.",
    icon: <FiDatabase />,
  },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", text: "Define the exact data you need." },
  { step: "02", title: "Library Selection", text: "Pick the best tool: BeautifulSoup, Scrapy, or Selenium." },
  { step: "03", title: "Data Extraction", text: "Efficiently scrape raw data from sources." },
  { step: "04", title: "Cleaning & Structuring", text: "Use Pandas & OpenRefine for quality assurance." },
  { step: "05", title: "Export & Delivery", text: "Provide data in CSV, Excel, SQL, or JSON formats." },
];

const industries = [
  { title: "E-commerce", text: "Price tracking, product details, reviews", icon: <FiGlobe /> },
  { title: "Real Estate", text: "Property listings, agent contacts", icon: <FiHome /> },
  { title: "Finance", text: "Market data, stock info, competitor analysis", icon: <FiBarChart /> },
  { title: "Travel & Hospitality", text: "Hotel listings, flight prices, reviews", icon: <FiBriefcase /> },
  { title: "Marketing & Lead Gen", text: "Business directories, contact data", icon: <FiUsers /> },
];

const faqs = [
  {
    question: "Is Python web scraping legal?",
    answer:
      "Yes, we follow ethical scraping practices, targeting only public data and complying with GDPR & data policies.",
  },
  {
    question: "What’s the difference between BeautifulSoup, Scrapy, and Selenium?",
    answer:
      "BeautifulSoup = small-scale parsing, Scrapy = large-scale crawling, Selenium = for dynamic, JS-heavy sites.",
  },
  {
    question: "Can you integrate scraped data into my CRM?",
    answer: "Yes, we support Salesforce, HubSpot, Zoho, and custom CRMs.",
  },
  {
    question: "How often can you scrape data?",
    answer: "We can set up one-time scrapes or recurring (daily, weekly, monthly).",
  },
  {
    question: "What formats do you deliver data in?",
    answer: "We deliver Excel, CSV, SQL, JSON, or Google Sheets based on your preference.",
  },
];

export default function PythonWebScrapingPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <Head>
        <title>Python Web Scraping Services with Libraries | Data Extraction Experts</title>
        <meta
          name="description"
          content="Professional Python web scraping services using BeautifulSoup, Scrapy, Selenium & Pandas. Extract, clean, and export accurate web data for business growth."
        />
        <meta
          name="keywords"
          content="python web scraping, web scraping with python, python web scraping libraries, python web scraping services, beautifulsoup scraping, scrapy web scraping, selenium web scraping, pandas data cleaning, python data extraction services"
        />
      </Head>

      <div className="font-sans">
        {/* ✅ Hero Section */}
        <section className="relative overflow-hidden p-6 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-brandOrange/10 via-orange-200/30 to-white" />
          <div className="container mx-auto px-6 py-16 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
                  Why <span className="text-brandOrange">Choose Python</span> for Web Scraping?
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  Python web scraping has become the industry standard for businesses that want fast, reliable, and
                  flexible data extraction. With its rich ecosystem of libraries, Python makes it possible to scrape
                  structured and unstructured data, clean it, and export into formats like Excel, CSV, JSON, or SQL.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-brandOrange mt-1" /> Scalable scraping for thousands of pages
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-brandOrange mt-1" /> Custom data extraction tailored to your business
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-brandOrange mt-1" /> Integration with databases and CRMs
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-brandOrange mt-1" /> Automation of repetitive tasks
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading"
                  >
                    Get Started
                  </a>
                  <Link
                    href="/services-page/python-web-scraping"
                    className="px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition font-heading"
                  >
                    Explore More
                  </Link>
                </div>
              </div>

              {/* ✅ Stats Section */}
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-black via-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                      {stats.map((item, i) => (
                        <div
                          key={i}
                          className="h-24 flex flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur border border-white/10 text-white transition transform hover:scale-105 hover:bg-brandOrange hover:border-brandOrange/50 shadow-lg hover:shadow-xl"
                        >
                          <div className="text-white mb-1">{item.icon}</div>
                          <span className="text-lg font-bold">{item.value}</span>
                          <span className="text-xs">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 ring-1 ring-black/5">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-brandOrange text-xl" />
                    <div className="text-sm">
                      <div className="font-semibold">Verified Data</div>
                      <div className="text-gray-600">Clean & Accurate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Libraries Section */}
        <section id="libraries" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-10">Python Web Scraping Libraries We Use</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {libraries.map((lib, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange"
                >
                  <div className="text-brandOrange text-3xl mb-4">{lib.icon}</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{lib.title}</h3>
                  <p className="text-gray-600">{lib.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-10">Our Python Web Scraping Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border hover:border-brandOrange"
                >
                  <div className="text-brandOrange text-2xl font-heading font-bold mb-2">{step.step}</div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-10">Industries We Serve</h2>
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

        {/* ✅ FAQs Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-10">FAQs – Python Web Scraping Services</h2>
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
    </>
  );
}
