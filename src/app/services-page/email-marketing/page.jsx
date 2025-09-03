"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  FiTarget,
  FiCheckCircle,
  FiZap,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiGlobe,
  FiUsers,
  FiChevronDown,
  FiMail,
  FiBarChart,
} from "react-icons/fi";
import FinalCTA from "../../../components/FinalCTA";

const faqs = [
  {
    q: "How often should I send emails?",
    a: "It depends on your audience and goals — weekly or bi-weekly is a good starting point.",
  },
  {
    q: "Can you write the email content for us?",
    a: "Yes, our copywriters specialize in sales-driven, conversion-focused email content.",
  },
  {
    q: "Do you handle email design?",
    a: "Yes, we design mobile-friendly, visually appealing templates.",
  },
  {
    q: "What if my email list is small?",
    a: "We can help you grow your list with lead generation strategies.",
  },
  {
    q: "Can you integrate with my CRM?",
    a: "Yes — we work with HubSpot, Salesforce, Zoho, and others.",
  },
  {
    q: "Will you manage the campaign from start to finish?",
    a: "Yes — we handle strategy, design, sending, and analytics.",
  },
];

export default function EmailMarketing() {
  const [open, setOpen] = useState(null);

  const stats = [
    { icon: <FiUsers size={18} />, label: "Clients", value: "1,000+" },
    { icon: <FiTrendingUp size={18} />, label: "Years Experience", value: "15+" },
    { icon: <FiMail size={18} />, label: "Emails Sent", value: "5M+" },
    { icon: <FiGlobe size={18} />, label: "Countries Served", value: "50+" },
    { icon: <FiCheckCircle size={18} />, label: "Open Rate", value: "98%" },
    { icon: <FiBarChart size={18} />, label: "ROI Increase", value: "3x" },
  ];

  return (
    <>
      <Head>
        <title>Email Marketing Services | High-Converting Campaigns</title>
        <meta
          name="description"
          content="Expert email marketing services to boost engagement and sales. From B2B email campaigns to targeted B2C promotions, we design, write, and send high-converting emails."
        />
        <meta
          name="keywords"
          content="email marketing services, b2b email marketing, email marketing company, email marketing agency, b2c email marketing, cold email campaigns, email automation, email drip campaigns, newsletter marketing, targeted email marketing, Info Navigators"
        />
      </Head>

      <div className="pt-24 bg-white text-gray-900">
        {/* HERO */}
        <section className="relative overflow-hidden p-6 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-brandOrange/10 via-orange-200/30 to-white" />
          <div className="container mx-auto px-6 py-16 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Professional{" "}
                  <span className="text-brandOrange">Email Marketing</span> Services That Drive Results
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  At Info Navigators, we help businesses turn email marketing into a powerful revenue
                  channel. We design, build, and execute campaigns that get opened, read, and clicked.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                    className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition"
                  >
                    Book a Free Consultation
                  </a>
                  <Link
                    href="/services-page"
                    className="px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition"
                  >
                    Explore Services
                  </Link>
                </div>
                <div className="mt-6 flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FiUsers /> 1,000+ Clients
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle /> 15+ Years
                  </div>
                  <div className="flex items-center gap-2">
                    <FiTrendingUp /> Millions of Emails
                  </div>
                </div>
              </div>

              {/* Right Visual: KPI Dashboard */}
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-black via-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                      {stats.map((item, i) => (
                        <div
                          key={i}
                          className="h-24 flex flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur border border-white/10 text-white transition transform hover:scale-105 hover:bg-brandOrange hover:border-brandOrange/50 shadow-lg hover:shadow-xl"
                        >
                          <div className="text-white mb-1">{item.icon}</div>
                          <span className="text-lg font-bold">{item.value}</span>
                          <span className="text-xs">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 ring-1 ring-black/5">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-brandOrange text-xl" />
                    <div className="text-sm">
                      <div className="font-semibold">Verified Campaigns</div>
                      <div className="text-gray-600">Higher deliverability & ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY EMAIL MARKETING */}
      <section className="container mx-auto p-6 md:p-10 lg:p-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why Email Marketing Still Delivers the Best ROI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
          {[
            "Reach your audience directly without social algorithms.",
            "Nurture leads through the entire sales funnel.",
            "Automate follow-ups for efficiency.",
            "Personalize content for higher engagement.",
            "Track and measure results in real time."
          ].map((point, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 flex items-start gap-3">
              <FiCheckCircle className="text-brandOrange mt-1" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto p-6 md:p-10 lg:p-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Email Marketing Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "B2B Email Marketing", desc: "Target decision-makers with personalized outreach. Perfect for SaaS, IT, finance, manufacturing, and professional services." },
            { title: "B2C Email Campaigns", desc: "Promote products, offers, and events to a consumer audience. Ideal for e-commerce, retail, beauty, travel, and hospitality." },
            { title: "Cold Email Outreach", desc: "Reach potential clients who haven’t engaged with your brand yet. Best for lead generation and business development." },
            { title: "Email Automation & Drip Campaigns", desc: "Nurture leads over time with scheduled email sequences." },
            { title: "Newsletter Marketing", desc: "Keep your audience informed with regular company updates and industry news." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-brandOrange/10 text-brandOrange">
                <FiMail />
              </div>
              <h3 className="mt-4 font-semibold text-lg group-hover:text-brandOrange">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
        <div className="container mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-center mb-10">Our Proven Email Marketing Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "Step 1", title: "Strategy & Goal Setting", desc: "Define objectives: lead generation, sales, or brand awareness." },
              { step: "Step 2", title: "List Segmentation", desc: "Segment your email list to ensure relevance." },
              { step: "Step 3", title: "Content & Design", desc: "Create compelling copy and visuals." },
              { step: "Step 4", title: "Automation Setup", desc: "Setup sequences for welcome, cart abandonment, re-engagement, etc." },
              { step: "Step 5", title: "Sending & Monitoring", desc: "Send campaigns at optimal times and track results." },
              { step: "Step 6", title: "Optimization", desc: "Refine campaigns based on data insights." },
            ].map((p, i) => (
              <div key={i} className="relative rounded-2xl bg-white border border-gray-200 p-6">
                <div className="absolute -top-3 left-6 bg-brandOrange text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.step}
                </div>
                <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & INDUSTRIES */}
      <section className="container mx-auto p-6 md:p-10 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tools & Platforms We Use</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Mailchimp", "HubSpot", "ActiveCampaign", "Klaviyo", "Sendinblue"].map((t) => (
                <div key={t} className="rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition">
                  <div className="mx-auto mb-2 text-brandOrange text-xl"><FiGlobe /></div>
                  <div className="text-sm font-semibold">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
            <div className="flex flex-wrap gap-3">
              {["SaaS & Technology","E-commerce","Healthcare & Wellness","Finance & Insurance","Real Estate Agencies","Education & Training Providers"].map((i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-gray-300 hover:border-brandOrange hover:text-brandOrange transition"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
        <div className="container mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits of Our Email Marketing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "High Deliverability Rates – We ensure your emails land in inboxes, not spam folders.",
              "Data-Driven Campaigns – Every decision backed by analytics.",
              "Personalized Messaging – Tailored content for each audience segment.",
              "Faster Conversions – Shorten the sales cycle with automated follow-ups.",
              "Scalable Campaigns – From small tests to large-scale rollouts."
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6 flex items-start gap-3">
                <FiCheckCircle className="text-brandOrange mt-1" />
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container mx-auto p-6 md:p-10 lg:p-12">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies — Our Email Marketing Success</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
            <div className="text-sm font-semibold text-brandOrange">SaaS Lead Nurturing Campaign</div>
            <h3 className="mt-1 font-bold text-xl">35% Conversions in 3 Months</h3>
            <p className="mt-3 text-gray-600">
              A SaaS client needed to convert free trial users into paying customers. Our drip email campaign increased conversions by 35% in 3 months.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
            <div className="text-sm font-semibold text-brandOrange">E-commerce Seasonal Sale</div>
            <h3 className="mt-1 font-bold text-xl">$150K Sales in 48 Hours</h3>
            <p className="mt-3 text-gray-600">
              An online retailer ran a Black Friday email campaign that generated $150K in sales within 48 hours.
            </p>
          </div>
        </div>
      </section>

        {/* FAQ */}
        <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
          <div className="container mx-auto px-6 py-14">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {faqs.map((item, idx) => (
                <div key={idx} className="p-5">
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <FiChevronDown className={`transition ${open === idx ? "rotate-180" : ""}`} />
                  </button>
                  {open === idx && <p className="mt-3 text-gray-700">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}
