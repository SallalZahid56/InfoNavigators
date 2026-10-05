// src/app/page.jsx
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import Outcome from "../components/Outcome";
import Strategy from "../components/Strategy";
import Services from "../components/Services";
import Tools from "../components/Tools";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import { homeMetadata, organizationSchema, faqSchema } from "../lib/home-seo";

export const metadata = {
  ...homeMetadata,
  verification: {
    google: "6Gu3f2j64ZidAs9HWXpsqaJy4cF-fk-10LLD8uyStxg",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="flex flex-col">
        <Hero />
        <ProblemSection />
        <Solution />
        <Services />
        <HowItWorks />
        <Outcome />
        <Strategy />
        <Tools />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}