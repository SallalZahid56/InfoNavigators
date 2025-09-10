"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Service keywords mapped to their links
const serviceLinks = {
  "Lead Generation": "/services-page/lead-generation",
  "Internet Research": "/services-page/internet-research",
  "Influencer Research": "/services-page/influencer-research",
  "Data Entry": "/services-page/data-entry",
  "Data Extraction": "/services-page/data-extraction",
  "Python Scraping": "/services-page/python-scraping",
  "SEO": "/services-page/seo-page",
  "Web Development": "/services-page/web-development",
};

// Function to replace keywords with links
const highlightServices = (text) => {
  const parts = text.split(
    new RegExp(`(${Object.keys(serviceLinks).join("|")})`, "gi")
  );

  return parts.map((part, i) => {
    const match = Object.keys(serviceLinks).find(
      (service) => service.toLowerCase() === part.toLowerCase()
    );

    if (match) {
      return (
        <a
          key={i}
          href={serviceLinks[match]}
          className="text-blue-600 hover:underline"
        >
          {match}
        </a>
      );
    }

    return part;
  });
};

const faqs = [
  {
    question: "What services does Info Navigators offer?",
    answer:
      "Info Navigators provides a full suite of digital solutions including SEO Consulting Services, Lead Generation, Data Entry & Cleaning, Online Internet Research, Web Development, and more. Each service is tailored to help businesses grow with accurate data, online visibility, and qualified leads.",
  },
  {
    question: "How does your Lead Generation service work?",
    answer:
      "Our Lead Generation Services focus on delivering qualified B2B and B2C leads through proven methods like email list building, LinkedIn prospecting, influencer research, and cold outreach. We verify every contact, so your sales team spends less time searching and more time closing deals.",
  },
  {
    question: "Why is accurate Data Entry important?",
    answer:
      "Accurate data entry ensures that your marketing and sales campaigns target the right audience without errors. Our Data Entry Services include CRM Data Entry and Data Cleaning & Formatting, which eliminate duplicates, correct errors, and standardize your database for smooth operations.",
  },
  {
    question: "Do you provide Internet & Market Research services?",
    answer:
      "Yes. Our Online Internet Research Services help businesses gather insights on competitors, markets, and customers. From Market Research & Competitor Analysis to Data Verification & Fact-Checking, we ensure your decisions are backed by verified, actionable data.",
  },
  {
    question: "What industries do you serve with Lead Generation and Research?",
    answer:
      "We work with diverse industries such as SaaS, eCommerce, Real Estate, Finance, Healthcare, and Professional Services. Our customized B2B Lead Generation and B2C Lead Generation strategies ensure industry-specific targeting.",
  },
  {
    question: "Is SEO still effective for businesses in 2025?",
    answer:
      "Absolutely. SEO is the foundation of digital growth. Our SEO Services ensure your brand ranks higher in Google, builds credibility, and attracts long-term organic traffic—unlike paid ads that stop once the budget ends.",
  },
  {
    question: "Do you offer Web Development along with Marketing?",
    answer:
      "Yes. A strong online presence starts with a powerful website. Our Web Development Services include responsive design, eCommerce sites, and custom solutions that integrate seamlessly with SEO and lead generation strategies.",
  },
  {
    question: "Can I get a sample of leads before committing?",
    answer:
      "Yes. We provide sample B2B Leads so you can test the accuracy and relevance before starting a larger campaign. Explore our Lead Generation Page to learn how we deliver clean, verified data.",
  },
  {
    question: "Do you provide global services or only local clients?",
    answer:
      "Info Navigators works with clients across the world. Whether you need International B2B Leads or Local Market Research, our team adapts strategies for your target geography.",
  },
  {
    question: "How do I get started with Info Navigators?",
    answer:
      "Getting started is easy. Simply Contact Us or Book a Call with our experts. We’ll analyze your business goals and suggest the right combination of services—whether it’s Lead Generation, SEO, or Data Research.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-black">
          Frequently Asked <span className="text-brandOrange">Questions</span>
        </h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl md:max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-black pr-4">
                {faq.question}
              </h3>
              <span className="text-brandOrange text-base sm:text-lg md:text-xl flex-shrink-0">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-black font-sans leading-relaxed">
                {highlightServices(faq.answer)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
