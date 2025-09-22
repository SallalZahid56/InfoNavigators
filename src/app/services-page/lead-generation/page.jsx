import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import LeadGenerationSection from "../../../components/LeadGeneration";

export const metadata = {
  title: "Lead Generation Services| Verified Creator Discovery",
  description:
    "Expert B2B lead generation services with 15+ years' experience. From B2B marketing to SaaS SEO, we deliver targeted leads that drive growth.",
  keywords:
    "b2b lead generation services,b2b email marketing lists, buy b2b email lists, b2b saas lead generation, email marketing b2b lead generation,apollo b2b leads,b2b business marketing,targeted b2b lead generation,lead generation for b2b business,b2b marketing,Info nav",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};


export default function LeadGeneration() {

    return (
        <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <LeadGenerationSection />
        <FinalCTA />
      </div>
    </>
    );
}
