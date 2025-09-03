"use client";


import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Monitor,
  Layout,
  Code,
  Smartphone,
  Globe,
  BarChart2,
} from "lucide-react";
import FinalCTA from "../../../components/FinalCTA";

export default function FrontEndDevelopment() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  const coreServices = [
    { title: "Custom UI/UX Development", desc: "Pixel-perfect, brand-focused design for high engagement.", icon: Layout },
    { title: "Responsive Web Design", desc: "Optimized for mobile, tablet & desktop for all users.", icon: Smartphone },
    { title: "React.js Development", desc: "Fast, dynamic, and scalable interfaces.", icon: Code },
    { title: "Angular & Vue.js Development", desc: "Enterprise-grade web solutions.", icon: Monitor },
    { title: "Cross-Browser Compatibility", desc: "Consistent performance across all major browsers.", icon: Globe },
  ];

  const tools = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Angular", "Vue.js", 
    "Bootstrap", "Tailwind CSS", "Git", "GitHub", "Bitbucket"
  ];

  const industries = [
    "E-commerce Stores", 
    "SaaS Companies", 
    "Healthcare & Finance Portals", 
    "Education & Training Platforms"
  ];

  const caseStudies = [
    { title: "SaaS Startup", desc: "Redesigned UI using React.js, improving conversions by 33%." },
    { title: "E-commerce Brand", desc: "Optimized front-end with responsive design, reducing bounce rate by 41%." }
  ];

  const faqs = [
    { q: "What’s included in your front-end development services?", a: "We provide responsive design, UI/UX coding, framework integration, and SEO optimization." },
    { q: "Can you redesign my old website?", a: "Yes, we specialize in website redesigns that modernize your digital presence." },
    { q: "Do you work with back-end teams?", a: "Yes! We offer full-stack services by integrating with our Back-End Development team." },
    { q: "Do you also optimize websites for SEO?", a: "Absolutely. We collaborate with our SEO Services team to ensure your website ranks high." },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>Front-End Development Services | Responsive & SEO-Friendly Websites</title>
        <meta
          name="description"
          content="Professional front-end development services with React, Vue, and modern frameworks. Info Navigators builds responsive, SEO-optimized websites that drive results."
        />
        <meta
          name="keywords"
          content="front-end development, frontend developer services, responsive web design, react js development, angular frontend development, frontend coding services"
        />
      </Head>

      {/* HERO */}
      <section className="relative min-h-[100vh] md:h-[60vh] flex items-center justify-center text-center text-white pt-24 sm:pt-28 px-4">
        <img src="/web-banner.jpg" alt="Front-End Development" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold leading-snug">
            Professional <span className="text-brandOrange">Front-End Development</span> Services
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2">
            We transform your brand’s vision into fast, interactive, and SEO-friendly websites using modern frameworks and expert coding.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website." className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading">
              Book a Free Consultation
            </a>
            <Link href="/services-page" className="inline-block px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition font-heading bg-white/10">
              Explore Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            👉 Related: <Link href="/services-page/web-development" className="text-white underline">Web Development Services</Link>
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="core-services" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Our Core Front-End Solutions</h2>
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
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">FAQs – Front-End Development</h2>
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
