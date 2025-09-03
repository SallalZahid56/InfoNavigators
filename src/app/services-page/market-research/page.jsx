"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";

const MarketResearchPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How is your approach different from other providers?",
      a: "We combine human expertise with premium tools, giving you both speed and accuracy.",
    },
    {
      q: "Can I hire you for just competitor analysis?",
      a: "Yes — we offer stand-alone competitor research services or full research packages.",
    },
    {
      q: "How often should I update my market research?",
      a: "At least quarterly, especially in fast-changing industries.",
    },
  ];

  const serviceOfferings = [
    {
      title: "Primary Market Research Services",
      desc: "Direct surveys, interviews, and focus groups.",
    },
    {
      title: "Quantitative Market Research Services",
      desc: "Data-driven statistical analysis.",
    },
    {
      title: "Qualitative Market Research Services",
      desc: "Understanding customer motivations.",
    },
    {
      title: "Global Marketing Research Services",
      desc: "Insights across regions and languages.",
    },
    {
      title: "Outsource Market Research Services",
      desc: "Dedicated teams without in-house hiring.",
    },
    {
      title: "Web Research Services",
      desc: "Combine technology with human expertise to produce verified, actionable data.",
    },
  ];

  const provenProcess = [
    {
      step: "1",
      title: "Discovery Call",
      desc: "We define your research goals and target market.",
    },
    {
      step: "2",
      title: "Data Collection",
      desc: "Using research internet techniques, premium databases, and additional internet research to gather accurate information.",
    },
    {
      step: "3",
      title: "Analysis & Insights",
      desc: "Transforming raw data into meaningful strategies.",
    },
    {
      step: "4",
      title: "Presentation",
      desc: "Delivering reports in an easy-to-use format.",
    },
    {
      step: "5",
      title: "Ongoing Monitoring",
      desc: "Staying ahead with continuous tracking.",
    },
  ];

  return (
    <>
      <Head>
        <title>Market Research & Competitor Analysis Services</title>
        <meta
          name="description"
          content="Unlock smarter, data-driven business decisions with Info Navigators' expert market research and competitor analysis services. Our tailored solutions offer valuable insights to help you stay ahead of the competition. Start your project today!"
        />
        <meta
          name="keywords"
          content="market research, market research services, market research tools, market research companies, market research analyst, marketing research, online market research, market research firms, market research surveys, business market research, market research reports, competitor analysis, qualitative market research, market research definition, AI market research, B2B market research"
        />
      </Head>

      <div className="bg-white text-black font-sans">
        {/* ✅ Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center mt-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Market Research and{" "}
            <span className="text-brandOrange">Competitor Analysis Services</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            In today’s competitive marketplace, making business decisions without
            accurate data is like sailing without a compass. At{" "}
            <span className="font-semibold">Info Navigators</span>, we provide
            market research services and competitor analysis consulting that give
            you the insights you need to make smarter, faster, and more profitable
            choices.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brandOrange text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-black transition"
          >
            Get a Free Consultation
          </a>
        </section>

        {/* ✅ What is Market Research */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              What is <span className="text-brandOrange">Market Research</span> and Why It Matters
            </h2>
            <p className="text-gray-700 mb-4">
              Market research is the process of gathering, analyzing, and interpreting data about your market,
              customers, and competitors. When you research online effectively, you uncover patterns, trends,
              and opportunities that can shape your strategy. Whether it’s B2B market research services,
              B2C market research services, or global marketing research services, our goal is simple — help
              you stay ahead in your industry by delivering premium market research services backed by
              accuracy and expertise.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/whatmarketresearch.jpg"
              alt="Market Research"
              className="rounded-xl max-h-80 object-cover"
            />
          </div>
        </section>

        {/* ✅ Service Offerings */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              Our Expert <span className="text-brandOrange">Market Research Service Offerings</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {serviceOfferings.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                >
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Internet Researcher */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Why Businesses Need a{" "}
              <span className="text-brandOrange">Professional Internet Researcher</span>
            </h2>
            <p className="text-gray-700 mb-4">
              Relying on assumptions can cost businesses thousands. A professional internet researcher uses
              proven methods, tools, and networks to collect reliable data that informs your strategy.
              We are one of the trusted internet research companies offering internet research for business
              that’s customized for your goals. From financial services market research to healthcare
              market research services, we deliver actionable insights.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/internet.jpg"
              alt="Internet Research"
              className="rounded-xl shadow-lg max-h-80 object-cover"
            />
          </div>
        </section>

        {/* ✅ Proven Process */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
            Our <span className="text-brandOrange">Proven Market Research Process</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {provenProcess.map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-brandOrange font-heading text-3xl font-bold mb-2">
                  {step.step}
                </div>
                <h4 className="font-heading text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Social Media & Competitor Research */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                Social Media & <span className="text-brandOrange">Web Research</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Social media is more than just engagement — it’s a goldmine for market research on the internet.
                Our social media web research services track conversations, brand mentions, and competitor
                activities to help you spot opportunities. With in-web research methods, we deliver web research
                data that reveals what customers truly think, what competitors are planning, and where you can
                gain a competitive advantage.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/web-research.jpg"
                alt="Social Media Research"
                className="rounded-xl max-h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                Competitor Research Services That{" "}
                <span className="text-brandOrange">Drive Strategy</span>
              </h3>
              <p className="text-gray-700">
                Our competitor research services go beyond public information. We study pricing models, customer
                feedback, ad campaigns, and product strategies to uncover gaps you can exploit. Whether you need
                a full-service market research company or a competitor analysis consulting partner, we deliver
                the best service to research competitors online and help you outperform them.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/competitor-research.jpg"
                alt="Competitor Analysis"
                className="rounded-xl max-h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* ✅ FAQ */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6">
              Frequently Asked <span className="text-brandOrange">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold"
                  >
                    {faq.q}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-3 text-gray-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
};

export default MarketResearchPage;
