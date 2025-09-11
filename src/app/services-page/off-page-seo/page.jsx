import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import OffPageSeo from "../../../components/OffPageSeo";

export const metadata = {
  title: "Off Page SEO Services | Info Navigators",
  description:
    "Build authority and rank higher with professional Off-Page SEO services. Info Navigators provides link building, digital PR, and authority optimization to boost your visibility.",
  keywords:
    "off-page SEO, off-page SEO services, link building services, backlinks SEO, digital PR services, SEO authority building, content outreach, off-page optimization, guest posting, white hat link buildings",
};

export default function OffPageSEOPage() {
  return (
    <>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <OffPageSeo />
        <FinalCTA />
      </div>
    </>
  );
}
