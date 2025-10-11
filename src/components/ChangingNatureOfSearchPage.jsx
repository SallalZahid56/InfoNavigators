"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ChangingNatureOfSearchPage() {
  return (
    <article className="bg-white text-gray-800 leading-relaxed">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white mt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/changing-nature.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl px-6 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Changing Nature of Search and Discovery:
            <span className="text-brandOrange block">
              How AI Is Transforming Internet Research and Lead Generation
            </span>
          </h1>
          <p className="text-lg text-gray-200">
            Discover how AI reshapes search, data verification, and market research —
            and how InfoNavigators leads this transformation.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
        <p className="mb-4">
          The way we discover and analyze information online has changed more in
          the last three years than in the previous two decades. Artificial
          Intelligence (AI) has redefined what it means to “search,” moving
          beyond simple keywords to intelligent, conversational, and
          context-aware discovery.
        </p>
        <p>
          Whether you’re a business owner, marketing professional, or virtual
          assistant, the transformation of online search impacts how you find
          leads, verify data, and conduct research. For service providers like{" "}
          <strong>InfoNavigators</strong>, this change represents both a
          challenge and an opportunity — a chance to combine human expertise
          with smart AI tools to deliver faster, more accurate, and
          data-driven results.
        </p>
      </section>

      {/* Section 1: Evolution of Search */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              The Evolution of Search: From Keywords to AI Conversations
            </h2>
            <h3 className="font-semibold text-xl mb-2">
              Traditional Search: The Era of Keywords
            </h3>
            <p className="mb-4">
              For years, digital research depended on keyword-driven searches.
              Professionals manually sorted through pages of results, verifying
              links, sources, and contact details. While this method worked, it
              was time-consuming and prone to human error.
            </p>

            <h3 className="font-semibold text-xl mb-2">
              AI Search: Understanding Context, Not Just Keywords
            </h3>
            <p>
              Now, AI-powered tools like Google’s SGE, ChatGPT, and Microsoft
              Copilot are changing the game. Instead of matching words, they
              understand intent and context — producing summaries and insights
              instantly. This evolution saves hours of manual research and
              enables smarter decision-making.
            </p>
          </div>

          <div className="relative h-80">
            <Image
              src="/ai-context-search.jpeg"
              alt="AI-powered search evolution"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Section 2: AI Summaries */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">
          AI Summaries and Smart Discovery Tools
        </h2>
        <p className="mb-6">
          AI-generated summaries now appear directly on search pages, giving
          users quick answers without clicking links. These summaries use
          machine learning to extract insights from multiple sources, offering
          the most relevant snapshot possible.
        </p>

        <ul className="space-y-3">
          {[
            "Speed: Get answers in seconds, not hours.",
            "Depth: Summaries highlight key metrics, company names, and patterns.",
            "Accuracy: AI cross-references multiple reputable sources.",
            "Efficiency: Frees time for personalized research and communication.",
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="text-brandOrange mt-1 w-5 h-5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6">
          However, AI summaries aren’t perfect — they may miss nuances or
          present outdated info. That’s where human intelligence and{" "}
          <strong>Data Verification</strong> become vital. At InfoNavigators, we
          ensure every dataset is accurate, verified, and up-to-date.
        </p>
      </section>

      {/* Section 3: Social Media Search */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 order-2 md:order-1">
            <Image
              src="/social-media-search.jpeg"
              alt="Social Media Search"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4">
              Social Media: The New Search Engine
            </h2>
            <p className="mb-4">
              Platforms like LinkedIn, YouTube, and TikTok have become powerful
              search tools — helping users discover brands, insights, and
              connections.
            </p>
            <ul className="space-y-2">
              <li>• LinkedIn: The #1 platform for B2B lead research.</li>
              <li>• TikTok & Instagram: Ideal for trend discovery.</li>
              <li>• YouTube: A hub for tutorials and market analysis.</li>
            </ul>
            import Link from "next/link";

            <p className="mb-4">
              InfoNavigators’{" "}
              <Link
                href="/services-page/market-research"
                className="text-blue-600 hover:underline font-semibold"
              >
                Market Research Services
              </Link>{" "}
              help clients identify and analyze their target audience’s digital footprint —
              across both traditional and emerging search platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Voice Search */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">
          Voice and Chat-Based Search Tools
        </h2>
        <p className="mb-4">
          Voice assistants and AI chat tools like ChatGPT, Perplexity, and Alexa
          are redefining search behavior. Users now “talk” to search engines,
          expecting conversational responses that include detailed insights and
          company data.
        </p>

        <p className="mb-4">
          For virtual assistants and lead generation services, this means using
          question-based phrasing and natural, long-tail keywords. Optimizing
          for conversational search ensures higher visibility and relevance.
        </p>
      </section>

      {/* Challenges */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            The Challenges of AI-Driven Discovery
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Accuracy and Verification:</strong> AI tools sometimes produce “hallucinated” or outdated results. Relying solely on them without human verification can risk reputation and revenue.
              Solution: Cross-check data using verified sources — a core part of our <Link
                href="/services-page/market-research"
                className="text-blue-600 hover:underline font-semibold"
              >
              Data Verification
              </Link>{" "} workflow.
            </li>
            <li>
              <strong>Privacy and Compliance:</strong> As AI tools scrape vast online data, privacy laws like GDPR and CCPA require strict compliance. Responsible research firms must ensure that data collection respects user rights.

            </li>
            <li>
              <strong>Decline in Website Traffic:</strong> With AI summarizing information directly on search pages, fewer users click through to websites. Businesses must focus on building brand authority and trust to remain discoverable.
            </li>
          </ol>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">
          Conclusion: Stay Ahead in the Search Evolution
        </h2>
        <p className="mb-4">
          The changing nature of search and discovery marks a new era for
          professionals in internet research, contact list building, and lead
          generation. AI may revolutionize how information is found, but human
          expertise ensures it’s used effectively.
        </p>
        <p className="mb-4">
          At <strong>InfoNavigators</strong>, we bridge this gap — combining
          advanced AI tools with skilled research professionals to deliver
          accurate, verified, and actionable insights.
        </p>

        <div className="bg-brandOrange/10 p-6 rounded-2xl mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            📩 Ready to enhance your research and lead generation strategy?
          </h3>
          <p>
            Explore our expert services in{" "}
            <strong><Link
                href="/services-page/internet-research"
                className="text-blue-600 hover:underline font-semibold"
              >
              Internet Research
              </Link>{" "} <Link
                href="/services-page/market-research"
                className="text-blue-600 hover:underline font-semibold"
              >
                Market Research
              </Link>{" "}</strong> and{" "}
            <Link
                href="/services-page/data-verification"
                className="text-blue-600 hover:underline font-semibold"
              >
              Data Verification
              </Link>{" "}
          </p>
          <a
            href="/services-page"
            className="inline-block mt-4 bg-brandOrange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Explore Services →
          </a>
        </div>
      </section>
    </article>
  );
}
