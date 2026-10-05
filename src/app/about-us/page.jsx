import React from "react";
import Image from "next/image";

import AboutContent from "../../components/AboutContent";
import FinalCTA from "../../components/FinalCTA";
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
          <div>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              At InfoNavigators, we do one thing and we do it well: we help US-based B2B companies generate qualified leads through targeted prospecting and strategic cold email outreach service that connects you with the right decision-makers.
            </p>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed">
              We are not a general digital agency. We do not build websites, run paid ads, or manage social media. As a dedicated b2b lead generation agency, our entire focus is outbound: building the systems, lists, and email campaigns that fill your sales pipeline with real conversations.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/aboutus.png"
              alt="InfoNavigators B2B lead generation team"
              width={600}
              height={400}
              className="rounded-2xl shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <AboutContent />
      <FinalCTA />
    </>
  );
}