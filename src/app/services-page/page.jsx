import React from "react";
import Image from "next/image";

import ServicesContent from "../../components/ServicesContent";
import Testimonials from "../../components/Testimonials";
import HowWeDeliver from "../../components/HowWeDeliver";
import FinalCTA from "../../components/FinalCTA";
import { servicesMetadata, servicesSchema } from "../../lib/page-seo";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Main Services Intro Section */}
      <section className="w-full bg-white pt-32 pb-16 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            B2B Lead Generation <span className="text-brandOrange">Services</span> for US Companies
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed px-2 md:px-0 mb-4">
              InfoNavigators is a dedicated b2b lead generation agency built for one purpose: helping US-based B2B companies generate qualified leads and book consistent sales meetings through targeted outreach and verified prospect data.
            </p>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed px-2 md:px-0">
              We do not offer web design, data scraping, or social media management. Every service we deliver is part of one focused outbound system built to fill your sales pipeline with real conversations.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images.webp"
              alt="B2B lead generation services by InfoNavigators"
              width={800}
              height={600}
              className="rounded-xl object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <ServicesContent />
      <HowWeDeliver />
      <Testimonials />
      <FinalCTA />
    </>
  );
}