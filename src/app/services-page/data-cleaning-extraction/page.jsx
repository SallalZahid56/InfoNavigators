import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import DataCleaningExtractionSections from "../../../components/DataCleaningExtractionSection";

export const metadata = {
  title: "Data Cleaning & Export Services | Accurate Business Data Solutions",
  description:
    "Professional data cleaning & formatting services to ensure accuracy, consistency, and usability. From database cleanup to multi-source data integration, we turn messy data into actionable insights.",
  keywords:
    "data cleaning services, data cleansing, clean data, data cleanup, data cleaning methods, data cleansing process, data cleaning tools, data cleaning best practices, database cleaning, dataset cleaning, data scrubbing techniques",
  alternates: {
    canonical: "https://infonavigators.com/services-page/data-cleaning-extraction", // ✅ canonical here
  },
};

export default function DataCleaningPage() {

    return (
        <>
        <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
              <DataCleaningExtractionSections />
              <FinalCTA />
            </div>
        </>

    );
}
