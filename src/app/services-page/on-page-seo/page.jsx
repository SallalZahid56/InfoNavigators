import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import OnPageSeo from "../../../components/OnPageSeo";

export const metadata = {
  title: "On Page SEO Services | Info Navigators",
  description:
    "Professional On-Page SEO services by Info Navigators. Optimize metadata, headings, content, images, and internal linking to boost rankings, organic traffic, and conversions.",
  keywords:
    "on-page SEO, on-page SEO services, on-page SEO optimization, website SEO services, content optimization, SEO keywords, metadata optimization, internal linking SEO",
};

export default function OnPageSEOPage() {

  return (
    <>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <OnPageSeo  />
        <FinalCTA />
      </div>
    </>
  );
}
