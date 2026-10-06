"use client"; // since we're using React-icons (client-side)

import {
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

/* ---------- EDIT THESE ---------- */
const EMAIL = "contact@infonavigators.com";
const PHONE = "17579369494";
const ADDRESS = "3812 Florin Rd STE 104, Sacramento, CA 95823, USA";
/* -------------------------------- */

const services = [
  { label: "B2B Lead Generation", href: "/services-page/" },
  { label: "Cold Email Outreach", href: "/services-page/" },
  { label: "Appointment Setting", href: "/services-page/" },
  { label: "Prospect List Building", href: "/services-page/" },
  { label: "Blog", href: "/blog/" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white rounded-t-[70px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f35525] to-[#f35525] z-0"></div>

      {/* Overlay Image Background (public/foter.png) */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0">
        <Image
          src="/foter.png"
          alt="InfoNavigators B2B lead generation agency footer background"
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
              InfoNavigators is a dedicated B2B lead generation agency helping US companies book qualified sales meetings through targeted cold email outreach and verified prospect data.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact-us/"
                className="bg-black text-white border border-white rounded-md px-6 py-3 uppercase text-xs tracking-wide font-semibold h-11 flex items-center justify-center"
              >
                Get Started
              </Link>

              <a
                href={`mailto:${EMAIL}`}
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
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/services-page/" className="hover:text-white">Services</Link>
                <Link href="/about-us/" className="hover:text-white">About Us</Link>
                <Link href="/portfolio/" className="hover:text-white">Portfolio</Link>
                <Link href="/blog/" className="hover:text-white">Blog</Link>
                <Link href="/contact-us/" className="hover:text-white">Contact Us</Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 text-white text-lg">
                <a
                  href="https://www.instagram.com/infonavigators/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram"
                >
                  <FaInstagram />
                  <span className="sr-only">Instagram</span>
                </a>

                <a href={`mailto:${EMAIL}`} aria-label="Send us an email">
                  <FaEnvelope />
                  <span className="sr-only">Email</span>
                </a>

                <a
                  href="https://www.facebook.com/infonavigators"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebook />
                  <span className="sr-only">Facebook</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/infonavigatorss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn"
                >
                  <FaLinkedin />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <hr className="my-6 border-t border-white/20" />

            {/* Services links */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-200 mb-4">
              {services.map((s) => (
                <Link key={s.label} href={s.href} className="hover:text-white">
                  {s.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="text-center text-gray-200 text-sm space-y-1 mb-4">
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
              </p>
              {PHONE && (
                <p>
                  Phone:{" "}
                  <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="hover:text-white">{PHONE}</a>
                </p>
              )}
              {ADDRESS && <p>Address: {ADDRESS}</p>}
            </div>

            <div className="text-center text-gray-200 text-xs">
              &copy; {year} InfoNavigators. All rights reserved.
              <br />
              B2B Lead Generation Agency USA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;