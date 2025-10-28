"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/**
 * Modern, elegant "What's in Next.js?" page component
 * - White background with dark text
 * - Preserves the content exactly as provided (line breaks & separators)
 * - Responsive layout, subtle animations, FAQ accordion
 *
 * Usage:
 * - Place file in `src/app/whats-nextjs/page.jsx` (App Router) or `src/pages/whats-nextjs.jsx`
 * - Ensure TailwindCSS is configured
 * - Install: npm i framer-motion lucide-react
 */

const SectionCard = ({ heading, children, imageSrc, reverse = false }) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div
        className={`grid gap-8 items-center md:grid-cols-2 ${
          reverse ? "md:grid-flow-col-dense" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {heading}
          </h3>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {children}
          </div>
        </motion.div>

        {/* Optional image (decorative). If imageSrc omitted, empty placeholder used */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl overflow-hidden shadow-md bg-gray-50"
        >
          {imageSrc ? (
            // Next/Image prefers images in /public or remote domains configured in next.config.js
            <div className="w-full h-56 md:h-64 relative">
              <Image
                src={imageSrc}
                alt={heading}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="w-full h-56 md:h-64 flex items-center justify-center text-gray-400">
              {/* decorative fallback */}
              <svg
                className="w-24 h-24 opacity-20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M3 7h18M3 12h18M3 17h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default function WhatsInNextJSPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "1. Is Next.js better than React.js?",
      a:
        "Next.js isn’t a replacement for React.js it’s a framework built on top of React. It adds features like server-side rendering and static site generation, making it more powerful for production use.",
    },
    {
      q: "2. Can I use Next.js without React?",
      a:
        "No, you can’t. Next.js is entirely based on React. You need React knowledge to build projects with Next.js.",
    },
    {
      q: "3. Is Next.js good for SEO?",
      a:
        "Yes, Next.js is highly SEO-friendly. With server-side rendering and pre-rendered pages, it ensures that search engines can easily crawl your website content.",
    },
    {
      q: "4. Is Next.js suitable for large applications?",
      a:
        "Absolutely. Next.js is designed for scalability, performance, and code organization, making it an excellent choice for enterprise-level projects.",
    },
    {
      q: "5. What are some alternatives to Next.js?",
      a:
        "Alternatives include Gatsby, Remix, and Nuxt.js (for Vue). Each has different use cases, but Next.js remains one of the most popular for React developers.",
    },
    {
      q: "6. Can I use Next.js for static websites?",
      a:
        "Yes, Next.js supports Static Site Generation (SSG), allowing developers to build fast, static websites with dynamic content capabilities.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What’s in Next.js?
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {`Next.js provides everything needed for full-stack web development in one place from routing and data fetching to API endpoints and performance tuning. It gives developers the convenience of React with the power of optimized rendering.`}
            </p>

            <div className="mt-6">
              <div className="mx-auto w-48 h-1 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* CONTENT BLOCKS - follow the exact text and separators */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <div className="whitespace-pre-line">
            {`________________________________________
Key Features of Next.js`}
          </div>
        </div>
      </section>

      {/* Key Features */}
        <section className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features of Next.js</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">
            1. Routing{"\n"}
            Next.js comes with a file-based routing system. Every file you create inside the pages
            folder automatically becomes a route, making navigation effortless without needing
            additional routing libraries.{"\n\n"}
            2. Rendering{"\n"}
            You can choose between:
            {"\n"}• Static Site Generation (SSG)
            {"\n"}• Server-Side Rendering (SSR)
            {"\n"}• Incremental Static Regeneration (ISR)
            {"\n"}These options give developers flexibility to render pages when and how they want.
            {"\n\n"}
            3. Data Fetching{"\n"}
            Next.js includes easy data-fetching methods like:
            {"\n"}• getStaticProps
            {"\n"}• getServerSideProps
            {"\n"}• getStaticPaths
            {"\n"}This makes it simple to fetch data for static or dynamic content, improving both
            performance and SEO.
            {"\n\n"}
            4. Styling{"\n"}
            You can use CSS Modules, Sass, Styled JSX, or Tailwind CSS directly. Next.js allows
            styling that’s component-scoped, preventing conflicts.
            {"\n\n"}
            5. Optimization{"\n"}
            Next.js optimizes performance automatically using image optimization, code splitting,
            and link prefetching, ensuring smooth and fast page loads.
            {"\n\n"}
            6. TypeScript{"\n"}
            It has first-class TypeScript support, allowing type-safe, maintainable code with zero
            extra configuration.
          </div>
        </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none text-gray-800">
          <div className="whitespace-pre-line">
            {`________________________________________
Pros of Using Next.js`}
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <strong>Improves Search Engine Optimization</strong>
              <div className="text-gray-700">Server-side rendering ensures that pages are indexable, improving visibility on Google and other search engines.</div>
            </li>
            <li>
              <strong>Open Graph Customization</strong>
              <div className="text-gray-700">Next.js allows easy management of metadata and Open Graph tags, ensuring your links look professional when shared online.</div>
            </li>
            <li>
              <strong>Enhanced Performance</strong>
              <div className="text-gray-700">Features like caching, image optimization, and lazy loading lead to faster websites and better Core Web Vitals.</div>
            </li>
            <li>
              <strong>Lazy Loading</strong>
              <div className="text-gray-700">Components and images load only when needed, reducing the initial bundle size and improving loading speed.</div>
            </li>
            <li>
              <strong>Accessibility</strong>
              <div className="text-gray-700">Next.js encourages best practices for accessibility, making your applications user-friendly for everyone.</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8 bg-gray-50 rounded-2xl">
        <div className="prose prose-lg max-w-none text-gray-800">
          <div className="whitespace-pre-line">
            {`________________________________________
Cons of Using Next.js`}
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <strong>Routing Limitations</strong>
              <div className="text-gray-700">File-based routing, while simple, can be restrictive for applications needing deeply nested or complex dynamic routes.</div>
            </li>
            <li>
              <strong>Build Time</strong>
              <div className="text-gray-700">Large sites with hundreds of pages can face longer build times due to pre-rendering processes.</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="prose prose-lg max-w-none text-gray-800">
          <div className="whitespace-pre-line">
            {`________________________________________
Differences Between React.js and Next.js`}
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="pr-8 pb-2 font-semibold">Feature</th>
                  <th className="pr-8 pb-2 font-semibold">React.js</th>
                  <th className="pr-8 pb-2 font-semibold">Next.js</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3">Rendering</td>
                  <td>Client-side only</td>
                  <td>SSR, SSG, ISR</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3">Routing</td>
                  <td>Requires React Router</td>
                  <td>Built-in file-based routing</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3">SEO</td>
                  <td>Limited</td>
                  <td>Excellent</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3">Setup</td>
                  <td>Manual configuration</td>
                  <td>Preconfigured</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3">Performance</td>
                  <td>Depends on optimization</td>
                  <td>Optimized by default</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="prose prose-lg max-w-none text-gray-800">
          <div className="whitespace-pre-line">
            {`________________________________________
Why Should You Use Next.js?`}
          </div>

          <p className="mt-4">
            {`Next.js is ideal for developers aiming to build scalable, fast, and SEO-optimized applications without handling complex configurations.`}
          </p>

          <p className="mt-3">
            {`There Are Various Benefits of Next.js:
•\tIntegrated backend API routes
•\tSeamless deployment with Vercel
•\tFast static and dynamic rendering
•\tEnhanced caching and optimization
•\tImproved security and reliability`}
          </p>

          <p className="mt-4">
            {`Real-World Uses of Next.js
Top companies that trust Next.js include:
•\tNetflix Jobs
•\tTwitch
•\tNike
•\tHulu
•\tTikTok Web`}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 bg-white">
        <div className="prose prose-lg max-w-none text-gray-800">
          <div className="whitespace-pre-line">
            {`________________________________________
Some of the Key Advantages Are:`}
          </div>

          <ul className="mt-4 space-y-2">
            <li>Enhanced performance</li>
            <li>Better SEO and accessibility</li>
            <li>Developer-friendly structure</li>
            <li>Strong TypeScript integration</li>
            <li>Optimized build processes</li>
          </ul>
        </div>
      </section>

      {/* REACT SECTION - exact content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none text-gray-800">
          <div className="whitespace-pre-line">
            {`________________________________________
Let’s Explore React.js Now
What’s in React.js?
React.js, created by Meta (Facebook), is a JavaScript library for building user interfaces. It follows a component-based architecture, allowing reusable and modular design.`}
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Key Features of React.js</h4>
            <ul className="mt-3 space-y-1">
              <li>•\tVirtual DOM for fast rendering</li>
              <li>•\tComponent-based development</li>
              <li>•\tJSX for cleaner syntax</li>
              <li>•\tUnidirectional data flow</li>
              <li>•\tLarge ecosystem and community support</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Pros of Using React.js</h4>
            <ul className="mt-3 space-y-1">
              <li>•\tHighly flexible and reusable</li>
              <li>•\tStrong community and library ecosystem</li>
              <li>•\tSupported by major tech companies</li>
              <li>•\tExcellent for building interactive UIs</li>
              <li>•\tLightweight and easy to integrate</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Cons of Using React.js</h4>
            <ul className="mt-3 space-y-1">
              <li>•\tRequires additional libraries for routing and SSR</li>
              <li>•\tFrequent updates can introduce learning challenges</li>
              <li>•\tLimited SEO capabilities in client-side rendering</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-semibold">Why Should You Use React.js?</h4>
            <p>
              React.js is perfect for creating dynamic, interactive, and responsive web interfaces. It’s lightweight and gives developers complete freedom over structure and libraries.
            </p>

            <p className="mt-3">
              <strong>Real-World Uses of React.js</strong>
              <br />
              Some global platforms using React.js include:
              <br />
              •\tFacebook
              <br />
              •\tInstagram
              <br />
              •\tAirbnb
              <br />
              •\tWhatsApp Web
              <br />
              •\tDropbox
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none text-gray-800">
          <div className="whitespace-pre-line">
            {`________________________________________
React.js vs. Next.js: Choosing the Right Framework
If you want SEO, performance, and scalability, go with Next.js.
If you prefer flexibility and a simpler setup for SPAs, React.js fits better.
Ultimately, React.js is the foundation — and Next.js builds on it to deliver a complete, production-ready framework.`}
          </div>
        </div>
      </section>

      {/* FAQs (accordion) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                <span>{f.q}</span>
                <span className="ml-4">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="px-6 pb-5 overflow-hidden text-gray-700"
              >
                <div>{f.a}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}