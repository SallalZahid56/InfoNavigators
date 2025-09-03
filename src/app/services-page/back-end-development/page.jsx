// src/app/services-page/back-end-development/page.jsx
"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import FinalCTA from "../../../components/FinalCTA";
import {
  Database,
  Server,
  Cloud,
  Code,
  Shield,
  BarChart2,
} from "lucide-react";
import Image from "next/image";

export default function BackEndDevelopmentPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  const coreServices = [
    { title: "Custom API Development", desc: "Secure & scalable APIs for apps & platforms.", icon: Code },
    { title: "Database Management", desc: "MySQL, MongoDB, PostgreSQL solutions for reliable storage.", icon: Database },
    { title: "Node.js Development", desc: "High-performance, event-driven server-side applications.", icon: Server },
    { title: "Laravel Development", desc: "Flexible & secure PHP framework solutions.", icon: Shield },
    { title: "Cloud Integration", desc: "AWS, Azure, Google Cloud setups for scalability.", icon: Cloud },
  ];

  const tools = [
    "Node.js", "Express.js", "PHP", "Laravel", "Python (Django, Flask)",
    "MySQL", "MongoDB", "PostgreSQL", "AWS", "Azure", "Google Cloud"
  ];

  const industries = [
    "E-commerce",
    "Healthcare",
    "Finance",
    "Education"
  ];

  const caseStudies = [
    { title: "Finance Startup", desc: "Built a Node.js-based backend with API integrations, scaling to 50K+ users." },
    { title: "E-commerce Client", desc: "Migrated to Laravel, boosting site speed by 42% and improving conversions." }
  ];

  const faqs = [
    { q: "What is included in your back-end development services?", a: "We handle APIs, database management, server logic, and integrations." },
    { q: "Do you offer full-stack development?", a: "Yes! Our team handles both Front-End and Back-End Development." },
    { q: "Which backend frameworks do you use?", a: "We specialize in Node.js, Laravel, Python, and PHP frameworks." },
    { q: "Can you integrate my backend with third-party apps?", a: "Absolutely. We support API integrations, payment gateways, CRMs, and cloud services." },
  ];

  return (
    <div className="font-sans">

      <Head>
        <title>Back-End Development Services | Info Navigators</title>
        <meta
          name="description"
          content="Professional back-end development services with PHP, Node.js, and Laravel. Info Navigators builds secure, scalable, and high-performance web applications."
        />
        <meta
          name="keywords"
          content="back-end development services, backend developer services, node js backend development, laravel backend development, backend coding services, backend web development company, scalable backend solutions, backend API development"
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
        <Image
          src="/web-banner.jpg"
          alt="Back-End Development"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold leading-snug">
            Professional <span className="text-brandOrange">Back-End Development</span> Services
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            We power your applications with secure, scalable, and high-performance server-side architectures.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading"
            >
              Book a Free Consultation
            </a>
            <Link
              href="/services-page"
              className="inline-block px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition font-heading bg-white/10"
            >
              Explore Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            👉 Related: <Link href="/services-page/front-end-development" className="text-white underline">Front-End Development</Link> | <Link href="/services-page/web-development" className="text-white underline">Web Development Services</Link>
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="core-services" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Our Core Back-End Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border hover:border-brandOrange">
                  <div className="flex items-start gap-4">
                    <Icon className="w-10 h-10 text-brandOrange" />
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">{s.title}</h3>
                      <p className="text-gray-600 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">Tools & Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <span key={i} className="bg-gray-50 px-4 py-2 rounded-full shadow text-sm font-semibold text-gray-700 border">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((it, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange text-center">
                <div className="text-brandOrange text-3xl mb-3"><BarChart2 className="w-10 h-10 inline-block" /></div>
                <h3 className="font-heading font-semibold mb-1">{it}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border hover:border-brandOrange">
                <h3 className="text-lg font-heading font-semibold text-brandOrange mb-2">{cs.title}</h3>
                <p className="text-gray-600">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">FAQs – Back-End Development</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50 font-heading font-semibold">
                  <div className="text-sm sm:text-base">{f.q}</div>
                  <div className="text-brandOrange font-bold">{faqOpen === i ? "−" : "+"}</div>
                </button>
                {faqOpen === i && <div className="p-4 bg-gray-50 text-gray-700 text-sm sm:text-base">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}