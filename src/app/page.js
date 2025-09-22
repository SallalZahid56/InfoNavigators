// src/app/page.js
import Hero from "../components/Hero";
import Strategy from "../components/Strategy";
import Services from "../components/Services";
import Tools from "../components/Tools";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Head from "next/head";

export const metadata = {
  title: "InfoNavigators – Smart Digital Solutions for Your Business",
  description:
    "Discover InfoNavigators – offering smart digital marketing, SEO, and web solutions to grow your online presence",
  keywords:
    "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",
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
        <meta name="google-site-verification" content="6Gu3f2j64ZidAs9HWXpsqaJy4cF-fk-10LLD8uyStxg" />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <main className="flex flex-col">
        <Hero />
        <Strategy />
        <Services />
        <Tools />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
