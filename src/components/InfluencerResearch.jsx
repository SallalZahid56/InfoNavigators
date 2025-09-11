"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  Users,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Target,
  FileSpreadsheet,
} from "lucide-react";

export default function InfluencerResearchPage() {
  const [activeTab, setActiveTab] = useState("Instagram");

  const platforms = [
    {
      name: "Instagram",
      description:
        "Discover Instagram influencers with strong engagement and authentic reach. Perfect for lifestyle, fashion, food, and e-commerce brands.",
      link: "/services-page/instagram-influencer-research/",
    },
    {
      name: "Facebook",
      description:
        "We identify Facebook page admins, group leaders, and content creators who influence community-driven audiences.",
      link: "/services-page/instagram-influence-research/",
    },
    {
      name: "YouTube",
      description:
        "Get connected with YouTube creators who build trust through tutorials, product reviews, and industry authority content.",
      link: "/services-page/youTube-influencer-research/",
    },
    {
      name: "TikTok",
      description:
        "Find TikTok creators that create viral campaigns for Gen Z and millennials, perfect for quick brand exposure.",
      link: "/services-page/tiktok-influencer-research/",
    },
  ];

  const faqs = [
    {
      q: "How do you ensure influencer authenticity?",
      a: "We use HypeAuditor and manual verification to filter out fake followers and bots.",
    },
    {
      q: "Can you find influencers in my niche?",
      a: "Yes, from fashion & e-commerce to SaaS & healthcare, we cover all industries.",
    },
    {
      q: "Do you provide international influencer research?",
      a: "Absolutely – we cover local, national, and global influencers.",
    },
    {
      q: "How quickly do I get influencer lists?",
      a: "Most projects are delivered within 5–7 business days.",
    },
    {
      q: "Can this be combined with other services?",
      a: "Yes, many clients combine influencer research with Lead Generation and Market Research for complete campaigns.",
    },
  ];

  return (
    <div className="font-sans text-gray-700">

      {/* ✅ Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 text-center mt-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4">
          Market Research and {" "}
          <span className="text-brandOrange">Influencer Analysis Services</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-3xl mx-auto mb-6">
          In today’s competitive marketplace, making business decisions without
          accurate data is like sailing without a compass. At {" "}
          <span className="font-semibold">Info Navigators</span>, we provide
          influencer research services that give you the insights you need to make
          smarter, faster, and more profitable choices.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
          className="inline-block bg-brandOrange text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-black transition"
        >
          Get a Free Consultation
        </a>
      </section>

      {/* ✅ Why Influencer Research */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold mb-4">
            Why Influencer Research Services Are Essential
          </h2>
          <p className="mb-4">
            Finding the right influencer is not about choosing someone with the
            biggest following. It’s about connecting with authentic creators who
            align with your brand values and can influence real purchasing
            decisions.
          </p>
          <p>
            Our influencer research services help businesses cut through the
            noise by identifying influencers that drive engagement, build
            credibility, and generate measurable ROI.
          </p>
          <span className="block text-black font-semibold text-center">
            👉 See how research fuels growth:{" "}
            <a
              href="/services-page/market-research/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Market Research & Competitor Analysis
            </a>
          </span>
        </div>
        <div>
          <img
            src="/influencerResearch.jpg"
            alt="Influencer Research"
            className="w-full h-auto rounded-xl mt-6 md:mt-0"
          />
        </div>
      </section>

      {/* ✅ What We Deliver */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            What We Deliver in Our Influencer Research Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Search className="w-8 h-8 text-brandOrange" />,
                text: "Influencer Discovery – Find influencers relevant to your niche.",
              },
              {
                icon: <Users className="w-8 h-8 text-brandOrange" />,
                text: "Audience Insights – Age, gender, location, and buying power.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-brandOrange" />,
                text: "Engagement Quality Check – Identify fake followers & bots.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-brandOrange" />,
                text: "Competitor Mapping – Analyze influencer collaborations in your industry.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-brandOrange" />,
                text: "ROI Recommendations – Work only with creators who bring results.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Platform-Specific Tabs */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading font-bold mb-6 text-center">
          Our Platform-Specific Influencer Research
        </h2>
        <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar justify-start sm:justify-center">
          {platforms.map((p) => (
            <button
              key={p.name}
              onClick={() => setActiveTab(p.name)}
              className={`px-4 py-2 rounded-lg font-semibold ${activeTab === p.name
                ? "bg-brandOrange text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="text-center bg-white shadow rounded-lg p-6">
          {platforms
            .filter((p) => p.name === activeTab)
            .map((p) => (
              <div key={p.name}>
                <p className="mb-4">{p.description}</p>
                <span className="block text-black font-semibold text-center">
                  👉 Learn more:{" "}
                  <a
                    href="/services-page/data-verification/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {p.name} Influencer Research
                  </a>
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* ✅ Our Proven Influencer Research Process */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Our Proven Influencer Research Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Target className="w-8 h-8 text-brandOrange" />,
                text: "Define Goals – Understand niche, audience, and campaign targets.",
              },
              {
                icon: <Search className="w-8 h-8 text-brandOrange" />,
                text: "Discovery Phase – Identify influencers using advanced search tools.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-brandOrange" />,
                text: "Verification & Data Cleaning – Eliminate fake or irrelevant influencers.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-brandOrange" />,
                text: "Competitor Benchmarking – Compare influencer activity in your industry.",
              },
              {
                icon: <FileSpreadsheet className="w-8 h-8 text-brandOrange" />,
                text: "Final Delivery – Provide clean influencer lists in Excel, CSV, or Google Sheets.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <span className="block text-black font-semibold text-center">
            👉 Related service:{" "}
            <a
              href="/services-page/data-verification/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Data Verification & Fact-Checking
            </a>
          </span>

        </div>
      </section>

      {/* ✅ Industries We Support */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Industries We Support
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Fashion & Lifestyle – Instagram & TikTok creators.",
              "Technology & SaaS – YouTube and LinkedIn influencers.",
              "E-commerce & Retail – Product-driven campaigns.",
              "Healthcare & Wellness – Verified, trustworthy experts.",
              "Local Businesses – Facebook groups & regional influencers.",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
          <span className="block text-black font-semibold text-center">
            👉 Related service:{" "}
            <a
              href="/services-page/b2b-lead-generation/"
              className="text-blue-600 font-semibold hover:underline"
            >
              B2B Lead Generation Services
            </a>
          </span>
        </div>
      </section>

      {/* ✅ Tools & Techniques */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Tools & Techniques We Use
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "BuzzSumo – Find trending content creators",
              "HypeAuditor – Detect fake followers",
              "Upfluence – Advanced influencer analytics",
              "LinkedIn Navigator – For B2B influencers",
              "Google Analytics – Track campaign performance",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center"
              >
                <CheckCircle className="w-6 h-6 text-brandOrange mr-3" />
                <p className="font-medium text-left">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Why Choose Info Navigators for Influencer Research?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "✔️ 15+ years’ research experience",
              "✔️ Verified influencer lists",
              "✔️ Industry-specific targeting",
              "✔️ Flexible formats: Excel, CSV, Google Sheets",
              "✔️ Proven success across 1,000+ businesses",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex items-center"
              >
                <CheckCircle className="w-6 h-6 text-brandOrange mr-3" />
                <p className="font-medium text-left">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQs */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            FAQs – Influencer Research Services
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-all open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-gray-900">
                  <span>{item.q}</span>
                  <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
