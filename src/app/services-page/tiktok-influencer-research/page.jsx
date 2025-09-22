import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import TiktokInfluencers from "../../../components/TiktokInfluencers";

export const metadata = {
  title: "TikTok Influencer Research Services | Verified Creator Discovery",
  description:
    "Expert TikTok influencer research to help brands discover verified creators, analyze engagement, and deliver data-driven influencer lists for high-ROI campaigns.",
  keywords:
    "TikTok influencer research, TikTok influencer discovery, TikTok influencer marketing research, TikTok influencer lists, influencer research services, influencer research company",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

export default function TikTokInfluencerResearch() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <TiktokInfluencers />
        <FinalCTA />
      </div>
    </>
  );
}
