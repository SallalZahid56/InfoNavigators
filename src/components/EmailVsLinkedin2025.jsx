"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";

export default function EmailVsLinkedin2025() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

    const faqs = [
        {
            q: "Is Email Lead Generation Still Effective in 2025?",
            a: "Absolutely. With accurate data and the best email list builder tools, email remains one of the highest-ROI channels for B2B companies.",
        },
        {
            q: "How Much Does LinkedIn Lead Generation Cost?",
            a: "It depends on your target audience, ad spend, and whether you use managed or white-label LinkedIn lead generation services.",
        },
        {
            q: "What’s the Best Way to Build an Email List?",
            a: "Offer value — like ebooks, webinars, or free trials — and collect emails via optimized email list building pop-ups.",
        },
        {
            q: "Are Done-for-You LinkedIn Lead Generation Services Worth It?",
            a: "Yes. If you lack time or in-house resources, done-for-you LinkedIn lead generation services from experts like InfoNavigators deliver faster, qualified leads.",
        },
        {
            q: "Can Email and LinkedIn Work Together?",
            a: "Definitely. Use LinkedIn to warm up leads, then follow up with email campaigns for conversions — it’s a proven multi-channel strategy.",
        },
    ];

    return (
        <article className="bg-white text-gray-800 leading-relaxed">
            {/* ✅ HERO SECTION */}
            <section className="relative h-[90vh] flex items-center justify-center text-center text-white mt-16 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/email-vs-linkedinn.png')" }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="max-w-4xl px-6 z-10 relative">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Email vs LinkedIn Lead Generation:
                        <span className="text-brandOrange block">
                            Which Converts Better in 2025?
                        </span>
                    </h1>
                    <p className="text-lg text-gray-200">
                        A data-driven comparison between email and LinkedIn lead generation
                        — revealing which delivers better results in 2025.
                    </p>
                </div>
            </section>

            {/* ✅ INTRODUCTION */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold mb-6">
                    The Modern B2B Lead Generation Dilemma
                </h2>
                <p className="mb-4">
                    In today’s fast-evolving digital world, every business is searching for smarter ways to reach qualified prospects. Among all available methods, two continue to dominate the B2B landscape — Email and LinkedIn Lead Generation.
                </p>
                <p>
                    Both are powerful tools, yet they cater to different goals and audiences. Some businesses prefer the scalability and affordability of <Link
                        href="/services-page/email-list-building"
                        className="text-blue-600 hover:underline font-semibold"
                    >
                        B2B EmailList Building
                    </Link>
                    , while others lean toward done-for-you LinkedIn lead generation solutions that deliver hyper-targeted results.
                </p>
                <p>
                    But which channel actually converts better in 2025? Let’s dive into a detailed comparison, backed by real-world insights, conversion data, and best practices from InfoNavigators — a trusted name among LinkedIn lead generation companies and B2B contact list building experts.
                </p>
            </section>

            {/* ✅ SECTION 1: EMAIL LEAD GENERATION */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold mb-6">
                            What is Email Lead Generation?
                        </h2>
                        <p className="mb-4">
                            Email lead generation refers to the process of collecting and nurturing prospects through personalized email outreach campaigns. It all starts with how to build a B2B email list — the foundation of every successful email campaign.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "CB2B Email List Building: Gather contact information of your target audience using verified data sources or email list building pop-ups on your website.",
                                "Segmentation: Organize leads by industry, role, or company size",
                                "Personalized Outreach: Send customized messages addressing your audience’s specific pain points.",
                                "Lead Nurturing: Use follow-up sequences or newsletters to convert leads into clients.",
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-4">
                            At InfoNavigators, our <Link
                                href="/services-page/email-list-building"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                B2B EmailList Building
                            </Link> and <Link
                                href="/services-page/data-verification"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Data Verification
                            </Link> services ensure your campaigns reach the right inboxes, reducing bounce rates and increasing ROI.
                        </p>
                    </div>
                    <div className="relative h-80">
                        <Image
                            src="/email-vs-linkedinn.png"
                            alt="Email lead generation process"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* ✅ SECTION 2: LINKEDIN LEAD GENERATION */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div className="relative h-80 md:order-2">
                        <Image
                            src="/b2b-email.png"
                            alt="LinkedIn lead generation"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-6">
                            The Benefits of Building an Email List
                        </h2>
                        <p className="mb-4">
                            If you’re still wondering why businesses invest in email list building, consider this:
                            Email provides direct access to decision-makers, measurable results, and complete control over communication.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Ownership of Your Audience: Unlike social platforms, your email list is yours.",
                                "High ROI: According to 2025 reports, every $1 spent on email marketing returns up to $36.",
                                "Personalization: Segmented campaigns generate 6x higher conversion rates.",
                                "Automation: Tools like Mailchimp, Lemlist, and HubSpot simplify drip campaigns.",
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ✅ SECTION 1: Different Types of Email Lists */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-semibold mb-6 text-brandOrange"
                >
                    Different Types of Email Lists for Businesses
                </motion.h2>
                <p className="mb-6 text-gray-700">
                    Every niche has its unique audience. Here’s how you can adapt
                    list-building tactics to fit your goals:
                </p>

                <ul className="space-y-4">
                    {[
                        {
                            title: "Pre-Launch Email Lists",
                            desc: `If you’re about to release a new SaaS product or service, knowing how to build a pre-launch email list ensures you have an audience ready before launch day.`,
                        },
                        {
                            title: "Niche-Specific Email Lists",
                            desc: `For example, if you run a health or lifestyle company, you can learn how to build an email list for a wellness business to connect with health-conscious consumers.`,
                        },
                        {
                            title: "Business-to-Business (B2B) Lists",
                            desc: `How to build a B2B email list focuses on identifying professionals, decision-makers, and buyers within targeted industries.`,
                        },
                        {
                            title: "Using Pop-Ups for Growth",
                            desc: `Strategic email list building pop-ups on landing pages can increase your subscriber rate by up to 35%.`,
                        },
                        {
                            title: "Finding the Best Way to Build an Email List",
                            desc: `Whether through content upgrades, webinars, or data collection, the best way to build email list strategies always focus on value exchange — offer something useful, and prospects will subscribe.`,
                        },
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-brandOrange mt-1 w-5 h-5 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-900">{item.title}:</h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ✅ SECTION 2: What is LinkedIn Lead Generation */}
            <section className="max-w-5xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl shadow-sm">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-semibold mb-6 text-brandOrange"
                >
                    What is LinkedIn Lead Generation?
                </motion.h2>
                <p className="mb-4 text-gray-700">
                    LinkedIn Lead Generation involves using LinkedIn’s massive
                    professional network to find and engage with qualified prospects. In
                    2025,{" "}
                    <Link
                        href="/services/linkedin-lead-generation"
                        className="text-brandOrange hover:underline font-medium"
                    >
                        done-for-you LinkedIn lead generation services
                    </Link>{" "}
                    are becoming extremely popular among B2B brands that prefer
                    outsourcing rather than managing outreach themselves.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                    Why Businesses Choose LinkedIn Lead Generation Companies
                </h3>
                <ul className="space-y-3 mb-6">
                    {[
                        "Access verified professional data.",
                        "Build relationships with high-value decision-makers.",
                        "Create consistent engagement using content and personalized outreach.",
                        "Track ROI accurately.",
                    ].map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
                            <span className="text-gray-700">{point}</span>
                        </li>
                    ))}
                </ul>

                <p className="text-gray-700">
                    The LinkedIn lead generation cost varies depending on factors like
                    audience size, tools used, and whether you opt for white-label
                    services (ideal for agencies that resell lead gen to their clients).
                </p>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    How LinkedIn Lead Generation Works
                </h3>
                <ul className="space-y-3">
                    {[
                        "Profile Optimization: Showcase expertise, results, and testimonials.",
                        "Audience Targeting: Use advanced filters via Sales Navigator.",
                        "Connection Requests: Send personalized invites based on mutual interests.",
                        "Content Sharing: Build authority through regular posts and engagement.",
                        "Lead Gen Ads: Use LinkedIn’s built-in Lead Gen Forms for seamless data capture.",
                    ].map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
                            <span className="text-gray-700">{point}</span>
                        </li>
                    ))}
                </ul>

                <p className="mt-6 text-gray-700">
                    When done correctly, LinkedIn lead generation builds trust faster than
                    email because the platform fosters professional transparency.
                </p>
            </section>

            {/* ✅ SECTION 3: White-Label LinkedIn Lead Generation */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* ✅ Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-brandOrange">
                        White-Label LinkedIn Lead Generation for Agencies
                    </h2>

                    <p className="text-gray-700 mb-4">
                        If you’re an agency or freelancer offering marketing services,
                        white-label LinkedIn lead generation can be a lucrative add-on. With
                        white-label services from{" "}
                        <Link
                            href="/"
                            className="text-brandOrange hover:underline font-medium"
                        >
                            InfoNavigators
                        </Link>
                        , you can:
                    </p>

                    <ul className="space-y-3">
                        {[
                            "Offer branded LinkedIn campaigns to your clients.",
                            "Access pre-qualified, verified B2B data.",
                            "Focus on results without building an in-house team.",
                        ].map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
                                <span className="text-gray-700">{point}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-gray-700">
                        It’s a cost-effective way to scale your business and deliver measurable
                        results under your own brand name.
                    </p>
                </motion.div>

                {/* ✅ Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
                >
                    <Image
                        src="/white-label.png"
                        alt="White Label LinkedIn Lead Generation"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition duration-300" />
                </motion.div>
            </section>

            {/* ✅ SECTION 4: Future of Lead Generation */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center bg-gray-50 rounded-2xl shadow-sm overflow-hidden">
                {/* ✅ Left Side: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md"
                >
                    <Image
                        src="/future-lead.png"
                        alt="AI and Automation in Lead Generation"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition duration-300" />
                </motion.div>

                {/* ✅ Right Side: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-brandOrange">
                        The Future of Lead Generation: AI and Automation
                    </h2>

                    <p className="mb-4 text-gray-700">
                        As 2025 progresses, both email and LinkedIn lead generation are being
                        reshaped by AI and predictive analytics.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                        Emerging Trends:
                    </h3>
                    <ul className="space-y-3">
                        {[
                            "AI-Driven Personalization: Automated tools write hyper-personalized messages using behavior data.",
                            "Predictive Lead Scoring: Helps identify high-intent leads automatically.",
                            "Data Verification & Enrichment: Ensures your B2B email list building remains clean and accurate.",
                            "Omnichannel Workflows: Combine email, LinkedIn, and other platforms into a single outreach system.",
                        ].map((trend, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
                                <span className="text-gray-700">{trend}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-gray-700">
                        At{" "}
                        <Link href="/" className="text-brandOrange hover:underline font-medium">
                            InfoNavigators
                        </Link>
                        , we integrate AI-driven research with verified data to help clients reduce
                        lead costs and boost conversions — whether via done-for-you LinkedIn lead
                        generation or large-scale email campaigns.
                    </p>
                </motion.div>
            </section>

            {/* ✅ SECTION 3: COMPARISON TABLE */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-brandOrange">
                        Email vs LinkedIn Lead Generation: 2025 Comparison
                    </h2>
                    <table className="w-full border border-gray-300 text-left text-sm md:text-base">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3">Criteria</th>
                                <th className="p-3">Email Lead Generation</th>
                                <th className="p-3">LinkedIn Lead Generation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3">Reach</td>
                                <td className="p-3">Unlimited (any valid email)</td>
                                <td className="p-3">Limited to LinkedIn users</td>
                            </tr>
                            <tr>
                                <td className="p-3">Conversion Rate (2025 Avg.)</td>
                                <td className="p-3">3–5%</td>
                                <td className="p-3">6–9%</td>
                            </tr>
                            <tr>
                                <td className="p-3">Lead Quality</td>
                                <td className="p-3">Good</td>
                                <td className="p-3">Excellent</td>
                            </tr>
                            <tr>
                                <td className="p-3">Cost per Lead</td>
                                <td className="p-3">Low</td>
                                <td className="p-3">Moderate–High</td>
                            </tr>
                            <tr>
                                <td className="p-3">Trust Factor</td>
                                <td className="p-3">Moderate</td>
                                <td className="p-3">High</td>
                            </tr>
                            <tr>
                                <td className="p-3">Automation</td>
                                <td className="p-3">Strong (email workflows)</td>
                                <td className="p-3">Moderate</td>
                            </tr>
                            <tr>
                                <td className="p-3">Best For</td>
                                <td className="p-3">Fast, scalable outreach</td>
                                <td className="p-3">Relationship-based selling</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ✅ SECTION 4: HYBRID STRATEGY */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-semibold mb-6 text-brandOrange"
                >
                    Combining Email and LinkedIn for Maximum ROI
                </motion.h2>
                <p className="mb-4">
                    Why choose between the two when you can integrate both?
                    The best way to build an email list and generate qualified leads is to merge LinkedIn engagement with email nurturing.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Start on LinkedIn: Connect and engage with your ideal clients.</li>
                    <li>Follow Up via Email: Move the conversation to a more personal space.</li>
                    <li>Nurture Through Automation: Use email sequences to provide case studies, offers, or webinars.</li>
                </ul>
                <p className="mt-4">
                    This hybrid model reduces{" "}
                    <Link
                        href="/services-page/linkedin-list"
                        className="text-blue-600 hover:underline font-semibold"
                    >
                        LinkedIn lead generation cost
                    </Link>{" "}
                    while improving overall conversion rates.
                </p>
            </section>

            {/* ✅ SECTION 5: FAQ */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-brandOrange">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => toggleFAQ(i)}
                                    className="flex justify-between w-full p-4 text-left font-medium text-lg"
                                >
                                    {faq.q}
                                    <ChevronDown
                                        className={`transition-transform ${openFAQ === i ? "rotate-180 text-brandOrange" : ""
                                            }`}
                                    />
                                </button>
                                {openFAQ === i && (
                                    <div className="p-4 pt-0 text-gray-700">{faq.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ CONCLUSION */}
            <section className="bg-white py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-brandOrange">
                        Conclusion: The Smartest Strategy for 2025
                    </h2>
                    <p className="mb-4">
                        <strong>Email Lead Generation</strong> wins for scalability and cost-efficiency,
                        while <strong>LinkedIn Lead Generation</strong> excels in building trust and relationships.
                    </p>
                    <p className="mb-6">
                        Combining both channels ensures consistent, high-quality lead flow in 2025.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-brandOrange text-white px-6 py-3 rounded-xl font-semibold hover:bg-brandOrange/90 transition-all"
                    >
                        🚀 Contact InfoNavigators to Scale Your Leads
                    </Link>
                </div>
            </section>
        </article>
    );
}
