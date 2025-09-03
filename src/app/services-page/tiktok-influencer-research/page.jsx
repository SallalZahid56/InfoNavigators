"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  CheckCircle,
  Search,
  BarChart2,
  Users,
  ClipboardCheck,
  TrendingUp,
  Globe2,
  ShieldCheck,
  PlaySquare,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import FinalCTA from "../../../components/FinalCTA";

export default function TikTokInfluencerResearch() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can you find both micro and macro TikTok influencers?",
      answer:
        "Yes, we research influencers of all sizes depending on your campaign goals.",
    },
    {
      question: "How do you ensure the influencers are genuine?",
      answer:
        "We use engagement audits, audience insights, and fraud detection tools.",
    },
    {
      question: "Do you focus on global or local influencers?",
      answer:
        "Both. We build influencer lists based on specific countries, regions, or global reach.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Standard delivery is 7–10 business days, depending on the scope.",
    },
    {
      question:
        "Can I combine TikTok influencer research with other platforms?",
      answer:
        "Absolutely. Many clients bundle TikTok, YouTube, and Instagram influencer research for multi-platform campaigns.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      <Head>
        <title>
          TikTok Influencer Research Services | Verified Creator Discovery
        </title>
        <meta
          name="description"
          content="Expert TikTok influencer research to help brands discover verified creators, analyze engagement, and deliver data-driven influencer lists for high-ROI campaigns."
        />
        <meta
          name="keywords"
          content="TikTok influencer research, TikTok influencer discovery, TikTok influencer marketing research, TikTok influencer lists, influencer research services, influencer research company"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 text-center relative mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Why TikTok Influencer Research Matters
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            TikTok is the fastest-growing social media platform, making it a
            powerful space for influencer-driven marketing. Our TikTok
            Influencer Research Services help you discover verified,
            high-performing influencers with real engagement and audience
            alignment.
          </p>
          <p className="text-blue-600 font-semibold text-center">
            👉{" "}
            <a
              href="/services-page/influencer-research"
              className="underline hover:text-black"
            >
              Influencer Research Services
            </a>
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <a href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website.">
            <button className="bg-brandOrange text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition">
              Get Started Now
            </button>
          </a>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          What We Offer in TikTok Influencer Research
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-lg">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>TikTok Influencer Discovery</strong> – Find creators by
                niche, region, or audience interest.
              </li>
              <li>
                <strong>Engagement Metrics</strong> – Analyze likes, comments,
                shares, and watch time.
              </li>
              <li>
                <strong>Audience Insights</strong> – Location, gender, and
                interest analysis.
              </li>
              <li>
                <strong>Content Quality Review</strong> – Match influencer style
                with your brand tone.
              </li>
              <li>
                <strong>Competitor Research</strong> – Discover influencers
                boosting your competitors’ visibility.
              </li>
            </ul>
            <p className="text-brandOrange font-semibold text-center">
              <span className="block text-black font-semibold text-center">
                👉 Related service:{" "}
                <a
                  href="/services-page/market-research"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Market Research & Competitor Analysis
                </a>
              </span>
            </p>
          </div>
          <Image
            src="/tiktokinflurncers.jpg"
            alt="TikTok Influencer Research"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Our Proven TikTok Influencer Research Process
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { icon: Search, text: "Campaign Goal Setting" },
            { icon: Users, text: "Influencer Discovery" },
            { icon: ShieldCheck, text: "Data Verification" },
            { icon: BarChart2, text: "Audience Analysis" },
            { icon: ClipboardCheck, text: "Final Delivery" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <item.icon className="w-10 h-10 text-brandOrange mb-4" />
              <p className="font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-brandOrange font-semibold text-center">
          <span className="block text-black font-semibold text-center">
            👉 Related service:{" "}
            <a
              href="/services-page/data-cleaning"
              className="text-blue-600 font-semibold hover:underline"
            >
              Data Cleaning & Formatting
            </a>
          </span>
        </p>
      </section>

      {/* Tools */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Tools We Use for TikTok Influencer Research
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { icon: PlaySquare, text: "TikTok Creator Marketplace" },
            { icon: ShieldCheck, text: "HypeAuditor" },
            { icon: BarChart2, text: "Upfluence" },
            { icon: TrendingUp, text: "Analisa.io" },
            { icon: ClipboardCheck, text: "Manual Review" },
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <tool.icon className="w-10 h-10 text-brandOrange mb-4" />
              <p className="font-semibold">{tool.text}</p>
            </div>
          ))}
        </div>
        <p className="text-brandOrange font-semibold text-center">
          <span className="block text-black font-semibold text-center">
            👉 Related service:{" "}
            <a
              href="/services-page/data-verification"
              className="text-blue-600 font-semibold hover:underline"
            >
              Data Verification & Fact-Checking
            </a>
          </span>
        </p>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          Industries We Support with TikTok Influencer Research
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { icon: Briefcase, text: "E-commerce & Retail" },
            { icon: Globe2, text: "Food & Beverage" },
            { icon: Users, text: "Education & E-learning" },
            { icon: TrendingUp, text: "Travel & Hospitality" },
            { icon: CheckCircle, text: "Health & Wellness" },
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <industry.icon className="w-10 h-10 text-brandOrange mb-4" />
              <p className="font-semibold">{industry.text}</p>
            </div>
          ))}
        </div>
        <p className="text-brandOrange font-semibold text-center">
          <span className="block text-black font-semibold text-center">
            👉 Related service:{" "}
            <a
              href="/services-page/b2b-lead-generation"
              className="text-blue-600 font-semibold hover:underline"
            >
              Visit: B2B Lead Generation Services
            </a>
          </span>
        </p>
      </section>

      {/* Why Choose */}
      <section className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-heading font-bold mb-8">
          Why Choose Info Navigators for TikTok Influencer Research?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <ul className="list-disc pl-6 space-y-2">
            <li>✔️ 15+ years of research & marketing expertise</li>
            <li>✔️ Verified influencer lists with real engagement</li>
            <li>✔️ Niche & region-specific targeting</li>
            <li>✔️ Flexible data delivery formats (Excel, CSV, Google Sheets)</li>
            <li>✔️ Trusted by 1,000+ global clients</li>
          </ul>
          <p className="text-lg text-gray-700">
            We don’t just list influencers — we analyze, validate, and recommend
            the best ones for your campaigns.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-8">
          Case Studies – TikTok Influencer Research in Action
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Case Study 1 – Fashion Brand Launch
            </h3>
            <p>
              A startup fashion retailer used our TikTok influencer lists to
              connect with 15 micro-influencers. Within 45 days, their brand saw
              50K+ video views and a 22% sales increase.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Case Study 2 – Food Product Promotion
            </h3>
            <p>
              We identified 8 lifestyle influencers for a packaged food brand.
              The campaign reached 1M+ TikTok users and boosted awareness by 35%
              in 2 months.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-8">
          FAQs – TikTok Influencer Research
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{faq.question}</p>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
