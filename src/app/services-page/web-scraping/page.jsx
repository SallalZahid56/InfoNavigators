import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import WebScraping from "../../../components/WebScraping";

export const metadata = {
  title: "Web Scraping Services | Reliable Website Data Extraction Company",
  description:
    "Professional web scraping services for businesses in USA, Europe & worldwide. Extract product data, pricing, leads, and insights with our reliable web data extraction solutions.",
  keywords:
    "web scraping services, web data extraction services, website data scraping services, outsource web scraping, data extraction solutions, data extraction company",
  alternates: {
    canonical: "https://infonavigators.com/services-page/web-scraping", // ✅ canonical here
  },
};

const WebScrapingPage = () => {
  return (
     <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <WebScraping />
        <FinalCTA />
      </div>
    </>
  );
};

export default WebScrapingPage;
