import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import PythonWebScrapingSection from "../../../components/PythonWebScraping";

export const metadata = {
  title: "Python Web Scraping Services with Libraries | Data Extraction Experts",
  description:
    "Professional Python web scraping services using BeautifulSoup, Scrapy, Selenium & Pandas. Extract, clean, and export accurate web data for business growth.",
  keywords:
    "python web scraping, web scraping with python, python web scraping libraries, python web scraping services, beautifulsoup scraping, scrapy web scraping, selenium web scraping, pandas data cleaning, python data extraction services",
};

export default function PythonWebScrapingPage() {


  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://www.infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <PythonWebScrapingSection />
        <FinalCTA />
      </div>
    </>
  );
}
