import Head from "next/head";
import FinalCTA from "../../components/FinalCTA";
import PortfolioSection from "../../components/PortfolioSection";


export const metadata = {
  title: "Our Portfolio – Creative Projects & Case Studies",
  description:
    "Browse our creative portfolio featuring websites, campaigns, and digital solutions delivered for diverse clients.",
  keywords:
    "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

const PortfolioShowcase = () => {
  return (
    <>

     <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      {/* Call to Action */}
      <PortfolioSection />
      <FinalCTA />
    </>
  );
};

export default PortfolioShowcase;
