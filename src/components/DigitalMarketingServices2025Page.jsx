"use client";

import { motion, AnimatePresence } from "framer-motion"; 
import Image from "next/image";
import { useState } from "react"; // ✅ Import useState
import { Plus, Minus } from "lucide-react"; // ✅ Add icons

export default function DigitalMarketingServices2025Page() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What are the top digital marketing services trends for 2025?",
            answer:
                "AI-driven content creation, personalized campaigns, automation, and performance-based pricing are leading the trends.",
        },
        {
            question: "How is AI changing marketing agencies?",
            answer:
                "AI helps agencies automate workflows, analyze data faster, and create personalized experiences that convert.",
        },
        {
            question: "What is the freelance + AI model?",
            answer:
                "It’s a hybrid model where agencies combine AI tools with freelance experts to cut costs and scale efficiently.",
        },
        {
            question: "Why is value-based pricing important?",
            answer:
                "Because it ties agency revenue directly to client success — creating stronger partnerships and measurable ROI.",
        },
        {
            question: "How can Pakistani and South Asian agencies compete globally?",
            answer:
                "By adopting AI, offering cost-efficient models, and focusing on high-quality delivery through skilled teams and technology.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="overflow-hidden text-gray-800">
            {/* ✅ HERO SECTION */}
            <section
                className="relative h-[90vh] flex items-center justify-center text-center text-white"
                aria-label="Hero - Digital Marketing Services 2025"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/cover-img.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-6 max-w-4xl"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        The Future of Digital Marketing Services in 2025
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        How AI, Freelancers, and New Agency Models Are Changing the Game
                    </p>
                </motion.div>
            </section>

            {/* ✅ INTRODUCTION SECTION (Image Right, Text Left) */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        Introduction: What Digital Marketing Agencies Need to Do in 2025
                    </h2>
                    <p>
                        The digital marketing landscape in 2025 is evolving faster than ever. Traditional marketing agencies that once relied on
                        manual strategies, static campaigns, and human-only execution are now being transformed by AI-powered marketing services,
                        automation, and data-driven personalization.
                    </p>
                    <p>
                        For businesses and agencies in Pakistan and South Asia, this shift brings both opportunity and disruption. Whether you’re a
                        freelancer, startup agency, or established marketing firm, understanding how AI, automation, and new agency models reshape
                        client expectations will determine who thrives — and who falls behind.
                    </p>
                    <p>
                        In this article, we’ll explore the latest digital marketing services trends, the impact of AI on agencies, and how marketing
                        service business models are changing globally — especially in South Asia. We’ll also discuss value-based pricing, cost
                        restructuring, and the rise of freelance + AI models that are redefining agency success in 2025.
                    </p>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/hero-img-blog.jpg"
                        alt="Digital Marketing 2025 Introduction"
                        width={800}
                        height={600}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </motion.div>
            </section>

            {/* ✅ MAJOR TRENDS SECTION (Updated Content) */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        The Biggest Digital Marketing Services Trends of 2025
                    </h2>
                    <p>
                        Every year brings new buzzwords, but <strong>2025 is about efficiency, personalization, and automation.</strong>
                        Here are the top digital marketing services trends reshaping how agencies work today:
                    </p>

                    {/* a. AI-Driven Content Creation and SEO */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                            a. AI-Driven Content Creation and SEO
                        </h3>
                        <p className="text-gray-700 mt-2">
                            AI tools like <strong>ChatGPT</strong>, <strong>Jasper</strong>, and <strong>SurferSEO</strong> are now core parts of every marketing
                            agency’s workflow. Agencies use them for:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                            <li>Content research and keyword clustering</li>
                            <li>AI-assisted SEO writing and topic optimization</li>
                            <li>Predictive analytics for ranking opportunities</li>
                        </ul>
                        <p className="mt-2 text-gray-700">
                            These tools don’t replace creativity — they enhance efficiency and scale output without sacrificing quality.
                        </p>
                    </div>

                    {/* b. Personalized Marketing Campaigns at Scale */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6">
                            b. Personalized Marketing Campaigns at Scale
                        </h3>
                        <p className="text-gray-700 mt-2">
                            Consumers expect messages tailored to their preferences, behavior, and intent. Agencies now use
                            <strong> AI personalization engines </strong> to:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                            <li>Segment audiences dynamically</li>
                            <li>Automate ad messaging and product recommendations</li>
                            <li>Optimize conversions using behavioral data</li>
                        </ul>
                        <p className="mt-2 text-gray-700">
                            Personalized marketing campaigns at scale are no longer optional — they’re the new standard for brands competing in
                            crowded digital spaces.
                        </p>
                    </div>

                    {/* c. Performance-Based and Value-Based Pricing */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6">
                            c. Performance-Based and Value-Based Pricing
                        </h3>
                        <p className="text-gray-700 mt-2">
                            Clients increasingly demand transparency and measurable ROI. Instead of hourly rates or flat retainers, agencies are
                            moving toward <strong>value-based pricing in digital marketing</strong>, charging based on results such as leads,
                            conversions, or revenue growth.
                        </p>
                    </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/trends.jpg"
                        alt="Digital Marketing Trends 2025"
                        width={800}
                        height={600}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </motion.div>
            </section>

            {/* ✅ AI IN AGENCIES SECTION (Updated Content) */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-2 md:order-1"
                >
                    <Image
                        src="/rise.jpg"
                        alt="AI in Digital Marketing"
                        width={800}
                        height={600}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-1 md:order-2 space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        The Rise of AI in Digital Marketing Agencies
                    </h2>

                    <p className="text-gray-700">
                        Artificial intelligence has become the backbone of modern marketing agencies. From automating data analysis to generating
                        insights, AI allows agencies to deliver better results faster.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        AI in Digital Marketing Agency Operations
                    </h3>

                    <p className="text-gray-700">
                        Leading agencies now integrate AI into:
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Customer data platforms (CDPs) for predictive targeting</li>
                        <li>Chatbots and virtual assistants for 24/7 customer engagement</li>
                        <li>Programmatic advertising for smarter bidding and real-time ad placement</li>
                        <li>Email and content automation using NLP and machine learning</li>
                    </ul>

                    <p className="text-gray-700">
                        These innovations enable <strong>AI-powered marketing services</strong> that are precise, efficient, and cost-effective.
                    </p>
                </motion.div>
            </section>

            {/* ✅ MARKETING SERVICES BUSINESS MODEL CHANGE */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* Text Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        Marketing Services Business Model Change
                    </h2>
                    <p>
                        The traditional agency model — large offices, full-time teams, and fixed retainers — is being challenged by remote work, AI tools, and gig-based collaboration.
                    </p>

                    <h3 className="text-xl font-semibold">New Agency Model: Freelance + AI</h3>
                    <p>
                        One of the biggest disruptors in 2025 is the new agency model — <strong>freelance + AI</strong>. Instead of hiring large in-house teams, agencies are:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Building small, agile teams powered by freelancers</li>
                        <li>Using AI for project management, data analysis, and content automation</li>
                        <li>Reducing overhead while scaling output</li>
                    </ul>
                    <p>
                        This hybrid model offers flexibility, scalability, and affordability — ideal for startups and agencies across Pakistan and South Asia, where freelance talent is abundant.
                    </p>
                </motion.div>

                {/* Image Right */}
                <Image
                    src="/marketing.jpg"
                    alt="Freelance and AI Agency Model"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover"
                />
            </section>

            {/* ✅ HOW AGENCIES ADAPT TO AI */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* Image Left */}
                <Image
                    src="/adapt-ai.jpeg"
                    alt="Agencies Adapting to AI"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover order-2 md:order-1"
                />

                {/* Text Right */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5 order-1 md:order-2"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">How Agencies Adapt to AI</h2>
                    <p>
                        Adapting to AI requires mindset change. Successful agencies:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Invest in training teams to work with AI tools</li>
                        <li>Develop AI-integrated workflows</li>
                        <li>Offer consulting services on AI adoption to clients</li>
                    </ul>
                    <p>
                        Instead of fearing automation, smart agencies use it to expand service quality and deliver faster turnarounds.
                    </p>
                </motion.div>
            </section>

            {/* ✅ IMPACT OF AI IN PAKISTAN */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        The Impact of AI on Digital Marketing Services in Pakistan
                    </h2>
                    <p>
                        The impact of AI on digital marketing services in Pakistan has been profound. Local agencies are transitioning from manual campaign management to automated, data-driven systems.
                    </p>
                    <h3 className="text-xl font-semibold">Key Areas of Transformation</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Lead generation automation: AI tools identify high-intent prospects faster</li>
                        <li>Content localization: Multilingual AI systems help reach Urdu and regional audiences</li>
                        <li>Performance tracking: AI dashboards optimize ad spend across Google, Meta, and TikTok</li>
                    </ul>
                    <p>
                        As businesses in Pakistan and South Asia digitize, they increasingly rely on agency service businesses offering AI-based tools and analytics to remain competitive.
                    </p>
                </motion.div>

                <Image
                    src="/ai-pakistan.jpg"
                    alt="AI in Pakistan Digital Marketing"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover"
                />
            </section>

            {/* ✅ MARTECH INVESTMENT */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <Image
                    src="/martech.jpg"
                    alt="Marketing Technology Investment"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover order-2 md:order-1"
                />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-1 md:order-2 space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        Marketing Technology Investment: The Smartest Move for 2025
                    </h2>
                    <p>
                        Agencies that invest in marketing technology (MarTech) today will dominate tomorrow.
                    </p>
                    <h3 className="text-xl font-semibold">Top MarTech Areas for Agencies</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>CRM and automation tools (HubSpot, ActiveCampaign, Zoho)</li>
                        <li>AI content generators (ChatGPT, Copy.ai, Writesonic)</li>
                        <li>Analytics platforms (Google Analytics 4, Mixpanel, Supermetrics)</li>
                        <li>Social media automation tools (Buffer, Sprout Social, Metricool)</li>
                    </ul>
                    <p>
                        Strategic marketing technology investment not only boosts efficiency but also enables better decision-making through actionable insights.
                    </p>
                </motion.div>
            </section>

            {/* ✅ COST RESTRUCTURING */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        Restructure Cost Structure for Digital Marketing Services
                    </h2>
                    <p>
                        Agencies are under constant pressure to deliver more for less. The solution? Restructure cost structure through smart automation, outsourcing, and scalable pricing models.
                    </p>
                    <h3 className="text-xl font-semibold">How to Optimize Costs Without Cutting Quality</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Automate repetitive tasks: Reporting, keyword research, and A/B testing</li>
                        <li>Outsource specialized skills: Copywriting, data analysis, or creative design</li>
                        <li>Leverage AI tools for customer segmentation and predictive analytics</li>
                        <li>Adopt a hybrid model blending full-time experts with on-demand freelancers</li>
                    </ul>
                    <p>
                        This approach allows agencies to serve more clients while maintaining profitability.
                    </p>
                </motion.div>

                <Image
                    src="/restructure.jpg"
                    alt="Cost Optimization in Digital Marketing"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover"
                />
            </section>

            {/* ✅ VALUE-BASED PRICING */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <Image
                    src="/value-based-pricing.jpg"
                    alt="Value-Based Pricing in Digital Marketing"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover order-2 md:order-1"
                />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-1 md:order-2 space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        Value-Based Pricing in Digital Marketing
                    </h2>
                    <p>
                        As clients become more ROI-focused, value-based pricing is becoming mainstream. Instead of charging by effort, agencies charge for outcomes — clicks, conversions, or revenue impact.
                    </p>
                    <h3 className="text-xl font-semibold">Benefits of Value-Based Pricing</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Builds trust through transparency</li>
                        <li>Aligns agency success with client success</li>
                        <li>Encourages innovation and performance-driven culture</li>
                    </ul>
                    <p>
                        For example, an agency might charge 10% of sales generated from a campaign rather than a flat monthly fee. This results-first approach attracts long-term clients who see measurable business growth.
                    </p>
                </motion.div>
            </section>

            {/* ✅ AGENCY BUSINESS IN PAKISTAN */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        Agency Service Business in Pakistan and South Asia: The New Growth Hub
                    </h2>
                    <p>
                        The agency service business in Pakistan and South Asia is expanding rapidly due to:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Growing global demand for affordable, high-quality marketing services</li>
                        <li>A rising number of skilled freelancers and digital nomads</li>
                        <li>Lower operational costs and strong English communication skills</li>
                    </ul>
                    <p>
                        Many Western companies now outsource to South Asian agencies for AI-powered marketing services, SEO, and data-driven campaign management.
                    </p>
                    <p>
                        Platforms like Upwork, Fiverr, and Clutch are filled with agencies offering services powered by freelance + AI models, proving that this region is a global growth hub for marketing innovation.
                    </p>
                </motion.div>

                <Image
                    src="/south-asia.jpg"
                    alt="Pakistan and South Asia Agency Growth"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover"
                />
            </section>

            {/* ✅ FUTURE OF AGENCY WORK */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <Image
                    src="/future-agency.jpg"
                    alt="Future of Agency Work"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg object-cover order-2 md:order-1"
                />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-1 md:order-2 space-y-5"
                >
                    <h2 className="text-3xl font-bold text-brandOrange">
                        The Future of Agency Work: Collaboration Between Humans and AI
                    </h2>
                    <p>
                        The future isn’t about AI replacing humans — it’s about AI empowering marketers. The next-generation agency will combine:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Human creativity</li>
                        <li>AI-driven analytics</li>
                        <li>Freelance flexibility</li>
                    </ul>
                    <p>
                        This synergy allows agencies to deliver personalized marketing campaigns at scale while maintaining authenticity and emotional connection — the essence of great marketing.
                    </p>
                </motion.div>
            </section>



            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-10 text-brandOrange">
                    Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left px-5 py-4 focus:outline-none"
                            >
                                <span className="font-semibold text-lg text-gray-800">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-brandOrange" />
                                ) : (
                                    <Plus className="w-5 h-5 text-brandOrange" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-5 pb-4 text-gray-700"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
