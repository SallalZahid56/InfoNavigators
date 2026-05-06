"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-brandOrange rounded-3xl px-8 sm:px-14 py-14 text-center overflow-hidden shadow-xl"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute top-6 right-12 w-10 h-10 rounded-full bg-white/10 pointer-events-none" />

          {/* Label */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 border border-white/30 px-4 py-1.5 rounded-full mb-6">
            Get Started
          </span>

          {/* Title */}
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            Ready to build a predictable sales pipeline?
          </h2>

          {/* Body */}
          <p className="font-sans text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Let's design a cold email outreach service system that brings you consistent meetings with qualified buyers, powered by a b2b email marketing agency usa businesses trust.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNave%20website."
              className="bg-white text-brandOrange font-heading font-semibold px-7 py-2.5 rounded-full shadow hover:bg-gray-900 hover:text-white transition-colors duration-300 text-sm"
            >
              Book Free Strategy Call ⮕
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923041894256&text=Hi!%20I%20want%20to%20start%20my%20outreach%20campaign."
              className="bg-transparent border-2 border-white text-white font-heading font-semibold px-7 py-2.5 rounded-full hover:bg-white hover:text-brandOrange transition-colors duration-300 text-sm"
            >
              Start Your Outreach Campaign ⮕
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}