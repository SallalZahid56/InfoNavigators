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
    desc: "At InfoNavigators, we deliver data-driven email marketing solutions that help B2B companies reach decision-makers, nurture prospects, and convert leads into customers. From cold outreach to automated campaigns, our strategic approach ensures consistent engagement and scalable revenue growth.",
  },
  {
    icon: FaBullhorn,
    title: "Lead Generation",
    desc: "Lead generation is the heartbeat of a successful sales strategy. At InfoNav, we specialize in delivering targeted, high-quality leads that align perfectly with your ideal customer profile (ICP).",
  },
  {
    icon: FaUserFriends,
    title: "Influencer Research",
    desc: "In today’s digital landscape, influencer marketing has become one of the most effective strategies for expanding brand awareness and building authentic customer relationships.",
  },
  {
    icon: FaSearch,
    title: "Internet Research",
    desc: "In a world flooded with information, having access to the right data at the right time is what sets successful businesses apart. At InfoNav, our Internet Research services are designed to help you uncover accurate, detailed, and relevant insights that power strategic decision-making and enhance your competitive edge.",
  },
  {
    icon: FaDatabase,
    title: "Data Extraction",
    desc: "In today’s digital economy, data is currency — but only if it’s clean, relevant, and accessible. At InfoNav, our Data Extraction service is designed to help you pull valuable, structured information from complex sources, so you can make informed decisions faster and with greater accuracy.",
  },
  {
    icon: FaPython,
    title: "Python Scraping",
    desc: "In a world overflowing with online information, staying competitive means having access to the right data at the right time. Our Python Scraping service is designed to help you efficiently gather structured data from multiple sources — including websites, directories, e-commerce platforms, forums, and more — using powerful, customized Python scripts.",
  },
  {
    icon: FaKeyboard,
    title: "Data Entry",
    desc: "In today’s fast-paced digital world, accurate and organized data is the backbone of every successful business operation. At InfoNav, we understand how vital reliable data entry services are to maintaining the integrity and accessibility of your information.",
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