"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Target,
  Users,
  Database,
  BarChart,
  FileSpreadsheet,
  Wrench,
  Globe,
  ShoppingBag,
  GraduationCap,
  Plane,
  HeartPulse,
  Star,
} from "lucide-react";
import FinalCTA from "../../../components/FinalCTA";

const brandOrange = "text-orange-500";

export default function YouTubeInfluencerResearch() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Q1. Do you focus only on large YouTube influencers?",
      a: "No, we recommend both micro-influencers and macro-influencers, depending on your goals.",
    },
    {
      q: "Q2. Can you research influencers in specific niches like SaaS or healthcare?",
      a: "Yes, our YouTube influencer research is fully customized by niche, country, and audience.",
    },
    {
      q: "Q3. How do you verify engagement authenticity?",
      a: "We analyze watch time, engagement rate, and audience retention — not just subscriber counts.",
    },
    {
      q: "Q4. How long does the research process take?",
      a: "Most projects are completed within 7–10 business days.",
    },
    {
      q: "Q5. Can this be integrated with other services?",
      a: "Yes, many clients combine influencer research with lead generation and market research for maximum impact.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          YouTube Influencer Research Services | Verified Creator Discovery
        </title>
        <meta
          name="description"
          content="Expert YouTube influencer research to discover verified creators, analyze engagement, and deliver data-driven influencer lists for impactful campaigns."
        />
        <meta
          name="keywords"
          content="YouTube influencer research, YouTube influencer discovery, YouTube influencer marketing research, YouTube influencer lists, influencer research services, influencer research company"
        />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* ✅ Hero Section */}
        <section className="bg-white py-16 px-6 text-center mt-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-heading font-bold mb-6">
              Why YouTube Influencer Research Matters
            </h1>
            <p className="text-lg leading-relaxed mb-4">
              YouTube is one of the most powerful platforms for influencer
              marketing, with billions of users watching content daily. From
              tutorials to product reviews, YouTube creators directly influence
              purchase decisions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              But finding the right creators is challenging. Many businesses
              waste resources on influencers with low engagement or mismatched
              audiences. Our YouTube Influencer Research Services ensure you
              partner with authentic, data-verified influencers who bring
              measurable results.
            </p>
            <span className="block text-black font-semibold text-center">
              👉 Related service:{" "}
              <a
                href="/services-page/youtube-influencer-research"
                className="text-blue-600 font-semibold hover:underline"
              >
                Influencer Research Services
              </a>
            </span>

          </div>
        </section>

        {/* ✅ What We Offer */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                What We Offer in YouTube Influencer Research
              </h2>
              <ul className="space-y-4">
                {[
                  "YouTube Influencer Discovery – Identify creators in your niche with the right audience demographics.",
                  "Engagement Metrics & Watch Time – Evaluate beyond subscriber count.",
                  "Audience Analysis – Location, age, and interest breakdowns.",
                  "Content Quality & Style Check – Ensure alignment with your brand.",
                  "Competitor Research – Discover which YouTube influencers drive results for your competitors.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`${brandOrange} w-6 h-6 mt-1 mr-3`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="block text-black font-semibold text-center">
                👉 Related service:{" "}
                <a
                  href="/services-page/market-research"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Market Research & Competitor Analysis
                </a>
              </span>
            </div>
            {/* Right Image */}
            <div>
              <Image
                src="/youtube-influencers.webp"
                alt="YouTube Influencer Research"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ✅ Research Process */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Our Proven YouTube Influencer Research Process
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                text: "Define Campaign Goals – Awareness, leads, or direct sales.",
              },
              {
                icon: Users,
                text: "Influencer Discovery – Use advanced search filters & databases.",
              },
              {
                icon: Database,
                text: "Data Collection & Verification – Build accurate influencer lists.",
              },
              {
                icon: BarChart,
                text: "Audience Demographics & Metrics – Engagement, watch time, and reach analysis.",
              },
              {
                icon: FileSpreadsheet,
                text: "Final Report Delivery – Excel, CSV, or Google Sheets.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-6 flex items-start space-x-4 hover:shadow-lg transition"
              >
                <item.icon className={`${brandOrange} w-8 h-8`} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="block text-black font-semibold text-center">
              👉 Related service:{" "}
              <a
                href="/services-page/data-cleaning-extraction"
                className="text-blue-600 font-semibold hover:underline"
              >
                Data Cleaning & Formatting Services
              </a>
            </span>
          </div>
        </section>

        {/* ✅ Tools We Use */}
        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Tools We Use for YouTube Influencer Research
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, text: "TubeBuddy – Keyword & channel analytics." },
              {
                icon: BarChart,
                text: "Social Blade – Performance tracking & growth trends.",
              },
              { icon: Star, text: "BuzzSumo – Identify trending video creators." },
              {
                icon: Users,
                text: "Upfluence – Data-driven influencer analysis.",
              },
              {
                icon: CheckCircle,
                text: "Manual Verification – Cross-check for genuine influence.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 flex items-start space-x-4 hover:shadow-lg transition"
              >
                <item.icon className={`${brandOrange} w-8 h-8`} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="block text-black font-semibold text-center">
              👉 Related service:{" "}
              <a
                href="/services-page/data-verification"
                className="text-blue-600 font-semibold hover:underline"
              >
                Data Verification & Fact-Checking
              </a>
            </span>
          </div>
        </section>

        {/* ✅ Industries */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Industries We Help with YouTube Influencer Research
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                text: "Tech & Software – SaaS reviews, tutorials, and product launches.",
              },
              {
                icon: ShoppingBag,
                text: "E-commerce & Retail – Unboxings, product demos, and reviews.",
              },
              {
                icon: GraduationCap,
                text: "Education & E-learning – Course reviews, tutorials, and learning apps.",
              },
              {
                icon: Plane,
                text: "Travel & Hospitality – Travel vlogs and experience sharing.",
              },
              {
                icon: HeartPulse,
                text: "Healthcare & Wellness – Product awareness and wellness campaigns.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-6 flex items-start space-x-4 hover:shadow-lg transition"
              >
                <item.icon className={`${brandOrange} w-8 h-8`} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="block text-black font-semibold text-center">
              👉 Related service:{" "}
              <a
                href="/services-page/b2b-lead-generation"
                className="text-blue-600 font-semibold hover:underline"
              >
              B2B Lead Generation Services
              </a>
            </span>
          </div>
        </section>

        {/* ✅ Why Choose */}
        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Why Choose Info Navigators for YouTube Influencer Research?
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "15+ years of digital research expertise",
              "Authentic, data-driven influencer lists",
              "Category & region-specific targeting",
              "Flexible data delivery formats (Excel, CSV, Google Sheets)",
              "Trusted globally by 1,000+ clients",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <CheckCircle className={`${brandOrange} w-8 h-8 mx-auto mb-4`} />
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-lg">
            We don’t just find influencers — we verify, analyze, and recommend
            the ones who can actually deliver ROI for your campaigns.
          </p>
        </section>

        {/* ✅ FAQs */}
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            FAQs – YouTube Influencer Research
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{faq.q}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-orange-500" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-gray-700 mt-3">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}
