import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import DataVerificationSection from "../../../components/DataVerificationSection";

export const metadata = {
  title: "Data Verification & Fact-Checking Services | Info Navigators",
  description:
    "Ensure your business decisions are based on accurate information with our professional data verification & fact-checking services. Reliable, precise, and trusted worldwide.",
  keywords:
    "data verification services, fact-checking services, validation services, verify data accuracy, data quality check, online research fact-checking, data verification for business",
  alternates: {
    canonical: "https://infonavigators.com/services-page/data-verification", // ✅ canonical here
  },
};

export default function DataVerificationPage() {

  return (


    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <DataVerificationSection />
        <FinalCTA />
      </div>
    </>
  );
}
