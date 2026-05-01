"use client";
import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl font-bold leading-tight text-gray-900"
        >
          Most B2B Companies Struggle with{" "}
          <span className="text-brandOrange">Predictable Lead Flow</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Paid ads are expensive. Inbound is slow. Referrals are inconsistent.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            "Paid ads burn budget quickly",
            "Inbound takes too long to scale",
            "Referrals are unpredictable",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group p-6 rounded-xl border border-brandOrange bg-white shadow-sm hover:bg-brandOrange hover:shadow-lg transition"
            >
              <p className="font-sans text-gray-700 group-hover:text-white transition text-base">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-sans mt-12 text-lg text-gray-600 max-w-3xl mx-auto border-l-4 border-brandOrange pl-4 text-left italic"
        >
          Without a proper outbound system and a dedicated appointment setting service b2b teams can actually rely on, sales pipelines stay empty and growth becomes impossible to forecast.
        </motion.p>
      </div>
    </section>
  );
}