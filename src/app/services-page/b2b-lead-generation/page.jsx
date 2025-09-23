import Head from "next/head";
import LeadGenerationSections from "../../../components/LeadGenerationSections";
import FinalCTA from "../../../components/FinalCTA";


export const metadata = {
  title: "B2B Lead Generation Services",
  description:
    "Expert B2B lead generation services with 15+ years' experience. From B2B marketing to SaaS SEO, we deliver targeted B2B leads that drive growth.",
  keywords:
    "b2b lead generation services, email marketing b2b, saas seo, targeted b2b leads, Info Navigators",
  alternates: {
    canonical: "https://infonavigators.com/services-page/b2b-lead-generation", // ✅ canonical here
  },
};

export default function LeadGenerationPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <LeadGenerationSections />
        <FinalCTA />
      </div>
    </>
  );
}
