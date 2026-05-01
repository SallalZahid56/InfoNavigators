"use client";

import { FaChartBar, FaUsers, FaTachometerAlt } from "react-icons/fa";

const Strategy = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Data Driven */}
        <div className="group border border-brandOrange rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-sm transition bg-white hover:bg-brandOrange hover:border-white hover:shadow-lg">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-brandOrange text-white p-4 sm:p-6 rounded-full transition group-hover:bg-white group-hover:text-brandOrange">
              <FaChartBar size={32} className="sm:size-[40px]" />
            </div>
          </div>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 transition group-hover:text-white">
            Data-Driven Prospecting
          </h3>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed transition group-hover:text-white">
            We build highly targeted prospect lists using verified data and deep research, the foundation of any serious b2b lead generation agency. Every campaign starts with accuracy, so your outreach reaches the right decision-makers, not random contacts.
          </p>
        </div>

        {/* Customer Driven */}
        <div className="group border border-brandOrange rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-sm transition bg-white hover:bg-brandOrange hover:border-white hover:shadow-lg">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-brandOrange text-white p-4 sm:p-6 rounded-full transition group-hover:bg-white group-hover:text-brandOrange">
              <FaUsers size={32} className="sm:size-[40px]" />
            </div>
          </div>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 transition group-hover:text-white">
            Personalized Outreach
          </h3>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed transition group-hover:text-white">
            We don't send generic emails. As a specialized cold email outreach service and b2b email marketing agency usa, each campaign is crafted with tailored messaging that speaks directly to your ideal clients, increasing response rates and building real conversations.
          </p>
        </div>

        {/* Performance Driven */}
        <div className="group border border-brandOrange rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-sm transition bg-white hover:bg-brandOrange hover:border-white hover:shadow-lg">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-brandOrange text-white p-4 sm:p-6 rounded-full transition group-hover:bg-white group-hover:text-brandOrange">
              <FaTachometerAlt size={32} className="sm:size-[40px]" />
            </div>
          </div>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 transition group-hover:text-white">
            Performance-Focused Execution
          </h3>
          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed transition group-hover:text-white">
            From launch to optimization, we continuously track and improve campaign performance. As your fully outsourced lead generation partner with a proven appointment setting service b2b teams depend on, our focus is simple, generate qualified leads and turn outreach into measurable business results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
