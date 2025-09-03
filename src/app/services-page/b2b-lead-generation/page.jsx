"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import { CheckCircle, Mail, Users, Sparkles, Globe2, Rocket, ChevronDown, ShieldCheck, Target, Database, Download, PhoneCall, Building2, LineChart, Zap, Send } from "lucide-react";


// --- Small UI helpers ---
const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`relative w-full py-16 md:py-24 ${className}`}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
);

const Pill = ({ children }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm md:text-base font-medium backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
);

const Card = ({ children, className = "" }) => (
    <div
        className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${className}`}
    >
        {children}
    </div>
);

const Feature = ({ icon: Icon, title, children }) => (
    <Card className="h-full">
        <div className="flex items-start gap-4">
            {/* Icon with brandOrange background */}
            <div className="rounded-xl bg-brandOrange p-3 text-white shadow ring-4 ring-orange-100/50">
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <h4 className="text-lg font-semibold font-heading text-black">
                    {title}
                </h4>
                <p className="mt-2 text-black font-sans">{children}</p>
            </div>
        </div>
    </Card>
);

const FAQ = ({ q, a }) => (
    <details className="group rounded-xl border border-slate-200 bg-white p-5 transition-all open:shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-black font-heading">
            <span>{q}</span>
            <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <p className="mt-3 text-black font-sans">{a}</p>
    </details>
);

// --- Main Page ---
export default function LeadGenerationPage() {


    <Head>
        <title>TikTok Influencer Research Services | Verified Creator Discovery</title>
        <meta
            name="description"
            content="Expert B2B lead generation services with 15+ years' experience. From B2B marketing to SaaS SEO, we deliver targeted B2B leads that drive growth."
        />
        <meta
            name="keywords"
            content="b2b lead generation services, b2b email marketing lists, buy b2b email lists, b2b saas lead generation, email marketing b2b lead generation, apollo b2b leads, b2b business marketing, targeted b2b lead generation, lead generation for b2b business, b2b marketing, Info Navigators"
        />
    </Head>
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* HERO */}
            <Section id="hero" className="pt-20 sm:pt-16 pb-12 md:pt-24 md:pb-16 bg-white text-black">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <Pill className="text-xs sm:text-sm">B2B, Email Lists, Influencer Research & Cold Outreach – Done Right</Pill>

                        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
                            <span className="text-black">B2B Lead </span>
                            <span className="text-brandOrange">Generation Services</span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-black font-sans leading-relaxed">
                            With 15 years of experience and 1,000+ satisfied clients, Info Navigators is your trusted partner for accurate, targeted B2B leads that help small businesses connect with their ideal prospects. We don’t just gather random contacts — we deliver category-specific, verified leads so you can focus on outreach, marketing, and closing sales without wasting time searching.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href="mailto:contact@infonavigators.com"
                                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-brandOrange px-6 py-3 font-heading font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black text-sm sm:text-base"
                            >
                                <Send className="h-5 w-5" /> Get Free Sample Leads
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-heading font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100 text-sm sm:text-base"
                            >
                                <PhoneCall className="h-5 w-5" /> Book a Call
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="mx-auto mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-xl sm:max-w-5xl font-heading">
                        {[
                            { k: "+15", v: "Years Experience" },
                            { k: "1,000+", v: "Clients Served" },
                            { k: "98%", v: "Data Accuracy" },
                            { k: "24-72h", v: "Fast Delivery" },
                        ].map((s) => (
                            <Card
                                key={s.v}
                                className="text-center bg-white text-black border border-gray-200 p-4 rounded-lg shadow-sm"
                            >
                                <div className="text-xl sm:text-2xl font-extrabold">{s.k}</div>
                                <div className="mt-1 text-xs sm:text-sm text-black">{s.v}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* WHAT WE DO */}
            <Section id="what-we-do" className="py-16">
                <div className="grid items-start gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="px-4 sm:px-6 md:px-0">
                        <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold font-heading text-black">
                            What We Do
                        </h2>

                        <p className="mt-4 text-base sm:text-lg text-black text-center md:text-left font-sans leading-relaxed">
                            Our role is simple but powerful: find the right leads for your business needs. Whether you’re looking for
                            <span className="text-brandOrange font-semibold"> local customers</span>,
                            <span className="text-brandOrange font-semibold"> industry-specific decision-makers</span>,
                            or
                            <span className="text-brandOrange font-semibold"> niche market opportunities</span>,
                            we provide clean, ready-to-use lead lists tailored to your goals.
                        </p>

                        {/* Features Grid - full width on tablets */}
                        <div className="mt-6 grid grid-cols-1 gap-4">
                            <Feature icon={Target} title="Targeted Lists">
                                <p className="break-words">Category-specific, verified prospects tailored to your ICP.</p>
                            </Feature>
                            <Feature icon={Database} title="Clean Data">
                                <p className="break-words">Accurate enrichment, validation, and deduping.</p>
                            </Feature>
                            <Feature icon={ShieldCheck} title="Verified Contacts">
                                <p className="break-words">Lower bounce, higher response.</p>
                            </Feature>
                            <Feature icon={Rocket} title="Faster Outreach">
                                <p className="break-words">Spend less time searching, more time selling.</p>
                            </Feature>
                        </div>
                    </div>

                    {/* Right Card */}
                    <Card className="bg-white text-black font-heading mt-6 md:mt-6 lg:mt-0">
                        <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-brandOrange/20 via-brandOrange/10 to-transparent p-6">
                            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 text-[10px] sm:text-xs md:text-xs lg:text-sm">
                                {Array.from({ length: 25 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center justify-between rounded-lg border border-gray-200 bg-white px-2 py-2 text-center text-black shadow-sm break-words w-full"
                                    >
                                        <span className="truncate">Lead #{i + 1}</span>
                                        <Mail className="h-3.5 w-3.5 text-brandOrange shrink-0 mt-1" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* ABOUT */}
            <Section id="about" className="bg-white">
                <h2 className="text-center text-3xl md:text-4xl font-bold font-heading text-black mb-10">
                    About Info Navigators Lead Generation
                </h2>

                <div className="grid grid-cols-1 gap-10">
                    {/* Left Column */}
                    <div className="px-4 sm:px-6 md:px-0">
                        <p className="text-black text-base sm:text-lg leading-relaxed font-sans">
                            As a trusted B2B lead generation company, we’ve helped businesses across industries achieve predictable growth by delivering targeted leads that match their exact customer profile.
                        </p>

                        <ul className="mt-6 space-y-3 text-black">
                            {["Deep market research", "Advanced B2B platforms", "Proven outreach strategies"].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle className="mt-0.5 h-5 w-5 text-brandOrange" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-black text-base sm:text-lg">
                            The result? Your sales team spends less time searching for prospects and more time engaging with qualified opportunities. From startups to enterprises, we deliver the data, strategy, and expertise to keep your sales funnel full.
                        </p>
                    </div>

                    {/* Right Column: Card with Features */}
                    <Card className="bg-white text-black shadow-md px-4 sm:px-6 md:px-0 mt-6">
                        <div className="grid grid-cols-1 gap-4">
                            <Feature icon={LineChart} title="Predictable Growth">Steady pipeline you can forecast.</Feature>
                            <Feature icon={Users} title="ICP Precision">Match your exact buyer profile.</Feature>
                            <Feature icon={Zap} title="Speed & Scale">From small pilots to enterprise volumes.</Feature>
                            <Feature icon={Building2} title="Across Industries">Tech, Manufacturing, Energy & more.</Feature>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* WHY LEAD GEN */}
            <Section id="why">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading">
                        Why Lead Generation is Vital for Business Growth
                    </h2>
                    <p className="mt-4 text-black">
                        Without a steady influx of marketing leads, even the most skilled sales team can fall short of targets. Lead generation acts as the fuel for your sales pipeline attracting the right audience, nurturing them, and moving them toward a buying decision to safeguard revenue and create sustainable growth.
                    </p>
                </div>
            </Section>

            {/* TOOLS */}
            <Section id="tools" className="bg-white py-16">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-black font-heading">
                    Tools & Technology We Use
                </h2>

                <p className="mt-4 text-center max-w-3xl mx-auto text-black">
                    We use advanced industry-leading tools to ensure your campaigns are precise, efficient, and scalable. Our stack powers enrichment, verification, and optimization.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { t: "Apollo.io", d: "Prospect data scraping, enrichment, intent targeting" },
                        { t: "Contact-Out", d: "Prospecting companion for contact details" },
                        { t: "Clay", d: "Data orchestration & enrichment workflows" },
                        { t: "Hunter.io", d: "Professional email finding & verification" },
                        { t: "LinkedIn Sales Navigator", d: "Advanced filtering for B2B contacts" },
                        { t: "Instapage", d: "Conversion-focused landing pages" },
                        { t: "Mailchimp", d: "Email automation & segmentation" },
                        { t: "Facebook Ads Manager", d: "Targeted B2C audience outreach" },
                    ].map((tool) => (
                        <Card
                            key={tool.t}
                            className="relative overflow-hidden bg-white text-black shadow-md border border-slate-200 rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brandOrange/20" />
                            <h4 className="text-lg font-semibold">{tool.t}</h4>
                            <p className="mt-2 text-sm text-black">{tool.d}</p>
                        </Card>
                    ))}
                </div>

                <p className="mt-8 text-center text-black max-w-3xl mx-auto">
                    By combining these tools, we collect, verify, and organize lead data for maximum campaign success.
                </p>
            </Section>

            {/* WHY US */}
            <Section id="why-us">
                <h2 className="text-2xl md:text-3xl font-bold text-center font-heading">
                    Why Our B2B Lead Generation Service Stands Out
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "15+ Years in B2B Market Research",
                        "Category-Specific Targeting – Local, national, or international",
                        "Verified & Clean Contact Information",
                        "Flexible Delivery Formats – CSV, Excel, Google Sheets",
                        "Trusted by SMEs Worldwide",
                    ].map((txt) => (
                        <Card key={txt}>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-brandOrange" /> <p>{txt}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* LEAD TYPES */}
            <Section id="leads" className="bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-center font-heading">
                    Types of Leads We Provide
                </h2>
                <p className="mt-3 text-lg sm:text-xl text-black text-center font-sans">
                    We source leads for almost every B2B platform or sales requirement.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { t: "B2B Manufacturing Marketing Leads", d: "Connect with manufacturers, suppliers, and distributors worldwide." },
                        { t: "B2B Email Marketing Lists", d: "Verified, up-to-date email lists to reduce bounce rates." },
                        { t: "B2B SaaS Lead Generation", d: "Reach CTOs, PMs, and procurement heads in software companies." },
                        { t: "B2B Energy Leads", d: "Connect with energy suppliers, distributors, and buyers." },
                        { t: "B2B Wholesale Websites Leads", d: "Identify bulk buyers, distributors, and marketplace sellers." },
                        { t: "Targeted B2B Lead Generation", d: "Custom lists by niche, location, and audience profile." },
                        { t: "International B2B Marketing Leads", d: "Expand globally with verified leads across countries." },
                    ].map((x) => (
                        <Card key={x.t}>
                            <h4 className="text-lg font-semibold">{x.t}</h4>
                            <p className="mt-2 text-black">{x.d}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* PROCESS */}
            <Section id="process">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-center">
                    Our B2B Lead Generation Process
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { t: "Requirement Analysis", d: "Define your target market & criteria" },
                        { t: "Data Research", d: "Use trusted B2B sites & manual search" },
                        { t: "Lead Verification", d: "Confirm email, phone, job title accuracy" },
                        { t: "Database Delivery", d: "Ready-to-use lists in your preferred format" },
                    ].map((s, i) => (
                        <Card key={s.t}>
                            <div className="mb-2 text-sm font-semibold text-brandOrange">
                                Step {i + 1}
                            </div>
                            <h4 className="text-lg font-semibold">{s.t}</h4>
                            <p className="mt-2 text-black">{s.d}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* DATA FIELDS */}
            <Section id="data" className="bg-white text-black">
                <h2 className="text-2xl md:text-3xl font-bold text-center font-heading">
                    B2B Data We Provide
                </h2>

                <div className="mt-6">
                    {/* Centered, equal-width cards; no odd margins on mobile */}
                    <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {[
                            "Business Name & Category",
                            "Contact Person & Job Title",
                            "Verified Email Address",
                            "Phone Number (if available)",
                            "Website & Location",
                        ].map((f) => (
                            <div
                                key={f}
                                className="w-full max-w-[12rem] rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm text-center"
                            >
                                <span className="block truncate">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* USE CASES */}
            <Section id="use-cases" className="bg-white">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-center">
                    Best Use Cases for Our Leads
                </h2>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {[
                        "Email Marketing B2B Lead Generation campaigns",
                        "LinkedIn B2B Marketing Strategies & outreach",
                        "B2B Cold Calling & Telemarketing",
                        "B2B Digital Advertising",
                        "B2B Demand Generation initiatives",
                    ].map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-slate-300 bg-black px-4 py-2 text-sm text-white"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </Section>

            {/* INDUSTRIES */}
            <Section id="industries">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-center">
                    Industries We Serve
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { t: "IT & SaaS", d: "B2B SaaS SEO, B2B sales examples" },
                        { t: "Manufacturing", d: "B2B manufacturing marketing strategy" },
                        { t: "Wholesale & Export", d: "Best B2B platform for export business" },
                        { t: "Energy", d: "B2B energy leads" },
                        { t: "Local Services", d: "SMEs, niche markets" },
                    ].map((i) => (
                        <Card key={i.t}>
                            <h4 className="text-lg font-semibold">{i.t}</h4>
                            <p className="mt-2 text-black">{i.d}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* WHY SMALL BUSINESSES LOVE US */}
            <Section id="smb-love" className="bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-center font-heading">
                    Why Small Businesses Love Our Service
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        "Free Sample B2B Leads before commitment",
                        "Unlimited B2B Leads packages",
                        "Fast Delivery for urgent projects",
                        "Access to best B2B websites & top companies for sourcing data",
                    ].map((txt) => (
                        <Card key={txt}>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="mt-0.5 h-5 w-5 text-indigo-600" />{" "}
                                <p>{txt}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CASE STUDIES */}
            <Section id="case-studies">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-center md:text-left">
                        Case Studies – Our Clients’ Success
                    </h2>
                    <a
                        href="https://docs.google.com/spreadsheets/d/18DrAIpJO0TcyMJCZpIIdBDO1c2A_JeDqC4MRnEFQsXA/edit?gid=51388062#gid=51388062"
                        className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 md:inline"
                    >
                        Download PDF <Download className="ml-2 inline h-4 w-4" />
                    </a>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card>
                        <h4 className="text-lg font-semibold font-heading">Case Study 1: SaaS Startup</h4>
                        <p className="mt-2 text-black font-sans">
                            A small SaaS provider needed to target US-based mid-sized businesses. We delivered a verified B2B SaaS lead generation database with 5,000 qualified contacts, resulting in a{" "}
                            <span className="font-semibold text-slate-900">27% email response rate</span> within 60 days.
                        </p>
                    </Card>
                    <Card>
                        <h4 className="text-lg font-semibold font-heading">Case Study 2: Manufacturing Supplier</h4>
                        <p className="mt-2 text-black font-sans">
                            We helped a manufacturing parts supplier connect with bulk buyers in the Middle East, generating{" "}
                            <span className="font-semibold text-slate-900">$120K in new orders</span> within the first quarter.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* FAQ */}
            <Section id="faqs" className="bg-white text-black">
                <h2 className="text-2xl md:text-3xl font-bold text-center font-heading">FAQs</h2>
                <div className="mt-6 flex flex-col gap-4">
                    <FAQ
                        q="What’s the difference between B2B and B2C leads?"
                        a="B2B leads are business decision-makers, while B2C leads are individual consumers for personal use."
                    />
                    <FAQ
                        q="How can I ensure the leads are high quality?"
                        a="We use strict data verification and only deliver qualified contacts matching your profile."
                    />
                    <FAQ
                        q="Do you handle both cold and warm leads?"
                        a="Yes — we provide data for cold outreach and warm lead nurturing."
                    />
                    <FAQ
                        q="How soon will I see results?"
                        a="Most clients see impact within 30–90 days, depending on industry & campaign type."
                    />
                </div>
            </Section>

            <FinalCTA />
        </div>
    );
}