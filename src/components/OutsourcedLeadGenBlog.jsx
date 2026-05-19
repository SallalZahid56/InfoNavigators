// src/components/OutsourcedLeadGenBlog.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OutsourcedLeadGenBlog = ({ blog = {} }) => {
  const [activeSection, setActiveSection] = useState("");

  // Table of Contents Anchor Tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "what-is-it", "in-house-costs", "benefits", "infonav-way"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article className="w-full bg-[#fcfcfd] pt-32 pb-24 font-sans text-slate-800 antialiased relative overflow-hidden">
      {/* 🔮 Modern Subtle Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent -z-10" />
      <div className="absolute top-[20%] left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-20" />

      {/* 🚀 Header Hero section */}
      <header className="max-w-5xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 font-medium text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-orange-500/20 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          {blog.category || "B2B Lead Generation"}
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Outsourced Lead Generation: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">Is It Worth It</span> for B2B in 2026?
        </h1>
        
        <p className="text-slate-500 mt-6 text-sm sm:text-base font-medium flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <span>Published 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span className="text-orange-600 font-semibold">8 Min Read</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span>By InfoNav Editorial</span>
        </p>
      </header>

      {/* 🖼️ Premium Featured Image Container */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="relative w-full h-[280px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(15,23,42,0.08)] border border-slate-100 bg-slate-100">
          <Image
            src={blog.image || "/outsourced-lead-gen.jpg"}
            alt={blog.title || "Outsourced Lead Generation B2B"}
            fill
            className="object-cover transform hover:scale-102 transition-transform duration-1000 ease-out"
            priority
          />
        </div>
      </div>

      {/* 💼 Content Layout Split */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* 🧭 Sticky Left Navigation */}
        <aside className="hidden lg:block w-64 sticky top-36 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.02)]">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">On This Page</p>
          <nav className="space-y-1">
            {[
              { id: "intro", label: "Introduction" },
              { id: "what-is-it", label: "What Is It?" },
              { id: "in-house-costs", label: "In-House System Costs" },
              { id: "benefits", label: "Key Strategic Benefits" },
              { id: "infonav-way", label: "The InfoNav System" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-xs sm:text-sm py-2 px-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? "bg-orange-50 text-orange-600 font-semibold border-l-2 border-orange-500 pl-3 translate-x-1" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* 🖋️ Core Body Content */}
        <div className="flex-1 bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.04)] max-w-4xl">
          
          {/* Introduction Block */}
          <section id="intro" className="scroll-mt-36 space-y-6">
            <p className="text-lg sm:text-xl text-slate-900 leading-relaxed font-medium border-l-4 border-orange-500 pl-6 italic text-balance">
              Every B2B company needs a steady flow of qualified leads. But building and managing an in-house lead generation team is expensive, time-consuming, and difficult to scale. That is why more and more B2B companies are turning to outsourced lead generation as a smarter, faster alternative.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              But is it actually worth it? This guide gives you an honest, complete answer so you can make the right decision for your business in 2026.
            </p>
          </section>

          {/* What Is It */}
          <section id="what-is-it" className="scroll-mt-36 mt-16 pt-10 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              What Is Outsourced Lead Generation?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Outsourced lead generation is when a B2B company hires a specialized external agency to handle the process of finding, researching, and contacting potential customers on their behalf. Instead of building an internal team from scratch, you plug your offer and target market into a proven system that is already built, tested, and optimized.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              A professional outsourced lead generation partner handles everything including prospect research, data verification, cold email outreach service systems, follow-up sequencing, and reply management. Your internal sales team receives qualified conversations and booked meetings without spending hours trapped in spreadsheets and cold inboxes.
            </p>
          </section>

          {/* In House Costs Section */}
          <section id="in-house-costs" className="scroll-mt-36 mt-16 pt-10 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              The Real Cost of Building an In-House Team
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Before deciding whether outsourced lead generation is worth it, it helps to understand what the alternative actually costs your bottom line. Building an internal team typically requires a major baseline investment:
            </p>

            {/* 💰 Modern Financial breakdown structure */}
            <div className="space-y-4 mb-8">
              {[
                { role: "Lead Researcher", price: "$45,000 – $65,000 /yr", task: "Responsible for digging up and manually verifying prospect data accuracy." },
                { role: "Outreach Copywriter", price: "$50,000 – $75,000 /yr", task: "Crafts targeted cold email sequences and tailored outreach messaging vectors." },
                { role: "Campaign Manager", price: "$55,000 – $80,000 /yr", task: "Runs the technical outreach tools, tracks deliverability metrics, and runs optimization tests." },
                { role: "Premium Data & Outreach Tools", price: "$500 – $2,000 /mo", task: "Tech stacks consisting of LinkedIn Sales Navigator, Apollo, NeverBounce, and modern ESP infrastructure." }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-slate-200 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">{item.role}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-xl">{item.task}</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-right self-start sm:self-center shrink-0">
                    <span className="text-sm font-bold text-orange-600 tracking-tight">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-50/40 border border-orange-100 rounded-2xl p-6 sm:p-8 space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="text-orange-500">⏳</span> The Onboarding Buffer Zone
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Beyond salaries, you must factor in an onboarding and training time window of <strong>2 to 3 months</strong> before the internal team is fully synchronized and running operations effectively.
              </p>
              <p className="text-sm font-semibold text-slate-900">
                The grand total of an in-house team easily exceeds $150,000 per year before you see a single qualified meeting. For most B2B small and mid-sized companies, outsourcing provides a far more budget-conscious path to scaling pipelines.
              </p>
            </div>
          </section>

          {/* Key Strategic Benefits */}
          <section id="benefits" className="scroll-mt-36 mt-16 pt-10 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              The Real Benefits of Outsourcing
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Moving your outbound generation strategy out-of-house introduces instant operational advantages that protect margins and scale pipeline speed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_-12px_rgba(15,23,42,0.06)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 text-lg font-bold mb-4">01</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Faster Time to Results</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  An experienced outbound partner already operates with structured teams, premium tools, and pre-optimized playbooks. Most custom campaigns deploy fully live within <strong>1 to 2 weeks</strong> of onboarding, beating the multi-month hiring loop.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_-12px_rgba(15,23,42,0.06)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 text-lg font-bold mb-4">02</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Access to Specialized Expertise</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  A dedicated b2b lead generation agency focuses exclusively on cold email frameworks and outbound prospecting mechanics. Having analyzed thousands of historical data sets across varying industries, they understand what triggers real inbox placement and replies.
                </p>
              </div>
            </div>
          </section>

          {/* The InfoNav Way */}
          <section id="infonav-way" className="scroll-mt-36 mt-16 pt-10 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              The InfoNav Approach to Scaling B2B Pipelines
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              At InfoNav, we believe outsourced lead generation shouldn't feel external. We blend into your business model as an optimized data-driven infrastructure unit. We own the entire process from data sourcing and sequence copy architecture, to deliverability monitoring and real-time response optimization.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden shadow-xl">
              <div className="absolute right-0 bottom-0 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                By bypassing the friction of internal hiring overhead and pairing deep validation with automated appointment setting routines, we safely generate predictable volumes of sales opportunities for business growth.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-wider">
                We design outbound pipelines built for real, high-value conversions.
              </p>
            </div>
          </section>

          {/* 🎯 Conversational Action Call to Action Block */}
          <div className="mt-16 text-center p-8 sm:p-10 rounded-3xl border border-slate-200/60 bg-gradient-to-b from-slate-50/50 to-white relative shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 text-balance">
              Ready to bypass internal overhead and scale your pipeline?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mb-8">
              Connect directly with InfoNav's core outreach engineers to look over your current B2B offer structure during a free tactical strategy session.
            </p>
            <div className="flex justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNav%20website%20regarding%20outsourced%20lead%20generation%20services."
                className="bg-slate-900 text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-slate-900/10 hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                Book a Free Strategy Call with InfoNav ⮕
              </a>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default OutsourcedLeadGenBlog;