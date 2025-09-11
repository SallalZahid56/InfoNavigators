"use client";

import React, { useState } from "react";
import { FiUsers, FiCheckCircle, FiTrendingUp, FiMail, FiGlobe, FiBarChart } from "react-icons/fi";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

// ✅ Reusable Card
const Card = ({ icon: Icon, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3 mb-3">
      {Icon && <Icon className="w-8 h-8 text-brandOrange" />}
    </div>
    <div className="text-gray-700">{children}</div>
  </div>
);

// ✅ Section Wrapper
const SectionShell = ({ id, title, tags, left, right }) => (
  <section id={id} className="container mx-auto px-6 py-16">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">
      {title.split(" ").map((word, i) =>
        i === 1 ? (
          <span key={i} className="text-brandOrange">{` ${word} `}</span>
        ) : (
          ` ${word} `
        )
      )}
    </h2>
    {tags && <p className="text-sm text-gray-500 text-center mb-10">{tags}</p>}
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div>{left}</div>
      <div className="lg:pl-6">{right}</div>
    </div>
  </section>
);

export default function CRMDataEntrySections() {
  const [open, setOpen] = useState(null);

  const stats = [
    { icon: <FiUsers size={18} />, label: "Clients", value: "1,000+" },
    { icon: <FiTrendingUp size={18} />, label: "Growth", value: "15+ Yrs" },
    { icon: <FiMail size={18} />, label: "Emails Verified", value: "5M+" },
    { icon: <FiGlobe size={18} />, label: "Countries", value: "50+" },
    { icon: <FiCheckCircle size={18} />, label: "Accuracy", value: "98%" },
    { icon: <FiBarChart size={18} />, label: "ROI Increase", value: "3x" },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden p-6 md:p-10 lg:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-brandOrange/10 via-orange-200/30 to-white" />
        <div className="container mx-auto px-6 py-16 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
                Premium <span className="text-brandOrange">CRM Data Entry</span> Services for Accurate & Organized Sales Pipelines
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                At <span className="text-brandOrange font-semibold">Info Navigators</span>, we deliver accurate, secure, and industry-specific CRM data entry services.
                Our solutions ensure your CRM remains <span className="text-brandOrange font-semibold">clean</span>, <span className="text-brandOrange font-semibold">actionable</span>,
                and <span className="text-brandOrange font-semibold">conversion-ready</span>, powering faster deal closures and better marketing outcomes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition"
                >
                  Book a Free Consultation
                </a>
                <Link href="/services-page/" className="px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition">
                  Explore Services
                </Link>
              </div>
              <div className="mt-6 flex gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><FiUsers /> 1,000+ Clients</div>
                <div className="flex items-center gap-2"><FiCheckCircle /> 15+ Years</div>
                <div className="flex items-center gap-2"><FiTrendingUp /> Millions of Leads</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Accurate CRM Data Entry Matters */}
      <SectionShell
        id="why-crm-matters"
        title="Why Accurate CRM Data Entry Matters for Business Growth"
        left={
          <>
            <p className="mb-6">
              Your <span className="text-brandOrange font-semibold">CRM</span> is more than just a contact list—it’s the engine for revenue growth. When your CRM data is accurate:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={CheckCircle}>Sales teams close deals faster with accurate data.</Card>
              <Card icon={CheckCircle}>Marketing targets the right audience with segmentation.</Card>
              <Card icon={CheckCircle}>Customer service improves retention with complete histories.</Card>
              <Card icon={CheckCircle}>Executives get insights from reliable analytics.</Card>
            </div>
          </>
        }
        right={<img src="/crm dataentry.png" alt="CRM Data Entry" className="rounded-2xl" />}
      />

      {/* Core CRM Data Entry Solutions */}
      <section id="core-solutions" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold leading-snug mb-4">
                Our Core <span className="text-brandOrange">CRM Data Entry Solutions</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-sans">
                We handle all aspects of <span className="text-brandOrange font-semibold">CRM data management</span>, whether you’re starting fresh, migrating from another system, or need ongoing maintenance.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "New Data Entry & Record Creation", desc: "Adding new leads, capturing details, assigning sales reps, and tracking follow-ups." },
                  { title: "Data Updating & Enrichment", desc: "Updating outdated info, adding missing details, and cross-checking with verified databases." },
                  { title: "Duplicate Removal & Standardization", desc: "Merging duplicate records, applying consistent formats, and avoiding redundant outreach." },
                  { title: "CRM Migration & Data Formatting", desc: "Preparing spreadsheets, mapping fields, and ensuring zero data loss during migration." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 bg-white transition">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/crm data.webp" alt="CRM Solutions" className="rounded-2xl w-full max-w-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CRM Platforms */}
      <section id="platforms" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
            CRM Platforms <span className="text-brandOrange">We Work With</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We’re skilled in all major CRM systems and adapt to your custom tools.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Salesforce", "HubSpot", "Zoho", "Pipedrive", "Freshsales", "Insightly", "Copper", "Monday.com"].map((platform, i) => (
              <div key={i} className="p-6 rounded-xl shadow hover:shadow-md border border-gray-100 bg-white transition">
                <h4 className="text-lg font-semibold">{platform}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
              How Our <span className="text-brandOrange">CRM Data Entry Process</span> Works
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Our <span className="text-brandOrange font-semibold">5-step process</span> ensures accuracy, security, and efficiency every time.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {["Requirement Gathering", "Data Audit", "Data Entry & Cleaning", "Verification", "Ongoing Maintenance"].map((step, i) => (
              <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 bg-white transition text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-brandOrange text-white font-bold text-xl">{i + 1}</div>
                <h4 className="text-lg font-semibold">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/online-data-entry-service.png" alt="Why Choose Us" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
                Why Choose <span className="text-brandOrange">Info Navigators</span> for CRM Data Entry
              </h2>
              <div className="space-y-4">
                {[
                  "15+ Years of Experience in data management & lead generation.",
                  "Industry-Specific Expertise for B2B, eCommerce, SaaS, healthcare, and more.",
                  "Manual + Automated Accuracy Checks for error-free records.",
                  "Data Security Compliance with GDPR, CCPA, and client confidentiality.",
                  "Flexible Delivery – One-time cleanup or ongoing CRM maintenance."
                ].map((point, i) => (
                  <div key={i} className="p-4 rounded-xl shadow hover:shadow-md border border-gray-100 bg-white transition flex items-start gap-3">
                    <span className="text-brandOrange text-xl">✔</span>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
