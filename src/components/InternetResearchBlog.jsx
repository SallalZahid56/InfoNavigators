"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function InternetResearchPage({ blog }) {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            q: "What industries do you support?",
            a: "We work with technology, finance, education, real estate, eCommerce, and more—tailoring our research approach to each sector’s unique data needs.",
        },
        {
            q: "How do you ensure data accuracy?",
            a: "Our multi-layered verification process includes manual cross-checking, data validation from trusted sources, and strict quality control to ensure reliability.",
        },
        {
            q: "Can I combine research with other services?",
            a: "Absolutely! Many clients pair our Internet Research Services with Lead Generation, SEO, or Data Entry solutions for a complete growth strategy.",
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-900">
            {/* HERO SECTION */}
            {/* HERO SECTION */}
            <section className="relative w-full h-[420px] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />

                {/* 🖤 Black overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/80" />

                {/* Text Content */}
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
                {/* INTRO SECTION */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Professional Internet Research Services for Accurate Data
                        </h2>
                        <p className="text-gray-700 mb-4">
                            In today’s fast-moving digital landscape, smart business decisions are built on
                            accurate, reliable data. Whether you’re entering new markets, analyzing competitors,
                            or fine-tuning your marketing strategy, professional Internet Research Services can
                            give your business a serious edge.
                        </p>
                        <p className="text-gray-700 mb-4">
                            It’s not about collecting random facts—it’s about extracting the right data,
                            verifying it, and presenting it in a way that fuels real business growth.
                        </p>
                        <p className="text-gray-700">
                            Our approach focuses on speed, precision, and data quality. By combining structured
                            research methods with advanced tools, we uncover valuable insights you can rely on.

                            From competitor strategies to market trends, every piece of data we deliver is clean, organized, and ready to support smarter decisions.
                        </p>
                    </div>

                    <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/internet-blog-one.webp"
                            alt="Research team"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </section>

                {/* WHY SECTION */}
                <section className="text-center">
                    <h3 className="text-3xl font-semibold mb-4">
                        💡 Why Internet Research Matters for Businesses
                    </h3>
                    <p className="text-gray-700 max-w-4xl mx-auto">

                        As a business grows, the volume of data it needs grows too. Market research, customer behavior, emerging trends, competitor analysis—there’s a goldmine of information on the internet.

                        The challenge isn’t finding data it’s finding reliable, relevant, and up-to-date
                        insights that align with your business goals. That’s where Internet Research Services
                        come in. Instead of drowning in unstructured information, we deliver verified, organized
                        research that supports confident decision-making.
                    </p>

                    <p className="text-gray-700 max-w-4xl mx-auto">Many organizations underestimate how much their strategy depends on research quality. Data-driven insights help spot growth opportunities, reduce risks, and sharpen operations. For example, a startup might use Lead Generation Services to build targeted outreach campaigns, while marketing agencies rely on market trend reports to craft stronger strategies. Every data point is collected carefully, verified manually, and presented clearly.</p>
                </section>

                {/* PROCESS SECTION */}
                <section>
                    <h3 className="text-3xl font-semibold mb-6 text-center">
                        🧭 Our Internet Research Process (Step by Step)
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                title: "1️⃣ Goal Discovery",
                                desc: "We understand your business objectives, audience, and research needs—whether it’s competitor analysis, product research, or outreach.",
                            },
                            {
                                title: "2️⃣ Strategic Planning",
                                desc: " We build a customized research framework using targeted keywords, trusted web sources, and advanced search techniques.",
                            },
                            {
                                title: "3️⃣ Data Verification",
                                desc: "Using both manual and automated methods, we gather and cross-check data to ensure accuracy.",
                            },
                            {
                                title: "4️⃣ Organized Delivery",
                                desc: "We structure everything into clear, actionable reports that align with marketing and SEO strategies.",
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300"
                            >
                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section>
                    <h3 className="text-3xl font-semibold mb-6 text-center">
                        📊 Types of Internet Research We Offer
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Market Trends & Competitor Analysis",
                            "Company Profiling & Background Checks",
                            "Contact & Email Research",
                            "Product, Pricing & Supplier Research",
                            "Influencer & Media List Building",
                            "Academic & Technical Research",
                            "Data Verification & Cross-Referencing",
                            "Lead Generation Research",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-5 bg-white rounded-xl shadow hover:scale-[1.02] transition-transform duration-300"
                            >
                                <p className="text-gray-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="text-center">
                    <h3 className="text-3xl font-semibold mb-6">
                        🤝 Benefits of Outsourcing Internet Research
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {[
                            { icon: "✅", text: "Saves Time – free your team from manual digging" },
                            { icon: "💰", text: "Reduces Costs – avoid hiring full-time analysts" },
                            { icon: "📈", text: "Improves Quality – verified, structured data from experts" },
                        ].map((b, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300"
                            >
                                <p className="text-lg">
                                    {b.icon} {b.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ SECTION */}
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

                {/* CTA SECTION */}
                <section className="text-center mt-16">
                    <h3 className="text-3xl font-bold mb-4">
                        🚀 Get a Custom Internet Research Plan
                    </h3>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                        Every business is unique. Let’s build a tailored Internet Research plan that saves
                        time, improves accuracy, and drives measurable growth.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                        className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all"
                    >
                        Contact Us Today
                    </a>
                </section>
            </article>
        </div>
    );
}
