"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";


// ✅ FAQs data (from your content)
const faqs = [
  {
    question: "What are the Lead Generation Services?",
    answer:
      "At InfoNav, we often get asked how businesses can consistently identify and engage potential customers without exhausting resources, and that’s exactly where lead generation services come in. These specialized third-party companies act as an extension of your sales and marketing team, helping you connect with interested leads who are actively searching for products like yours. Using a variety of proven methods—from online advertising and social media campaigns to email outreach and even personalized telemarketing—these solutions are designed to attract and capture contact information that fuels your pipeline. Over the years, I’ve seen that the success of such efforts lies not just in technology but in the ability to combine data-driven strategies with human insight, ensuring that every opportunity generated is both qualified and relevant to the growth goals of your organization.",
  },
  {
    question: "What are the Benefits of Lead Generation Services?",
    answer:
      "At InfoNav, I’ve seen firsthand how the right lead generation services can completely transform the way businesses operate, especially when growth is the priority. These solutions not only save valuable time and resources by identifying and qualifying potential leads, but they also help increase revenue by converting prospects into paying customers. By targeting marketing efforts effectively, companies ensure they’re reaching the right audience rather than wasting spend on broad strategies. Whether opting for a per-lead model or a subscription basis, this kind of service often proves to be a cost-effective solution. I’ve personally worked with startups and small firms that relied on these tools to grow their customer base, and the ability to have strategies scaled according to the business’s needs made them an incredibly useful tool for long-term success.",
  },
  {
    question: "Should you hire a B2B Lead Generation Services Vendor?",
    answer:
      "At InfoNav, I’ve often advised that hiring a lead generation vendor can be a game-changing choice for businesses dealing with limited time and resources, especially when they need to scale efforts quickly. A reliable partner brings specialized expertise and proven tools for identifying and qualifying leads, which usually result in higher-quality opportunities. From my own experience, companies that leverage external support often see a more efficient use of their internal teams, as the vendor takes over the heavy lifting of outreach and nurturing, letting sales focus on closing.",
  },
  {
    question: "Difference Between Demand Generation and Lead Generation",
    answer:
      "At InfoNav, I often explain that demand generation is all about creating a general interest in your brand by using broad marketing strategies such as content, social media campaigns, and events designed to attract and engage wider audiences. On the other hand, lead generation is more focused on identifying and capturing potential customers as specific leads, using precise tactics like sign-up forms, gated resources, or webinars that collect contact information and qualify them for further nurturing and eventual conversion. From my own work, I’ve seen how aligning both approaches creates a smoother pipeline—first driving awareness, then applying the right techniques to transform interest into actionable opportunities.",
  },
  {
    question: "What are MQLs?",
    answer:
      "At InfoNav, we explain that MQLs or Marketing Qualified Leads are potential customers who show real interest in a company’s products or services by engaging with marketing efforts and meeting specific criteria that signal readiness for the next step. These are individuals who may have taken actions like downloading an e-book, subscribing to a newsletter, or even attending a webinar, clearly demonstrating intent through their interaction with your offerings. From my own experience, recognizing these early signals allows businesses to nurture the right people at the right time, increasing the likelihood that leads transition smoothly into meaningful sales conversations.",
  },
];

export default function LeadGenerationPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <Head>
        <title>B2B Lead Generation Services | InfoNav</title>
        <meta
          name="description"
          content="Unlock high-quality B2B leads with InfoNav. Our proven strategies combine data-driven insights, ABM, and multi-channel outreach to deliver sales-ready opportunities."
        />
        <link rel="canonical" href="https://infonavigators.com/services-page/lead-generation/" />
      </Head>

      {/* HERO */}
      <section className="bg-gray-50 py-24 px-6 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          B2B Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Unlock high-quality leads that convert into loyal customers. Our proven B2B lead generation strategies combine data-driven insights, personalized outreach, and advanced marketing automation to deliver a consistent flow of sales-ready opportunities. Backed by years of experience in demand generation, lead nurturing, and sales pipeline optimization, we help businesses accelerate revenue while saving valuable time.
        </p>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-6 lg:px-20 bg-white text-center">
        {[
          ["1,987,236", "Leads Generated"],
          ["9,546", "Campaigns Launched"],
          ["100 Mill", "Audience Reached"],
          ["98%", "Client Satisfaction"],
        ].map(([stat, label], idx) => (
          <div key={idx}>
            <h3 className="text-3xl font-bold text-brandOrange">{stat}</h3>
            <p className="text-gray-600">{label}</p>
          </div>
        ))}
      </section>

      {/* WHY BUSINESSES TRUST */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Businesses Trust Our B2B Lead Generation Services
            </h2>

            <p className="text-gray-700 mb-6">
              Building a steady pipeline of qualified opportunities requires more than just contact lists—it demands expertise, strategy, and proven execution. Our B2B lead generation services are designed to help companies attract, engage, and convert high-intent buyers by combining account-based marketing (ABM), demand generation campaigns, and multi-channel outreach. With a data-driven approach, we ensure that every lead is relevant, sales-ready, and aligned with your ideal customer profile.
            </p>

            <p className="text-gray-700 mb-6">
              What sets us apart is our commitment to transparency and measurable results. By leveraging first-party data, AI-driven automation, and behavioral intent insights, we help you identify prospects earlier in the buyer’s journey and nurture them with personalized experiences. This not only improves conversion rates but also maximizes ROI across your entire sales funnel. Trusted by global enterprises and growing startups alike, our approach integrates content syndication, email marketing, LinkedIn lead generation, and SEO-driven inbound strategies to deliver consistent growth.
            </p>

            <div className="mt-6">
              <a
                href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brandOrange text-white px-5 py-3 rounded-full shadow hover:bg-black transition"
              >
                Get a Free Strategy Call
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <Image
                src="/b2bleeads.avif"   // put your image file in /public and name it accordingly
                alt="Trusted by global enterprises and startups"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-TOUCH */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Multi-Touch High Quality Lead Generation Services
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">
          From my own experience, the most effective way to manage MQLs is by following a rock-solid qualification process where every step with prospects is guided by clear intent and tracked through their interacting with campaigns. To avoid wasted effort, I always cross-check multiple parameters, filtering out weak leads and focusing only on those likely to convert. To truly nail an MQL, adding a human layer matters, which is why I rely on teams to tele-verify before giving the green flag for the inside sales team to step in. This ensures complete readiness and allows every deal to move forward with confidence.
        </p>
      </section>

      {/* BANT */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">
          BANT Lead Generation Services
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">
          At InfoNav, we qualify leads with precision using the proven BANT framework—Budget, Authority, Need, and Timing. This ensures that every opportunity passed to your sales team is highly relevant, sales-ready, and aligned with your business goals. Our process goes beyond just contact lists—we analyze the current solutions, uncover pain points, confirm decision-making authority, and validate the time frame for change.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say About Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah Mitchell – Marketing Director, SaaS Company",
              feedback:
                "Partnering with InfoNav completely changed the way we approached lead generation. Their team delivered highly qualified leads that matched our exact ICP, which helped us cut sales cycles in half. The precision and professionalism they bring are unmatched.",
            },
            {
              name: "James Carter – VP of Sales, IT Services Firm",
              feedback:
                "With InfoNav’s multi-touch strategies, we saw a significant improvement in both the volume and quality of our pipeline. Their data-driven insights gave us the clarity we needed to focus on real opportunities instead of chasing unqualified prospects.",
            },
            {
              name: "Emily Rodriguez – CEO, B2B Consulting Agency",
              feedback:
                "I’ve worked with several vendors before, but InfoNav stands out because they don’t just deliver leads—they deliver value. Their team feels like an extension of ours, and their commitment to transparency and results has been a huge driver of our growth.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 mb-4">“{t.feedback}”</p>
              <p className="font-semibold text-brandOrange">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              <h3 className="font-semibold text-lg flex justify-between items-center">
                {faq.question}
                <span>{openFAQ === idx ? "−" : "+"}</span>
              </h3>
              {openFAQ === idx && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
