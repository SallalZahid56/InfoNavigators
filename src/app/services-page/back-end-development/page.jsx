import Head from "next/head";
import BackEndSections from "../../../components/BackEndSections";
import FinalCTA from "../../../components/FinalCTA";

export const metadata = {
  title: "Back-End Development Services | Info Navigators",
  description:
    "Professional back-end development services with PHP, Node.js, and Laravel. Info Navigators builds secure, scalable, and high-performance web applications.",
  keywords:
    "back-end development services, backend developer services, node js backend development, laravel backend development, backend coding services, backend web development company, scalable backend solutions, backend API development",
};

export default function BackEndDevelopmentPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://www.infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <BackEndSections />
        <FinalCTA />
      </div>
    </>
  );
}
