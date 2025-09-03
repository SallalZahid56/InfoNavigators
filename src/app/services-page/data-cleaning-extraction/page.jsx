"use client"; // Required for useState

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
// import background from "../assets/banner.webp"; // Adjust path as needed

export default function DataCleaningPage() {
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (i) => {
        setFaqOpen(faqOpen === i ? null : i);
    };

    const faqs = [
        {
            q: "What is data cleaning?",
            a: "Data cleaning (or data cleansing) is the process of fixing or removing incorrect, duplicate, or incomplete information from your database.",
        },
        {
            q: "Why is data export important?",
            a: "Exporting cleaned data into Excel, CRM, or SQL makes it instantly usable for sales, marketing, or analytics teams.",
        },
        {
            q: "Can you integrate cleaned data into my CRM?",
            a: "Yes, we support exports into Salesforce, HubSpot, Zoho, and other CRMs.",
        },
        {
            q: "How often should data be cleaned?",
            a: "At least once every quarter to maintain accuracy and reduce wasted marketing costs.",
        },
        {
            q: "Do you handle global data cleaning projects?",
            a: "Yes, we serve clients across USA, Europe, and worldwide, providing localized, GDPR-compliant solutions.",
        },
    ];

    return (
        <div>
            <Head>
                <title>Data Cleaning & Export Services | Accurate Business Data Solutions</title>
                <meta
                    name="description"
                    content="Professional data cleaning & formatting services to ensure accuracy, consistency, and usability. From database cleanup to multi-source data integration, we turn messy data into actionable insights."
                />
                <meta
                    name="keywords"
                    content="data cleaning services, data cleansing, clean data, data cleanup, data cleaning methods, data cleansing process, data cleaning tools, data cleaning best practices, database cleaning, dataset cleaning, data scrubbing techniques"
                />
            </Head>

            {/* ✅ Hero Section */}
            {/* ✅ Hero Section */}
            <section className="relative min-h-[90vh] sm:min-h-[70vh] flex items-center justify-center text-center text-white mt-14 px-4">
                <div className="absolute inset-0">
                    <Image
                        src="/banner.webp" // Image path from public folder
                        alt="Data Cleaning & Export Services"
                        className="object-cover"
                        fill
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>

                <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold mb-4 leading-snug">
                        Why Data Cleaning & Export Is Crucial for Business Growth
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg mb-6 px-2 sm:px-0">
                        Clean data drives smarter decisions and faster growth. Our data cleaning
                        & export services ensure accuracy, compliance, and usability across all
                        platforms.
                    </p>

                    <a
                        href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                        className="bg-brandOrange text-white px-5 sm:px-6 py-3 rounded-lg shadow hover:bg-black transition font-heading text-sm sm:text-base"
                    >
                        Book a Free Call
                    </a>
                </div>
            </section>
            {/* ✅ Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Every business relies on clean data to make smart decisions, power
                        marketing campaigns, and drive sales. At Info Navigators, we not
                        only clean your databases but also provide data export services in
                        your desired format — Excel, CSV, SQL, CRM, or Google Sheets.
                    </p>
                    <span className="text-black font-semibold text-center">
                        👉 Related service:{" "}
                        <a
                            href="/services-page/crm-data-entry"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            CRM Data Entry
                        </a>
                    </span>
                </div>
            </section>

            {/* ✅ Data Cleaning Services */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
                        Our Professional Data Cleaning Services
                    </h2>
                    <ul className="max-w-3xl mx-auto text-gray-700 space-y-3">
                        <li>✔️ Deduplicated – Removing duplicate entries for accuracy.</li>
                        <li>✔️ Validated – Checking emails, phone numbers, and job titles.</li>
                        <li>✔️ Formatted – Consistent formatting across all records.</li>
                        <li>✔️ Enriched – Adding missing details where needed.</li>
                        <li>✔️ Compliant – Following GDPR, HIPAA, and data privacy rules.</li>
                    </ul>
                    <span className="block text-black font-semibold text-center">
                        👉 Related service:{" "}
                        <a
                            href="/services-page/data-verification"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Data Verification & Fact-Checking
                        </a>
                    </span>
                </div>
            </section>

            {/* ✅ Data Export Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
                        Data Export Services We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700">
                        <div className="p-6 rounded-xl shadow bg-white border">
                            Excel & CSV Export – Ready-to-use for reporting & analytics.
                        </div>
                        <div className="p-6 rounded-xl shadow bg-white border">
                            CRM Export – Import directly into Salesforce, HubSpot, Zoho CRM, or Pipedrive.
                        </div>
                        <div className="p-6 rounded-xl shadow bg-white border">
                            SQL & Database Export – Structured for developers and IT teams.
                        </div>
                        <div className="p-6 rounded-xl shadow bg-white border">
                            Google Sheets Export – For real-time collaboration and marketing teams.
                        </div>
                    </div>
                    <span className="block text-black font-semibold text-center">
                        👉 Related service:{" "}
                        <a
                            href="/services-page/b2b-lead-generation"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            B2B Lead Generation Services
                        </a>
                    </span>
                </div>
            </section>

            {/* ✅ Industries Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
                        Industries That Benefit from Data Cleaning & Export
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-center">
                        {[
                            "E-commerce & Retail",
                            "Finance & Banking",
                            "Healthcare & Pharma",
                            "Marketing Agencies",
                            "Real Estate",
                        ].map((industry, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl shadow bg-white border font-semibold"
                            >
                                {industry}
                            </div>
                        ))}
                    </div>
                    <span className="block text-black font-semibold text-center">
                        👉 Related service:{" "}
                        <a
                            href="/services-page/email-marketing"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Email Marketing Services
                        </a>
                    </span>
                </div>
            </section>

            {/* ✅ Process Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
                        Our Data Cleaning Process
                    </h2>
                    <ol className="max-w-3xl mx-auto text-gray-700 space-y-3 list-decimal list-inside">
                        <li>Requirement Analysis – Understand client goals & dataset.</li>
                        <li>Data Audit – Identify duplicates and inconsistencies.</li>
                        <li>Cleaning & Standardization – Apply formatting and validation.</li>
                        <li>Verification – Double-check with manual and automated methods.</li>
                        <li>Export & Delivery – Provide data in your chosen format.</li>
                    </ol>
                </div>
            </section>

            {/* ✅ Tools Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
                        Tools & Technologies We Use for Data Cleaning
                    </h2>
                    <ul className="max-w-3xl mx-auto text-gray-700 space-y-3 text-center">
                        <li>OpenRefine – Data formatting & cleanup</li>
                        <li>Excel Macros – Automated deduplication</li>
                        <li>Python & Pandas – Advanced data wrangling</li>
                        <li>Trifacta Wrangler – Large-scale dataset cleaning</li>
                        <li>CRM Integrations – HubSpot, Zoho, Salesforce syncing</li>
                    </ul>
                    <span className="block text-black font-semibold text-center">
                        👉 Related service:{" "}
                        <a
                            href="/services-page/data-extraction"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Data Extraction Services
                        </a>
                    </span>
                </div>
            </section>

            {/* ✅ Case Studies */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
                        Case Studies: Transforming Messy Data into Insights
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700">
                        <div className="p-6 rounded-xl shadow bg-white border">
                            <h4 className="font-semibold mb-2">Case Study 1 – E-commerce</h4>
                            <p>
                                A US retailer had 20,000+ duplicate customer records. After our
                                data cleaning services, their email bounce rate dropped by 42% and sales conversion increased.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl shadow bg-white border">
                            <h4 className="font-semibold mb-2">Case Study 2 – European SaaS Startup</h4>
                            <p>
                                We standardized and exported data into Salesforce, enabling their sales team to focus on outreach instead of manual cleanup.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
                        FAQs – Data Cleaning & Export Services
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqs.map((f, i) => (
                            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50"
                                >
                                    <div className="font-semibold">{f.q}</div>
                                    <div className="text-brandOrange font-bold">{faqOpen === i ? "−" : "+"}</div>
                                </button>
                                {faqOpen === i && (
                                    <div className="p-4 bg-gray-50 text-gray-700">{f.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}
