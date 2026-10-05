// src/app/about-us/page.jsx
import React from "react";
import ExpertiseSection from "../../components/ExpertiseSection";
import MissionVision from "../../components/MissionVision";
import TeamSection from "../../components/TeamSection";
import FinalCTA from "../../components/FinalCTA";
import Image from "next/image";
import { aboutMetadata, aboutSchema } from "../../lib/page-seo";

export const metadata = aboutMetadata;

export default function AboutUsPage() {
  return (
    <>

<script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
    />
      {/* About Section */}
      <section className="w-full bg-white pt-32 pb-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            About InfoNavigators, <span className="text-brandOrange">A Dedicated B2B Lead Generation Agency</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed">
             At InfoNav, we specialize in helping B2B businesses generate qualified leads through targeted prospecting and strategic cold email outreach service. We're not a general digital agency, as a dedicated b2b lead generation agency, we focus on building reliable outbound systems that connect you with the right decision-makers and turn outreach into real business opportunities.
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
