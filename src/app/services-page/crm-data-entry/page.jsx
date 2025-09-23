import Head from "next/head";
import CRMDataEntrySections from "../../../components/CRMDataEntrySections";
import FinalCTA from "../../../components/FinalCTA";

export const metadata = {
  title: "CRM Data Entry Services | Info Navigators",
  description:
    "Professional CRM data entry services to keep your sales pipeline clean, organized, and conversion-ready. Accurate, secure, and tailored for your business.",
  keywords:
    "crm data entry, crm data management, crm data entry services, Salesforce data entry, HubSpot data entry, zoho crm data entry, crm data migration, crm database management, crm data cleaning",
  alternates: {
    canonical: "https://infonavigators.com/services-page/crm-data-entry", // ✅ canonical here
  },
};

export default function CRMDataEntryPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <CRMDataEntrySections />
        <FinalCTA />
      </div>
    </>
  );
}
