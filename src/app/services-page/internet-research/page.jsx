import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import InternetResearch from "../../../components/InternetResearch";

export const metadata = {
  title: "Online Internet Research Services for Businesses | Info Navigators",
  description:
    "Get reliable online internet research services with Info Navigators. We provide accurate data for market research, lead research, and competitor analysis to support smarter business decisions. Start today!",
  keywords:
    "online internet research, internet research for business, web research data, social media research, internet researcher, business research, market research, competitive analysis, lead research, research internet",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

export default function OnlineResearchServices() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <InternetResearch />
        <FinalCTA />
      </div>
    </>
  );
}
