import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import PythonScrapingSection from "../../../components/PythonScraping";

export const metadata = {
  title: "Python Scraping Services for Lead Generation | InfoNavigators",
  description:
    "InfoNavigators’ Python scraping services unlock actionable data for lead generation. Custom web scraping solutions to extract emails, contacts, and sales-ready leads.",
  keywords:
    "Python scraping services, web scraping for leads, custom data extraction, email lead generation, sales-ready leads, InfoNavigators",
};

const PythonScraping = () => {

  return (
    <>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://www.infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <PythonScrapingSection  />
        <FinalCTA />
      </div>
    </>
  );
};

export default PythonScraping;
