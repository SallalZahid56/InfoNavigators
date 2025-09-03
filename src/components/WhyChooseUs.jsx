"use client";

import { FaMoneyBillWave, FaChartLine, FaUserCheck } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 text-gray-900">
      {/* Heading + Intro */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Why <span className="text-brandOrange">Choose Us?</span>
        </h2>
        <p className="font-sans text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold">InfoNavigators</span>, we are one of the 
          leading providers of{" "}
          <span className="font-semibold">
            Digital Marketing, SEO, Lead Generation, Data Entry, Python
            Scraping, Internet Research, Influencer Research, and Web
            Development Services.
          </span>{" "}
          Our mission is to deliver affordable, result-driven, and customized
          solutions that help businesses grow faster.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="font-sans text-base sm:text-lg">
          📲 <span className="font-semibold">WhatsApp:</span> +923090266690
        </p>
        <p className="font-sans text-base sm:text-lg mt-2 sm:mt-3">
          📧 <span className="font-semibold">Email:</span> contact@infonavigators.com
        </p>
      </div>

      {/* Subheading */}
      <div className="text-center mb-6 sm:mb-10">
        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          What Makes <span className="text-brandOrange">Us Different?</span>
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
        {/* Affordable Pricing */}
        <div className="bg-white border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4 sm:mb-6 text-brandOrange">
            <FaMoneyBillWave size={40} className="sm:w-[50px] sm:h-[50px]" />
          </div>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Affordable Pricing for Every Budget
          </h3>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            We believe in providing cost-effective solutions without 
            compromising quality.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4 sm:mb-6 text-brandOrange">
            <FaChartLine size={40} className="sm:w-[50px] sm:h-[50px]" />
          </div>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Proven Experience with 200+ Projects
          </h3>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            Successfully delivered Digital Marketing, SEO, Lead Generation, 
            and Web Development projects worldwide.
          </p>
        </div>

        {/* Trusted Clients */}
        <div className="bg-white border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4 sm:mb-6 text-brandOrange">
            <FaUserCheck size={40} className="sm:w-[50px] sm:h-[50px]" />
          </div>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Trusted by 500+ Satisfied Clients
          </h3>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
            Our focus on quality, transparency, and timely delivery has earned 
            us long-term client relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
