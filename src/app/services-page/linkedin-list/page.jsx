"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FiCheckCircle,
  FiTarget,
  FiGlobe,
  FiChevronDown,
} from "react-icons/fi";
import FinalCTA from "../../../components/FinalCTA";

const faqs = [
  {
    q: "Can you build LinkedIn lists without LinkedIn Premium?",
    a: "Yes, but LinkedIn Sales Navigator provides better targeting, which we recommend.",
  },
  {
    q: "Do you provide email addresses with LinkedIn lists?",
    a: "Yes — we enrich lists with verified emails and contact details.",
  },
  {
    q: "How accurate are your LinkedIn lists?",
    a: "We use manual verification and advanced tools to ensure 95%+ accuracy.",
  },
  {
    q: "Can you target international markets?",
    a: "Absolutely — we can build LinkedIn contact lists worldwide.",
  },
  {
    q: "How fast can I get my LinkedIn list?",
    a: "Depending on volume, delivery takes 2–5 business days.",
  },
];

export default function LinkedInListBuilding() {
  const [open, setOpen] = useState(null);

  const services = [
    "Custom LinkedIn Prospect Lists",
    "LinkedIn Sales Navigator Data Extraction",
    "Verified Contact Information",
    "Influencer & Partner Research",
    "Competitor Connection Scraping",
  ];

  const process = [
    "Requirement Analysis - We discuss your target market, buyer persona, and campaign goals.",
    "Advanced LinkedIn Filtering - Apply precise filters: industry, company headcount, title, location.",
    "Data Extraction & Enrichment - Collect and verify emails, phone numbers, LinkedIn profile URLs.",
    "Quality Check - Every contact manually verified for accuracy.",
    "Delivery - Receive ready-to-use lists in CSV, Excel, or Google Sheets.",
  ];

  const tools = [
    "LinkedIn Sales Navigator",
    "Apollo.io",
    "Hunter.io",
    "ContactOut",
    "Skrapp.io",
    "PhantomBuster",
  ];

  const industries = [
    "SaaS & Technology",
    "Marketing Agencies",
    "Manufacturing & Supply Chain",
    "Finance & Consulting",
    "Real Estate",
    "Healthcare & Medical",
    "Education & Training",
  ];

  const benefits = [
    "Access to hard-to-find decision-makers.",
    "Custom, niche-specific LinkedIn contact lists.",
    "Verified emails for multi-channel outreach.",
    "Save 50+ hours of manual research.",
    "Increase campaign conversion rates.",
  ];

  const caseStudies = [
    {
      title: "B2B SaaS Expansion",
      desc: "Delivered 3,200 verified LinkedIn leads, resulting in a 21% meeting booking rate.",
    },
    {
      title: "Manufacturing Exporter",
      desc: "Generated 1,500 verified contacts, securing $400K in new contracts.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          LinkedIn List Building Services | Verified B2B Prospect Lists
        </title>
        <meta
          name="description"
          content="Expert LinkedIn list-building services for targeted lead generation. We build verified LinkedIn prospect lists with decision-makers, influencers, and high-value contacts for your B2B outreach."
        />
        <meta
          name="keywords"
          content="LinkedIn list building, LinkedIn leads, b2b linkedin lead generation, LinkedIn prospecting services, LinkedIn sales navigator lists, LinkedIn contact list building, targeted LinkedIn leads, LinkedIn outreach lists, Info Navigators"
        />
      </Head>

      <div className="pt-24 bg-white text-gray-900">
        {/* HERO */}
        <section className="container mx-auto p-6 md:p-10 lg:p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Targeted{" "}
            <span className="text-brandOrange">LinkedIn List Building</span>{" "}
            Services That Deliver Qualified Leads
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            At Info Navigators, we specialize in building highly targeted
            LinkedIn contact lists that help your business connect with
            decision-makers, influencers, and potential clients. Using LinkedIn
            Sales Navigator, advanced filtering, and manual research, we deliver
            verified, ready-to-use LinkedIn prospect lists tailored to your niche
            and campaign goals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
              target="_blank"
              rel="noopener noreferrer"
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
        </section>

        {/* WHY LINKEDIN */}
        <section className="bg-gray-50 p-6 md:p-10 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why LinkedIn Is the #1 B2B Prospecting Platform
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            LinkedIn is home to over 1 billion professionals worldwide,
            including senior executives, business owners, and industry leaders.
            This makes it the most powerful platform for B2B lead generation.
          </p>
          <ul className="max-w-xl mx-auto text-left space-y-3 text-gray-700">
            <li>✅ Reach decision-makers without gatekeepers.</li>
            <li>✅ Build industry-specific prospect databases.</li>
            <li>✅ Target by location, industry, job title, and company size.</li>
            <li>✅ Fuel your B2B cold outreach and email marketing campaigns.</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="container mx-auto p-6 md:p-10 lg:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-10">
            Our LinkedIn List Building Services Include
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-brandOrange/10 text-brandOrange">
                  <FiTarget />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gray-50 p-6 md:p-10 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Our Proven LinkedIn List Building Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-white border border-gray-200 p-6 text-left"
              >
                <div className="absolute -top-3 left-6 bg-brandOrange text-white text-xs font-bold px-3 py-1 rounded-full">
                  {`Step ${i + 1}`}
                </div>
                <p className="mt-3 text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TOOLS & INDUSTRIES */}
        <section className="container mx-auto p-6 md:p-10 lg:p-12 text-center">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tools & Platforms We Use</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition"
                  >
                    <div className="mx-auto mb-2 text-brandOrange text-xl">
                      <FiGlobe />
                    </div>
                    <div className="text-sm font-semibold">{t}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {industries.map((i) => (
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
        <section className="bg-gray-50 p-6 md:p-10 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Benefits of Our LinkedIn List Building Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-6 flex items-start gap-3"
              >
                <FiCheckCircle className="text-brandOrange mt-1" />
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="container mx-auto p-6 md:p-10 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Case Studies — LinkedIn Lead Success
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition text-left"
              >
                <h3 className="mt-1 font-bold text-xl">{c.title}</h3>
                <p className="mt-3 text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 p-6 md:p-10 lg:p-12 text-center">
          <div className="container mx-auto px-6 py-14">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {faqs.map((item, idx) => (
                <div key={idx} className="p-5">
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <FiChevronDown
                      className={`transition ${
                        open === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open === idx && (
                    <p className="mt-3 text-gray-700">{item.a}</p>
                  )}
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
