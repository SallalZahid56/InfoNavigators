"use client"; // ✅ Only needed if you use interactivity/hooks

import {
  FaBullhorn,
  FaKeyboard,
  FaUserFriends,
  FaSearch,
  FaDatabase,
  FaPython,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: FaChartLine,
    title: "Email Marketing",
    desc: "We create and manage targeted email campaigns designed to reach decision-makers and generate meaningful conversations. From copywriting to campaign optimization, every step is focused on results.",
  },
  {
    icon: FaBullhorn,
    title: "Lead Generation",
    desc: "We build highly targeted prospect lists aligned with your ideal customer profile, ensuring your outreach reaches the right audience and drives qualified opportunities",
  },
  {
    icon: FaUserFriends,
    title: "Data-Driven Prospecting",
    desc: "Using advanced research and verification methods, we gather accurate and reliable data to support high-performing outreach campaigns.",
  },
  {
    icon: FaSearch,
    title: "Cold Email Outreach",
    desc: "We design and execute personalized cold email campaigns that turn prospects into leads through strategic messaging and continuous optimization.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-brandOrange">Services</span>
        </h2>
        <p className="font-sans text-gray-600 mt-4 max-w-2xl mx-auto">
          At InfoNav, we offer a comprehensive range of services to meet the
          evolving sales needs of businesses:
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-brandOrange rounded-xl p-8 shadow-sm transition bg-white hover:bg-brandOrange hover:border-white hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <service.icon className="text-4xl text-brandOrange transition group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-semibold mt-6 mb-3 text-gray-900 transition group-hover:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-gray-600 text-sm transition group-hover:text-white">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Learn More Button */}
        <div className="mt-12">
          <Link
            href="/services-page"
            className="inline-block bg-brandOrange text-white font-heading text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-black hover:text-white transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;