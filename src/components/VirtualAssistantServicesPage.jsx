"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function VirtualAssistantServicesPage() {

    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            q: "Q1. What are the most in-demand virtual assistant services in 2025?",
            a: "Administrative, customer service, eCommerce, and medical virtual assistant services remain in high demand.",
        },
        {
            q: "Q2. How much do virtual assistant services cost?",
            a: "Rates range from $5 to $30 per hour depending on the role and region.",
        },
        {
            q: "Q3. What are the benefits of virtual assistant services?",
            a: "They reduce costs, increase productivity, and give businesses flexibility and access to global talent.",
        },
        {
            q: "Q4. Can I outsource virtual assistant services for my small business?",
            a: "Absolutely! Virtual assistant services for small businesses are one of the fastest-growing outsourcing segments globally.",
        },
        {
            q: "Q5. Which are the best virtual assistant services companies?",
            a: "Top providers like InfoNavigators offer customized, scalable, and affordable virtual assistant solutions for any industry.",
        },
    ];


    return (
        <div className="overflow-hidden">
            {/* ✅ HERO SECTION */}
            <section
                className="relative h-[100vh] flex items-center justify-center text-center text-white"
                aria-label="Hero - Virtual Assistant Services"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/blog-hero.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-6 max-w-5xl"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Virtual Assistant Services: The Ultimate Guide to Boosting Productivity and Business Growth in 2025
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Learn how virtual assistant services can streamline operations, reduce costs, and help your business grow in 2025 — from administrative support to eCommerce and beyond.
                    </p>
                </motion.div>
            </section>

            {/* ✅ INTRODUCTION */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-semibold text-brandOrange"
                >
                    Introduction: Why Virtual Assistant Services Are Taking Over the Modern Workforce
                </motion.h2>
                <p className="text-gray-700 leading-relaxed">
                    The world of work has changed — permanently. Businesses are no longer limited by office walls or traditional hiring models. Today, companies around the world are embracing virtual assistant services to streamline operations, cut costs, and focus on growth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    From startups to large enterprises, everyone is discovering that hiring a virtual assistant service can dramatically improve productivity. Whether it’s managing emails, handling customers, managing eCommerce stores, or providing medical transcription — there’s a virtual assistance service for every business function imaginable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    In this detailed guide, we’ll explore everything about virtual assistant services, including the types available in 2025, their benefits, real-world applications, cost insights, and how businesses can scale efficiently using these services.
                </p>
            </section>

            {/* ✅ WHAT ARE VIRTUAL ASSISTANT SERVICES (Image Left) */}
            <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6 py-16">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/virtual-assistant-services.jpg"
                        alt="Virtual Assistant Working Remotely"
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">What Are Virtual Assistant Services?</h2>
                    <p className="text-gray-700 mb-4">
                        Virtual assistant services involve hiring skilled professionals who work remotely to perform administrative, technical, or creative tasks. These assistants can handle daily operations, freeing up your team’s time for higher-level decision-making.
                    </p>
                    <p className="text-gray-700 mb-4">
                        A virtual assistant service company provides trained professionals to handle roles such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Customer support</li>
                        <li>Scheduling and calendar management</li>
                        <li>Bookkeeping</li>
                        <li>Data entry</li>
                        <li>Marketing and social media management</li>
                        <li>eCommerce store management</li>
                    </ul>
                </div>
            </section>

            {/* ✅ TOP BENEFITS (Image Right) */}
            <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6 py-16">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-4">Top Benefits of Virtual Assistant Services</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li><strong>Cost Efficiency:</strong> Hiring a virtual assistant costs up to 70% less than an in-house employee. You save on office space, insurance, and HR overhead.</li>
                        <li><strong>Global Talent Pool:</strong> With offshore virtual assistant services, you can access professionals from countries like the Philippines, India, and Pakistan — known for their English proficiency, skills, and affordability.</li>
                        <li><strong>Scalability:</strong> Businesses can easily scale their operations up or down based on demand — perfect for startups, SMEs, or seasonal industries.</li>
                        <li><strong>Round-the-Clock Operations:</strong> 2Working with virtual assistants across different time zones ensures 24/7 customer support and seamless global business management.</li>
                        <li><strong>Specialized Expertise:</strong> From virtual medical assistant services to virtual legal assistant services and real estate virtual assistant services, you can hire experts for niche tasks.</li>
                    </ol>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
                    <Image
                        src="/benefits.jpg"
                        alt="Global Virtual Assistant Collaboration"
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>


            {/* ✅ List of the Most In-Demand Virtual Assistant Services (NO IMAGE) */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-semibold text-brandOrange">List of the Most In-Demand Virtual Assistant Services in 2025</h2>
                <p className="text-gray-700">
                    Below is a comprehensive virtual assistant services list covering top categories and industry-specific tasks.
                </p>

                <div className="space-y-8 text-gray-700">
                    <div>
                        <h3 className="text-xl font-semibold">🏢 1. Virtual Administrative Assistant Services</h3>
                        <p className="mt-2">These assistants manage daily business operations, such as:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Scheduling meetings and managing calendars</li>
                            <li>Email filtering and inbox management</li>
                            <li>Document creation and file organization</li>
                            <li>Data entry and research</li>
                        </ul>
                        <p className="mt-2"><strong>Best for:</strong> Executives, small business owners, and startups</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">💼 2. Executive Virtual Assistant Services</h3>
                        <p className="mt-2">Executives hire VAs for:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Travel arrangements</li>
                            <li>Project coordination</li>
                            <li>Personal errands</li>
                            <li>Communication handling</li>
                        </ul>
                        <p className="mt-2"><strong>Best for:</strong> CEOs, founders, and high-level professionals</p>
                        <p className="mt-1">Also known as virtual executive assistant services or virtual personal assistant services.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">📞 3. Virtual Assistant for Customer Service</h3>
                        <p className="mt-2">A customer service virtual assistant or virtual assistant answering service handles:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Phone answering and call forwarding</li>
                            <li>Responding to emails and live chats</li>
                            <li>Managing helpdesk systems (like Zendesk, Freshdesk, or Gorgias)</li>
                        </ul>
                        <p className="mt-2">
                            Many companies now use AI virtual assistant customer service for faster responses and virtual assistant telephone answering service to handle volume efficiently.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🏥 4. Virtual Medical Assistant Services</h3>
                        <p className="mt-2">A rapidly growing niche, virtual medical assistance services support clinics, hospitals, and healthcare professionals. Tasks include:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Patient scheduling and record management</li>
                            <li>Medical transcription</li>
                            <li>Insurance verification</li>
                            <li>Appointment reminders</li>
                        </ul>
                        <p className="mt-2">Best virtual medical assistant services for healthcare help reduce administrative burdens while maintaining HIPAA compliance.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🏘️ 5. Real Estate Virtual Assistant Services</h3>
                        <p className="mt-2">Realtor virtual assistant services handle property listings, CRM management, lead follow-ups, and market research. Benefits:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Manage MLS listings</li>
                            <li>Schedule showings and open houses</li>
                            <li>Handle real estate email marketing</li>
                            <li>Respond to client inquiries</li>
                        </ul>
                        <p className="mt-2">Ideal for: Real estate agents, brokers, and property managers</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🛍️ 6. eCommerce and Amazon Virtual Assistant Services</h3>
                        <p className="mt-2">For online sellers, ecommerce virtual assistant services are essential. Shopify virtual assistant services and Amazon virtual assistant services handle:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Product listing and optimization</li>
                            <li>Order processing and fulfillment</li>
                            <li>Customer support</li>
                            <li>Inventory and return management</li>
                        </ul>
                        <p className="mt-2">These assistants help businesses grow on platforms like Shopify, Amazon, and eBay without extra manpower.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">⚖️ 7. Virtual Legal Assistant Services</h3>
                        <p className="mt-2">Legal virtual assistant services support law firms and legal departments. Tasks include:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Document drafting and legal research</li>
                            <li>Appointment scheduling</li>
                            <li>Case file management</li>
                            <li>Billing and client communication</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">💰 8. Virtual Bookkeeping and Financial Services</h3>
                        <p className="mt-2">Virtual assistant bookkeeping services or virtual assistant financial services are crucial for managing:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Invoices and expenses</li>
                            <li>Payroll</li>
                            <li>Budget tracking</li>
                            <li>Financial reporting</li>
                        </ul>
                        <p className="mt-2">Ideal for small businesses that need accurate bookkeeping without hiring a full-time accountant.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">📈 9. Marketing and SEO Virtual Assistant Services</h3>
                        <p className="mt-2">Marketing virtual assistant services cover:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Social media management</li>
                            <li>Email marketing</li>
                            <li>Blog posting and keyword research</li>
                            <li>Campaign tracking</li>
                        </ul>
                        <p className="mt-2">For businesses focusing on online visibility, virtual assistant SEO services ensure optimized content and improved ranking performance.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🧠 10. AI and Tech-Based Virtual Assistant Services</h3>
                        <p className="mt-2">In 2025, AI avatar services for virtual assistants are on the rise. These services blend human and artificial intelligence to automate:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Repetitive customer queries</li>
                            <li>Appointment bookings</li>
                            <li>Social media replies</li>
                        </ul>
                        <p className="mt-2">You can even find AI avatar services for virtual assistants on specialized marketplaces for advanced automation.</p>
                    </div>
                </div>
            </section>


            {/* ✅ INDUSTRY-SPECIFIC SOLUTIONS (Image Left) */}
            <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6 py-16">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/industry-specific.jpg"
                        alt="Industry Specific Virtual Assistants"
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Industry-Specific Virtual Assistant Solutions</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 text-gray-700">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-4 text-left border">Industry</th>
                                    <th className="py-3 px-4 text-left border">Type of VA Services</th>
                                    <th className="py-3 px-4 text-left border">Example Tasks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="py-2 px-4 border">Healthcare</td><td className="py-2 px-4 border">Virtual medical assistant services</td><td className="py-2 px-4 border">Scheduling, insurance verification</td></tr>
                                <tr><td className="py-2 px-4 border">Real Estate</td><td className="py-2 px-4 border">Realtor virtual assistant services</td><td className="py-2 px-4 border">Lead follow-up, CRM updates</td></tr>
                                <tr><td className="py-2 px-4 border">Finance</td><td className="py-2 px-4 border">Virtual bookkeeping services</td><td className="py-2 px-4 border">Invoicing, reporting</td></tr>
                                <tr><td className="py-2 px-4 border">eCommerce</td><td className="py-2 px-4 border">Amazon & Shopify VAs</td><td className="py-2 px-4 border">Product listing, order management</td></tr>
                                <tr><td className="py-2 px-4 border">Legal</td><td className="py-2 px-4 border">Legal virtual assistant services</td><td className="py-2 px-4 border">Research, documentation</td></tr>
                                <tr><td className="py-2 px-4 border">Hospitality</td><td className="py-2 px-4 border">Hospitality virtual assistant services</td><td className="py-2 px-4 border">Booking management, guest inquiries</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="space-y-24 py-16 px-6 max-w-6xl mx-auto">
                {/* 🌍 Virtual Assistant Services by Region */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 space-y-5">
                        <h2 className="text-3xl font-bold text-brandOrange">
                            Virtual Assistant Services by Region
                        </h2>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                            <li>
                                <strong>Virtual Assistant Services USA:</strong> High-quality, fast-response, business-grade assistants.
                            </li>
                            <li>
                                <strong>Virtual Assistant Services India:</strong> Affordable, skilled, and efficient professionals.
                            </li>
                            <li>
                                <strong>Virtual Assistant Services UK:</strong> Perfect for European businesses needing bilingual support.
                            </li>
                            <li>
                                <strong>Virtual Assistant Services Australia:</strong> Ideal for real estate and eCommerce operations.
                            </li>
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/virtual-by-region.jpg"
                            alt="Global Virtual Assistant Services"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </section>

                {/* 🌐 Outsourcing Virtual Assistant Services */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/outsourcing-virtual.jpg"
                            alt="Outsourcing Virtual Assistant Services"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    <div>
                        <h2 className="text-3xl font-bold text-brandOrange">
                            Outsourcing Virtual Assistant Services: Why It’s a Smart Move
                        </h2>
                        <p className="mt-4 text-gray-700">
                            Outsourcing virtual assistant services allows businesses to focus on growth while professionals handle
                            operations.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                            <li>Reduced labor costs</li>
                            <li>Access to trained professionals</li>
                            <li>Quick scalability</li>
                            <li>Time zone advantage</li>
                        </ul>
                        <p className="mt-4 text-gray-700">
                            Offshore virtual assistant services are popular among companies looking for 24/7 support and cost optimization.
                        </p>
                    </div>
                </section>

                {/* 🔍 How to Choose the Best Virtual Assistant Service */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 space-y-5">
                        <h2 className="text-3xl font-bold text-brandOrange">
                            How to Choose the Best Virtual Assistant Service
                        </h2>
                        <ul className="list-disc list-inside space-y-3 text-gray-700">
                            <li>Proven experience and client testimonials</li>
                            <li>Industry-specific expertise (medical, real estate, etc.)</li>
                            <li>Flexible pricing or virtual assistant service packages</li>
                            <li>Clear service agreement</li>
                            <li>24/7 support and communication tools</li>
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/how-to-choose.jpg"
                            alt="Choose the Best Virtual Assistant Service"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </section>

                {/* 🚀 Benefits of Using a Virtual Assistant Service */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/benefits-of-using.jpg"
                            alt="Benefits of Virtual Assistant Service"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    <div>
                        <h2 className="text-3xl font-bold text-brandOrange">
                            Benefits of Using a Virtual Assistant Service
                        </h2>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                            <li>Increased productivity and focus on business growth</li>
                            <li>Cost-effective workforce solution</li>
                            <li>Access to global talent and multilingual support</li>
                            <li>Flexible hiring and scalability</li>
                            <li>Specialized skill access for any industry</li>
                        </ul>
                    </div>
                </section>
            </section>

            {/* ✅ WHY CHOOSE INFONAVIGATORS (Image Right) */}
            <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6 py-16">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-4">Why Choose InfoNavigators for Virtual Assistant Services</h2>
                    <p className="text-gray-700 mb-4">
                        At <span className="text-brandOrange font-semibold">InfoNavigators</span>, we provide professional virtual assistant services tailored to your industry and workflow.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Customer service virtual assistant solutions</li>
                        <li>Virtual assistant SEO services</li>
                        <li>Real estate and medical virtual assistant services</li>
                        <li>Virtual administrative assistant services</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        Whether you need bilingual support or AI-powered automation, our experienced team helps you save time, reduce costs, and enhance business performance.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
                    <Image
                        src="/why-infonavigators.jpg"
                        alt="InfoNavigators Team Collaboration"
                        width={900}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-10 text-center text-brandOrange">
                    Frequently Asked Questions (FAQs)
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                        >
                            {/* Question Button */}
                            <button
                                className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold hover:bg-gray-50 transition"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                <span>{item.q}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-brandOrange" />
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-4 pb-4 text-gray-700"
                                    >
                                        {item.a}
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
