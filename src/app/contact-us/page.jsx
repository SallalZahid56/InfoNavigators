import FinalCTA from "../../components/FinalCTA";
import Head from "next/head";
import ContactUs from "../../components/ContactUs";

export const metadata = {
  title: "Get in Touch with InfoNavigators",
  description:
    "Contact InfoNavigators for expert digital solutions, custom websites, and marketing strategies tailored to your business.",
  keywords:
    "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",

  alternates: {
    canonical: "https://infonavigators.com/", // ✅ canonical here
  },
};

export default function ContactPage() {
  return (

    <>

      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://infonavigators.com/" />
      </Head>

      <ContactUs />
      <FinalCTA />
    </>
  );
}
