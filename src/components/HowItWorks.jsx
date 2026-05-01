"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Define Your Ideal Customer",
    desc: "We identify your target companies, roles, and industries, the critical first step every effective b2b lead generation agency takes before a single email goes out.",
  },
  {
    number: "02",
    title: "Build Verified Prospect Lists",
    desc: "We collect accurate, targeted B2B data for outreach, the same data intelligence that powers our outsourced lead generation programs for clients across industries.",
  },
  {
    number: "03",
    title: "Launch Cold Email Campaigns",
    desc: "We create and send personalized email sequences to decision-makers, a battle-tested cold email outreach service and b2b email marketing agency usa approach designed to land in inboxes, not spam folders.",
  },
  {
    number: "04",
    title: "Generate Replies & Meetings",
    desc: "You receive qualified conversations and booked sales calls, exactly what a dedicated appointment setting service b2b companies trust is built to deliver.",
  },
];

export default function HowItWorks() {
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
            How It Works
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Our <span className="text-brandOrange">Process</span>
        </motion.h2>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-brandOrange/15" />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-2xl px-8 py-7 shadow-sm hover:border-brandOrange hover:shadow-md transition-all duration-300 group">
                    <span className="font-heading text-xs font-bold tracking-widest text-brandOrange uppercase mb-3 block">
                      Step {step.number}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 group-hover:text-brandOrange transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-sans text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Center bubble */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-brandOrange flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="font-heading font-bold text-white text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}