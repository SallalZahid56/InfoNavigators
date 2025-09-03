"use client";

import React from "react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative max-w-4xl mx-auto mt-14 mb-8 px-6 py-12 text-center rounded-3xl shadow-xl bg-gradient-to-br from-brandOrange/90 via-brandOrange/70 to-brandOrange/60 text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
      <div className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-white/10"></div>

      <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-black">
        Let’s Build Something Great Together
      </h3>
      <p className="text-lg text-black mb-6 font-sans">
        Your project deserves focused attention, accurate data, and measurable
        results. That’s exactly what we deliver.
      </p>

      <Link
        href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-brandOrange text-white font-semibold rounded-lg shadow hover:-translate-y-0.5 hover:bg-black hover:text-white transition"
      >
        📧 Contact Us & Start Your Success Story
      </Link>
    </section>
  );
}
