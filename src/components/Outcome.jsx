"use client";
import { motion } from "framer-motion";

const outcomes = [
  {
    stat: "✓",
    title: "Consistent flow of qualified B2B leads",
  },
  {
    stat: "10–30",
    title: "Booked meetings per month",
    sub: "depending on offer and niche",
  },
  {
    stat: "✓",
    title: "Direct access to decision-makers",
  },
  {
    stat: "✓",
    title: "Predictable outbound sales pipeline",
  },
];

export default function Outcome() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brandOrange border border-brandOrange/40 bg-brandOrange/5 px-4 py-1.5 rounded-full mb-6">
            Results
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14"
        >
          What You Can <span className="text-brandOrange">Expect</span>
        </motion.h2>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-2xl px-6 py-8 shadow-sm hover:border-brandOrange hover:shadow-md transition-all duration-300 text-center overflow-hidden"
            >
              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandOrange group-hover:w-full transition-all duration-500 rounded-b-2xl" />

              <div className="text-3xl font-heading font-black text-brandOrange mb-3">
                {item.stat}
              </div>
              <p className="font-heading text-gray-900 font-semibold text-base leading-snug">
                {item.title}
              </p>
              {item.sub && (
                <p className="font-sans text-gray-400 text-xs mt-1">{item.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}