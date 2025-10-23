"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Puzzle,
  ShieldCheck,
  Mic,
  Gauge,
  Globe,
  Users,
  PiggyBank,
  Rocket,
  Plus,
  Minus,
} from "lucide-react";

// ✅ Helper component for reusable content sections
const Section = ({
  idx,
  icon: Icon,
  title,
  children,
  imageSrc = "/blog-cover.jpg", // ✅ Make sure this file exists in /public/images/webdev/
  reverse = false,
}) => (
  <section className="max-w-6xl mx-auto px-6 py-12">
    <div
      className={`grid md:grid-cols-2 gap-8 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-gradient-to-tr from-brandOrange to-orange-400 text-white shadow-md">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <div className="prose max-w-none text-gray-700">{children}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src={imageSrc}
          alt={title}
          width={900}
          height={600}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default function WebDevelopmentTrends2025() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: "What are the top web development trends in 2025?",
      answer:
        "The major web development trends in 2025 include AI-powered websites, low-code and no-code platforms, progressive web apps (PWAs), serverless architecture, and headless CMS. These technologies make websites faster, smarter, and easier to maintain.",
    },
    {
      question: "How is AI transforming web development in 2025?",
      answer:
        "AI is helping developers automate coding, personalize user experiences, enhance SEO, and optimize design. AI-powered web development tools can now generate layouts, analyze visitor behavior, and recommend real-time content improvements.",
    },
    {
      question:
        "Why should businesses adopt low-code or no-code web development tools?",
      answer:
        "Low-code and no-code tools allow businesses to build and deploy websites faster without heavy coding. This trend reduces development costs and helps startups or SMEs launch online platforms quickly while maintaining professional quality.",
    },
    {
      question:
        "What are Progressive Web Apps (PWAs), and why are they popular in 2025?",
      answer:
        "PWAs are hybrid web applications that work like mobile apps. In 2025, they remain a major trend because they offer fast loading, offline functionality, and cross-device compatibility, improving user experience and SEO performance.",
    },
    {
      question: "How important is website performance and Core Web Vitals in 2025?",
      answer:
        "Extremely important. Google continues to prioritize Core Web Vitals — metrics like page load speed, interactivity, and visual stability — when ranking websites. Optimizing for these ensures better search visibility and higher user satisfaction.",
    },
    {
      question: "What is serverless architecture, and how does it benefit web projects?",
      answer:
        "Serverless architecture allows developers to run applications without managing servers. It reduces hosting costs, scales automatically with traffic, and improves reliability — making it ideal for modern, data-driven websites in 2025.",
    },
    {
      question: "Should businesses outsource web development in 2025?",
      answer:
        "Yes, outsourcing web development is still cost-effective in 2025. Many businesses in Pakistan, South Asia, and beyond rely on professional agencies for advanced solutions like AI integration, UX design, and scalable digital platforms.",
    },
    {
      question: "How can companies prepare for future web development changes?",
      answer:
        "Businesses should invest in modern technologies, hire skilled developers, and partner with innovative agencies like InfoNavigators to stay updated with trends like AI, automation, and performance optimization.",
    },
    {
      question: "What role does voice search play in modern web development?",
      answer:
        "Voice search optimization is essential in 2025. Developers now focus on semantic SEO, natural language queries, and structured data to help websites rank in voice-based searches across mobile devices and smart assistants.",
    },
    {
      question: "Which industries benefit most from these web development trends?",
      answer:
        "E-commerce, healthcare, education, SaaS, and finance sectors benefit the most. These industries rely heavily on automation, AI, and UX improvements to deliver seamless digital experiences and attract more online customers.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center text-white"
        aria-label="Hero - Web Development Trends 2025"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/blog-cover.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-5xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Web Development Trends in 2025: What Businesses Need to Know
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore the key web development innovations shaping 2025 — from AI
            automation to low-code platforms and PWAs.
          </p>
        </motion.div>
      </section>

      {/* ✅ 1–10 Sections */}
      <Section
        idx={1}
        icon={Cpu}
        title="1. AI-Powered Web Development in 2025"
        imageSrc="/ai-powered.jpg"
      >
        <p>
          Artificial Intelligence (AI) has become the engine of modern
          development. In 2025, AI-powered web development tools are enabling
          developers to automate code generation, enhance UX, and deliver
          personalized digital experiences.
        </p>
        <h4>Key Benefits:</h4>
        <ul>
          <li>
            <strong>Faster Development:</strong> AI coding assistants like
            GitHub Copilot and ChatGPT reduce development time.
          </li>
          <li>
            <strong>Smarter Design:</strong> AI tools analyze user behavior to
            optimize layouts and navigation.
          </li>
          <li>
            <strong>Predictive UX:</strong> Machine learning personalizes site
            content in real time.
          </li>
        </ul>
        <h4>Impact of AI on web development services in 2025:</h4>
        <p>
          Agencies and freelancers can now deliver high-performing websites
          faster while lowering costs — a huge advantage for small and
          medium-sized businesses in competitive markets.
        </p>
      </Section>

      <Section
        idx={2}
        icon={Puzzle}
        title="2. Low-Code and No-Code Platforms Take the Lead"
        imageSrc="/low-code.jpg"
        reverse
      >
        <p>
          The demand for speed and flexibility has given rise to low-code and
          no-code web development trends in 2025. Businesses are turning to
          tools like Webflow, Bubble, and Wix Studio to create powerful web
          applications without deep coding knowledge.
        </p>
        <h4>Why It Matters:</h4>
        <ul>
          <li>Reduces dependency on full-stack developers.</li>
          <li>Enables marketers and non-tech founders to build MVPs quickly.</li>
          <li>Cuts down cost and delivery time dramatically.</li>
        </ul>
        <h4>Result:</h4>
        <p>
          Businesses can iterate faster and launch projects with minimal
          development overhead — a major shift in the web development business
          model in 2025.
        </p>
      </Section>

      <Section
        idx={3}
        icon={Sparkles}
        title="3. Progressive Web Apps (PWAs) Remain a Top Priority"
        imageSrc="/pwaa.jpeg"
      >
        <p>
          Progressive Web Apps (PWAs) have matured into a must-have technology
          for businesses. In 2025, PWAs combine the best of websites and mobile
          apps — delivering fast loading speeds, offline access, and app-like
          experiences without app store downloads.
        </p>
        <h4>Benefits of PWAs:</h4>
        <ul>
          <li>Faster load times = better conversions.</li>
          <li>Offline functionality = improved reliability.</li>
          <li>Lower development cost compared to native apps.</li>
        </ul>
        <h4>Example:</h4>
        <p>
          Brands like Starbucks and Twitter Lite rely on PWAs for superior
          performance and user engagement — a strategy every growing business
          should consider.
        </p>
      </Section>

      <Section
        idx={4}
        icon={ShieldCheck}
        title="4. Headless CMS and Serverless Architecture Revolutionize Development"
        imageSrc="/headlesss.jpeg"
        reverse
      >
        <p>
          The shift toward headless CMS and serverless architecture is changing
          how developers build websites.
        </p>
        <h4>Headless CMS in 2025</h4>
        <p>
          Platforms like Strapi, Contentful, and Sanity allow content to be
          delivered via APIs to any front-end framework — making sites faster,
          flexible, and future-ready.
        </p>
        <h4>Serverless Architecture</h4>
        <p>
          By using platforms like AWS Lambda, Google Cloud Functions, or Vercel,
          developers eliminate server management, lower hosting costs, and
          improve scalability.
        </p>
        <h4>Result:</h4>
        <p>
          Businesses can scale easily and reduce maintenance — a key web
          performance optimization trend for 2025.
        </p>
      </Section>

      <Section
        idx={5}
        icon={Mic}
        title="5. Voice Search Optimization Becomes Standard"
        imageSrc="/voice-search.jpeg"
      >
        <p>
          With billions of smart devices now in homes and offices, voice search
          optimization is one of the most important web development trends in
          2025. Websites optimized for voice queries perform better in search
          rankings and accessibility.
        </p>
        <h4>How to Prepare:</h4>
        <ul>
          <li>Implement structured data and schema markup.</li>
          <li>Focus on conversational keyword targeting.</li>
          <li>Use fast, mobile-optimized frameworks like Next.js or Astro.</li>
        </ul>
        <p>
          Voice search is particularly relevant for local businesses, where
          customers use natural language to find nearby services.
        </p>
      </Section>

      <Section
        idx={6}
        icon={Gauge}
        title="6. Web Performance, Core Web Vitals, and Accessibility"
        imageSrc="/core-web-vitals.avif"
        reverse
      >
        <p>
          Google’s Core Web Vitals remain a critical ranking factor in 2025.
          Websites that load faster, interact smoothly, and remain visually
          stable outperform slower competitors.
        </p>
        <h4>Focus Areas for Businesses:</h4>
        <ul>
          <li>
            <strong>LCP (Largest Contentful Paint):</strong> Improve page load
            speeds under 2.5 seconds.
          </li>
          <li>
            <strong>FID (First Input Delay):</strong> Optimize JavaScript
            execution.
          </li>
          <li>
            <strong>CLS (Cumulative Layout Shift):</strong> Maintain design
            stability.
          </li>
        </ul>
        <p>
          Accessibility (A11y) also plays a central role in SEO and user trust.
          Businesses investing in inclusive design will win both ethically and
          commercially.
        </p>
      </Section>

      <Section
        idx={7}
        icon={Globe}
        title="7. Decentralized Web and Blockchain Integration"
        imageSrc="/decentrilized.jpeg"
      >
        <p>
          The decentralized web (Web3) continues to evolve. In 2025, blockchain
          integration is not just about cryptocurrency — it’s about data
          ownership, transparency, and trust.
        </p>
        <h4>Web3 Use Cases for Businesses:</h4>
        <ul>
          <li>Smart contracts for automated transactions.</li>
          <li>Blockchain authentication for secure logins.</li>
          <li>Decentralized hosting for censorship-resistant content.</li>
        </ul>
        <p>
          Forward-thinking agencies are experimenting with decentralized web
          technologies to future-proof their digital offerings.
        </p>
      </Section>

      <Section
        idx={8}
        icon={Users}
        title="8. Outsourcing and Hybrid Team Models in 2025"
        imageSrc="/hybrid.jpeg"
        reverse
      >
        <p>
          With globalization and AI, outsourcing web development trends in 2025
          have evolved beyond cost-saving. Companies now hire specialized remote
          teams or hybrid freelance + AI models to scale their projects faster.
        </p>
        <h4>Why Businesses Outsource:</h4>
        <ul>
          <li>Access to skilled global developers.</li>
          <li>Reduced infrastructure and HR costs.</li>
          <li>24/7 productivity across time zones.</li>
        </ul>
        <p>
          The new web agency model — freelance + AI — allows agencies to remain
          agile, creative, and budget-friendly, particularly in emerging markets
          like Pakistan and South Asia.
        </p>
      </Section>

      <Section
        idx={9}
        icon={PiggyBank}
        title="9. Restructuring Cost Structures and Value-Based Pricing"
        imageSrc="/price-structure.jpeg"
      >
        <p>
          Businesses are rethinking how they pay for web development. Instead of
          hourly rates, many now prefer value-based pricing models — paying
          based on performance, traffic growth, or ROI.
        </p>
        <p>
          Restructure cost structure in web development services allows for
          transparency, scalability, and alignment of goals between developers
          and clients.
        </p>
      </Section>

      <Section
        idx={10}
        icon={Rocket}
        title="10. What Businesses Need to Do in 2025"
        imageSrc="/future-business.jpeg"
        reverse
      >
        <p>To thrive in the changing web ecosystem, businesses should:</p>
        <ul>
          <li>
            Invest in marketing and web technology tools — automation, AI, and
            analytics.
          </li>
          <li>Adopt agile and hybrid development models.</li>
          <li>Prioritize UX, performance, and accessibility.</li>
          <li>
            Stay informed about trends like serverless, low-code, and AI
            integration.
          </li>
          <li>
            Partner with innovative web agencies that understand the latest
            technologies.
          </li>
        </ul>
        <p>
          By adapting to these web development trends 2025, companies can create
          digital experiences that are not only fast and secure but also deeply
          engaging.
        </p>
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
    </main>
  );
}
