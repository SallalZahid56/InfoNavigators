import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import Influencer from "../../../components/InfluencerResearch";

export const metadata = {
  title: "Influencer Research Services | Instagram, Facebook, YouTube & TikTok Experts",
  description:
    "Expert Influencer Research Services to find authentic Instagram, Facebook, YouTube, and TikTok influencers. Verified, data-driven influencer research for business growth.",
  keywords:
    "influencer research services, Instagram influencer research, Facebook influencer research, YouTube influencer research, TikTok influencer research, influencer discovery, influencer research company, influencer marketing research",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

export default function InfluencerResearchPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <Influencer />
        <FinalCTA />
      </div>
    </>
  );
}
