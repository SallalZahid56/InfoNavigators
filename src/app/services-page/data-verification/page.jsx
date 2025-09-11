import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import DataVerificationSection from "../../../components/DataVerificationSection";

export const metadata = {
  title: "Data Verification & Fact-Checking Services | Info Navigators",
  description:
    "Ensure your business decisions are based on accurate information with our professional data verification & fact-checking services. Reliable, precise, and trusted worldwide.",
  keywords:
    "data verification services, fact-checking services, validation services, verify data accuracy, data quality check, online research fact-checking, data verification for business",
};

export default function DataVerificationPage() {

  return (


    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <DataVerificationSection />
        <FinalCTA />
      </div>
    </>
  );
}
