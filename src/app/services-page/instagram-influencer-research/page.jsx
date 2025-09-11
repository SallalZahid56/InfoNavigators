import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import InstagramInfluencer from "../../../components/InstagramInfluencerResearch";

export const metadata = {
  title: "Instagram Influencer Research Services | Verified Influencer Discovery",
  description:
    "Expert Instagram Influencer Research to find authentic, verified creators that grow your brand. Data-driven influencer discovery for B2B & B2C campaigns.",
  keywords:
    "Instagram influencer research, Instagram influencer discovery, Instagram influencer marketing research, Instagram influencer lists, influencer research services, influencer research company",
};

export default function InstagramInfluencerResearch() {
  
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <InstagramInfluencer />
        <FinalCTA />
      </div>
    </>
  );
}
