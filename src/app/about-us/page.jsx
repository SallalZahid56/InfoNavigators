// src/app/about-us/page.jsx
import React from "react";
import ExpertiseSection from "../../components/ExpertiseSection";
import MissionVision from "../../components/MissionVision";
import TeamSection from "../../components/TeamSection";
import FinalCTA from "../../components/FinalCTA";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  title: "About InfoNav - Leading Digital Marketing, Lead Generation & Data Solutions",
  description:
    "At InfoNav, we specialize in innovative digital marketing solutions including lead generation, internet research, Python scraping, and influencer research. Our mission is to drive business success with customized strategies that empower long-term growth and sustainability.",
  keywords:
    "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",
};

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://www.infonavigators.com/" />
      </Head>

      {/* About Section */}
      <section className="w-full bg-white pt-32 pb-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-brandOrange">Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed">
              At <span className="font-semibold">InfoNav</span>, we transcend
              conventional boundaries, positioning ourselves as pioneers in
              crafting strategic solutions tailored to propel your business to
              new heights. Our expertise spans a range of services, from
              mastering{" "}
              <span className="font-semibold">
                Lead Generation, Internet Research, Data Mining, Python Scraping, and Influencer Research
              </span>.
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <Image
              src="/aboutus.png" // ✅ public folder
              alt="About InfoNavigators"
              width={600}       // adjust as needed
              height={400}      // adjust as needed
              className="rounded-2xl shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <ExpertiseSection />
      <MissionVision />
      <TeamSection />
      <FinalCTA />
    </>
  );
}
