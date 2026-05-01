// src/app/page.js
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
import Head from "next/head";

export const metadata = {
  title: "B2B Lead Generation Agency | Cold Email Outreach for US Companies | InfoNav",
  description:
    "Discover InfoNavigators – offering smart digital marketing, SEO, and web solutions to grow your online presence",
  keywords:
    "InfoNav is a dedicated b2b lead generation agency helping companies book qualified sales meetings through targeted cold email outreach service and verified prospect data.",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content="6Gu3f2j64ZidAs9HWXpsqaJy4cF-fk-10LLD8uyStxg" />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
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
