"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const portfolioItems = [
{
    title: "Email Campaigns",
    image: "/email-campaign.jpeg",
    desc: "We design and execute personalized email campaigns as a specialized b2b email marketing agency usa businesses rely on, turning prospects into leads through strategic messaging and continuous optimization. Our approach focuses on crafting compelling content, targeting the right audience, and analyzing performance to maximize engagement and conversions. By leveraging data-driven insights through our cold email outreach service, we help you build meaningful relationships with your prospects and drive measurable results.",
    link: "https://docs.google.com/spreadsheets/d/18DrAIpJO0TcyMJCZpIIdBDO1c2A_JeDqC4MRnEFQsXA/edit?gid=51388062#gid=51388062",
  },
  {
    title: "Lead Generation",
    image: "/lead-generation.png",
    desc: "We specialize in delivering high-quality, targeted B2B leads tailored to your ideal customer profile, the core of what makes InfoNav a trusted outsourced lead generation partner. Our custom contact lists empower your sales team to reach decision-makers faster and close more deals. By fueling your pipeline with verified prospects, our b2b lead generation agency approach drives consistent growth and measurable ROI.",
    link: "https://docs.google.com/spreadsheets/d/18DrAIpJO0TcyMJCZpIIdBDO1c2A_JeDqC4MRnEFQsXA/edit?gid=51388062#gid=51388062",
  },
  {
    title: "Data Prospecting",
    image: "/data-entry.png",
    desc: "Our data prospecting services provide accurate and comprehensive information to support your sales and marketing efforts, a critical component of every appointment setting service b2b strategy we execute. We gather and verify contact details, company information, and market insights to create targeted prospect lists that fuel your outreach campaigns. With our outsourced lead generation approach, you can connect with the right audience and drive meaningful business growth.",
    link: "https://docs.google.com/spreadsheets/d/1AJ2b2OrGgMFnW4E365lRYpT4t0OC7YUeF04TJAoJ8eM/edit?gid=0#gid=0",
  },

  
];

const PortfolioShowcase = () => {
  return (
    <>
      <section id="portfolio" className="py-20 bg-gray-50 mt-8">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-6">
            <span className="text-brandOrange">Portfolio</span> Highlights
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-16">
            As a dedicated b2b lead generation agency, we help businesses generate qualified leads through targeted prospecting and strategic cold email outreach service. Below are examples of campaigns focused on delivering real conversations, sales opportunities, and measurable results.
          </p>

          {/* Alternating layout */}
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-10 mb-20 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brandOrange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition mx-auto lg:mx-0"
                >
                  View Sample <FaArrowRight className="text-xs" />
                </a>
              </div>

              {/* Image */}
              <div className="flex-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioShowcase;
