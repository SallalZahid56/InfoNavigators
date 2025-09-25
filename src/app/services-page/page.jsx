import React from "react";
import Image from "next/image";

import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Tools from "../../components/Tools";
import WhyChooseUs from "../../components/WhyChooseUs";
import HowWeDeliver from "../../components/HowWeDeliver";
import FinalCTA from "../../components/FinalCTA";
import Head from "next/head";

export const metadata = {
  title: "Digital Marketing Services: SEO, Lead Gen & Web Scraping",
  description:
    "At InfoNav, we offer a wide range of digital marketing services, including lead generation, SEO, Python scraping, influencer research, and web development. Our client-focused approach ensures measurable results and sustainable business growth.",
  keywords:
    "digital marketing services, lead generation, Python scraping, SEO strategies, influencer research, internet research, data extraction, web development, data entry services, online marketing, B2B lead generation, business growth solutions",
  alternates: {
    canonical: "https://infonavigators.com/services-page/", // ✅ canonical here
  },
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>

      {/* Main Services Intro Section */}
      <section className="w-full bg-white pt-32 pb-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-brandOrange">Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed px-2 md:px-0">
              At <span className="font-semibold">InfoNav</span>, we offer a wide range of{" "}
              <span className="text-brandOrange font-semibold">digital services</span>{" "}
              designed to empower businesses globally. Our expertise includes{" "}
              <span className="font-semibold">
                Lead Generation, Data Mining, Web Scraping, Influencer Research, and SEO Strategies
              </span>
              . With a client-focused approach, we deliver innovative solutions that help brands thrive in a competitive marketplace.
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <Image
              src="/images.webp" // ✅ directly from public folder
              alt="Our Services"
              width={800}       // adjust width as needed
              height={600}      // adjust height as needed
              className="rounded-xl object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <HowWeDeliver />
      <Services />
      <Tools />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
