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
    question: "What email marketing and campaign services do you provide?",
    answer:
      "We run end-to-end email marketing campaigns: strategy, copy & design, list building, segmentation, automated sequences, A/B testing, and performance reporting. We can handle one-off blasts or multi-step nurture flows tailored to your sales cycle.",
  },
  {
    question: "How do you build and validate email lists for campaigns?",
    answer:
      "We source targeted contacts via LinkedIn and web research, enrich records, and validate addresses using verification tools to minimize bounces. Clean lists improve deliverability and campaign ROI—ask about our sample lists before you commit.",
  },
  {
    question: "How do you ensure high deliverability and low bounce rates?",
    answer:
      "We follow best practices: list hygiene, address verification, domain authentication (SPF/DKIM), sender warm-up, and monitoring. We also use suppression lists and adjust sending patterns to maximize inbox placement.",
  },
  {
    question: "Can you integrate email campaigns with our CRM or sales tools?",
    answer:
      "Yes. We integrate with HubSpot, Zoho, Close.io, GHL and other CRMs to sync leads, track activity, and automate follow-ups. We can also push campaign data to your dashboards for unified reporting.",
  },
  {
    question: "What metrics and reporting do you provide for campaigns?",
    answer:
      "We track opens, clicks, replies, bounces, unsubscribes, conversions and revenue (when available). Reports include campaign-level KPIs, A/B test results and actionable recommendations for optimization.",
  },
  {
    question: "Do you handle email copywriting and creative assets?",
    answer:
      "Yes — our team writes subject lines, body copy, and CTA variants, and prepares HTML or plain-text templates. We optimize messaging for deliverability and engagement across audiences.",
  },
  {
    question: "Are your email campaigns compliant with privacy rules?",
    answer:
      "We follow GDPR and CAN-SPAM guidelines where applicable: we use lawful contact sources, include clear unsubscribe options, and honor data subject requests. Ask us about region-specific compliance requirements.",
  },
  {
    question: "How do I get started with an email campaign?",
    answer:
      "Start with a discovery call. We’ll audit your current assets, recommend a campaign plan, send a sample list or pilot campaign, and provide a quote based on scope and volume.",
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
