import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import EmailMarketingSection from "../../../components/EmailMarketingSection";

export const metadata = {
  title: "Email Marketing Services | High-Converting Campaigns",
  description:
    "Expert email marketing services to boost engagement and sales. From B2B email campaigns to targeted B2C promotions, we design, write, and send high-converting emails.",
  keywords:
    "email marketing services, b2b email marketing, email marketing company, email marketing agency, b2c email marketing, cold email campaigns, email automation, email drip campaigns, newsletter marketing, targeted email marketing, Info Navigators",
  alternates: {
    canonical: "https://infonavigators.com/services-page/email-marketing", // ✅ canonical here
  },
};

export default function EmailMarketing() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <EmailMarketingSection />
        <FinalCTA />
      </div>
    </>
  );
}
