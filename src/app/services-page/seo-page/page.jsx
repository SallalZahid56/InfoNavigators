import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import SeoPage from "../../../components/SeoPage";

export const metadata = {
  title: "SEO Services for Businesses | Rank Higher & Get More Traffic",
  description:
    "Info Navigators offers expert SEO services to help businesses rank higher on Google, drive organic traffic, and generate qualified leads worldwide.",
  keywords:
    "SEO services, professional SEO services, SEO company, SEO agency, technical SEO, on-page SEO, off-page SEO, local SEO, international SEO, e-commerce SEO services, SEO for businesses, affordable SEO agency, best SEO company",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

export default function SEOPage() {

  return (
     <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <SeoPage />
        <FinalCTA />
      </div>
    </>
  );
}
