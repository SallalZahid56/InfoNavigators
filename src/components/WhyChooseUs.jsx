"use client";
import { motion } from "framer-motion";
import { FaDatabase, FaChartLine, FaCheckCircle, FaHandshake } from "react-icons/fa";

const reasons = [
  {
    icon: FaHandshake,
    title: "Outbound Growth Partner",
    desc: "We are not just a lead list provider, as a dedicated b2b lead generation agency, we are a full outbound growth partner committed to filling your pipeline with real opportunities.",
  },
  {
    icon: FaDatabase,
    title: "Data + Outreach Combined",
    desc: "A unified system of verified data and strategic cold email outreach service, not two separate services, but one powerful engine that drives consistent results for your sales team.",
  },
  {
    icon: FaChartLine,
    title: "Focus on Real Sales Outcomes",
    desc: "We measure success by booked meetings and revenue conversations, not vanity metrics. Our appointment setting service b2b companies rely on is built around one thing, results you can take to the sales floor.",
  },
  {
    icon: FaCheckCircle,
    title: "Manual + Tool-Based Verified Targeting",
    desc: "Every prospect is verified using a mix of manual research and advanced tooling for maximum accuracy, the same precision that makes our outsourced lead generation programs outperform generic list providers.",
  },
];

export default function WhyInfoNav() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brandOrange border border-brandOrange/40 bg-brandOrange/5 px-4 py-1.5 rounded-full mb-6">
            Why Us
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 text-center"
        >
          Why <span className="text-brandOrange">InfoNav?</span>
        </motion.h2>

        {/* Sub statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-center"
        >
          <p className="font-sans text-gray-500 text-base">
            We are not just a lead list provider.
          </p>
          <p className="font-heading text-brandOrange font-semibold text-lg mt-1">
            We are an outbound growth partner.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex gap-5 items-start bg-white border border-gray-100 rounded-2xl px-7 py-7 shadow-sm hover:border-brandOrange hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-brandOrange/10 flex items-center justify-center group-hover:bg-brandOrange transition-all duration-300">
                <reason.icon className="text-lg text-brandOrange group-hover:text-white transition-colors duration-300" />
              </div>

              <div>
                <h3 className="font-heading text-base font-semibold text-gray-900 mb-1.5 group-hover:text-brandOrange transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience badge */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center font-sans text-gray-500 text-sm border-t border-gray-100 pt-8"
        >
          Backed by hands-on experience in{" "}
          <span className="text-brandOrange font-semibold">b2b email marketing </span> and{" "}
          <span className="text-brandOrange font-semibold">agency usa businesses trust</span>.
          combining deep data systems with outbound strategies that actually convert.        </motion.p>
      </div>
    </section>
  );
}