import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import LocalSEO from "../../../components/LocalSEO";

export const metadata = {
  title: "Local SEO Services | Info Navigators",
  description:
    "Drive more local customers with our Local SEO services. From Google Business Profile optimization to local citations, Info Navigators helps your business rank in maps and local search.",
  keywords:
    "local SEO services, local SEO, local SEO optimization, Google My Business optimization, Google Maps SEO, local citations, local SEO company, local SEO for small businesses, local SEO agency",
  alternates: {
    canonical: "https://infonavigators.com/services-page/local-seo", // ✅ canonical here
  },
};

const LocalSEOPage = () => {


  return (
     <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <LocalSEO />
        <FinalCTA />
      </div>
    </>
  );
};

export default LocalSEOPage;
