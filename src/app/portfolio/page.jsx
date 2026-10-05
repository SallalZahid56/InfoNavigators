import FinalCTA from "../../components/FinalCTA";
import PortfolioSection from "../../components/PortfolioSection";
import { portfolioMetadata, portfolioSchema } from "../../lib/page-seo";


export const metadata = portfolioMetadata;

const PortfolioShowcase = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      {/* Call to Action */}
      <PortfolioSection />
      <FinalCTA />
    </>
  );
};

export default PortfolioShowcase;
