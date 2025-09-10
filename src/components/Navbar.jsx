"use client"; // Needed for interactivity (useState)

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logoo.png" // ✅ make sure logoo.png is inside /public
              alt="InfoNav Logo"
              width={160}
              height={56}
              priority // loads immediately for better performance
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-heading font-semibold text-base items-center">
          <li>
            <Link href="/" className="text-black hover:text-brandOrange transition font-sans">
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/services-page/"
              className="text-black hover:text-brandOrange transition cursor-pointer"
            >
              Services
            </Link>
            {dropdownOpen && (
              <div className="absolute top-full left-[-200px] bg-[#282727] shadow-lg rounded-lg w-[900px] py-6 px-8 z-50">
                <h4 className="text-white font-bold mb-4 text-lg">
                  Our Services
                </h4>

                {/* Services Grid */}
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Category 1 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/lead-generation/" className="text-brandOrange hover:text-brandOrange transition">
                        Lead Generation
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/b2b-lead-generation/" className="text-white hover:text-brandOrange transition">B2B Leads</Link></li>
                      <li><Link href="/services-page/email-list-building/" className="text-white hover:text-brandOrange transition">Contact Email List Building</Link></li>
                      <li><Link href="/services-page/linkedin-list/" className="text-white hover:text-brandOrange transition">LinkedIn List Building</Link></li>
                      <li><Link href="/services-page/email-marketing/" className="text-white hover:text-brandOrange transition">Email Marketing</Link></li>
                    </ul>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/internet-research/" className="text-brandOrange hover:text-brandOrange transition">
                        Internet Research
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/market-research/" className="text-white hover:text-brandOrange transition">Market Research</Link></li>
                      <li><Link href="/services-page/data-verification/" className="text-white hover:text-brandOrange transition">Data Verification</Link></li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/influencer-research/" className="text-brandOrange hover:text-brandOrange transition">
                        Influencer Research
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/youtube-influencer-research/" className="text-white hover:text-brandOrange transition">YouTube Influencers</Link></li>
                      <li><Link href="/services-page/instagram-influencer-research/" className="text-white hover:text-brandOrange transition">Instagram Influencers</Link></li>
                      <li><Link href="/services-page/tiktok-influencer-research/" className="text-white hover:text-brandOrange transition">TikTok Influencers</Link></li>
                    </ul>
                  </div>

                  {/* Category 4 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/data-entry/" className="text-brandOrange hover:text-brandOrange transition">
                        Data Entry
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/crm-data-entry/" className="text-white hover:text-brandOrange transition">CRM Data Entry</Link></li>
                      <li><Link href="/services-page/data-cleaning/" className="text-white hover:text-brandOrange transition">Data Cleaning</Link></li>
                    </ul>
                  </div>

                  {/* Category 5 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/data-extraction/" className="text-brandOrange hover:text-brandOrange transition">
                        Data Extraction
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/web-scraping/" className="text-white hover:text-brandOrange transition">Web Scraping</Link></li>
                      <li><Link href="/services-page/data-cleaning-extraction/" className="text-white hover:text-brandOrange transition">Data Cleaning and Extraction</Link></li>
                    </ul>
                  </div>

                  {/* Category 6 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/python-scraping/" className="text-brandOrange hover:text-brandOrange transition">
                        Python Scraping
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/python-web-scraping/" className="text-white hover:text-brandOrange transition">Python Web Scraping</Link></li>
                      <li><Link href="/services-page/data-cleaning-export/" className="text-white hover:text-brandOrange transition">Data Cleaning</Link></li>
                    </ul>
                  </div>

                  {/* Category 7 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/seo-page/" className="text-brandOrange hover:text-brandOrange transition">
                        SEO
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/on-page-seo/" className="text-white hover:text-brandOrange transition">On-Page SEO</Link></li>
                      <li><Link href="/services-page/off-page-seo/" className="text-white hover:text-brandOrange transition">Off-Page SEO</Link></li>
                      <li><Link href="/services-page/technical-seo/" className="text-white hover:text-brandOrange transition">Technical SEO</Link></li>
                      <li><Link href="/services-page/local-seo/" className="text-white hover:text-brandOrange transition">Local SEO</Link></li>
                    </ul>
                  </div>

                  {/* Category 8 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link href="/services-page/web-development/" className="text-brandOrange hover:text-brandOrange transition">
                        Web Development
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link href="/services-page/front-end-development/" className="text-white hover:text-brandOrange transition">Frontend Development</Link></li>
                      <li><Link href="/services-page/back-end-development/" className="text-white hover:text-brandOrange transition">Backend Development</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li><Link href="/about-us/" className="text-black hover:text-brandOrange transition">About Us</Link></li>
          <li><Link href="/portfolio/" className="text-black hover:text-brandOrange transition">Portfolio</Link></li>
          <li><Link href="/contact-us/" className="text-black hover:text-brandOrange transition">Contact Us</Link></li>
          <li><Link href="/blogs/" className="text-black hover:text-brandOrange transition">Blogs</Link></li>
        </ul>

        {/* Book a Call */}
        <div className="hidden lg:block">
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
            className="bg-brandOrange text-white px-6 py-3 rounded-full shadow hover:bg-black hover:text-white transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-5 font-heading font-semibold text-lg">
            <li><Link href="/" className="text-black hover:text-brandOrange transition">Home</Link></li>

            {/* Mobile Dropdown */}
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex justify-between items-center w-full text-black hover:text-brandOrange transition"
              >
                Services <span>{dropdownOpen ? "▲" : "▼"}</span>
              </button>

              {dropdownOpen && (
                <div className="mt-3 pl-4 flex flex-col space-y-4">
                  <Link href="/services/lead-generation" className="text-black hover:text-brandOrange">Lead Generation</Link>
                  <Link href="/services/InternetResearch" className="text-black hover:text-brandOrange">Internet Research</Link>
                  <Link href="/services/InfluencerResearch" className="text-black hover:text-brandOrange">Influencer Research</Link>
                  <Link href="/services/DataEntry" className="text-black hover:text-brandOrange">Data Entry</Link>
                  <Link href="/services/DataExtraction" className="text-black hover:text-brandOrange">Data Extraction</Link>
                  <Link href="/services/PythonScraping" className="text-black hover:text-brandOrange">Python Scraping</Link>
                  <Link href="/services/SEOPage" className="text-black hover:text-brandOrange">SEO</Link>
                  <Link href="/services/WebDevelopment" className="text-black hover:text-brandOrange">Web Development</Link>
                </div>
              )}
            </li>

            <li><Link href="/about" className="text-black hover:text-brandOrange transition">About Us</Link></li>
            <li><Link href="/portfolio" className="text-black hover:text-brandOrange transition">Portfolio</Link></li>
            <li><Link href="/contact-us" className="text-black hover:text-brandOrange transition">Contact Us</Link></li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
                className="bg-brandOrange text-white px-4 py-2 rounded-full shadow hover:bg-black hover:text-white transition block text-center"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
