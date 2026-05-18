// src/components/ColdEmailOutreachBlog.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ColdEmailOutreachBlog = ({ blog }) => {
  const [activeSection, setActiveSection] = useState("");

  // Table of Contents Anchor Tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "what-is-it", "why-it-works", "how-it-works", "success-factors", "channel-comparison", "common-mistakes", "who-is-it-for", "infonav-way"];
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
    <article className="w-full bg-slate-50/50 pt-28 pb-20 font-sans text-gray-800 antialiased">
      
      {/* 🌟 FABULOUS HEADER HERO ACCENT */}
      <div className="w-full bg-gradient-to-b from-orange-50/70 via-white to-transparent pb-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brandOrange/10 to-orange-500/10 text-brandOrange font-heading font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border border-brandOrange/20 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brandOrange animate-pulse"></span>
            {blog.category || "Lead Generation Strategy"}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Cold Email Outreach Service: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-orange-600">Complete Guide</span> for B2B Companies
          </h1>
          
          <p className="text-gray-500 mt-6 text-base font-medium flex items-center justify-center gap-4">
            <span>Published 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="text-brandOrange font-semibold">10 Min Read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>By InfoNav Editorial</span>
          </p>
        </div>
      </div>

      {/* 🖼️ HIGH-END FEATURED IMAGE OVERLAY */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={blog.image || "/cold-email-blog.jpg"}
            alt={blog.title}
            fill
            className="object-cover transform hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* 💼 SPLIT-LAYOUT COMPONENT VIEW */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* 🧭 SIDEBAR NAVIGATION - STICKY DESKTOP INDEX */}
        <aside className="hidden lg:block w-72 sticky top-32 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">On This Page</p>
          <nav className="space-y-1">
            {[
              { id: "intro", label: "Introduction" },
              { id: "what-is-it", label: "What Is It?" },
              { id: "why-it-works", label: "Why Cold Email Works" },
              { id: "how-it-works", label: "How It Works (6 Steps)" },
              { id: "success-factors", label: "4 Pillars of Success" },
              { id: "channel-comparison", label: "Outreach Channels Matrix" },
              { id: "common-mistakes", label: "Mistakes to Avoid" },
              { id: "who-is-it-for", label: "Who Should Use It" },
              { id: "infonav-way", label: "The InfoNav System" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-sm py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === item.id 
                    ? "bg-orange-50 text-brandOrange font-semibold border-l-4 border-brandOrange pl-2" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* 🖋️ CORE WRITTEN ESSAY CONTENT BODY */}
        <div className="flex-1 bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/40 max-w-4xl">
          
          {/* Introduction Block */}
          <section id="intro" className="scroll-mt-28 space-y-6">
            <p className="text-xl text-gray-900 leading-relaxed font-semibold border-l-4 border-brandOrange pl-6 italic">
              Cold email is one of the most powerful and cost-effective ways for B2B companies to reach decision-makers, generate qualified leads, and book consistent sales meetings. But most businesses either do it wrong or give up too early.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              This complete guide breaks down exactly how a professional cold email outreach service works, what separates successful campaigns from ones that get ignored, and how your B2B company can use cold email to build a predictable sales pipeline.
            </p>
          </section>

          {/* Section 1: What is it */}
          <section id="what-is-it" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-6">
              What Is a Cold Email Outreach Service?
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              A cold email outreach service is a done-for-you system where a specialized agency or team handles every aspect of your outbound email campaigns. This includes building verified prospect lists, writing personalized email sequences, managing deliverability, and handling replies.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Unlike spam, professional cold email outreach is highly targeted, deeply personalized, and built around your ideal customer profile. The goal is simple. Start real conversations with decision-makers who actually need what you offer.
            </p>
          </section>

          {/* Section 2: Why it works */}
          <section id="why-it-works" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-6">
              Why Cold Email Still Works in 2026
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              Despite the rise of LinkedIn, paid ads, and social selling, cold email remains the number one outbound channel for B2B companies for several reasons:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "It reaches decision-makers directly", desc: "Email lands in the inbox of the exact person you want to talk to. No algorithm, no ad budget required." },
                { title: "It scales without proportional cost", desc: "Once your system is set up, reaching 500 prospects costs roughly the same as reaching 50." },
                { title: "It generates measurable results", desc: "Every metric including open rates, reply rates, and meeting rates is trackable and improvable." },
                { title: "It works across industries", desc: "Whether you sell SaaS, consulting, staffing, or professional services, a well-run cold email outreach service can generate qualified meetings in any B2B market." }
              ].map((reason, index) => (
                <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80 hover:shadow-md hover:border-brandOrange/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-brandOrange font-bold mb-3 text-sm">0{index+1}</div>
                  <h4 className="font-heading font-bold text-gray-900 text-base mb-2">{reason.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Step by Step */}
          <section id="how-it-works" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              How a Professional Cold Email Outreach Service Works
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-8">
              A reliable cold email outreach service follows a structured, repeatable process. Here is what that looks like end to end:
            </p>

            {/* PIPELINE UI FLOW STEPS */}
            <div className="relative border-l-2 border-orange-100 ml-4 pl-6 sm:pl-8 space-y-10">
              
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brandOrange text-white text-xs sm:text-sm font-bold flex items-center justify-center ring-4 ring-white shadow-sm">1</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Define Your Ideal Customer Profile (ICP)</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Before a single email goes out, the agency works with you to define exactly who you want to reach. This includes target industries, company sizes, job titles, geographies, and any other filters relevant to your offer.</p>
                <p className="text-sm text-brandOrange font-semibold mt-1.5">Getting the ICP right is the most important step. Even the best email copy fails if it is being sent to the wrong people.</p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brandOrange text-white text-xs sm:text-sm font-bold flex items-center justify-center ring-4 ring-white shadow-sm">2</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Build a Verified Prospect List</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Using tools like LinkedIn Sales Navigator, Apollo, and Seamless, the agency builds a list of prospects that match your ICP exactly. Every contact is then verified through tools like NeverBounce or ZeroBounce to ensure emails land in real inboxes and do not bounce back or damage your sender reputation.</p>
                <p className="text-sm text-gray-400 font-medium italic mt-1.5">This data foundation is what separates a professional b2b lead generation agency from a generic list seller.</p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brandOrange text-white text-xs sm:text-sm font-bold flex items-center justify-center ring-4 ring-white shadow-sm">3</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Write Personalized Email Sequences</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">Great cold email is never generic. A professional cold email outreach service crafts sequences that speak directly to the prospect's pain points, business situation, and goals. Typical sequences include:</p>
                
                <div className="bg-gradient-to-r from-orange-50 to-amber-50/40 p-5 rounded-2xl border border-orange-100/70 space-y-3 shadow-inner">
                  <div className="flex gap-3 items-start text-sm text-gray-700">
                    <span className="font-bold text-brandOrange whitespace-nowrap">Email 1</span>
                    <span><strong>The cold intro:</strong> short, relevant, and focused on one problem you solve</span>
                  </div>
                  <div className="flex gap-3 items-start text-sm text-gray-700">
                    <span className="font-bold text-brandOrange whitespace-nowrap">Email 2</span>
                    <span>A follow-up adding value or a different angle</span>
                  </div>
                  <div className="flex gap-3 items-start text-sm text-gray-700">
                    <span className="font-bold text-brandOrange whitespace-nowrap">Email 3</span>
                    <span>A soft breakup email that often generates the highest reply rates</span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-500 mt-2 italic">Each email is written to feel like it came from a real person because it did.</p>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brandOrange text-white text-xs sm:text-sm font-bold flex items-center justify-center ring-4 ring-white shadow-sm">4</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Set Up Deliverability Infrastructure</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">This is where most DIY cold email campaigns fail. A professional service sets up warmed-up sending domains, SPF, DKIM, and DMARC authentication records, sending limits that mimic human behavior, and inbox rotation across multiple accounts.</p>
                <p className="text-sm text-red-500 font-semibold mt-1.5">Without this infrastructure, even the best emails end up in spam folders.</p>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brandOrange text-white text-xs sm:text-sm font-bold flex items-center justify-center ring-4 ring-white shadow-sm">5</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Launch and Monitor Campaigns</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Once everything is in place, campaigns go live. The agency monitors open rates, reply rates, bounce rates, and spam complaints in real time. Subject lines, messaging, and sending patterns are continuously adjusted to improve performance.</p>
              </div>

              {/* Step 6 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brandOrange text-white text-xs sm:text-sm font-bold flex items-center justify-center ring-4 ring-white shadow-sm">6</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Handle Replies and Book Meetings</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">When prospects reply, the agency manages initial responses and hands off warm leads directly to your sales team or books meetings straight into your calendar. This is where the cold email outreach service connects directly to your appointment setting service b2b pipeline.</p>
              </div>

            </div>
          </section>

          {/* Section 4: Success Pillars */}
          <section id="success-factors" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              What Makes a Cold Email Campaign Successful?
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              After running hundreds of campaigns, the difference between a 1% reply rate and an 8% reply rate comes down to four things:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Targeting accuracy", desc: "Sending to the right people is more important than any other variable. A perfectly written email to the wrong audience will always fail." },
                { title: "Personalization at scale", desc: "Using the prospect's name is not personalization. Real personalization references their industry, company size, a recent event, or a specific pain point relevant to their situation." },
                { title: "Subject line relevance", desc: "Your subject line has one job which is to get the email opened. The best subject lines are short, curiosity-driven, and feel like they came from a colleague, not a marketer." },
                { title: "A clear, single call to action", desc: "Every cold email should ask for one thing only. Asking for a 15-minute call is good. Asking for a call, a demo, and a brochure download in the same email kills reply rates." }
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-heading font-bold text-gray-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="text-brandOrange font-mono font-bold text-sm">0{index + 1}.</span>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Matrix Table */}
          <section id="channel-comparison" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              Cold Email vs Other B2B Outreach Channels
            </h2>
            <div className="overflow-x-auto my-6 border border-gray-100 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-slate-900 text-white font-heading text-xs uppercase tracking-wider">
                    <th className="p-4 rounded-tl-2xl">Channel</th>
                    <th className="p-4">Cost</th>
                    <th className="p-4">Speed</th>
                    <th className="p-4">Scalability</th>
                    <th className="p-4 rounded-tr-2xl">Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700 bg-white">
                  <tr className="bg-orange-50/40 hover:bg-orange-50/70 transition-colors font-medium">
                    <td className="p-4 font-bold text-brandOrange">Cold Email</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">Fast</td>
                    <td className="p-4">High</td>
                    <td className="p-4">Full</td>
                  </tr>
                  {[
                    { c: "LinkedIn Outreach", co: "Medium", s: "Medium", sc: "Limited", ctrl: "Partial" },
                    { c: "Paid Ads", co: "High", s: "Fast", sc: "High", ctrl: "Partial" },
                    { c: "Inbound/SEO", co: "Low", s: "Slow", sc: "High", ctrl: "Limited" },
                    { c: "Referrals", co: "None", s: "Unpredictable", sc: "Very Low", ctrl: "None" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-semibold text-gray-900">{row.c}</td>
                      <td className="p-4 text-gray-600">{row.co}</td>
                      <td className="p-4 text-gray-600">{row.s}</td>
                      <td className="p-4 text-gray-600">{row.sc}</td>
                      <td className="p-4 text-gray-600">{row.ctrl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm font-medium text-gray-600 pl-2">
              For most B2B companies, a cold email outreach service delivers the best combination of speed, control, and cost-effectiveness especially when combined with a strong outsourced lead generation system.
            </p>
          </section>

          {/* Section 6: Mistakes */}
          <section id="common-mistakes" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              Common Cold Email Mistakes B2B Companies Make
            </h2>
            <div className="space-y-4">
              {[
                { title: "Sending from their main domain", text: "If your campaign triggers spam filters, your entire company email reputation suffers. Always use a separate sending domain." },
                { title: "Writing emails that are too long", text: "Cold emails should be 3 to 5 sentences maximum. If you need more space, you are trying to close in the first email which never works." },
                { title: "Giving up after one follow-up", text: "Most replies come from the 2nd or 3rd email. Companies that send only one email leave the majority of their pipeline on the table." },
                { title: "Not verifying data before sending", text: "Sending to unverified lists leads to high bounce rates which damages sender reputation and gets domains blacklisted fast." },
                { title: "Focusing on features instead of problems", text: "Nobody cares what your product does. They care about the problem it solves. Lead with their pain, not your pitch." }
              ].map((mistake, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-red-50/30 border border-red-100/50">
                  <div className="text-red-500 font-bold text-lg mt-0.5">✕</div>
                  <div>
                    <h5 className="font-heading font-bold text-gray-900 text-sm sm:text-base mb-1">{mistake.title}</h5>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{mistake.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Audiences */}
          <section id="who-is-it-for" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              Who Should Use a Cold Email Outreach Service?
            </h2>
            <p className="text-base text-gray-600 mb-4">A professional cold email outreach service is the right fit for:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "B2B SaaS companies looking to book demos with target accounts",
                "Consulting and professional services firms wanting a steady flow of discovery calls",
                "Staffing and recruiting agencies reaching HR directors and hiring managers",
                "IT and managed service providers targeting SMB or enterprise decision-makers",
                "Any b2b email marketing agency usa businesses looking to grow their own client base",
                "Any B2B company tired of relying on referrals and ready to build a predictable outbound pipeline"
              ].map((target, idx) => (
                <div key={idx} className="flex gap-3 items-center p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                  <span className="text-brandOrange text-base">⚡</span>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">{target}</p>
                </div>
              ))}
            </div>
            <p className="text-base font-semibold text-gray-900">
              If your business sells to other businesses and needs consistent meetings with qualified buyers, cold email is built for you.
            </p>
          </section>

          {/* Section 8: InfoNav Way */}
          <section id="infonav-way" className="scroll-mt-28 mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              How InfoNav Runs Cold Email Campaigns
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              At InfoNav, our cold email outreach service is built around one goal which is getting your sales team in front of qualified decision-makers consistently. We handle everything from ICP definition and verified list building to email copywriting, deliverability setup, campaign management, and reply handling.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              As a dedicated b2b lead generation agency and outsourced lead generation partner, we combine deep data intelligence with proven outreach systems to generate 10 to 30 booked meetings per month for our clients depending on offer and niche.
            </p>
            <p className="text-base font-bold text-brandOrange italic border-l-2 border-brandOrange pl-4">
              We do not send generic blasts. We build outbound systems that actually convert.
            </p>
          </section>

          {/* Conclusion */}
          <div className="mt-12 bg-gradient-to-br from-slate-900 to-gray-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-brandOrange/10 rounded-full blur-3xl"></div>
            <h4 className="text-xl font-heading font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-orange-400">Final Thoughts</h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
              Cold email is not dead. Bad cold email is dead. When done right, with verified data, genuine personalization, proper deliverability infrastructure, and a structured follow-up process, a professional cold email outreach service remains one of the most reliable ways for B2B companies to generate qualified pipeline in 2026.
            </p>
            <p className="text-sm font-semibold text-white">
              The key is execution. And execution is exactly what a specialized agency is built for.
            </p>
          </div>

          {/* 🎯 CONVERSATIONAL HIGH-END CTA SECTION */}
          <div className="mt-12 text-center p-8 rounded-3xl border-2 border-dashed border-orange-200 bg-orange-50/20">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-3">
              Ready to launch a cold email outreach campaign that books real meetings?
            </h3>
            <p className="text-sm text-gray-600 max-w-lg mx-auto mb-6">
              Let our data intelligence experts and outbound copywriters scale your sales opportunities seamlessly.
            </p>
            <div className="flex justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNav%20website%20regarding%20cold%20email%20services."
                className="bg-brandOrange text-white font-heading font-semibold text-sm sm:text-base px-8 py-3 rounded-full shadow-lg shadow-brandOrange/20 hover:bg-black transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
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

export default ColdEmailOutreachBlog;