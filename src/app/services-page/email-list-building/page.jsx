import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import EmailListBuilding from "../../../components/EmailListBuildingSection";

export const metadata = {
  title: "Contact Email List Building Services | Verified Creator Discovery",
  description:
    "Build high-quality, verified email lists with Info Navigators. From B2B email marketing lists to targeted consumer databases, we create contact lists that drive sales and engagement.",
  keywords:
    "contact email list building, buy targeted email lists, b2b email marketing lists, email list building services, b2c email list building, email marketing database, lead generation email list, verified email database, targeted contact lists",
};

export default function EmailListPage() {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://www.infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <EmailListBuilding />
        <FinalCTA />
      </div>
    </>
  );
}
