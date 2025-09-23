import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import LinkedinList from "../../../components/LinkedinList";

export const metadata = {
  title: "LinkedIn List Building Services | Verified B2B Prospect Lists",
  description:
    "Expert LinkedIn list-building services for targeted lead generation. We build verified LinkedIn prospect lists with decision-makers, influencers, and high-value contacts for your B2B outreach.",
  keywords:
    "LinkedIn list building, LinkedIn leads, b2b linkedin lead generation, LinkedIn prospecting services, LinkedIn sales navigator lists, LinkedIn contact list building, targeted LinkedIn leads, LinkedIn outreach lists, Info Navigators",
  alternates: {
    canonical: "https://infonavigators.com/services-page/linkedin-list", // ✅ canonical here
  },
};

export default function LinkedInListBuilding() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <LinkedinList />
        <FinalCTA />
      </div>
    </>
  );
}
