const SITE = "https://infonavigators.com";
const OG_IMAGE = `${SITE}/og-image.jpg`;

function buildMeta({ title, description, path, ogTitle, ogDescription, twTitle, twDescription }) {
  const url = `${SITE}${path}`;
  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
      siteName: "InfoNavigators",
    },
    twitter: {
      card: "summary_large_image",
      title: twTitle,
      description: twDescription,
      images: [OG_IMAGE],
    },
  };
}

const provider = { "@type": "ProfessionalService", name: "InfoNavigators", url: SITE };

/* ---------------- 4B  SERVICES  (/services-page/) ---------------- */
export const servicesMetadata = buildMeta({
  title: "B2B Lead Generation Services | Cold Email Outreach and Appointment Setting | InfoNav",
  description:
    "InfoNavigators offers B2B lead generation, cold email outreach, appointment setting, and prospect list building for US-based companies. We build outbound systems that fill your sales pipeline.",
  path: "/services-page/",
  ogTitle: "B2B Lead Generation Services | Cold Email and Appointment Setting | InfoNav",
  ogDescription:
    "Cold email outreach, B2B lead generation, appointment setting, and prospect list building for US companies. Full outbound system, end to end.",
  twTitle: "B2B Lead Generation Services | InfoNavigators",
  twDescription:
    "Cold email outreach, appointment setting, and prospect list building for US B2B companies.",
});

const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "B2B Lead Generation",
  provider,
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "B2B Lead Generation Services",
    itemListElement: [
      offer("B2B Lead Generation", "Targeted prospect lists built from your ideal customer profile for outbound sales campaigns."),
      offer("Cold Email Outreach Service", "Full cold email campaign management from inbox setup to sequence writing, sending, and optimization."),
      offer("Appointment Setting Service B2B", "Full reply management and meeting booking directly onto your sales team's calendar."),
      offer("Prospect List Building", "Custom-built, verified B2B contact lists matched to your exact target market."),
    ],
  },
};

/* ---------------- 4C  ABOUT  (/about-us/) ---------------- */
export const aboutMetadata = buildMeta({
  title: "About InfoNavigators | Dedicated B2B Lead Generation Agency USA",
  description:
    "InfoNavigators is a dedicated B2B lead generation agency helping US-based B2B companies generate qualified leads through cold email outreach, appointment setting, and verified prospect data.",
  path: "/about-us/",
  ogTitle: "About InfoNavigators | B2B Lead Generation Agency",
  ogDescription:
    "InfoNavigators is a dedicated B2B lead generation and cold email outreach agency helping US companies book consistent qualified meetings.",
  twTitle: "About InfoNavigators | B2B Lead Generation Agency",
  twDescription: "Dedicated B2B lead generation and cold email outreach agency for US companies.",
});

export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About InfoNavigators",
  url: `${SITE}/about-us/`,
  description:
    "InfoNavigators is a dedicated B2B lead generation agency helping US-based companies generate qualified leads through cold email outreach and appointment setting.",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "InfoNavigators",
    url: SITE,
    areaServed: "United States",
    serviceType: "B2B Lead Generation",
  },
};

/* ---------------- 4D  CONTACT  (/contact-us/) ---------------- */
export const contactMetadata = buildMeta({
  title: "Contact InfoNavigators | Get a Free B2B Lead Generation Consultation",
  description:
    "Ready to fill your sales pipeline? Contact InfoNavigators, a dedicated B2B lead generation agency offering cold email outreach and appointment setting for US-based companies.",
  path: "/contact-us/",
  ogTitle: "Contact InfoNavigators | Free B2B Lead Generation Consultation",
  ogDescription:
    "Ready to fill your sales pipeline? Contact InfoNavigators to discuss your B2B lead generation and cold email outreach needs.",
  twTitle: "Contact InfoNavigators",
  twDescription:
    "Get in touch with InfoNavigators for B2B lead generation and cold email outreach services.",
});

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact InfoNavigators",
  url: `${SITE}/contact-us/`,
  description:
    "Contact InfoNavigators for B2B lead generation, cold email outreach, and appointment setting services for US companies.",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "InfoNavigators",
    email: "contact@infonavigators.com",
    telephone: "ADD_US_GOOGLE_VOICE_NUMBER_HERE",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3812 Florin Rd STE 104",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      postalCode: "95823",
      addressCountry: "US",
    },
  },
};

/* ---------------- 4E  PORTFOLIO  (/portfolio/) ---------------- */
export const portfolioMetadata = buildMeta({
  title: "Portfolio | B2B Lead Generation and Cold Email Campaign Results | InfoNav",
  description:
    "See how InfoNavigators helps US B2B companies generate qualified leads through cold email outreach, prospect list building, and appointment setting campaigns.",
  path: "/portfolio/",
  ogTitle: "Portfolio | B2B Lead Generation and Cold Email Results | InfoNav",
  ogDescription:
    "See how InfoNavigators helps US B2B companies generate qualified leads through cold email outreach, prospect list building, and appointment setting.",
  twTitle: "Portfolio | InfoNavigators B2B Lead Generation Results",
  twDescription: "Real B2B lead generation and cold email outreach campaign results from InfoNavigators.",
});

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "InfoNavigators Portfolio",
  url: `${SITE}/portfolio/`,
  description:
    "Portfolio of B2B lead generation, cold email outreach, and appointment setting campaigns run by InfoNavigators for US-based companies.",
  provider,
};

/* ---------------- 4F  BLOG INDEX  (/blog/) ---------------- */
export const blogIndexMetadata = buildMeta({
  title: "B2B Lead Generation Blog | Cold Email and Outreach Tips | InfoNav",
  description:
    "Practical guides on B2B lead generation, cold email outreach, appointment setting, and outsourced sales development for US-based companies.",
  path: "/blog/",
  ogTitle: "B2B Lead Generation Blog | Cold Email and Outreach Tips | InfoNav",
  ogDescription:
    "Practical guides on B2B lead generation, cold email outreach, and appointment setting for US companies.",
  twTitle: "B2B Lead Generation Blog | InfoNavigators",
  twDescription:
    "Practical guides on B2B lead generation, cold email outreach, and appointment setting.",
});