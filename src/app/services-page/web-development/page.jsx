import Head from "next/head";
import FinalCTA from "../../../components/FinalCTA";
import WebDevelopment from "../../../components/WebDevelopment";

export const metadata = {
  title: "Web Development Services | Info Navigators",
  description:
    "Professional Web development services with HTML, CSS, JavaScript, ReactJS and NextJs. Info Navigators builds secure, scalable, and high-performance web applications.",
  keywords:
    "Web development services, backend developer services, node js backend development, React Development, NextJS Developer, backend web development company, scalable backend solutions, backend API development",
  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

const WebsiteDevelopmentPage = () => {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <WebDevelopment />
        <FinalCTA />
      </div>
    </>
  );
};

export default WebsiteDevelopmentPage;
