import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import MarketResearch from "../../../components/MarketResearch";

export const metadata = {
  title: "Market Research & Competitor Analysis Services",
  description:
    "Unlock smarter, data-driven business decisions with Info Navigators' expert market research and competitor analysis services. Our tailored solutions offer valuable insights to help you stay ahead of the competition. Start your project today!",
  keywords:
    "market research, market research services, market research tools, market research companies, market research analyst, marketing research, online market research, market research firms, market research surveys, business market research, market research reports, competitor analysis, qualitative market research, market research definition, AI market research, B2B market research",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

const MarketResearchPage = () => {
  return (
    <>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <MarketResearch />
        <FinalCTA />
      </div>
    </>
  );
};

export default MarketResearchPage;
