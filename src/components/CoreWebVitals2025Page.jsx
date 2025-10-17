"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp } from "lucide-react";

// 🌟 Local UI components
const Card = ({ children, className = "" }) => (
    <div
        className={`bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 ${className}`}
    >
        {children}
    </div>
);

const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
    <button
        {...props}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
        {children}
    </button>
);

import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex justify-between items-center"
      >
        <span className="font-semibold text-gray-800 text-lg">{question}</span>
        <span className="text-blue-600 text-2xl">{open ? "−" : "+"}</span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-6 pb-4 text-gray-600 leading-relaxed"
      >
        {answer}
      </motion.div>
    </div>
  );
};


export default function CoreWebVitals2025() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-hidden mt-10">
            {/* 🌄 HERO SECTION */}
            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
                    }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-white max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                        Core Web Vitals 2025: Improve LCP, INP, and CLS for Better Rankings
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Boost your website’s performance and SEO with cutting-edge Core Web
                        Vitals optimization — powered by{" "}
                        <span className="font-semibold text-blue-400">InfoNav</span>.
                    </p>
                </motion.div>
            </section>

            {/* 📚 TABLE OF CONTENTS */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
                    Table of Contents
                </h2>
                <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 border border-gray-100">
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 md:text-lg">
                        <li>What Are Core Web Vitals and Why Do They Matter in 2025?</li>
                        <li>Understanding Core Web Vitals Metrics: LCP, INP, and CLS</li>
                        <li>How to Improve Your Core Web Vitals Score</li>
                        <li>Common Mistakes That Hurt Core Web Vitals</li>
                        <li>Mobile Optimization Strategies</li>
                        <li>Using Lazy Loading and Caching</li>
                        <li>Future Trends Beyond 2025</li>
                        <li>Building a Future-Proof Web Experience</li>
                    </ul>
                </div>
            </section>

            {/* 🌐 MAIN CONTENT */}
            <section className="max-w-6xl mx-auto px-6 space-y-24 pb-20">
                {/* 🧠 Intro Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
                        What Are Core Web Vitals and Why Do They Matter in 2025?
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto text-center">
                        In 2025, website performance is no longer optional — it’s a major
                        ranking factor. Google’s Core Web Vitals measure how fast your site
                        loads, how responsive it feels, and how visually stable it is.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto text-center mt-4">
                        These metrics — Largest Contentful Paint (LCP), Interaction to Next
                        Paint (INP), and Cumulative Layout Shift (CLS) — directly affect your
                        SEO, engagement, and conversions.
                    </p>
                </motion.div>

                {/* ⚡ Metrics Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "LCP (Largest Contentful Paint)",
                            icon: Zap,
                            goal: "Under 2.5s",
                            tips: [
                                "Compress and resize images",
                                "Use lazy loading",
                                "Reduce TTFB",
                                "Implement CDN",
                            ],
                            color: "from-blue-500/20 to-blue-200/10",
                        },
                        {
                            title: "INP (Interaction to Next Paint)",
                            icon: TrendingUp,
                            goal: "Under 200ms",
                            tips: [
                                "Minify or defer JavaScript",
                                "Reduce main-thread blocking",
                                "Use code splitting",
                                "Audit with Lighthouse",
                            ],
                            color: "from-purple-500/20 to-purple-200/10",
                        },
                        {
                            title: "CLS (Cumulative Layout Shift)",
                            icon: Smartphone,
                            goal: "Below 0.1",
                            tips: [
                                "Define image/video dimensions",
                                "Reserve ad space",
                                "Use font-display: swap",
                                "Avoid layout shifts",
                            ],
                            color: "from-green-500/20 to-green-200/10",
                        },
                    ].map(({ title, icon: Icon, goal, tips, color }) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`bg-gradient-to-br ${color}`}>
                                <CardContent>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Icon className="text-blue-600 w-7 h-7" />
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">
                                        ✅ Goal: <span className="font-medium">{goal}</span>
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                        {tips.map((tip) => (
                                            <li key={tip}>{tip}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* 💡 Improved Content Sections */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid gap-16"
                >
                    {/* ✅ How to Improve */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">
                            How to Improve Your Core Web Vitals Score
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Improving Core Web Vitals requires a combination of Technical SEO and performance engineering. Begin by identifying what slows your site using tools like Google PageSpeed Insights, Lighthouse, and WebPageTest.
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                            <li>Enable browser caching</li>
                            <li>Lazy-load below-the-fold assets</li>
                            <li>Eliminate unused CSS/JS</li>
                            <li>Optimize server response time</li>
                            <li>Reduce third-party scripts</li>
                        </ul>
                    </div>

                    {/* 🚫 Common Mistakes */}
                    <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-md border border-blue-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Common Mistakes That Hurt Core Web Vitals
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Even well-designed websites can suffer from poor performance due to avoidable issues such as:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Uncompressed or oversized images</li>
                            <li>Unused or blocking JavaScript</li>
                            <li>Missing width/height on media</li>
                            <li>Loading too many fonts/icons</li>
                            <li>Heavy third-party scripts</li>
                        </ul>
                        <p className="mt-4 font-semibold text-blue-600">
                            💡 Pro Tip from InfoNav: Perform a quarterly Technical SEO audit to uncover and fix these bottlenecks before they affect your rankings.
                        </p>
                    </div>

                    {/* 📱 Mobile Optimization */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">
                            Mobile Optimization for Core Web Vitals
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Over 70% of global web traffic comes from mobile devices — and that means optimizing for smaller screens is crucial.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Use responsive design with fluid grids</li>
                            <li>
                                Optimize images using <code>srcset</code>
                            </li>
                            <li>Reduce DOM size and animations</li>
                            <li>Test with Lighthouse mobile emulation</li>
                            <li>Use AMP for low-bandwidth users</li>
                        </ul>
                    </div>

                    {/* ⚙️ Lazy Loading & Caching */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Using Lazy Loading and Efficient Caching
                        </h2>
                        <p className="text-gray-600 mb-3">
                            Lazy loading delays non-essential assets until users scroll near them, reducing initial load time and improving LCP and Total Blocking Time (TBT).
                            Add loading="lazy" to image and iframe tags or use lightweight libraries like Lozad.js for advanced control.
                        </p>
                        <p className="text-sm bg-gray-100 px-3 py-2 rounded-md inline-block">
                            Example: <code>loading="lazy"</code>
                        </p>
                        <p className="mt-4 text-gray-600">
                            Caching, meanwhile, ensures repeat visitors don’t re-download every file.
                            Use Cache-Control, ETag, and CDN caching to store assets closer to users, reducing server load and improving Time to First Byte (TTFB).
                        </p>
                    </div>

                    {/* 🔮 Future Trends */}
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">
                            Future Trends: What’s Next for Core Web Vitals Beyond 2025
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Google continuously refines how it measures user experience. The move from First Input Delay (FID) to Interaction to Next Paint (INP) shows responsiveness is becoming even more critical.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Scroll stability</li>
                            <li>Animation smoothness</li>
                            <li>Battery and resource efficiency</li>
                        </ul>
                        <p className="mt-4 text-gray-600">
                            Google’s move toward Real User Monitoring (RUM) means user-centric
                            performance will matter even more.
                        </p>
                    </div>

                    {/* 🧾 Summary Table */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Quick Summary Table
                        </h2>
                        <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
                            <thead className="bg-blue-100 text-gray-900">
                                <tr>
                                    <th className="p-3 text-left">Metric</th>
                                    <th className="p-3 text-left">Ideal Score</th>
                                    <th className="p-3 text-left">Tools</th>
                                    <th className="p-3 text-left">Optimization Tips</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-gray-50 even:bg-white">
                                    <td className="p-3 font-medium">LCP</td>
                                    <td className="p-3">≤ 2.5s</td>
                                    <td className="p-3">Lighthouse, PSI</td>
                                    <td className="p-3">Compress images, use CDN</td>
                                </tr>
                                <tr className="odd:bg-gray-50 even:bg-white">
                                    <td className="p-3 font-medium">INP</td>
                                    <td className="p-3">≤ 200ms</td>
                                    <td className="p-3">Chrome DevTools</td>
                                    <td className="p-3">Defer JS, reduce tasks</td>
                                </tr>
                                <tr className="odd:bg-gray-50 even:bg-white">
                                    <td className="p-3 font-medium">CLS</td>
                                    <td className="p-3">≤ 0.1</td>
                                    <td className="p-3">Layout Instability API</td>
                                    <td className="p-3">Reserve ad space</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* 💬 FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto py-20"
                >
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
                        Frequently Asked Questions (FAQ)
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What are Core Web Vitals and why are they important for SEO in 2025?",
                                a: "Core Web Vitals are Google’s key performance metrics — Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) — that measure how fast, stable, and responsive a website feels to users. They directly impact rankings, engagement, and conversions.",
                            },
                            {
                                q: "What is a good LCP, INP, and CLS score for Google rankings?",
                                a: "According to Google’s benchmarks: LCP under 2.5 seconds, INP under 200 milliseconds, and CLS below 0.1. Meeting these benchmarks improves both user experience and SEO visibility.",
                            },
                            {
                                q: "How can I improve my Core Web Vitals quickly?",
                                a: "Compress large images, enable lazy loading, use a CDN, and defer non-critical scripts. Regularly audit your site using Lighthouse or PageSpeed Insights for continuous improvement.",
                            },
                            {
                                q: "Do Core Web Vitals affect mobile SEO rankings?",
                                a: "Yes. Mobile experience heavily influences Core Web Vitals. A slow or unstable mobile site can lower rankings and increase bounce rates. Combine mobile optimization with Local SEO for the best results.",
                            },
                            {
                                q: "What happens if my website fails Core Web Vitals tests?",
                                a: "Failing Core Web Vitals won’t remove your site from search results, but it can reduce rankings and conversions. You can recover by improving hosting, layout stability, and interactive performance.",
                            },
                            {
                                q: "How often should I check my Core Web Vitals?",
                                a: "You should check Core Web Vitals at least once per quarter to ensure updates or new content don’t degrade site performance.",
                            },
                            {
                                q: "Can improving Core Web Vitals increase conversions?",
                                a: "Absolutely. Faster, smoother sites improve engagement and conversions. Pair performance optimization with Off-Page SEO to maximize results.",
                            },
                        ].map(({ q, a }, i) => (
                            <FAQItem key={i} question={q} answer={a} />
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
