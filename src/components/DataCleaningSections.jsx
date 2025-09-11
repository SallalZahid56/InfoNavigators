"use client"; // Needed for useState and interactivity

import Image from "next/image";
import {
  FaDatabase,
  FaCheckCircle,
  FaSyncAlt,
  FaUserPlus,
  FaObjectGroup,
  FaIndustry,
  FaBuilding,
  FaHospital,
  FaHome,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

// ✅ Import images from /public
// Make sure you place your images in the public folder
// /public/data-cleansing.jpg
// /public/data_cleanings.png
// /public/data cleaning.png

export default function DataCleaningPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* ✅ HERO SECTION */}
      <section className="bg-gray-50 py-16 mt-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
              Professional Data Cleaning & Formatting Services for{" "}
              <span className="text-brandOrange">Reliable Business Decisions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              In the age of data-driven marketing and AI automation, clean data is no longer optional — it’s the foundation of every successful business strategy. If your customer records, lead lists, or sales databases are inaccurate, incomplete, or inconsistent, you’re not just wasting time — you’re losing opportunities.
            </p>
            <p className="text-lg text-gray-600">
              At Info Navigators, we provide data cleaning services that ensure your information is accurate, consistent, standardized, and ready for action.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/data-cleansing.jpg"
              alt="Data Cleaning"
              width={600}
              height={400}
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ✅ WHY DATA CLEANING */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Why Data Cleaning Is Critical for Business Growth
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>✔ Incorrect contact info means wasted outreach efforts.</li>
              <li>✔ Duplicate records lead to missed opportunities and over-targeting.</li>
              <li>✔ Formatting inconsistencies break automation workflows.</li>
              <li>✔ Outdated datasets result in poor decision-making.</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Businesses lose up to <strong>30% of their revenue</strong> due to poor data quality.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/data_cleanings.png"
              alt="Why Data Cleaning"
              width={500}
              height={350}
              className="w-full max-w-sm rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ✅ CORE SOLUTIONS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Our Core Data Cleaning & Formatting Solutions
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Error Detection & Correction", icon: <FaCheckCircle /> },
              { title: "Duplicate Removal", icon: <FaSyncAlt /> },
              { title: "Standardization", icon: <FaDatabase /> },
              { title: "Data Enrichment", icon: <FaUserPlus /> },
              { title: "Multi-Source Integration", icon: <FaObjectGroup /> },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center gap-3"
              >
                <div className="text-brandOrange text-3xl">{item.icon}</div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ DATA FORMATTING SOLUTIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Data Formatting Solutions
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Spreadsheet Formatting – Clean structure & formulas.</li>
              <li>✔ CSV/Excel to CRM – Proper mapping & seamless imports.</li>
              <li>✔ Multi-Source Integration – Merge data without conflicts.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/data cleaning.png"
              alt="Data Formatting"
              width={600}
              height={400}
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ✅ INDUSTRIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Industries That Benefit from Clean Data
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "B2B SaaS & Tech", icon: <FaIndustry /> },
              { title: "E-commerce", icon: <FaBuilding /> },
              { title: "Healthcare", icon: <FaHospital /> },
              { title: "Real Estate", icon: <FaHome /> },
              { title: "Financial Services", icon: <FaChartLine /> },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md flex flex-col items-center gap-3"
              >
                <div className="text-brandOrange text-3xl">{item.icon}</div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ PROCESS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            Our Proven Data Cleaning Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6 mt-8 text-center">
            {[
              "Data Audit",
              "Cleaning & Correction",
              "Standardization",
              "Verification & Validation",
              "Delivery & Integration",
            ].map((step, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-xl shadow">
                <div className="text-brandOrange font-bold text-2xl mb-2">
                  {i + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ TOOLS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Tools & Technologies We Use
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "OpenRefine",
              "Excel & Google Sheets",
              "Apollo.io",
              "Hunter.io",
              "Dedupe.io",
              "SQL",
              "Python",
            ].map((tool, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl shadow hover:shadow-md"
              >
                <div className="text-brandOrange text-2xl mb-2">
                  <FaTools />
                </div>
                <p>{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}