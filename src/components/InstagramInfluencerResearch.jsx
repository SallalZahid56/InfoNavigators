"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Users,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Globe,
  ChevronDown,
} from "lucide-react";


export default function InstagramInfluencerResearch() {
  const [openFaq, setOpenFaq] = useState(null);
  const brandIconCircle = "bg-brandOrange/10 text-brandOrange p-3 rounded-lg";

  const offers = [
    { icon: <Search className="w-6 h-6" />, text: "Instagram Influencer Discovery – Identify creators based on your target audience, niche, and location." },
    { icon: <Users className="w-6 h-6" />, text: "Engagement Rate Analysis – Spot influencers with genuine connections, not inflated metrics." },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Audience Demographics – Understand follower age, gender, and geography." },
    { icon: <BarChart3 className="w-6 h-6" />, text: "Content Quality Check – Analyze brand fit, posting style, and consistency." },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Competitor Benchmarking – See which influencers your competitors are working with." },
  ];

  const processSteps = [
    "Define Your Goals – Sales growth, brand awareness, or product launches.",
    "Influencer Discovery – Use hashtags, niche searches, and advanced platforms.",
    "Data Collection – Compile Instagram influencer lists with verified info.",
    "Audience Analysis – Ensure influencers match your ideal customer profile.",
    "Final Report Delivery – Clean, ready-to-use influencer database in CSV, Excel, or Google Sheets.",
  ];

  const tools = [
    "HypeAuditor – Fake follower & engagement detection.",
    "BuzzSumo – Find trending Instagram content.",
    "Upfluence – Data-driven influencer analytics.",
    "Brandwatch – Social listening & sentiment analysis.",
    "Manual Verification – Human research for authenticity.",
  ];

  const industries = [
    { title: "Fashion & Lifestyle", desc: "Apparel, jewelry, beauty brands." },
    { title: "Food & Beverage", desc: "Restaurants, cafes, FMCG products." },
    { title: "Fitness & Wellness", desc: "Health coaches, trainers, wellness products." },
    { title: "Travel & Hospitality", desc: "Hotels, resorts, and tourism businesses." },
    { title: "Tech & SaaS", desc: "B2B and consumer tech awareness campaigns." },
  ];

  const whyChoose = [
    "15+ years of digital research experience",
    "Verified, authentic influencer lists",
    "Niche-specific targeting",
    "Custom delivery formats – Excel, CSV, Google Sheets",
    "Trusted by 1,000+ global businesses",
  ];

  const faqs = [
    { q: "How do you verify Instagram influencers?", a: "We use HypeAuditor, Upfluence, and manual checks to confirm authenticity." },
    { q: "Can I target influencers in a specific country or niche?", a: "Yes, we customize influencer discovery based on industry, location, and audience type." },
    { q: "Do you provide micro-influencer research?", a: "Absolutely! Micro-influencers often have higher engagement and better ROI than mega accounts." },
    { q: "How fast is the delivery?", a: "Most Instagram influencer research projects are completed in 5–7 business days." },
    { q: "Can this service be combined with lead generation?", a: "Yes. Many clients use Instagram influencer research + lead generation to maximize brand outreach." },
  ];

  return (
    <div className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center mt-10">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Why <span className="text-brandOrange">Instagram Influencer Research</span> Matters
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Instagram is one of the top influencer marketing platforms where audiences engage daily with creators they trust. But not every influencer delivers real results. Many brands waste time and budget on accounts with fake followers, low engagement, or mismatched audiences.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          That’s why our Instagram Influencer Research Services are designed to help businesses find authentic, verified Instagram influencers who actually influence buying decisions.
        </p>

        <Link href="/services-page/" className="inline-block mt-6 bg-brandOrange text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-black transition">
          See our full service
        </Link>
      </section>

      {/* WHAT WE OFFER */}
      <section id="offers" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          What We Offer in <span className="text-brandOrange">Instagram Influencer Research</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {offers.map((o, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
                  <div className={`${brandIconCircle} flex-shrink-0`}>
                    <div className="text-brandOrange">{o.icon}</div>
                  </div>
                  <p className="text-gray-700 font-medium">{o.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <span className="block text-black font-semibold text-center">
                👉 Complementary Service:{" "}
                <a
                  href="/services-page/lead-generation/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Lead Generation Services
                </a>
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/instagramInfluencers.jpg" alt="Instagram influencer research" className="rounded-xl object-cover max-h-96 w-full" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          Our Proven <span className="text-brandOrange">Influencer Research Process</span>
        </h2>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {processSteps.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`${brandIconCircle} flex-shrink-0`}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-gray-700">{s}</p>
              </div>
            ))}

            <div className="mt-4">
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
          </div>

          <div className="flex justify-center">
            <img src="/influencerresearchprocess.png" alt="Research process" className="rounded-xl object-cover max-h-96 w-full" />
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">Tools & Techniques We Use</h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {tools.map((t, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                <div className={`${brandIconCircle} flex-shrink-0`}>
                  <Globe className="w-5 h-5 text-brandOrange" />
                </div>
                <p className="text-gray-700">{t}</p>
              </div>
            ))}
            <div className="mt-3">
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
          </div>

          <div className="flex justify-center">
            <img src="/social influencer research.avif" alt="tools and techniques" className="rounded-xl shadow-lg object-cover max-h-96 w-full" />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">Industries We Help</h2>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((it, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className={`${brandIconCircle}`}><Users className="w-5 h-5" /></div>
                <h3 className="font-heading font-semibold">{it.title}</h3>
              </div>
              <p className="text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
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

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">Why Choose Info Navigators</h2>

        <div className="max-w-5xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 gap-6">
          {whyChoose.map((w, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow flex items-start gap-4">
              <div className={`${brandIconCircle} flex-shrink-0`}><CheckCircle className="w-5 h-5" /></div>
              <p className="text-gray-700">{w}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">Case Studies — Real Results</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/social influencer research.avif" alt="Case 1" className="w-full h-44 object-cover" />
            <div className="p-6 bg-white">
              <div className="text-sm text-brandOrange font-semibold mb-2">Fashion E-commerce</div>
              <h3 className="font-heading font-bold text-xl mb-2">Instagram micro-influencers increase sales</h3>
              <p className="text-gray-700">We delivered 30 micro-influencers; sales grew 35% in 90 days.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/social influencer research.avif" alt="Case 2" className="w-full h-44 object-cover" />
            <div className="p-6 bg-white">
              <div className="text-sm text-brandOrange font-semibold mb-2">Fitness Product</div>
              <h3 className="font-heading font-bold text-xl mb-2">Campaign grows followers & sales</h3>
              <p className="text-gray-700">Connected with fitness creators; 50k+ followers and 20% sales lift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">FAQs – Instagram Influencer Research</h2>

        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-4 py-4 flex items-center justify-between text-left font-semibold"
              >
                <span>{f.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 text-gray-700">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className="h-20" />
    </div>
  );
}
