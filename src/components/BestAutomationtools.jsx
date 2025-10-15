"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BestAutomationTools2025() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            q: "What are automation tools for lead generation?",
            a: "They are software platforms that automate finding, nurturing, and managing potential customers — saving time while improving accuracy.",
        },
        {
            q: "How do automation tools help increase website traffic?",
            a: "They attract qualified leads through targeted outreach, ensuring the visitors you get are relevant and more likely to convert.",
        },
        {
            q: "Are these tools expensive?",
            a: "Most offer affordable monthly plans or free trials. The ROI they bring often far outweighs the cost.",
        },
        {
            q: "Can small businesses use automation tools?",
            a: "Absolutely! Many tools like HubSpot, Mailchimp, and Apollo.io have starter plans tailored for small teams.",
        },
        {
            q: "What’s the best way to start automation in 2025?",
            a: "Begin with your lead collection and data management — automate your email campaigns, CRM entries, and research tasks first.",
        },
    ];

    const tools = [
        {
            title: "🧠 1. HubSpot — All-in-One Marketing Automation Platform",
            img: "/hubspott.png",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Businesses that want a full CRM + automation suite.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> HubSpot remains one of the most trusted
                        platforms for automating lead capture, nurturing, and data tracking. You can
                        integrate landing pages, email campaigns, and contact management into one
                        unified dashboard.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Smart lead scoring and segmentation</li>
                        <li>Automated email and workflow campaigns</li>
                        <li>Integrated CRM and pipeline tracking</li>
                        <li>Analytics dashboards for performance insights</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Why It Matters for Traffic Growth:</strong> HubSpot helps align your
                        marketing and sales teams so your campaigns reach the right people —
                        increasing both qualified traffic and lead conversions.
                    </p>
                </>
            ),
        },
        {
            title: "🤖 2. LinkedIn Sales Navigator + Phantombuster",
            img: "/linkedin.jpeg",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> B2B marketers and agencies targeting LinkedIn
                        prospects.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> LinkedIn is a goldmine for B2B leads, and
                        Sales Navigator combined with Phantombuster automates profile visits,
                        connection requests, and data extraction.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Advanced LinkedIn search filters for decision-makers</li>
                        <li>Automated profile scraping and list building</li>
                        <li>Direct LinkedIn message automation</li>
                        <li>Data export to CRMs or Google Sheets</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Why It Matters:</strong> This automation combo helps you generate
                        qualified B2B leads at scale without hours of manual LinkedIn prospecting.
                    </p>
                    <p className="mt-3">
                        At <span className="text-brandOrange font-semibold">InfoNavigators</span>,
                        our LinkedIn Lead Generation Services utilize similar automation workflows —
                        combining precision research with verified contact data to help clients
                        connect with real decision-makers faster.
                    </p>
                </>
            ),
        },
        {
            title: "💌 3. Apollo.io",
            img: "/apollo.jpg",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Building verified email lists and managing outreach.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> Apollo.io automates the process of finding
                        business contacts, verifying emails, and sending personalized outreach
                        campaigns.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Access to over 275M verified contacts</li>
                        <li>AI-powered lead recommendations</li>
                        <li>Automated email sequencing</li>
                        <li>Integration with CRMs like HubSpot and Salesforce</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Benefit for Traffic:</strong> With verified outreach and smart lead
                        targeting, Apollo helps you drive more qualified visitors to your website —
                        not just random traffic.
                    </p>
                </>
            ),
        },
        {
            title: "📊 4. ZoomInfo",
            img: "/zoominfo.png",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Enterprise-level lead generation and intent data.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> ZoomInfo provides detailed company and contact
                        intelligence, helping sales and marketing teams identify leads showing active
                        buying signals.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Real-time intent tracking</li>
                        <li>Firmographic and technographic data</li>
                        <li>Integration with major CRMs</li>
                        <li>Automated lead enrichment</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Why It Matters:</strong> By understanding who’s ready to buy, your
                        campaigns focus on prospects more likely to engage — boosting conversions and
                        qualified traffic.
                    </p>
                </>
            ),
        },
        {
            title: "⚙️ 5. Lemlist",
            img: "/lemlist.png",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Email outreach automation and personalization.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> Lemlist automates cold email campaigns with
                        advanced personalization (like adding custom images or text). It improves
                        response rates and helps build relationships.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Automated follow-ups</li>
                        <li>AI-based deliverability optimization</li>
                        <li>Smart personalization options</li>
                        <li>Performance analytics</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Why It’s Important:</strong> Lemlist users report up to 3x higher reply
                        rates, which means better lead engagement and more visits to your landing
                        pages.
                    </p>
                </>
            ),
        },
        {
            title: "🧩 6. Zapier",
            img: "/zapier.png",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Integrating automation workflows between multiple
                        apps.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> Zapier connects over 6,000 tools, allowing
                        marketers to automate repetitive workflows like transferring new leads from a
                        form into a CRM or spreadsheet.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Multi-step workflow automation</li>
                        <li>Custom triggers and actions</li>
                        <li>No coding required</li>
                        <li>Integrates with Slack, Gmail, HubSpot, and more</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Example Use Case:</strong> When someone fills out your website form,
                        Zapier can automatically add their info to HubSpot, send a welcome email, and
                        notify your sales team on Slack — saving time and reducing manual work.
                    </p>
                </>
            ),
        },
        {
            title: "🧮 7. Clay",
            img: "/clay.webp",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Smart lead enrichment and personalization.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> Clay uses AI to research and enrich leads from
                        LinkedIn, websites, and databases, adding details like company size, tech
                        stack, and social media activity.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Automated lead research</li>
                        <li>Custom data filters</li>
                        <li>Real-time enrichment</li>
                        <li>Seamless integration with email tools</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Why It Matters for Conversion:</strong> The more data you have on each
                        lead, the more personalized your outreach — leading to higher click-through
                        and conversion rates.
                    </p>
                </>
            ),
        },
        {
            title: "💼 8. Pipedrive",
            img: "/pipedrive.webp",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Sales pipeline automation and deal tracking.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> Pipedrive simplifies how sales teams manage
                        leads through every stage of the funnel, automating follow-ups and task
                        reminders.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Visual sales pipeline</li>
                        <li>Workflow automation</li>
                        <li>Lead tracking and scoring</li>
                        <li>Integration with email and chat tools</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Traffic Impact:</strong> Automating pipeline management ensures faster
                        response times — improving customer experience and repeat engagement on your
                        site.
                    </p>
                </>
            ),
        },
        {
            title: "📧 9. Mailchimp",
            img: "/mailchimp.jpeg",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Automated email marketing campaigns.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> Mailchimp remains a top choice for creating
                        automated email funnels that nurture leads effectively — turning cold traffic
                        into loyal subscribers.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Pre-built automation workflows</li>
                        <li>Audience segmentation</li>
                        <li>Predictive analytics</li>
                        <li>A/B testing tools</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Why It Matters:</strong> Automated nurturing means every new visitor
                        gets the right content at the right time — improving lead retention and
                        driving more recurring website visits.
                    </p>
                </>
            ),
        },
        {
            title: "🧠 10. ChatGPT + Notion AI (for Smart Research Automation)",
            img: "/chatgpt-notion.png",
            content: (
                <>
                    <p>
                        <strong>Best for:</strong> Data organization, research automation, and content
                        workflow.
                    </p>
                    <p>
                        <strong>Why It’s Great:</strong> Combining AI assistants like ChatGPT with
                        tools like Notion helps automate research, note-taking, and campaign planning.
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li>Automated data summarization</li>
                        <li>Lead research assistance</li>
                        <li>Campaign documentation</li>
                        <li>Task reminders and workflow templates</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Why It Matters:</strong> This integration boosts efficiency and keeps
                        your team focused on strategy rather than manual admin work.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="text-gray-800">
            {/* ✅ HERO SECTION */}
            <section className="relative bg-gray-900 text-white py-32 px-6">
                <Image
                    src="/hero-bg.jpg"
                    alt="Marketers Using AI Automation Tools for Lead Generation and Data Management in 2025"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Best Automation Tools for Lead Generation and Data Management in 2025
                    </motion.h1>
                    <p className="text-lg text-gray-200">
                        Discover how automation tools revolutionize lead generation, boost data
                        accuracy, and grow your website traffic in 2025.
                    </p>
                </div>
            </section>

            {/* ✅ INTRODUCTION */}
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-semibold text-brandOrange">
                    Introduction: Why Automation Is the Future of Lead Generation
                </h2>
                <p>
                    In 2025, businesses that rely on manual lead generation are already falling
                    behind. Modern marketing isn’t just about finding leads — it’s about finding
                    qualified leads quickly, managing them efficiently, and nurturing them smartly.
                </p>
                <p>
                    Automation has completely reshaped how marketers and agencies operate. From
                    discovering leads on LinkedIn to nurturing them via personalized email campaigns,
                    these tools make everything faster, smarter, and more precise.
                </p>
                <p>
                    If you’re running a digital agency, a B2B marketing business, or managing sales
                    operations, using the right automation tools can:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Increase your lead conversion rate</li>
                    <li>Save hundreds of work hours</li>
                    <li>Improve data accuracy and management</li>
                    <li>Boost ROI through efficient workflows</li>
                </ul>
                <p>
                    In this article, we’ll explore the best automation tools for lead generation and
                    data management in 2025, how they work, and why integrating them into your
                    marketing strategy is essential for traffic growth and revenue.
                </p>
            </section>

            {/* ✅ The Rising Need for Automation in Lead Generation */}
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-semibold text-brandOrange">
                    The Rising Need for Automation in Lead Generation
                </h2>
                <p>
                    Lead generation in 2025 looks very different than it did just a few years ago. Here’s why automation is now essential, not optional:
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">1. Manual Lead Generation Is Too Slow</h3>
                        <p className="text-gray-700">
                            With millions of businesses competing online, manually researching prospects and managing outreach campaigns is inefficient and error-prone.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">2. Data Volume Has Exploded</h3>
                        <p className="text-gray-700">
                            From social media profiles to company websites and online directories — the sheer amount of data available is overwhelming. Automation helps you collect, clean, and categorize it in seconds.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">3. Personalized Marketing Requires Data Accuracy</h3>
                        <p className="text-gray-700">
                            Automated tools help you segment and target leads based on behavior, interests, and engagement — which is key to higher conversion rates.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">4. Traffic Growth Through Smarter Targeting</h3>
                        <p className="text-gray-700">
                            Automation improves how your content and campaigns reach potential customers. When you target precisely, you attract qualified website traffic — the kind that actually converts.
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ Top Benefits of Using Automation Tools for Lead Generation */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold text-brandOrange mb-6">
                    Top Benefits of Using Automation Tools for Lead Generation
                </h2>
                <p className="mb-6 text-gray-700">
                    Businesses that adopt automation tools for lead generation experience measurable improvements in both efficiency and revenue. Here’s how automation benefits your marketing efforts:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-left text-gray-800">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 font-semibold">Benefit</th>
                                <th className="py-3 px-4 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="py-3 px-4 font-medium">Time Savings</td>
                                <td className="py-3 px-4">Tools handle repetitive data collection and email outreach automatically.</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-3 px-4 font-medium">Higher Accuracy</td>
                                <td className="py-3 px-4">Automation reduces human error in data entry and verification.</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-3 px-4 font-medium">Better Targeting</td>
                                <td className="py-3 px-4">Segment leads by criteria like location, job title, or intent.</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-3 px-4 font-medium">Improved ROI</td>
                                <td className="py-3 px-4">Focus marketing budgets on leads most likely to convert.</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-3 px-4 font-medium">Consistent Follow-Up</td>
                                <td className="py-3 px-4">Automated sequences nurture leads 24/7 without missing touchpoints.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mt-6 text-gray-700">
                    For marketers and agency owners, this means one thing: you spend less time managing leads — and more time closing deals.
                </p>
            </section>

            {/* ✅ TOOL SECTIONS */}
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
                <h2 className="text-3xl font-semibold text-brandOrange">
                    Best Automation Tools for Lead Generation in 2025
                </h2>
                {tools.map((tool, i) => (
                    <div
                        key={i}
                        className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">{tool.title}</h3>
                            <div className="text-gray-700 space-y-3">{tool.content}</div>
                        </div>
                        <Image
                            src={tool.img}
                            alt={tool.title}
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-md"
                        />
                    </div>
                ))}
            </section>


            {/* ✅ How Automation Boosts Website Traffic and Conversions */}
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-semibold text-brandOrange">
                    How Automation Boosts Website Traffic and Conversions
                </h2>
                <p>
                    Automation tools don’t just make processes easier — they directly impact website traffic and lead conversions. Here’s how:
                </p>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Faster Lead Response = Higher Conversion</h3>
                        <p className="text-gray-700">
                            Automation ensures no lead waits for a reply — increasing your chances of closing.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Better Targeting = Quality Traffic</h3>
                        <p className="text-gray-700">
                            Automated lead scoring and segmentation ensure you attract visitors interested in your service, not random clicks.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Continuous Nurturing = Repeat Visits</h3>
                        <p className="text-gray-700">
                            Automated email and remarketing campaigns keep prospects engaged and returning to your site.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Accurate Data = Smart Decisions</h3>
                        <p className="text-gray-700">
                            Clean, verified data improves campaign targeting and SEO alignment — leading to sustainable organic traffic.
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ Automation and Data Management: The Perfect Pair (with image) */}
            <section className="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-2xl shadow-sm">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden">
                        <img
                            src="/automation-data-management.jpg" // 🖼️ replace with your actual image path
                            alt="Automation and Data Management Working Together"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-brandOrange">
                            Automation and Data Management: The Perfect Pair
                        </h2>
                        <p className="text-gray-700">
                            Lead generation automation is powerful, but it’s only as good as your data management system.
                            Poor data leads to bad targeting, wasted ads, and lost opportunities. That’s why pairing automation
                            with data verification and cleansing tools is crucial.
                        </p>
                        <p className="text-gray-700">
                            At <span className="font-semibold text-brandOrange">InfoNavigators</span>, we specialize in:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Verified B2B contact list building</li>
                            <li>Data cleansing and validation</li>
                            <li>Lead segmentation and enrichment</li>
                            <li>Automation workflow setup for agencies</li>
                        </ul>
                        <p className="text-gray-700">
                            By combining automation with accurate data, you ensure that your campaigns run smoothly and
                            generate real, qualified leads — not noise.
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ FAQ Section */}
            <section className="max-w-5xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-semibold mb-6 text-brandOrange">
                    FAQs About Automation Tools for Lead Generation
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
                        >
                            <button
                                className="w-full flex justify-between items-center text-left"
                                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                            >
                                <span className="font-medium">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 transform transition-transform ${openFAQ === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openFAQ === i && (
                                <p className="mt-3 text-gray-600">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
