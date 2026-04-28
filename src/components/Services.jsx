"use client";

import { motion } from "framer-motion";
import { FaChartLine, FaBullhorn, FaUserFriends, FaSearch } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: FaChartLine,
    title: "Cold Email Outreach & Appointment Setting",
    desc: "We design and manage cold email campaigns that generate qualified replies and booked meetings.",
  },
  {
    number: "02",
    icon: FaBullhorn,
    title: "B2B Lead Generation",
    desc: "Targeted lead lists built from your ideal customer profile for outbound sales campaigns.",
  },
  {
    number: "03",
    icon: FaUserFriends,
    title: "Prospect Research & Data Intelligence",
    desc: "Verified and enriched B2B data to ensure your outreach reaches the right decision-makers.",
  },
  {
    number: "04",
    icon: FaSearch,
    title: "Email Marketing Automation Setup",
    desc: "End-to-end setup of outreach systems, tools, and workflows for scalable lead generation.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brandOrange border border-brandOrange/40 bg-brandOrange/5 px-4 py-1.5 rounded-full mb-6">
            What We Do
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 text-center"
        >
          Our <span className="text-brandOrange">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-gray-600 mt-4 max-w-2xl mx-auto text-center"
        >
          At InfoNav, we offer a comprehensive range of services to meet the
          evolving sales needs of businesses:
        </motion.p>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative border border-gray-100 rounded-2xl p-8 shadow-sm bg-white hover:border-brandOrange hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Background number watermark */}
              <span className="absolute -right-2 -top-3 font-heading text-7xl font-black text-gray-100 group-hover:text-brandOrange/10 transition-colors duration-300 select-none leading-none">
                {service.number}
              </span>

              {/* Icon + Number row */}
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center group-hover:bg-brandOrange transition-all duration-300">
                  <service.icon className="text-xl text-brandOrange group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-heading text-xs font-bold tracking-widest text-brandOrange uppercase">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3 relative z-10 group-hover:text-brandOrange transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-gray-500 text-sm leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brandOrange group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/services-page"
            className="bg-brandOrange text-white font-heading text-sm font-semibold py-2.5 px-7 rounded-full shadow-md hover:bg-black transition-colors duration-300"
          >
            Learn More ⮕
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;