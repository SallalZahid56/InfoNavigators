import FinalCTA from "../../../components/FinalCTA";
import Head from "next/head";
import DataExtractionSection from "../../../components/DataExtractionSection";

export const metadata = {
  title: "Data Extraction Services | Reliable Web & Document Data Solutions",
  description:
    "Info Navigators provides reliable global data extraction services including web scraping, PDF/document data extraction, and LinkedIn research. Outsource your data extraction today.",
  keywords:
    "data extraction services, data extraction service, web data extraction services, most reliable data extraction service, data extraction services company, outsource data extraction services, data extraction services India, LinkedIn data extraction services, website data scraping services, data extraction company, data extraction solutions",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

export default function DataExtractionPage() {

  return (
    <>
     <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <DataExtractionSection />
        <FinalCTA />
      </div>
    </>
  );
}
