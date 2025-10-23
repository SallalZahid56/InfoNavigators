"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Lead Generation",
    image: "/lead-generation.png",
    desc: "We specialize in delivering high-quality, targeted B2B leads tailored to your ideal customer profile. Our custom contact lists empower your sales team to reach decision-makers faster and close more deals. By fueling your pipeline with verified prospects, we help drive consistent growth and measurable ROI.",
    link: "https://docs.google.com/spreadsheets/d/18DrAIpJO0TcyMJCZpIIdBDO1c2A_JeDqC4MRnEFQsXA/edit?gid=51388062#gid=51388062",
  },
  {
    title: "Data Entry",
    image: "/data-entry.png",
    desc: "We offer accurate and efficient data entry solutions designed to keep your business information up to date. From CRM updates to data cleaning, our services ensure your records stay organized and reliable. By maintaining clean, actionable data, we help you improve decision-making and operational efficiency.",
    link: "https://docs.google.com/spreadsheets/d/1AJ2b2OrGgMFnW4E365lRYpT4t0OC7YUeF04TJAoJ8eM/edit?gid=0#gid=0",
  },
  {
    title: "Internet Research",
    image: "/influencer-research.png",
    desc: "We deliver in-depth market analysis and competitor research to help you stay ahead in your industry. Our tailored insights uncover opportunities, identify trends, and reveal gaps in the market. With data-driven recommendations, we empower you to make smarter strategic decisions and drive growth.",
    link: "https://docs.google.com/spreadsheets/d/xxxxxxx/edit?usp=sharing",
  },
  {
    title: "Influencer Research",
    image: "/influencer-research.png",
    desc: "We help brands discover and connect with the right YouTube, Instagram, and TikTok influencers to amplify their campaigns. Our research pinpoints creators who align with your niche, audience, and goals. By partnering with authentic influencers, we drive higher engagement, reach, and measurable results.",
    link: "https://docs.google.com/spreadsheets/d/1EMbgz-BXHmtMXWaKd1hQ0qS9N_AJFwttFA25MxM63YQ/edit?gid=0#gid=0",
  },
  {
    title: "Data Extraction",
    image: "/data-extraction.png",
    desc: "We develop custom scraping tools to collect and organize valuable data from diverse online sources. Our structured datasets provide clean, ready-to-use information tailored to your business needs. With accurate, scalable data extraction, we empower you to gain deeper insights and drive smarter decisions.",
    link: "https://docs.google.com/spreadsheets/d/1Nnl_6OQWmSZ1zYCTmNdsd9WWTvbO44du38zelV8mbVw/edit?gid=543811288#gid=543811288",
  },
  {
    title: "Python Scraping",
    image: "/python-scraping.png",
    desc: "We create advanced scraping scripts designed to handle complex and large-scale data projects with precision. Our solutions extract, clean, and structure massive datasets from multiple sources quickly and reliably. By automating data collection at scale, we help your business save time, reduce costs, and gain actionable insights.",
    link: "https://docs.google.com/spreadsheets/d/1ieVlECjF-zajQBCX3R2Sul4YqdNE484rS9MHFfUTQ-s/edit?gid=0#gid=0",
  },
  {
    title: "SEO",
    image: "/Onpage.png",
    desc: "We help businesses boost their brand visibility through a comprehensive SEO approach. From on-page and off-page optimization to technical SEO, our strategies are designed to improve search rankings and drive qualified traffic. With data-driven methods, we enhance your online presence and deliver measurable growth.",
    link: "https://draft9-web.netlify.app/",
  },
  {
    title: "Web Development",
    image: "/web2.png",
    desc: "We design and develop scalable, modern, and fully responsive websites that align with your business goals. Each site is tailored to your brand identity, user experience, and conversion objectives. By blending clean design with robust functionality, we help you stand out online and drive measurable results.",
    link: "https://taskuber.netlify.app/",
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
            Our portfolio reflects a powerful mix of data, digital strategy, and
            technology designed to accelerate business growth. We specialize in
            generating highly targeted B2B leads, giving sales teams direct
            access to decision-makers and shortening the sales cycle. Our data
            entry and internet research services ensure that your information is
            always accurate, organized, and up to date, laying a solid foundation
            for smarter decisions. We go beyond basic research by finding the
            right influencers across YouTube, Instagram, and TikTok, helping
            brands amplify their message and build authentic connections with
            their audiences. With advanced data extraction and Python-driven
            scraping solutions, we gather and structure information from diverse
            online sources, supporting even the most complex projects. Our SEO
            expertise strengthens your digital footprint with optimized content,
            technical improvements, and off-page strategies that improve
            visibility and attract qualified traffic. Finally, our web development
            team creates scalable, modern, and responsive websites tailored to
            your business objectives and customer needs. Each of these services is
            interconnected, giving you a comprehensive, results-driven approach
            that saves time, reduces costs, and accelerates your growth in today’s
            competitive marketplace.
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
