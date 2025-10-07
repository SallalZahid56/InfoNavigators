"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function DigitalMarketingAgencyPage({ blog }) {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            q: "Why should I hire a digital marketing agency?",
            a: "A digital marketing agency brings expertise, proven tools, and data-driven strategies to help your business grow faster and smarter — saving you time and avoiding trial-and-error.",
        },
        {
            q: "What services does a digital marketing agency offer?",
            a: "From SEO and PPC to lead generation, email marketing, and web development — agencies offer full-stack digital growth solutions customized to your goals.",
        },
        {
            q: "How can InfoNav help my business stand out online?",
            a: "At InfoNav, we blend creativity with analytics to design campaigns that increase visibility, attract qualified leads, and convert traffic into real sales.",
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-900">
            {/* HERO SECTION */}
            <section className="relative w-full h-[420px] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/80" />

                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
                        {blog.title}
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl opacity-90">{blog.description}</p>
                    <span className="mt-4 text-sm bg-orange-500 text-white px-4 py-1 rounded-full shadow-md">
                        {blog.category} • {blog.date}
                    </span>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <article className="max-w-6xl mx-auto px-6 lg:px-10 py-16 space-y-16">
                {/* INTRO */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Why Digital Marketing Agencies Matter More Than Ever
                        </h2>
                        <p className="text-gray-700 mb-4">
                            In these days' speedy-transferring on-line world, every commercial enterprise is preventing interest. Whether you run a small nearby shop or a quick-developing employer, being visible on the internet is not non-compulsory — it’s survival. This is where digital marketing agencies step in.
                        </p>
                        <p className="text-gray-700 mb-4">
                            A proper enterprise isn’t just about running commercials or posting on social media. It’s approximately information your commercial enterprise desires, growing an approach that works, and the use of the right mix of gear that will help you develop online
                        </p>
                        <p className="text-gray-700">
                            Many business proprietors understand digital advertising is crucial, but they don’t constantly recognize what a virtual business enterprise truly does or how tons of value it could carry. At InfoNav, we’ve seen organizations rework their on-line presence by way of in reality partnering with the right crew — turning low visibility into constant leads, and scattered efforts into measurable consequences.
                        </p>
                    </div>

                    <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/why-digital-marketing.jpg"
                            alt="Digital Marketing Team"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </section>

                {/* WHAT IS A DIGITAL MARKETING AGENCY */}
                <section className="text-center space-y-4">
                    <h3 className="text-3xl font-semibold">
                        💼 What Is a Digital Marketing Agency?
                    </h3>
                    <p className="text-gray-700 max-w-4xl mx-auto">
                        A digital marketing agency is like your business’s growth partner in the online world. Instead of juggling ads, SEO, emails, and social media all by yourself, you hand over the strategy to experts who live and breathe digital growth. Their main job is simple: help brands increase visibility, attract quality leads, and convert traffic into paying customers.
                    </p>
                    <p className="text-gray-700 max-w-4xl mx-auto">
                        Unlike traditional marketing teams, modern agencies use data, tools, and creativity together. At InfoNav, we don’t just post random content or run one-off campaigns — we study your audience, analyze competitors, and build a marketing plan that fits your goals. Whether it’s ranking higher on Google through SEO services, improving click-through rates with PPC ads, or driving targeted B2B leads through LinkedIn lead generation, everything works together under one smart strategy.
                    </p>

                    <p className="text-gray-700 max-w-4xl mx-auto">
                        Digital agencies act as an extension of your team, saving you time and avoiding the trial-and-error that comes with doing everything alone. This approach lets business owners focus on growth while we handle the moving parts of the online game.
                    </p>
                </section>

                {/* CORE SERVICES */}
                <section>
                    <h3 className="text-3xl font-semibold mb-6 text-center">
                        🚀 Core Services Offered by Digital Marketing Agencies
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Search Engine Optimization (SEO)",
                            "Social Media Marketing",
                            "Lead Generation & Data Research",
                            "Web Development & Optimization",
                            "Email Marketing & Automation",
                            "Data Extraction & Reporting",
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="p-5 bg-white rounded-xl shadow hover:scale-[1.02] transition-transform duration-300"
                            >
                                <p className="text-gray-700 font-medium">{service}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* CORE SERVICES */}
                <section className="py-10">
                    <h3 className="text-3xl font-semibold mb-8 text-center">
                        🚀 Core Services Offered by Digital Marketing Agencies
                    </h3>

                    <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
                        <p>
                            A good digital marketing agency isn’t just about running ads or posting on social media —
                            it’s about building a complete online growth engine for your business. Each service plays a
                            unique role, but when they’re combined strategically, the impact is powerful. At{" "}
                            <strong>InfoNav</strong>, we focus on blending creativity with data, so your marketing doesn’t
                            just look good — it performs.
                        </p>
                    </div>

                    {/* SERVICE CARDS */}
                    <div className="mt-10 space-y-10">
                        {/* SEO */}
                        <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-2xl font-semibold mb-4">🔍 Search Engine Optimization (SEO)</h4>
                            <p className="text-gray-700">
                                Think of SEO as the foundation of your online presence. If your website doesn’t show up on
                                Google when potential customers are searching, you’re simply invisible. Through on-page
                                optimization, technical improvements, and smart keyword targeting, we help businesses climb
                                the rankings, drive organic traffic, and dominate search results. Our SEO services focus on
                                long-term visibility, not quick gimmicks.
                            </p>
                        </div>

                        {/* Email Marketing */}
                        <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-2xl font-semibold mb-4">📧 Email Marketing & Automation</h4>
                            <p className="text-gray-700">
                                Email might be one of the oldest channels, but it’s still one of the most profitable when
                                done right. We help businesses nurture leads and build relationships through well-crafted
                                email sequences, automated follow-ups, and targeted campaigns that keep your audience
                                engaged long after they leave your site.
                            </p>
                        </div>

                        {/* Social Media Marketing */}
                        <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-2xl font-semibold mb-4">📱 Social Media Marketing</h4>
                            <p className="text-gray-700">
                                Your audience isn’t just searching — they’re scrolling. Whether it’s LinkedIn, Instagram, or
                                Facebook, we design campaigns that create conversations, boost brand awareness, and drive
                                meaningful engagement. Our approach focuses on storytelling and community-building, not just
                                posting for the sake of it.
                            </p>
                        </div>

                        {/* Lead Generation & Data Research */}
                        <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-2xl font-semibold mb-4">🎯 Lead Generation & Data Research</h4>
                            <p className="text-gray-700">
                                Behind every successful campaign is quality data. We combine smart targeting with advanced
                                Internet Research Services to find decision-makers, identify buying signals, and build
                                accurate prospect lists. This is how we fuel personalized outreach and help businesses scale
                                faster with lead generation solutions.
                            </p>
                        </div>

                        {/* Data Extraction */}
                        <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-2xl font-semibold mb-4">💾 Data Extraction</h4>
                            <p className="text-gray-700">
                                Accurate and structured data is the backbone of smart decisions. Our advanced extraction
                                methods deliver clean, ready-to-use datasets tailored to your goals — empowering better
                                analytics, targeting, and performance tracking.
                            </p>
                        </div>

                        {/* Web Development */}
                        <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-2xl font-semibold mb-4">💻 Web Development</h4>
                            <p className="text-gray-700">
                                Your website is your digital storefront. We design and build fast, SEO-friendly, and
                                conversion-focused websites that impress visitors and drive results. Our development team
                                ensures your site is optimized for performance, security, and user experience.
                            </p>
                        </div>
                    </div>
                </section>


                {/* WHY BUSINESSES NEED AGENCY */}
                <section className="text-center space-y-6">
                    <h3 className="text-3xl font-semibold">
                        💡 Why Businesses Need a Digital Marketing Agency
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {[
                            {
                                title: "🎯 Expert Strategy",
                                desc: "Agencies bring proven strategies, so you skip the trial-and-error and move straight to what works.",
                            },
                            {
                                title: "🛠️ Access to Top Tools",
                                desc: "They use premium analytics, automation, and keyword tools that uncover valuable market and audience insights.",
                            },
                            {
                                title: "💰 Cost-Effective Growth",
                                desc: "Instead of hiring a full team, you get skilled experts at a fraction of the cost—no overhead, no delays.",
                            },
                            {
                                title: "⚡ Faster Results",
                                desc: "With clear plans and real-time data, agencies deliver measurable outcomes like higher rankings, more leads, and better ROI.",
                            },
                            {
                                title: "🏆 Focus on What Matters",
                                desc: "They handle marketing so you can focus on products, customers, and scaling your business.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300"
                            >
                                <h4 className="font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* HOW TO CHOOSE AGENCY */}
                <section className="text-center">
                    <h3 className="text-3xl font-semibold mb-4">
                        🧭 How to Choose the Right Digital Marketing Agency
                    </h3>
                    <p className="text-gray-700 max-w-4xl mx-auto">
                        Picking the right agency can shape your entire growth journey. Start by looking at their experience, proven case studies, and client reviews. A reliable agency listens carefully, understands your goals, and builds strategies that match your business stage.
                    </p>

                    <p className="text-gray-700 max-w-4xl mx-auto">
                        Check whether they offer clear reporting, transparent pricing, and flexible plans. The best agencies act like partners, not vendors — guiding you with data-driven insights, not just selling services. A quick discovery call often reveals how serious they are about your success.
                    </p>
                </section>

                {/* FUTURE OF DIGITAL MARKETING */}
                <section className="text-center">
                    <h3 className="text-3xl font-semibold mb-4">
                        🔮 The Future of Digital Marketing Agencies
                    </h3>
                    <p className="text-gray-700 max-w-4xl mx-auto">
                        The future belongs to agencies that merge human creativity with AI insights. As search
                        engines evolve, personalized strategies, voice search, and privacy-first marketing are
                        becoming essential. Businesses that adapt early will dominate their industries.
                    </p>
                </section>

                {/* FAQ */}
                <section>
                    <h3 className="text-3xl font-semibold mb-6 text-center">
                        ❓ Frequently Asked Questions (FAQ)
                    </h3>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                            >
                                <button
                                    className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-100"
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                >
                                    {faq.q}
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${openFAQ === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openFAQ === i && (
                                    <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center mt-16">
                    <h3 className="text-3xl font-bold mb-4">
                        🚀 Ready to Grow Your Business with InfoNav?
                    </h3>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                        Partner with our expert digital marketing team to boost your visibility, attract
                        qualified leads, and turn online traffic into measurable growth.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20want%20to%20grow%20my%20business%20with%20InfoNav."
                        className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all"
                    >
                        Contact Us Today
                    </a>
                </section>
            </article>
        </div>
    );
}
