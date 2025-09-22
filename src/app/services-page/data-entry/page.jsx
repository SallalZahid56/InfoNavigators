import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import DataEntrySection from "../../../components/DataEntrySection";

export const metadata = {
  title: "Professional Data Entry Services for Businesses | Info Navigators",
  description:
    "Get reliable and accurate data entry services from Info Navigators. We offer CRM data entry, data cleaning, and database management with scalable, cost-effective solutions. Start your project today!",
  keywords:
    "data entry services, CRM data entry, data cleaning & formatting, database entry, remote data entry, freelance data entry, e-commerce data entry, healthcare data entry, virtual data entry, part-time data entry jobs",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};


export default function DataEntryPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <DataEntrySection />
        <FinalCTA />
      </div>
    </>
  );
}