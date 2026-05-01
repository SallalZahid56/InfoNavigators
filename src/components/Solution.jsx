"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Verified B2B Data",
    desc: "We source and verify prospect data matched to your ideal customer profile - accurate contacts, right titles, right companies. The foundation every outsourced lead generation program needs to actually perform.",
  },
  {
    number: "02",
    title: "Targeted Prospect Research",
    desc: "Deep research into your market ensures we're reaching decision-makers who actually have the budget and authority to buy, a critical step in any serious appointment setting service b2b companies can depend on.",
  },
  {
    number: "03",
    title: "Cold Email Outreach",
    desc: "Personalized, deliverable email sequences sent at scale,  crafted to start real conversations, not get ignored. This is where our b2b email marketing agency usa expertise turns prospects into booked meetings.",
  },
];

export default function Solution() {
  return (
    <section className="w-full bg-white py-24 px-6 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brandOrange border border-brandOrange/40 bg-brandOrange/5 px-4 py-1.5 rounded-full mb-6">
            Our Solution
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center max-w-3xl mx-auto leading-tight"
        >
          We build outbound systems that generate{" "}
          <span className="text-brandOrange">consistent sales opportunities</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-gray-600 text-base sm:text-lg mt-6 text-center max-w-2xl mx-auto leading-relaxed"
        >
          InfoNav combines verified B2B data, targeted prospect research, and a proven cold email outreach service to help you reach decision-makers directly, the same way a top-tier b2b lead generation agency operates.
        </motion.p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px bg-brandOrange/20 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 group flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl px-8 py-10 shadow-sm hover:shadow-md hover:border-brandOrange/40 transition-all duration-300"
            >
              {/* Number bubble */}
              <div className="w-14 h-14 rounded-full bg-brandOrange/10 border-2 border-brandOrange flex items-center justify-center mb-6 group-hover:bg-brandOrange transition-all duration-300">
                <span className="font-heading font-bold text-brandOrange text-lg group-hover:text-white transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom focus statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 mx-auto max-w-2xl bg-brandOrange rounded-2xl px-10 py-8 text-center shadow-lg"
        >
          <p className="font-sans text-white/80 text-sm uppercase tracking-widest mb-2 font-semibold">
            Our Focus Is Simple
          </p>
          <p className="font-heading text-white text-xl sm:text-sm font-bold leading-snug">
            Turning cold prospects into booked meetings for your sales team, that's what a results-driven b2b lead generation agency does, and it's the only thing we focus on.

            As your dedicated outsourced lead generation partner, InfoNav handles everything from prospect research to cold email outreach service, so your sales team shows up to conversations, not inboxes.
          </p>
        </motion.div>

      </div>
    </section>
  );
}