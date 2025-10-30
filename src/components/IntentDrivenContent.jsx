"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Clipboard } from "lucide-react";

/**
 * Reusable Section component
 * - icon: lucide-react icon component
 * - title: section title
 * - children: section body (can use whitespace-pre-line)
 * - imageSrc: path under /public or empty
 * - reverse: swap columns on md+
 * - showImage: whether to render the image column
 */
const Section = ({ icon: Icon, title, children, imageSrc = "", reverse = false, showImage = true }) => (
  <section className="max-w-6xl mx-auto px-6 py-12">
    <div className={`grid items-center gap-8 ${showImage ? "md:grid-cols-2" : "grid-cols-1"}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className={`space-y-4 ${reverse ? "md:order-2" : ""}`}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 text-white shadow-lg">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">{children}</div>
      </motion.div>

      {showImage && imageSrc && (
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className={`rounded-2xl overflow-hidden shadow-xl ${reverse ? "md:order-1" : ""}`}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={900}
            height={600}
            className="w-full h-[420px] md:h-[500px] object-cover"
          />
        </motion.div>
      )}
    </div>
  </section>
);

export default function IntentDrivenContent() {

  return (
    <article className="bg-white text-gray-900">
      {/* HERO */}
      <header className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Fuel Your Pipeline: Generating Qualified Leads with Intent-Driven Content Experiences
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl">
              In today's competitive digital landscape, merely creating content isn't enough. To truly drive business growth, you need to attract, engage, and convert individuals who are genuinely interested in what you offer. This is where intent-driven content experiences come into play, serving as a powerful engine for generating qualified leads.
            </p>
          </motion.div>
        </div>
      </header>

      {/* WHAT IS INTENT */}
      <Section
        icon={Search}
        title="What is Intent-Driven Content?"
        imageSrc="/qualified-leads.jpg"
      >
        <div className="whitespace-pre-line">
{`Intent-driven content is precisely what it sounds like: content crafted with a deep understanding of your audience's intent at various stages of their buyer's journey. It moves beyond generic blog posts and focuses on providing specific, valuable information that addresses their questions, pain points, and aspirations.

Think of it this way: someone searching for "best project management software for small businesses" has a different intent than someone searching for "what is agile methodology." Your content should cater to these distinct needs.`}
        </div>
      </Section>

      {/* POWER OF UNDERSTANDING INTENT */}
      <Section icon={Users} title="The Power of Understanding Intent" reverse imageSrc="/awareness.jpg">
        <div className="whitespace-pre-line">
{`Understanding user intent allows you to:
Attract the Right Audience: By targeting specific keywords and topics, you draw in individuals who are actively seeking solutions that you provide. This reduces wasted effort and increases the quality of your website traffic.
Increase Engagement: When content directly addresses a user's intent, they are more likely to spend time on your site, consume more content, and ultimately, engage with your brand.
Build Trust and Authority: Providing valuable, relevant information positions your brand as a helpful expert, building trust and credibility with potential customers.
Accelerate the Buyer's Journey: By guiding users through a logical progression of content that matches their evolving intent, you effectively nurture them from awareness to consideration to decision.
Generate Qualified Leads: When users consume content that aligns with their intent and find your solutions compelling, they are much more likely to convert into valuable leads.`}
        </div>
      </Section>

      {/* STEP-BY-STEP APPROACH */}
      <Section icon={Clipboard} title="Crafting Intent-Driven Content Experiences: A Step-by-Step Approach" imageSrc="/strategy.jpg">
        <div className="whitespace-pre-line">
{`Here's how to build a robust strategy for generating qualified leads through intent-driven content:`}
        </div>

        <div className="mt-4 space-y-6 text-gray-700">
          <div>
            <h4 className="text-lg font-semibold">1. Know Your Audience (Inside and Out):</h4>
            <p className="mt-2">Before you write a single word, you need a deep understanding of your target audience. Develop detailed buyer personas that outline their demographics, psychographics, pain points, goals, and preferred channels for content consumption. What questions are they asking at each stage of their journey?</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">2. Map Content to the Buyer's Journey:</h4>
            <div className="mt-2 whitespace-pre-line">
{`Once you understand your personas, map out the content you'll create for each stage of their journey:
Awareness Stage (Top of Funnel): Focus on educational content that addresses broad pain points and introduces potential solutions. This could include blog posts, infographics, checklists, and explainer videos. Example: "5 Common Challenges for Small Business Owners"
Consideration Stage (Middle of Funnel): Provide more detailed information that helps users evaluate different options, including yours. Whitepapers, e-books, case studies, comparison guides, and webinars are excellent for this stage. Example: "Choosing the Right Project Management Software: A Comprehensive Guide"
Decision Stage (Bottom of Funnel): Offer content that directly supports the purchasing decision. This includes product demos, free trials, consultations, testimonials, and pricing guides. Example: "Request a Demo of [Your Software Name]"`}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">3. Leverage SEO for Intent Discovery:</h4>
            <p className="mt-2">Conduct thorough keyword research to understand what your audience is searching for. Look beyond generic keywords to identify long-tail keywords and questions that reveal specific intent. Tools like Semrush, Ahrefs, and Google Keyword Planner can be invaluable here.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">4. Create High-Quality, Value-Driven Content:</h4>
            <p className="mt-2">The quality of your content is paramount. It must be well-researched, engaging, easy to understand, and genuinely helpful. Don't just regurgitate information; offer insightful solutions.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">5. Optimize for Conversion:</h4>
            <p className="mt-2">Every piece of intent-driven content should have a clear call to action (CTA). This might be downloading a whitepaper, subscribing to a newsletter, requesting a demo, or contacting sales. Ensure your CTAs are prominent, compelling, and relevant to the user's current stage of intent.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">6. Implement Lead Capture Mechanisms:</h4>
            <p className="mt-2">Use forms, landing pages, and pop-ups strategically to capture lead information. For top-of-funnel content, a simple email address might suffice. For bottom-of-funnel content, you might ask for more detailed information.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">7. Nurture Leads with Automated Workflows:</h4>
            <p className="mt-2">Once you've captured a lead, don't let them go cold. Implement email nurturing campaigns that deliver additional relevant content based on their initial interest and progress through the buyer's journey. Personalize these communications for maximum impact.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">8. Analyze and Iterate:</h4>
            <p className="mt-2">Continuously monitor the performance of your content. Track metrics such as page views, time on page, bounce rate, conversion rates, and lead quality. Use these insights to refine your content strategy, optimize existing content, and identify new content opportunities.</p>
          </div>
        </div>
      </Section>
    </article>
  );
}
