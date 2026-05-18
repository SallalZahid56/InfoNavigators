"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ChooseB2BLeadGenAgency({ blog }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  const fiveThings = [
    {
      title: "They Specialize in B2B, Not Everything",
      body: "Avoid general digital marketing agencies that offer lead generation as one of twenty services. Look for an agency that focuses specifically on B2B lead generation, cold email outreach, and appointment setting. Specialization means deeper expertise and better results.",
    },
    {
      title: "They Use Verified, Targeted Data",
      body: "The foundation of any successful outbound campaign is accurate data. Ask the agency how they build prospect lists. A reliable B2B lead generation agency uses tools like Apollo, LinkedIn Sales Navigator, and NeverBounce to verify every contact before outreach begins. Bad data means emails bounce, domains get flagged, and campaigns fail.",
    },
    {
      title: "They Have a Proven Cold Email Outreach Process",
      body: "Cold email is still the most effective B2B outreach channel when done correctly. Ask to see sample email sequences, open rates, and reply rates from past campaigns. A professional cold email outreach service will have a structured process — from subject line testing to follow-up sequencing — that consistently generates replies from decision-makers.",
    },
    {
      title: "They Measure Success by Meetings Booked, Not Vanity Metrics",
      body: "Be cautious of agencies that promise 'thousands of leads' or talk only about email open rates. A results-driven appointment setting service measures success by one thing: qualified meetings booked with real decision-makers who have the budget and authority to buy.",
    },
    {
      title: "They Are Transparent About Their Process",
      body: "A trustworthy outsourced lead generation partner will walk you through their entire process before you sign anything. They'll explain how they build lists, how they write emails, how they handle replies, and how they report results. If an agency is vague about their methods, walk away.",
    },
  ];

  const redFlags = [
    {
      flag: "Guaranteed results with no conditions",
      detail: "No agency can guarantee exact numbers without knowing your offer and market.",
    },
    {
      flag: "No clear process",
      detail: "If they can't explain how they work, they probably don't have a reliable system.",
    },
    {
      flag: "Focuses only on volume",
      detail: "Sending 10,000 emails means nothing if none of them convert.",
    },
    {
      flag: "No data verification step",
      detail: "Unverified lists lead to high bounce rates and damaged sender reputation.",
    },
    {
      flag: "Locks you into long contracts upfront",
      detail: "Reputable agencies are confident enough in their results to offer flexible terms.",
    },
  ];

  const questions = [
    {
      q: "What industries have you worked with?",
      a: "Look for experience in your niche or a similar one. An agency with SaaS experience may not be the best fit for a manufacturing company.",
    },
    {
      q: "How do you build and verify prospect lists?",
      a: "The answer should include specific tools and a verification step. If they say they 'buy lists,' that's a red flag.",
    },
    {
      q: "What does your cold email outreach process look like end to end?",
      a: "They should be able to walk you through every step — from ICP definition to campaign launch to reply handling.",
    },
    {
      q: "How many meetings can we realistically expect per month?",
      a: "An honest agency will give you a range based on your offer and niche, not an inflated promise. Most well-run campaigns generate 10–30 booked meetings per month.",
    },
    {
      q: "Can you show me results from past clients?",
      a: "Case studies, screenshots, or references from similar businesses are a strong signal of credibility.",
    },
  ];

  const faqJsonLd = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a B2B lead generation agency do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A B2B lead generation agency helps businesses identify, research, and connect with their ideal prospects. Instead of your sales team spending hours finding contacts and writing outreach emails, the agency handles the entire process — from building verified prospect lists to launching cold email outreach campaigns that generate qualified replies and booked meetings."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if a B2B lead generation agency is legitimate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for agencies that specialize exclusively in B2B lead generation, use verified data sources, have a transparent process, measure success by meetings booked, and can share real case studies from past clients."
      }
    },
    {
      "@type": "Question",
      "name": "How many meetings should I expect from a lead generation campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most well-run B2B lead generation campaigns generate 10 to 30 booked meetings per month, depending on your offer, niche, and target market. An honest agency will give you a realistic range rather than inflated guarantees."
      }
    },
    {
      "@type": "Question",
      "name": "Why is outsourced lead generation better than building an in-house team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Building an in-house team requires hiring a data researcher, copywriter, campaign manager, and purchasing outreach tools — all before a single email goes out. Outsourced lead generation gives you an experienced team with proven systems already in place, making it faster and more cost-effective."
      }
    },
    {
      "@type": "Question",
      "name": "What tools does InfoNav use for B2B lead generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfoNav uses a combination of tools including Apollo, LinkedIn Sales Navigator, and NeverBounce to build and verify targeted prospect lists, combined with personalized cold email outreach campaigns and continuous optimization."
      }
    }
  ]
}`;

  return (
    <>
      <Head>
        <title>{blog?.metaTitle || "How to Choose a B2B Lead Generation Agency in the USA | InfoNav"}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content={blog?.keywords} />
        <link rel="canonical" href={blog?.canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      </Head>

      {/* ── HERO ── */}
      <section
        className="relative h-[100vh] flex items-center justify-center text-center text-white"
        aria-label="Hero - How to Choose a B2B Lead Generation Agency"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/45" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            B2B Growth Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            How to Choose a B2B Lead Generation Agency in the USA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Learn what to look for, what questions to ask, and how to find the right outsourced lead generation partner for your business.
          </p>
        </motion.div>
      </section>

      {/* ── MAIN ── */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20 text-gray-700">

        {/* 1 — What Does an Agency Actually Do? (text left, image right) */}
        <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Does a B2B Lead Generation Agency Actually Do?
            </h2>
            <p className="leading-relaxed">
              A B2B lead generation agency helps businesses identify, research, and connect with their ideal prospects. Instead of your sales team spending hours finding contacts and writing outreach emails, the agency handles the entire process — from building verified prospect lists to launching cold email outreach campaigns that generate qualified replies and booked meetings.
            </p>
            <p className="leading-relaxed mt-4">
              The best agencies don't just hand you a list of names. They operate as a full <strong>outsourced lead generation partner</strong> — managing data, outreach, follow-ups, and optimization so your team shows up to conversations, not inboxes.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
              alt="B2B lead generation agency at work"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.section>

        {/* 2 — 5 Things to Look For */}
        <motion.section {...fadeUp}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            5 Things to Look for When Choosing a B2B Lead Generation Agency
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiveThings.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3 — Questions to Ask (image left, text right) */}
        <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80"
              alt="Questions to ask a lead generation agency"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions to Ask Before Hiring a B2B Lead Generation Agency
            </h2>
            <div className="space-y-4">
              {questions.map((item, i) => (
                <div key={i} className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold text-gray-900 mb-1">"{item.q}"</p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 4 — Red Flags */}
        <motion.section {...fadeUp} className="bg-red-50 border border-red-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🚩 Red Flags to Watch Out For
          </h2>
          <p className="text-gray-600 mb-6">
            Not every agency that claims to be a B2B lead generation agency delivers real results. Watch out for these warning signs:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {redFlags.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-red-100 shadow-sm">
                <p className="font-semibold text-red-600 mb-1">✗ {item.flag}</p>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5 — Why Outsourced Makes Sense (text left, image right) */}
        <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Outsourced Lead Generation Makes Sense for US B2B Companies
            </h2>
            <p className="leading-relaxed">
              Building an in-house lead generation team is expensive. You need a data researcher, a copywriter, a campaign manager, and outreach tools — all before a single email goes out. For most B2B companies, outsourced lead generation is a smarter, faster, and more cost-effective alternative.
            </p>
            <p className="leading-relaxed mt-4">
              A specialized B2B email marketing agency US businesses rely on already has the team, tools, and processes in place. You plug in your offer and target market — they handle the rest.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[["Faster", "Launch in days, not months"], ["Cheaper", "No hiring or tool costs"], ["Proven", "Processes already tested"]].map(([label, sub]) => (
                <div key={label} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <p className="font-bold text-blue-700 text-lg">{label}</p>
                  <p className="text-gray-500 text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Outsourced B2B lead generation team"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.section>

        {/* 6 — How InfoNav Approaches It */}
        <motion.section
          {...fadeUp}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">How InfoNav Approaches B2B Lead Generation</h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            At InfoNav, we operate as a dedicated outsourced lead generation partner for B2B companies looking to build predictable pipelines. Our process combines verified prospect data, personalized cold email outreach, and continuous campaign optimization to generate consistent, qualified meetings for your sales team.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              ["✅ Verified Data", "Apollo, LinkedIn Sales Navigator & NeverBounce verified lists"],
              ["✅ Cold Email Outreach", "Personalized sequences tested for reply rate, not just open rate"],
              ["✅ Meetings Booked", "We measure success by real pipeline — qualified meetings only"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="font-semibold mb-1">{title}</p>
                <p className="text-blue-100 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-100 text-sm">
            We don't sell lists. We build outbound systems — and we measure our success by the meetings we book for you.
          </p>
          <a
            href="/contact-us"
            className="inline-block mt-6 bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow"
          >
            Book a Free Strategy Call with InfoNav →
          </a>
        </motion.section>

        {/* 7 — FAQ Accordion */}
        <motion.section {...fadeUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What does a B2B lead generation agency do?",
                a: "A B2B lead generation agency helps businesses identify, research, and connect with their ideal prospects — handling everything from building verified prospect lists to launching cold email campaigns that generate qualified replies and booked meetings.",
              },
              {
                q: "How do I know if an agency is legitimate?",
                a: "Look for agencies that specialize exclusively in B2B, use verified data sources, are transparent about their process, and measure success by meetings booked — not vanity metrics like open rates.",
              },
              {
                q: "How many meetings should I expect per month?",
                a: "Most well-run B2B campaigns generate 10–30 booked meetings per month, depending on your offer, niche, and target market. An honest agency will give a realistic range rather than inflated guarantees.",
              },
              {
                q: "Why is outsourced lead generation better than in-house?",
                a: "Outsourced lead generation gives you an experienced team with proven systems already in place. Building in-house requires hiring, training, and tooling — all before a single email is sent.",
              },
              {
                q: "What tools does InfoNav use?",
                a: "InfoNav uses Apollo, LinkedIn Sales Navigator, and NeverBounce to build and verify targeted prospect lists, combined with personalized cold email outreach and continuous campaign optimization.",
              },
            ].map((f, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-800">{f.q}</span>
                  <span className="text-2xl text-blue-600">{openFAQ === idx ? "−" : "+"}</span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === idx ? "auto" : 0,
                    opacity: openFAQ === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.28 }}
                  className="px-6 pb-5 text-gray-600"
                >
                  <p>{f.a}</p>
                </motion.div>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          {...fadeUp}
          className="text-center bg-gray-50 rounded-2xl p-10 border border-gray-100 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Build a Predictable Pipeline?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Choosing the right B2B lead generation agency is about finding a partner who understands your market, uses verified data, and measures success by real pipeline results — not vanity metrics.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors"
          >
            Book a Free Strategy Call with InfoNav →
          </a>
        </motion.section>

      </main>
    </>
  );
}