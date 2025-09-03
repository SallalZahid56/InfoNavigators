"use client"; // since we’re using React-icons (client-side)

import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white rounded-t-[70px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f35525] to-[#f35525] z-0"></div>

      {/* Overlay Image Background (public/foter.png) */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0">
        <Image
          src="/foter.png" // ✅ place foter.png inside public/
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="h-[500px] flex items-center justify-center text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Start your new project with <br /> us in just a few clicks
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              For scheduling meetings or WhatsApp inquiries, contact us anytime.
              <br />
              We typically respond within 1–2 hours during business hours and
              within 8–10 hours outside these hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                className="bg-black text-white border border-white rounded-md px-6 py-3 uppercase text-xs tracking-wide font-semibold h-11 flex items-center justify-center"
              >
                Get Started
              </a>

              <a
                href="mailto:contact@infonavigators.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white border border-white rounded-md px-6 py-3 uppercase text-xs tracking-wide font-semibold h-11 flex items-center justify-center"
              >
                Message Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="rounded-t-[70px] -mt-[70px] px-4 py-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/ServicesPage" className="hover:text-white">
                  Services
                </Link>
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
                <Link href="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
                <Link href="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 text-white text-lg">
                <a href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website.">
                  <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/infonavigators/">
                  <FaInstagram />
                </a>
                <a href="mailto:contact@infonavigators.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.facebook.com/infonavigators">
                  <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/company/infonavigatorss/">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <hr className="my-6 border-t border-white/20" />

            <div className="text-center text-white-400 text-xs">
              &copy; InfoNav 2025. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
