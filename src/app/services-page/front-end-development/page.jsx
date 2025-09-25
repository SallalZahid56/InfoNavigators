import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import FrontEnd from "../../../components/FrontEndDevelopment";

export const metadata = {
  title: "Front-End Development Services | Responsive & SEO Websites",
  description:
    "Professional front-end development services with React, Vue, and modern frameworks. Info Navigators builds responsive, SEO-optimized websites that drive results.",
  keywords:
    "Professional front-end development services with React, Vue, and modern frameworks. Info Navigators builds responsive, SEO-optimized websites that drive results.",
  alternates: {
    canonical: "https://infonavigators.com/services-page/front-end-development", // ✅ canonical here
  },
};

export default function FrontEndDevelopment() {

  return (
   <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <FrontEnd />
        <FinalCTA />
      </div>
    </>
  );
}
