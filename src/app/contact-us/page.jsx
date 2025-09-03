// src/app/contact/page.jsx
"use client";

import React from "react";
import FinalCTA from "../../components/FinalCTA";

export default function ContactPage() {
  return (
    <div className="bg-white text-black">

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto mt-20 px-6 py-12 text-center rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-brandOrange mb-4">
          Get in Touch with InfoNavigators
        </h1>
        <p className="text-lg text-black mb-6">
          Looking for expert help with lead generation, web scraping, SEO, or
          custom web development? You’ve come to the right place. We provide
          high-quality digital solutions to help your business grow.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 bg-brandOrange text-white font-semibold rounded-lg hover:bg-black transition"
        >
          Call Us Now
        </a>
      </section>

      {/* Highlights Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
        {[
          "✅ Experienced Python & Automation Team",
          "✅ 100% Client-Specific Customization",
          "✅ Clean, Verified Data Delivery",
          "✅ Affordable & Fast Turnaround",
          "✅ Dedicated 24/7 Support",
          "✅ SEO & Results-Driven Execution",
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-l-4 border-brandOrange p-4 rounded-md shadow"
          >
            {item}
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto mt-12 px-6 py-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Our Core Services
        </h2>
        <ul className="space-y-2 text-lg text-black">
          <li>🔹 Lead Generation (B2B, Real Estate, Social Media)</li>
          <li>🔹 Custom List Building (Emails, LinkedIn, Phone)</li>
          <li>🔹 Python Web Scraping (eCommerce, Profiles, Products)</li>
          <li>🔹 Data Entry (Manual, Automated, Verified)</li>
          <li>🔹 AI-Based Data Extraction (PDF, Image, Excel, JSON, SQL)</li>
          <li>🔹 SEO Services (Technical, On-Page, Off-Page, Local)</li>
          <li>🔹 Custom Web Development (React, Full Stack, SEO-Optimized)</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-12 px-6 py-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-black mb-8">
          FAQs – Quick Answers
        </h2>
        <div className="space-y-4">
          <details className="bg-white border border-brandOrange p-4 rounded-md cursor-pointer">
            <summary className="font-semibold text-black">
              📬 How quickly will I get a response?
            </summary>
            <p className="mt-2 text-black">
              We usually respond within a few hours — and always within 24
              hours.
            </p>
          </details>

          <details className="bg-white border border-brandOrange p-4 rounded-md cursor-pointer">
            <summary className="font-semibold text-black">
              🤖 Do you offer custom scraping scripts?
            </summary>
            <p className="mt-2 text-black">
              Yes, we build fully custom scraping solutions using Python,
              BeautifulSoup, and Selenium.
            </p>
          </details>

          <details className="bg-white border border-brandOrange p-4 rounded-md cursor-pointer">
            <summary className="font-semibold text-black">
              🎁 Can I request a sample before ordering?
            </summary>
            <p className="mt-2 text-black">
              Absolutely. We're happy to provide a free sample based on your
              project scope.
            </p>
          </details>

          <details className="bg-white border border-brandOrange p-4 rounded-md cursor-pointer">
            <summary className="font-semibold text-black">
              🔍 What type of SEO services do you offer?
            </summary>
            <p className="mt-2 text-black">
              We offer full SEO support — technical audits, keyword research,
              content optimization, and backlink building.
            </p>
          </details>

          <details className="bg-white border border-brandOrange p-4 rounded-md cursor-pointer">
            <summary className="font-semibold text-black">
              💼 How can I hire your team?
            </summary>
            <p className="mt-2 text-black">
              Just contact us via WhatsApp or Email, tell us what you need, and
              we’ll guide you through the next steps!
            </p>
          </details>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
