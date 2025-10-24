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
  Settings,
  HardDrive,
  Wrench,
  Cloud,
  Layers,
  Rocket,
  BarChart3,
  Info,
  Plus,
  Minus,
} from "lucide-react";

// ✅ Reusable Section Component (you already have this — just reuse or import)
const Section = ({
  idx,
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
      question: "What is the ideal website load time?",
      answer:
        "Under 3 seconds. Faster sites reduce bounce rates and improve user trust.",
    },
    {
      question: "Does website speed affect SEO?",
      answer:
        "Yes. Speed is a Google ranking factor, impacting visibility and user engagement.",
    },
    {
      question: "What tools test website speed?",
      answer:
        "Use PageSpeed Insights, GTmetrix, and Pingdom.",
    },
    {
      question:
        "How can I improve mobile site speed?",
      answer:
        "Use responsive design, optimize images, and minimize scripts.",
    },
    {
      question:
        "Can InfoNavigators help improve my site speed?",
      answer:
        "Absolutely. Visit our WordPress Optimization Services to boost performance, speed, and conversions.ss",
    },
  ];
  return (
    <article className="pb-20">
      {/* Hero Section */}
      <section className="text-center py-32 bg-gradient-to-r from-orange-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Website Speed Defines Success in 2025
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          In 2025, website speed isn’t just a technical metric — it’s a key ranking factor and user trust indicator. Google’s algorithms now prioritize Core Web Vitals, which directly measure how fast your site loads and how enjoyable it is to use.
        </p>

        <p className="max-w-3xl mx-auto text-gray-600">
          A slow website means lower engagement, fewer conversions, and a higher bounce rate. According to Google Research, if your page takes longer than 3 seconds to load, over 50% of users abandon it
        </p>
      </section>

      {/* Intro */}
      <Section idx={1} icon={Gauge} title="Why Website Speed Matters" showImage={false}>
        <p>
          In 2025, website speed isn’t just a technical metric — it’s a key
          ranking factor and user trust indicator. Google’s algorithms now
          prioritize Core Web Vitals, which directly measure how fast your site
          loads and how enjoyable it is to use.
        </p>
        <p>
          A slow website means lower engagement, fewer conversions, and a higher
          bounce rate. If your page takes longer than 3 seconds to load, over
          50% of users abandon it.
        </p>
        <p>
          At <strong>InfoNavigators</strong>, we specialize in improving website
          performance and user experience — helping businesses build faster,
          conversion-ready websites that stand out in search results.
        </p>
      </Section>

      {/* Measure Speed */}
      <Section
        idx={2}
        icon={BarChart3}
        title="1. Measure Your Website Speed Before You Optimize"
        imageSrc="/measure-your-web.jpg"
      >
        <p>
          Before making changes, start by testing your site performance using trusted
          tools:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Google PageSpeed Insights</li>
          <li>GTmetrix</li>
          <li>Pingdom Tools</li>
          <li>Chrome DevTools Lighthouse</li>
        </ul>

        <p className="mt-4">
          These tools show your <strong>Core Web Vitals</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>LCP (Largest Contentful Paint)</strong> → Measures loading
            performance
          </li>
          <li>
            <strong>FID (First Input Delay)</strong> → Measures interactivity
          </li>
          <li>
            <strong>CLS (Cumulative Layout Shift)</strong> → Measures visual stability
          </li>
        </ul>

        <p className="mt-4 font-semibold text-green-600">✅ Targets for 2025:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>LCP &lt; 2.5s</li>
          <li>FID &lt; 100ms</li>
          <li>CLS &lt; 0.1</li>
        </ul>

        <p className="mt-4">
          If your scores are poor, our{" "}
          <strong>Website Speed Optimization Services</strong> can help identify and
          fix key bottlenecks.
        </p>
      </Section>


      {/* Optimize Images */}
      <Section
        idx={3}
        icon={Image}
        title="2. Optimize Images Without Compromising Quality"
        reverse
        imageSrc="/optimize-images.jpg"
      >
        <p>
          Images make websites beautiful — but they also slow them down if not
          optimized properly.
        </p>

        <h4 className="mt-4 font-semibold text-gray-900">Quick Fixes:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Convert images to <strong>WebP</strong> or <strong>AVIF</strong> formats</li>
          <li>Compress with <strong>TinyPNG</strong> or <strong>ShortPixel</strong></li>
          <li>Implement <strong>lazy loading</strong> for off-screen images</li>
          <li>Set image dimensions to reduce layout shifts</li>
        </ul>

        <p className="mt-4">
          💡 For WordPress users, try plugins like{" "}
          <strong>Smush</strong> or <strong>EWWW Image Optimizer</strong>.
        </p>

        <p className="text-blue-600 font-medium mt-2">
          Internal link: Read our related guide on{" "}
          <a href="/services-page/seo-page" className="underline hover:text-blue-600 transition">
            Speed Optimization
          </a>{" "}
          for plugin recommendations.
        </p>
      </Section>


      {/* Minify Code */}
      <Section
        idx={4}
        icon={Wrench}
        title="3. Minify and Combine CSS, JavaScript, and HTML"
        imageSrc="/minify.jpg"
      >
        <p>
          Minifying code removes unnecessary characters to make files smaller — boosting load speed instantly.
        </p>
        <h4 className="mt-4 font-semibold text-gray-900">USE:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Autoptimize</strong></li>
          <li><strong>WP Rocket</strong></li>
          <li><strong>Cloudflare Minify</strong></li>
        </ul>
        <p>
          This can improve loading speed by up to 30%.
        </p>
      </Section>

      {/* CDN */}
      <Section
        idx={5}
        icon={Cloud}
        title="4. Use a Content Delivery Network (CDN)"
        reverse
        imageSrc="/optimization.jpg"
      >
        <p>
          A CDN delivers your website from multiple global servers, ensuring visitors access content from the closest data center.
        </p>
        <h4 className="mt-4 font-semibold text-gray-900">Popular CDNs:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Cloudflare</strong></li>
          <li><strong>BunnyCDN</strong></li>
          <li><strong>Amazon CloudFront</strong></li>
        </ul>
        <p>
          If you serve international clients, CDN integration can make your site up to 60% faster worldwide.
        </p>
      </Section>

      {/* Hosting */}
      <Section
        idx={6}
        icon={Server}
        title="6. Choose a High-Performance Hosting Provider"
        imageSrc="/choose.jpg"
      >
        <p>
          Your web hosting is the backbone of your website’s speed. Choose servers that offer:
        </p>
        <ul>
          <li>SSD storage</li>
          <li>PHP 8.2+</li>
          <li>Built-in caching</li>
          <li>Uptime 99.9%</li>
        </ul>
      </Section>

      {/* Mobile Optimization */}
      <Section
        idx={7}
        icon={Smartphone}
        title="7. Prioritize Mobile Optimization"
        reverse
        imageSrc="/prioritize.jpg"
      >
        <p>
          Mobile traffic accounts for over 70% of total web visits. Ensure your design is responsive and loads fast on smartphones.
        </p>

        <h4 className="mt-4 font-semibold text-gray-900">Run a test with Google’s Mobile-Friendly Test:</h4>
        <p>
          Mobile-first indexing means your site’s mobile performance now defines its overall SEO score.
        </p>
      </Section>

      {/* Database Optimization */}
      <Section
        idx={8}
        icon={Database}
        title="8. Clean Up Your Website’s Database"
        imageSrc="/clean-up.jpg"
      >
        <p>
          Old revisions, drafts, and spam comments can slow your site.
          Plugins like WP-Optimize can clean up unnecessary data automatically.
        </p>

        <p>
          This reduces server response time and makes your website load faster — especially for WooCommerce or content-heavy blogs.
        </p>
      </Section>

      {/* Compression */}
      <Section
        idx={9}
        icon={HardDrive}
        title="9. Enable GZIP or Brotli Compression"
        reverse
        showImage={false}
      >
        <p>
          Compression reduces file sizes by up to 70%, drastically improving speed.
          Ask your host to enable GZIP or add this to .htaccess:
          AddOutputFilterByType DEFLATE text/html text/css text/javascript
        </p>
      </Section>

      {/* Lightweight Themes */}
      <Section
        idx={10}
        icon={Zap}
        title="10. Limit Plugins and Use Lightweight Themes"
        showImage={false}
      >
        <p>
          Overusing plugins slows your site. Stick with essential tools and use lightweight themes like:
        </p>
        <ul>
          <li>Astra</li>
          <li>Neve</li>
          <li>GeneratePress</li>
        </ul>
        <p>
          Fewer plugins = faster load time + lower maintenance.
        </p>
      </Section>

      {/* Hosting */}
      <Section
        idx={6}
        icon={Server}
        title="11. Optimize Core Web Vitals for Better SEO and UX"
        imageSrc="/optimize.jpg"
      >
        <p>
          Improving Core Web Vitals ensures better SEO rankings and a smoother user experience.
          Track your site’s metrics through Google Search Console or Lighthouse.
        </p>

        <p>
          If your scores are low, our experts at InfoNavigators can help optimize your Core Web Vitals, enhance performance, and boost your site’s visibility in Google.
        </p>

      </Section>


      {/* Hosting */}
      <Section
        idx={6}
        icon={Server}
        title="12. Monitor Website Speed Regularly"
        imageSrc="/monitor.jpg"
      >
        <p>
          Regular monitoring keeps your site fast and healthy.
          Set up monthly checks with:
        </p>
        <ul>
          <li>UptimeRobot
          </li>
          <li>GTmetrix</li>
          <li>Ahrefs Site Audit</li>
        </ul>

        <p>
          Track improvements and fix issues before they affect SEO
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


    </article>
  );
}
