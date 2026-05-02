"use client"; // ✅ Needed for interactive components

import React from "react";
import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-brandOrange">Values</span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg font-sans max-w-2xl mx-auto">
          Mission, Vision & Philosophy that drive our success.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Mission */}
        <div className="bg-black rounded-[3rem] sm:rounded-[3.5rem] md:rounded-[4rem] shadow-lg p-6 sm:p-8 text-center transition-all duration-300 cursor-pointer hover:bg-brandOrange group">
          <div className="text-white text-3xl sm:text-4xl mb-4 flex justify-center group-hover:text-black transition">
            <FaBullseye />
          </div>
          <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white group-hover:text-black transition">
            Our Mission
          </h3>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed group-hover:text-black transition">
            To empower B2B businesses with innovative outsourced lead generation strategies that foster growth, sustainability, and long-term success, backed by a b2b email marketing agency usa businesses trust.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-black rounded-[3rem] sm:rounded-[3.5rem] md:rounded-[4rem] shadow-lg p-6 sm:p-8 text-center transition-all duration-300 cursor-pointer hover:bg-brandOrange group">
          <div className="text-white text-3xl sm:text-4xl mb-4 flex justify-center group-hover:text-black transition">
            <FaEye />
          </div>
          <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white group-hover:text-black transition">
            Our Vision
          </h3>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed group-hover:text-black transition">
            To be a globally recognized b2b lead generation agency, transforming outbound challenges into consistent pipeline opportunities for businesses worldwide.
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-black rounded-[3rem] sm:rounded-[3.5rem] md:rounded-[4rem] shadow-lg p-6 sm:p-8 text-center transition-all duration-300 cursor-pointer hover:bg-brandOrange group">
          <div className="text-white text-3xl sm:text-4xl mb-4 flex justify-center group-hover:text-black transition">
            <FaLightbulb />
          </div>
          <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white group-hover:text-black transition">
            Our Philosophy
          </h3>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed group-hover:text-black transition">
            We believe in a client-first approach, innovation, and ethical practices as the foundation of every successful appointment setting service b2b partnership we build.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
