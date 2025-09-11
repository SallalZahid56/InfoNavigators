"use client";


import React, { useState } from "react";
import Link from "next/link";
import {
    FiTarget,
    FiCheckCircle,
    FiZap,
    FiTrendingUp,
    FiShield,
    FiLayers,
    FiGlobe,
    FiUsers,
    FiChevronDown,
    FiMail,
    FiBarChart
} from "react-icons/fi";


const faqs = [
    {
        q: "What is the difference between B2B and B2C leads?",
        a: "B2B leads are businesses or professionals, involving longer decision cycles and multiple stakeholders. B2C leads are individuals, and the buying process is faster and emotionally driven.",
    },
    {
        q: "How can I build a high-quality email list?",
        a: "Use lead magnets like free eBooks, webinars, or reports. Avoid buying random lists; instead, collect opt-in contacts from your target audience.",
    },
    {
        q: "What’s the best platform for managing leads?",
        a: "HubSpot, Salesforce, and Zoho CRM are excellent for tracking, follow-ups, and automation.",
    },
    {
        q: "Are cold leads worth pursuing?",
        a: "Yes — with personalized outreach and follow-ups, many cold leads convert into paying customers.",
    },
    {
        q: "How long does it take to see results from lead generation?",
        a: "Paid campaigns can work in weeks, while SEO strategies may take 3–6 months.",
    },
    {
        q: "Do you offer custom lead generation services?",
        a: "Yes, our leads are tailored to your industry, audience, and goals.",
    },
    {
        q: "Can influencer marketing generate B2B leads?",
        a: "Absolutely — niche industry influencers can create high-quality inbound opportunities.",
    },
    {
        q: "Is email marketing still effective in 2025?",
        a: "Yes — with segmentation and automation, it offers one of the highest ROIs in digital marketing.",
    },
    {
        q: "Do you provide international B2B leads?",
        a: "Yes, we source verified global contacts across multiple countries.",
    },
    {
        q: "How do you verify your leads?",
        a: "We use multi-step verification with tools like Hunter.io, NeverBounce, and manual checks.",
    },
];

export default function LeadGeneration() {
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
        <div className="pt-24 bg-white text-gray-900">
            {/* HERO */}
            <section className="relative overflow-hidden p-6 md:p-10 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-brandOrange/10 via-orange-200/30 to-white" />
                <div className="container mx-auto px-6 py-16 relative">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                Premium <span className="text-brandOrange">B2B Lead Generation</span> Services to Scale Your Business
                            </h1>
                            <p className="mt-4 text-lg text-gray-700">
                                At Info Navigators, we identify high-value prospects, build meaningful connections,
                                and turn them into long-term customers. 15+ years, 1,000+ clients, and millions of verified leads delivered.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition"
                                >
                                    Book a Free Consultation
                                </a>
                                <a
                                    href="/services-page/"
                                    className="px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition"
                                >
                                    Explore Services
                                </a>
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
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 ring-1 ring-black/5">
                                <div className="flex items-center gap-3">
                                    <FiCheckCircle className="text-brandOrange text-xl" />
                                    <div className="text-sm">
                                        <div className="font-semibold">Verified Leads</div>
                                        <div className="text-gray-600">Lower bounce, higher ROI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* WHY TRUST US */}
            <section className="container mx-auto p-6 md:p-10 lg:p-12">
                <h2 className="text-3xl font-bold text-center mb-10">Why Businesses Trust Info Navigators</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <FiTarget />,
                            title: "Category-Specific",
                            desc: "Matched to your industry & ICP for relevance and fit.",
                        },
                        {
                            icon: <FiShield />,
                            title: "Verified",
                            desc: "Multi-step validation reduces bounce rates & wasted outreach.",
                        },
                        {
                            icon: <FiZap />,
                            title: "Ready-to-Use",
                            desc: "Delivered in your format for instant CRM import.",
                        },
                    ].map((c, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition"
                        >
                            <div className="text-3xl text-brandOrange">{c.icon}</div>
                            <h3 className="mt-3 font-semibold text-xl">{c.title}</h3>
                            <p className="mt-2 text-gray-600">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHAT IS B2B LEAD GEN */}
            <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
                <div className="container mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">What Is B2B Lead Generation (and how it differs from B2C)</h2>
                        <p className="text-gray-700">
                            B2B lead generation identifies and attracts decision-makers likely to purchase your products/services.
                            B2B cycles are longer, involve multiple stakeholders, and require a relationship-driven approach.
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-700">
                            <li className="flex items-start gap-3"><FiLayers className="mt-1 text-brandOrange" /> <span><b>Sales Cycle</b> — Longer due to approvals.</span></li>
                            <li className="flex items-start gap-3"><FiTrendingUp className="mt-1 text-brandOrange" /> <span><b>Deal Size</b> — Higher average contract values.</span></li>
                            <li className="flex items-start gap-3"><FiCheckCircle className="mt-1 text-brandOrange" /> <span><b>Approach</b> — Value and ROI-focused messaging.</span></li>
                        </ul>
                    </div>
                    <div className="aspect-video rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6">
                        <div className="h-full w-full rounded-xl bg-gradient-to-tr from-brandOrange/20 to-white grid place-items-center">
                            <div className="flex gap-6">
                                <div className="w-36 h-36 rounded-xl bg-black/80" />
                                <div className="w-36 h-36 rounded-xl bg-black/60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES WE OFFER */}
            <section id="services" className="container mx-auto p-6 md:p-10 lg:p-12">
                <h2 className="text-3xl font-bold text-center mb-10">The B2B Lead Generation Services We Offer</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "B2B Manufacturing Marketing Leads",
                            desc: "Connect with suppliers, distributors, and buyers globally.",
                        },
                        {
                            title: "B2B Email Marketing Lists",
                            desc: "Verified, up-to-date contacts for outreach.",
                        },
                        {
                            title: "B2B SaaS Lead Generation",
                            desc: "Target CTOs, CMOs, and decision makers in tech.",
                        },
                        {
                            title: "B2B Energy Leads",
                            desc: "Reach corporate energy buyers and utility providers.",
                        },
                        {
                            title: "B2B Wholesale Leads",
                            desc: "Bulk buyers, distributors, and e-commerce sellers.",
                        },
                        {
                            title: "International B2B Marketing Leads",
                            desc: "Expand into new markets with localized contacts.",
                        },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group"
                        >
                            <div className="h-10 w-10 grid place-items-center rounded-lg bg-brandOrange/10 text-brandOrange">
                                <FiTarget />
                            </div>
                            <h3 className="mt-4 font-semibold text-lg group-hover:text-brandOrange">{s.title}</h3>
                            <p className="mt-2 text-gray-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESS */}
            <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
                <div className="container mx-auto px-6 py-14">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Proven B2B Lead Generation Process</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                step: "Step 1",
                                title: "Requirement Analysis",
                                desc: "Define ICP: industry, location, job title, size, and buying behavior.",
                            },
                            {
                                step: "Step 2",
                                title: "Data Research",
                                desc: "Trusted platforms + manual prospecting for accuracy.",
                            },
                            {
                                step: "Step 3",
                                title: "Lead Verification",
                                desc: "Hunter.io, NeverBounce, and manual checks.",
                            },
                            {
                                step: "Step 4",
                                title: "Delivery",
                                desc: "CSV, Excel, or Google Sheets — ready to import.",
                            },
                        ].map((p, i) => (
                            <div key={i} className="relative rounded-2xl bg-white border border-gray-200 p-6">
                                <div className="absolute -top-3 left-6 bg-brandOrange text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {p.step}
                                </div>
                                <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
                                <p className="mt-2 text-gray-600">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TOOLS & INDUSTRIES */}
            <section className="container mx-auto p-6 md:p-10 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Tools & Technology We Use</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                "Apollo.io",
                                "Hunter.io",
                                "LinkedIn Sales Navigator",
                                "Clay",
                                "Mailchimp",
                                "Instapage",
                            ].map((t) => (
                                <div key={t} className="rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition">
                                    <div className="mx-auto mb-2 text-brandOrange text-xl"><FiGlobe /></div>
                                    <div className="text-sm font-semibold">{t}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "SaaS & Tech",
                                "Manufacturing & Industrial",
                                "Wholesale & Distribution",
                                "Energy & Utilities",
                                "Local & Niche Services",
                            ].map((i) => (
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

            {/* WHY OUR LEADS */}
            <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
                <div className="container mx-auto px-6 py-14">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Our B2B Leads Deliver Better ROI</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "High Accuracy — multi-step verification.",
                            "Targeted Audience — no generic lists.",
                            "Scalable — from 500 to 50,000+.",
                            "Global Reach — 50+ countries.",
                        ].map((point, i) => (
                            <div key={i} className="rounded-2xl border border-gray-200 p-6 flex items-start gap-3">
                                <FiCheckCircle className="text-brandOrange mt-1" />
                                <span className="text-gray-700">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="container mx-auto p-6 md:p-10 lg:p-12">
                <h2 className="text-3xl font-bold text-center mb-10">Case Studies — Proof of Success</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
                        <div className="text-sm font-semibold text-brandOrange">SaaS Startup</div>
                        <h3 className="mt-1 font-bold text-xl">27% Response & 120 New Clients</h3>
                        <p className="mt-3 text-gray-600">
                            A US-based SaaS provider used our B2B SaaS database to achieve a 27% response rate and onboard 120 new clients in 60 days.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
                        <div className="text-sm font-semibold text-brandOrange">Manufacturing Supplier</div>
                        <h3 className="mt-1 font-bold text-xl">$120K in Orders in 3 Months</h3>
                        <p className="mt-3 text-gray-600">
                            A parts supplier in the Middle East generated $120K in orders within 3 months using our B2B wholesale leads.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-gray-50 p-6 md:p-10 lg:p-12">
                <div className="container mx-auto px-6 py-14">
                    <h2 className="text-3xl font-bold text-center mb-10">Advanced FAQs for B2B Lead Generation</h2>
                    <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
                        {faqs.map((item, idx) => (
                            <div key={idx} className="p-5">
                                <button
                                    onClick={() => setOpen(open === idx ? null : idx)}
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold">{item.q}</span>
                                    <FiChevronDown
                                        className={`transition ${open === idx ? "rotate-180" : ""}`}
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
        </div>
    );
}
