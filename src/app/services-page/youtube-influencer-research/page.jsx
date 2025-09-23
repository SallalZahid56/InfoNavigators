import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import YoutubeInfluencers from "../../../components/YoutubeInfluencers";

export const metadata = {
  title: "YouTube Influencer Research Services | Verified Creator Discovery",
  description:
    "Expert YouTube influencer research to discover verified creators, analyze engagement, and deliver data-driven influencer lists for impactful campaigns.",
  keywords:
    "YouTube influencer research, YouTube influencer discovery, YouTube influencer marketing research, YouTube influencer lists, influencer research services, influencer research company",
  alternates: {
    canonical: "https://infonavigators.com/services-page/youtube-influencer-research", // ✅ canonical here
  },
};

export default function YouTubeInfluencerResearch() {

  return (
    <>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <YoutubeInfluencers />
        <FinalCTA />
      </div>
    </>
  );
}
