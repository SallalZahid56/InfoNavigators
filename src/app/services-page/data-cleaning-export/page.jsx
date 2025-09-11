import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import DataCleaningExportSections from "../../../components/DataCleaningExportSection";

export const metadata = {
  title: "Professional Data Cleaning & Export Services | Reliable Data Solutions",
  description:
    "Professional data cleaning & export services for businesses in USA, Europe & worldwide. Ensure accurate, clean datasets with seamless export in Excel, CSV, or CRM formats.",
  keywords:
    "data cleaning services, data cleaning, data cleansing, clean data, data cleanup, data cleaning process, database cleaning, data cleaning tools, data cleaning services company, data export services, clean dataset",
};

export default function DataCleaningExportPage() {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <DataCleaningExportSections />
        <FinalCTA />
      </div>
    </>
  );
}
