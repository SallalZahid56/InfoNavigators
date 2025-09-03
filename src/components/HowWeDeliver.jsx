"use client"; // Required because this is a React component with client rendering

import React from "react";
import { Users, Lightbulb, Settings, CheckCircle, TrendingUp } from "lucide-react";

const HowWeDeliver = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 mt-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          How We <span className="text-brandOrange">Deliver Results!</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto font-sans text-base md:text-lg leading-relaxed px-4">
          We follow a structured and strategic approach to ensure your business grows
          effectively. Our proven methods combine creativity, technology, and insights to
          achieve measurable results for our clients.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center border border-gray-100">
          <Users className="text-brandOrange w-12 h-12 mx-auto mb-4" />
          <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900">
            Consultation
          </h3>
          <p className="text-gray-600 mt-2 font-sans text-sm md:text-base leading-relaxed">
            We begin with understanding your unique business needs and objectives.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center border border-gray-100">
          <Lightbulb className="text-brandOrange w-12 h-12 mx-auto mb-4" />
          <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900">
            Strategy
          </h3>
          <p className="text-gray-600 mt-2 font-sans text-sm md:text-base leading-relaxed">
            Our team crafts a customized digital plan to achieve your goals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center border border-gray-100">
          <Settings className="text-brandOrange w-12 h-12 mx-auto mb-4" />
          <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900">
            Implementation
          </h3>
          <p className="text-gray-600 mt-2 font-sans text-sm md:text-base leading-relaxed">
            We execute campaigns using the latest tools and technologies.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center border border-gray-100">
          <CheckCircle className="text-brandOrange w-12 h-12 mx-auto mb-4" />
          <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900">
            Optimization
          </h3>
          <p className="text-gray-600 mt-2 font-sans text-sm md:text-base leading-relaxed">
            Continuous tracking and improvement for maximum ROI.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center border border-gray-100 sm:col-span-2 lg:col-span-1">
          <TrendingUp className="text-brandOrange w-12 h-12 mx-auto mb-4" />
          <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900">
            Growth
          </h3>
          <p className="text-gray-600 mt-2 font-sans text-sm md:text-base leading-relaxed">
            Driving sustainable growth for long-term business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
