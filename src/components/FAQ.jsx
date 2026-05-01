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
    question: "What exactly does InfoNav do?",
    answer:
      "InfoNav is a full-service b2b lead generation agency that helps companies book qualified sales meetings through targeted cold email outreach service, verified prospect data, and end-to-end outbound system management.",
  },
  {
    question: "How is InfoNav different from buying a lead list?",
    answer:
      "We are not a list provider. As your fully outsourced lead generation partner, we handle everything - prospect research, email copywriting, campaign management, and ongoing optimization, so your team focuses only on closing.",
  },
  {
    question: "How many meetings can we expect per month?",
    answer:
      "Most clients see 10–30 booked meetings per month depending on their offer, niche, and target market. Our appointment setting service b2b teams rely on is designed to deliver consistent, qualified conversations - not one-off wins.",
  },
  {
    question: "Do you only serve companies in the USA?",
    answer:
      "While we operate as a b2b email marketing agency usa businesses frequently work with, we serve B2B clients globally. Our outreach systems and data intelligence work across North America, Europe, and beyond.",
  },
  {
    question: "How long before we start seeing results?",
    answer:
      "Most campaigns begin generating replies within the first 2–3 weeks of launch. Our outsourced lead generation process is built for speed without sacrificing targeting accuracy.",
  },
  {
    question: "What does your cold email outreach process look like?",
    answer:
      "We start by defining your ideal customer profile, build verified prospect lists, craft personalized email sequences, and launch campaigns optimized for deliverability and replies. As a dedicated b2b lead generation agency, every step is managed by our team end to end.",
  },
  {
    question: "How do we get started with InfoNav?",
    answer:
      "Simple - book a discovery call with our team. We'll assess your target market, discuss your sales goals, and map out a custom appointment setting service b2b and outreach strategy built around your business.",
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
