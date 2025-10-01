import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    canonical: "https://infonavigators.com/services-page/",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/services-page/" />
      </Head>

      {/* Main Services Intro Section */}
      <section className="w-full bg-white pt-32 pb-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-brandOrange">Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
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

          <div className="flex justify-center">
            <Image
              src="/images.webp"
              alt="Our Services"
              width={800}
              height={600}
              className="rounded-xl object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* ✅ Services Directory Section */}
      <section className="w-full bg-gray-50 py-16 px-6 lg:px-20">
        <h2 className="text-center text-2xl font-bold mb-10">
          Explore Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-sm">
          {/* Category 1 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/lead-generation/" className="text-brandOrange hover:text-brandOrange transition">
                Lead Generation
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/b2b-lead-generation/" className="text-gray-700 hover:text-brandOrange transition">B2B Leads</Link></li>
              <li><Link href="/services-page/email-list-building/" className="text-gray-700 hover:text-brandOrange transition">Contact Email List Building</Link></li>
              <li><Link href="/services-page/linkedin-list/" className="text-gray-700 hover:text-brandOrange transition">LinkedIn List Building</Link></li>
              <li><Link href="/services-page/email-marketing/" className="text-gray-700 hover:text-brandOrange transition">Email Marketing</Link></li>
            </ul>
          </div>

          {/* Category 2 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/internet-research/" className="text-brandOrange hover:text-brandOrange transition">
                Internet Research
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/market-research/" className="text-gray-700 hover:text-brandOrange transition">Market Research</Link></li>
              <li><Link href="/services-page/data-verification/" className="text-gray-700 hover:text-brandOrange transition">Data Verification</Link></li>
            </ul>
          </div>

          {/* Category 3 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/influencer-research/" className="text-brandOrange hover:text-brandOrange transition">
                Influencer Research
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/youtube-influencer-research/" className="text-gray-700 hover:text-brandOrange transition">YouTube Influencers</Link></li>
              <li><Link href="/services-page/instagram-influencer-research/" className="text-gray-700 hover:text-brandOrange transition">Instagram Influencers</Link></li>
              <li><Link href="/services-page/tiktok-influencer-research/" className="text-gray-700 hover:text-brandOrange transition">TikTok Influencers</Link></li>
            </ul>
          </div>

          {/* Category 4 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/data-entry/" className="text-brandOrange hover:text-brandOrange transition">
                Data Entry
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/crm-data-entry/" className="text-gray-700 hover:text-brandOrange transition">CRM Data Entry</Link></li>
              <li><Link href="/services-page/data-cleaning/" className="text-gray-700 hover:text-brandOrange transition">Data Cleaning</Link></li>
            </ul>
          </div>

          {/* Category 5 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/data-extraction/" className="text-brandOrange hover:text-brandOrange transition">
                Data Extraction
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/web-scraping/" className="text-gray-700 hover:text-brandOrange transition">Web Scraping</Link></li>
              <li><Link href="/services-page/data-cleaning-extraction/" className="text-gray-700 hover:text-brandOrange transition">Data Cleaning and Extraction</Link></li>
            </ul>
          </div>

          {/* Category 6 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/python-scraping/" className="text-brandOrange hover:text-brandOrange transition">
                Python Scraping
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/python-web-scraping/" className="text-gray-700 hover:text-brandOrange transition">Python Web Scraping</Link></li>
              <li><Link href="/services-page/data-cleaning-export/" className="text-gray-700 hover:text-brandOrange transition">Data Cleaning</Link></li>
            </ul>
          </div>

          {/* Category 7 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/seo-page/" className="text-brandOrange hover:text-brandOrange transition">
                SEO
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/on-page-seo/" className="text-gray-700 hover:text-brandOrange transition">On-Page SEO</Link></li>
              <li><Link href="/services-page/off-page-seo/" className="text-gray-700 hover:text-brandOrange transition">Off-Page SEO</Link></li>
              <li><Link href="/services-page/technical-seo/" className="text-gray-700 hover:text-brandOrange transition">Technical SEO</Link></li>
              <li><Link href="/services-page/local-seo/" className="text-gray-700 hover:text-brandOrange transition">Local SEO</Link></li>
            </ul>
          </div>

          {/* Category 8 */}
          <div>
            <h5 className="font-semibold mb-2">
              <Link href="/services-page/web-development/" className="text-brandOrange hover:text-brandOrange transition">
                Web Development
              </Link>
            </h5>
            <ul className="space-y-2 pl-2">
              <li><Link href="/services-page/front-end-development/" className="text-gray-700 hover:text-brandOrange transition">Frontend Development</Link></li>
              <li><Link href="/services-page/back-end-development/" className="text-gray-700 hover:text-brandOrange transition">Backend Development</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Existing Components */}
      <HowWeDeliver />
      <Services />
      <Tools />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
