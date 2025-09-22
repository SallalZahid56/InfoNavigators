import Head from "next/head";
import DataCleaningSections from "../../../components/DataCleaningSections";
import FinalCTA from "../../../components/FinalCTA";

export const metadata = {
  title: "Data Cleaning & Formatting Services | Info Navigators",
  description:
    "Professional data cleaning services to ensure accurate, standardized, and reliable information for better business decisions and marketing automation.",
  keywords:
    "data cleaning services, data formatting, crm data cleaning, spreadsheet cleaning, duplicate removal, business data management",
};

export default function DataCleaningPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://www.infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <DataCleaningSections />
        <FinalCTA />
      </div>
    </>
  );
}
