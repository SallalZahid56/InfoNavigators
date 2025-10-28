"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Gauge,
    Zap,
    Server,
    Database,
    Smartphone,
    HardDrive,
    Wrench,
    Cloud,
    BarChart3,
    Plus,
    Minus,
} from "lucide-react";

// ✅ Reusable Section Component (you already have this — just reuse or import)
const Section = ({
    icon: Icon,
    title,
    children,
    imageSrc = "",
    reverse = false,
    showImage = true,
}) => (
    <section className="max-w-6xl mx-auto px-6 py-12">
        <div
            className={`grid ${showImage ? "md:grid-cols-2" : "grid-cols-1"
                } gap-8 items-center`}
        >
            <motion.div
                initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`space-y-4 ${reverse ? "md:order-2" : "md:order-1"}`}
            >
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-tr from-brandOrange to-orange-400 text-white shadow-md">
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                </div>
                <div className="prose max-w-none text-gray-700">{children}</div>
            </motion.div>

            {showImage && (
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`rounded-2xl overflow-hidden shadow-xl ${reverse ? "md:order-1" : "md:order-2"
                        }`}
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </motion.div>
            )}
        </div>
    </section>
);

// ✅ Main Component
export default function WebsiteSpeedOptimization2025() {

    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) =>
        setOpenIndex(openIndex === index ? null : index);

    const faqs = [
        {
            question: "1. What is technical SEO?",
            answer:
                " Technical SEO focuses on optimizing a website’s infrastructure — crawlability, indexing, speed, and structure — to improve search visibility.",
        },
        {
            question: "2. What tools can identify technical SEO issues?",
            answer:
                " Use Google Search Console, Screaming Frog, Ahrefs, or Sitebulb.",
        },
        {
            question: "3. How often should I perform a technical SEO audit?",
            answer:
                "Every 3–6 months, or after major site changes.",
        },
        {
            question:
                "4. Can fixing technical SEO improve rankings instantly?",
            answer:
                "Yes — many fixes (speed, broken links, sitemap issues) can show ranking improvements within 2–4 weeks.",
        },
        {
            question:
                "5. Who can help fix complex technical SEO problems?",
            answer:
                "Our InfoNavigators SEO Team provides audit, optimization, and technical fixes for better performance and ranking.",
        },
    ];
    return (
        <article className="pb-20">
            {/* Hero Section */}
            <section className="text-center py-32 bg-gradient-to-r from-orange-50 to-white">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Introduction: Why Technical SEO Matters in 2025
                </h1>
                <p className="max-w-3xl mx-auto text-gray-600">
                    Even the best content can’t rank if your website’s technical foundation is broken.
                    In 2025, Google’s algorithms are smarter than ever — analyzing site performance, indexing efficiency, and user experience before ranking your pages.
                </p>

                <p className="max-w-3xl mx-auto text-gray-600">
                    That’s why fixing technical SEO issues is critical to improving visibility, organic traffic, and conversions.
                </p>
            </section>

            {/* Intro */}
            <Section idx={1} icon={Gauge} title="Why Website Speed Matters" showImage={false}>
                <p>
                    Even the best content can’t rank if your website’s technical foundation is broken.
                    In 2025, Google’s algorithms are smarter than ever — analyzing site performance, indexing efficiency, and user experience before ranking your pages.
                </p>
                <p>
                    That’s why fixing technical SEO issues is critical to improving visibility, organic traffic, and conversions.
                </p>
                <p>
                    At <strong>InfoNavigators</strong>,  we help businesses identify and resolve deep-rooted technical problems that silently hurt rankings — so your website performs at its full potential.
                </p>
            </Section>

            {/* Measure Speed */}
            <Section
                idx={2}
                icon={BarChart3}
                title="1. Slow Website Speed (Core Web Vitals Failure)"
                imageSrc="/slow-speed.jpg"
            >
                <p>
                    If your website takes more than 3 seconds to load, users leave — and Google notices.
                    Slow load times directly hurt rankings and user experience:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Use Google PageSpeed Insights or GTmetrix to test performance.</li>
                    <li>Optimize images (use WebP format).</li>
                    <li>Enable browser caching and GZIP compression.</li>
                    <li>Switch to a lightweight theme and fast hosting.</li>
                </ul>

                <p className="mt-4">
                    For an in-depth optimization guide, read our post on How to Boost Website Speed and Improve User Experience:
                </p>
            </Section>


            {/* Optimize Images */}
            <Section
                idx={3}
                icon={Image}
                title="2. Broken Internal Links"
                reverse
                imageSrc="/broken-link.jpg"
            >
                <p>
                    Broken links disrupt user experience and waste crawl budget — meaning Google’s bots can’t effectively index your pages.
                </p>

                <h4 className="mt-4 font-semibold text-gray-900">How to Fix:</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Use Screaming Frog SEO Spider or Ahrefs Site Audit to find broken links.</li>
                    <li>Update or redirect broken URLs with 301 redirects.</li>
                    <li>Regularly review internal linking structures.</li>
                </ul>

                <p className="mt-4">
                    Pro tip: Ensure each service and blog page interlinks logically — it boosts crawl depth and ranking relevance.
                </p>
            </Section>


            {/* Minify Code */}
            <Section
                idx={4}
                icon={Wrench}
                title="3. Duplicate Content Issues"
                imageSrc="/duplicate-content.jpg"
            >
                <p>
                    Duplicate content confuses search engines about which page to rank — often causing both to perform poorly.
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">How to Fix:</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Use canonical tags to show your primary page.</li>
                    <li>Avoid posting identical content across subdomains or categories.</li>
                    <li>Use<strong> Copyscape or Siteliner </strong>to detect duplicates.</li>
                </ul>
                <p>
                    Learn how AI in <strong>Digital Marketing</strong> is changing SEO at Infonavigators Blog.
                </p>
            </Section>

            {/* CDN */}
            <Section
                idx={5}
                icon={Cloud}
                title="4. Poor URL Structure"
                reverse
                imageSrc="/poor-url.jpg"
            >
                <p>
                    Long, cluttered URLs with numbers or special characters confuse both users and search engines.
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">Popular CDNs:</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Keep URLs short, readable, and keyword-rich.</strong></li>
                    <li>Example:
                        ❌ https://yourdomain.com/page?id=1234
                        ✅ https://yourdomain.com/technical-seo-issues/
                    </li>
                    <li><strong>Use hyphens (-) instead of underscores (_).</strong></li>
                </ul>
            </Section>

            {/* Hosting */}
            <Section
                idx={6}
                icon={Server}
                title="5. Crawlability and Indexing Errors"
                imageSrc="/crawlibility.jpg"
            >
                <p>
                    If Google can’t crawl or index your site properly, your pages won’t appear in search results — no matter how good the content is:
                </p>
                <ul>
                    <li>Check your robots.txt file (ensure important pages aren’t blocked).</li>
                    <li>Submit your XML sitemap to Google Search Console.</li>
                    <li>Fix 404 errors, redirect loops, and noindex tags.</li>
                    <li>Avoid using JavaScript-heavy designs that block crawlers.</li>
                </ul>
            </Section>

            {/* Mobile Optimization */}
            <Section
                idx={7}
                icon={Smartphone}
                title="6. Missing or Incorrect Schema Markup"
                reverse
                imageSrc="/missing.jpg"
            >
                <p>
                    Without structured data, Google can’t easily understand your content type — reducing your chances of appearing in Rich Snippets.
                </p>

                <h4 className="mt-4 font-semibold text-gray-900">How to Fix:</h4>
                <ul>
                    <li>Use JSON-LD schema for articles, FAQs, products, and reviews.</li>
                    <li>Validate with Google’s Rich Results Test.</li>
                    <li>Add schema manually or via plugins like Rank Math or Yoast SEO.</li>
                </ul>
            </Section>

            {/* Database Optimization */}
            <Section
                idx={8}
                icon={Database}
                title="7. Non-Secure (HTTP) Pages"
                imageSrc="/non-secure.jpg"
            >
                <p>
                    Sites without HTTPS lose user trust and ranking.
                    Google flags them as “Not Secure,” especially for sites with forms or transactions.
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">How to Fix:</h4>
                <ul>
                    <li>Install an SSL certificate (most hosting providers offer it free).</li>
                    <li>Redirect all HTTP pages to HTTPS with a 301 redirect.</li>
                    <li>Update internal and canonical URLs to HTTPS versions.</li>
                </ul>
            </Section>

            {/* Compression */}
            <Section
                idx={9}
                icon={HardDrive}
                title="8. Mobile Usability Issues"
                reverse
                showImage={false}
            >
                <p>
                    More than 70% of users visit websites from mobile devices. If your site isn’t mobile-friendly, your rankings will drop.
                </p>

                <h4 className="mt-4 font-semibold text-gray-900">How to Fix:</h4>
                <ul>
                    <li>Use responsive design that adjusts across all screen sizes.</li>
                    <li>Run Google’s Mobile-Friendly Test.</li>
                    <li>Avoid pop-ups or heavy scripts that block mobile rendering.</li>
                </ul>
            </Section>

            {/* Lightweight Themes */}
            <Section
                idx={10}
                icon={Zap}
                title="9. Missing Meta Tags and Header Structure"
                showImage={false}
            >
                <p>
                    Without proper title tags, meta descriptions, and H1–H3 hierarchy, your content loses SEO relevance.
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">How to Fix:</h4>
                <ul>
                    <li>Write unique titles (50–60 characters) and descriptions (150–160 characters).</li>
                    <li>Use only one H1 tag per page.</li>
                    <li>Naturally include your target keywords.</li>
                    <li>Tools: Yoast SEO, Rank Math, or SEMrush Audit.</li>
                </ul>
            </Section>

            {/* Hosting */}
            <Section
                idx={6}
                icon={Server}
                title="10. Poor Core Web Vitals Scores"
                imageSrc="/poor-website.jpg"
            >
                <p>
                    Google’s Core Web Vitals measure load time, interactivity, and layout stability. Poor scores = poor user experience = poor ranking.
                </p>

                <h4 className="mt-4 font-semibold text-gray-900">How to Fix:</h4>
                <ul>
                    <li>Reduce server response time.</li>
                    <li>Use lazy loading for media.</li>
                    <li>Defer JavaScript loading.</li>
                    <li>Optimize CLS (Cumulative Layout Shift) by defining image sizes.</li>
                </ul>

            </Section>


            {/* ✅ FAQ Section */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center text-brandOrange mb-10">
                    Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg hover:bg-gray-50 transition"
                            >
                                {faq.question}
                                {openIndex === index ? <Minus size={22} /> : <Plus size={22} />}
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={
                                    openIndex === index
                                        ? { height: "auto", opacity: 1 }
                                        : { height: 0, opacity: 0 }
                                }
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden px-5 pb-5 text-gray-700"
                            >
                                {faq.answer}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>


        </article>
    );
}
