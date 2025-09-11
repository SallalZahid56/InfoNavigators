import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import TechnicalSeo from "../../../components/TechnicalSeo";

export const metadata = {
  title: "Technical SEO Services | Info Navigators",
  description:
    "Improve site performance, speed, and crawlability with our expert Technical SEO services. Info Navigators ensures your website is optimized for search engines and users.",
  keywords:
    "technical SEO, technical SEO services, technical SEO optimization, website speed optimization, SEO site audit, crawlability optimization, structured data SEO, schema markup SEO, mobile SEO optimization, SEO technical audit, technical SEO company",
};


const TechnicalSEOPage = () => {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <TechnicalSeo />
        <FinalCTA />
      </div>
    </>
  );
};

export default TechnicalSEOPage;
