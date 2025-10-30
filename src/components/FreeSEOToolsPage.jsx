"use client";
import Image from "next/image";
import { useState } from "react";

export default function FreeSEOToolsPage() {
  const faqs = [
    {
      q: "Are free SEO tools enough for beginners?",
      a: "Yes, free tools like Google Search Console, Keyword Planner, and Ubersuggest are perfect to start learning SEO basics.",
    },
    {
      q: "Which is the best free SEO tool in 2025?",
      a: "Google Search Console remains the best — it provides direct insights from Google about your site’s performance.",
    },
    {
      q: "Do free SEO tools have limitations?",
      a: "Most have limited daily searches or features, but they’re excellent for learning and small projects.",
    },
    {
      q: "Can I use AI tools for SEO?",
      a: "Yes. Tools like ChatGPT can assist in keyword research, writing meta descriptions, and content planning — saving you time.",
    },
    {
      q: "How do I track my SEO progress?",
      a: "Use Google Analytics and Search Console together to track impressions, clicks, bounce rates, and conversions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-white text-gray-800 mt-14">
      {/* Section 1 */}
      <Section
        image="/seo-tools.jpg"
        reverse={false}
        title="Why SEO Tools Matter for Beginners"
        content={`Starting SEO in 2025 can feel overwhelming — algorithms evolve, ranking factors shift, and competition grows daily.
That’s where free SEO tools come in. They simplify keyword research, backlink tracking, and on-page optimization — giving you data-driven insights without spending a rupee or dollar.
In this guide by InfoNavigators, you’ll discover the top free SEO tools for beginners in 2025, how to use them, and why they’re must-haves for your digital marketing success.`}
      />

      {/* Section 2 */}
      <Section
        image="/seo-2.jpg"
        reverse
        title="1. Google Search Console – Your SEO Command Center"
        content={`Why It’s Essential:
 Google Search Console (GSC) is every beginner’s starting point. It helps you monitor your website’s performance directly from Google’s eyes.
Key Features:
Tracks keyword impressions & clicks
Identifies indexing issues
Analyzes Core Web Vitals
Shows which pages rank best
How to Use:
Verify your domain on Google Search Console.
Check the Performance and Coverage reports weekly.
Fix indexing or mobile usability issues immediately.
💡 Tip: Combine GSC data with Google Analytics for full performance insights.`}
      />

      {/* Section 3 */}
      <Section
        image="/seo-3.jpg"
        title="2. Google Keyword Planner – Find Keywords That Matter"
        content={`Why It’s Essential:
 Still one of the most reliable free keyword research tools, Google Keyword Planner helps you find what your audience searches for.
Key Features:
Free access via Google Ads
Monthly search volume & CPC data
Suggests related keywords
How to Use:
Enter a few seed keywords like “SEO services Pakistan” or “lead generation tools”.
Filter by country, language, or intent.
Focus on long-tail, low-competition keywords.
Example: “how to optimize WordPress site speed” might have lower competition but high conversion potential.`}
      />

      {/* Section 4 */}
      <Section
        image="/seo-4.jpg"
        reverse
        title="3. Ubersuggest – The Beginner’s SEO Suite"
        content={`Why It’s Essential:
 Created by Neil Patel, Ubersuggest provides keyword research, backlink data, and site audits — all in one dashboard.
Key Features:
Keyword difficulty & volume
SEO site audit & content ideas
Domain overview (for 3 free searches/day)
How to Use:
 Visit Ubersuggest → enter your site or keyword → get actionable recommendations to improve rankings.
💡 Pro tip: Check competitors’ ranking keywords and replicate their top-performing content.`}
      />

      {/* Section 5 */}
      <Section
        image="/seo-5.jpg"
        title="4. Ahrefs Webmaster Tools – Free SEO Health Check"
        content={`Why It’s Essential:
 Ahrefs is one of the most powerful SEO tools globally. Their free Webmaster Tools version lets you analyze your website’s health and backlinks.
Key Features:
Site audit for broken links, duplicate tags
Backlink profile overview
Keyword tracking
How to Use:
 Connect your domain via Ahrefs Webmaster Tools.
 The tool will instantly show crawl errors, toxic backlinks, and ranking opportunities.`}
      />

      {/* Section 6 */}
      <Section
        image="/screaming.jpg"
        reverse
        title="5. Screaming Frog SEO Spider – Site Audit Powerhouse"
        content={`Why It’s Essential:
 Even the free version (up to 500 URLs) of Screaming Frog helps beginners find on-page SEO issues quickly.
Key Features:
Detects broken links & redirects
Identifies missing title tags and meta descriptions
Analyzes canonical tags and duplicate content
How to Use:
Download from Screaming Frog.
Enter your website URL.
Export the report and fix the errors.
💡 Use Case: Find missing H1 tags or duplicate meta descriptions that hurt rankings.`}
      />

      {/* Section 7 */}
      <Section
        image="/seo-6.jpg"
        title="6. AnswerThePublic – Keyword Ideas from Real Users"
        content={`Why It’s Essential:
 If you’re creating content, AnswerThePublic gives insight into the questions real people ask on Google.
Key Features:
Visual keyword maps
Long-tail keyword ideas
Great for content marketing and blog planning
How to Use:
 Go to AnswerThePublic, type your keyword, and get hundreds of question-based ideas.
Example: Searching “technical SEO” returns “What are technical SEO issues?” or “How to fix technical SEO problems?” — perfect blog titles!`}
      />

      {/* Section 8 */}
      <Section
        image="/seo-7.jpg"
        reverse
        title="7. SEO Minion – Chrome Extension for Daily SEO Tasks"
        content={`Why It’s Essential:
 This handy browser extension helps you analyze on-page SEO instantly while browsing any website.
Key Features:
Check meta tags, headings, and links
Simulate Google SERP previews
Highlight broken links
How to Use:
 Install SEO Minion → open your site → click the icon to audit instantly.
💡 Best For: Quick checks before publishing new blog posts.`}
      />

      {/* Section 9 */}
      <Section
        image="/seo-8.jpg"
        title="8. Moz Free SEO Tools – Domain Authority & Link Checker"
        content={`Why It’s Essential:
 Moz offers free tools to track your domain authority (DA) and backlink profile — essential for evaluating SEO strength.
Key Features:
MozBar Chrome Extension
Domain Analysis
Keyword Explorer (limited searches)
How to Use:
 Visit Moz Free Tools and analyze your site’s authority score, top pages, and backlinks.
💡 Pro tip: Aim for a DA score of 30+ to rank in competitive niches.`}
      />

      {/* Section 10 */}
      <Section
        image="/seo-9.jpg"
        reverse
        title="9. GTmetrix – Website Speed Testing Tool"
        content={`Why It’s Essential:
 GTmetrix measures how fast your site loads and gives practical tips for optimization.
Key Features:
PageSpeed & YSlow scores
Waterfall loading visualization
Recommendations for compression, caching, and CDN
How to Use:
 Enter your site at GTmetrix.
 Focus on fixing “High Impact” issues like unoptimized images and render-blocking scripts.
Internal link: Check our guide on How to Boost Website Speed and Improve User Experience.`}
      />

      {/* Section 11 */}
      <Section
        image="/seo-10.jpg"
        title="10. Yoast SEO (for WordPress Users)"
        content={`Why It’s Essential:
 Yoast SEO helps beginners write optimized content without deep technical knowledge.
Key Features:
Real-time SEO scoring
Readability analysis
XML sitemap creation
How to Use:
 Install the free plugin from your WordPress dashboard → follow the setup wizard → optimize every post’s meta title, description, and keyword density.`}
      />

      {/* Section 12 */}
      <Section
        image="/seo-11.jpg"
        reverse
        title="11. Small SEO Tools – Multi-Utility Free Toolkit"
        content={`Why It’s Essential:
 SmallSEOTools offers over 50 free utilities, including plagiarism checker, keyword position tracker, and backlink maker.
Key Features:
Grammar & plagiarism checking
Keyword density analyzer
Image compressor
💡 Perfect for content creators, freelancers, and agencies.

Bonus: ChatGPT + AI SEO Tools (2025 Trend)
AI-powered assistants like ChatGPT and Jasper AI are reshaping SEO in 2025.
 You can use them for:
Generating blog outlines & meta tags
Creating schema markup
Keyword clustering
Competitor analysis summaries
💡 Combine AI tools with manual research to produce content faster without losing authenticity.

Internal & External Linking
Internal: Read our blog on Top Technical SEO Issues That Hurt Rankings (And How to Fix Them).
External: Learn about Google’s official SEO best practices at developers.google.com/search/docs.

Start Small, Optimize Smart
You don’t need expensive software to master SEO — start with these free tools, learn their insights, and apply them consistently.
Over time, you’ll understand what works, what doesn’t, and where to invest next.
🚀 Want expert help optimizing your site?
 Connect with InfoNavigators — we specialize in SEO audits, website speed optimization, and digital marketing strategy for small businesses and agencies.`}
      />

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          FAQs – Free SEO Tools for Beginners
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Section({ image, title, content, reverse = false }) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto px-6 py-14 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 w-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="whitespace-pre-line text-gray-700 leading-relaxed">
          {content}
        </p>
      </div>
    </section>
  );
}
