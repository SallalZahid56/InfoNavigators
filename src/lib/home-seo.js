const SITE = "https://infonavigators.com";
const OG_IMAGE = `${SITE}/og-image.jpg`;

export const homeMetadata = {
  title:
    "B2B Lead Generation Agency | Cold Email Outreach USA | InfoNavigators",
  description:
    "InfoNavigators is a dedicated B2B lead generation agency helping US companies book qualified sales meetings through targeted cold email outreach, appointment setting, and verified prospect lists.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    type: "website",
    url: `${SITE}/`,
    title: "InfoNavigators B2B Lead Generation Agency USA",
    description:
      "We help US B2B companies book qualified sales meetings through targeted cold email outreach, verified prospect lists, and appointment setting.",
    images: [OG_IMAGE],
    siteName: "InfoNavigators",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfoNavigators B2B Lead Generation Agency USA",
    description:
      "Cold email outreach and appointment setting for US B2B companies. We fill your sales pipeline with qualified meetings.",
    images: [OG_IMAGE],
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "InfoNavigators",
  alternateName: "InfoNav",
  url: SITE,
  logo: `${SITE}/logo.png`,
  description:
    "InfoNavigators is a dedicated B2B lead generation agency helping US-based companies generate qualified leads through cold email outreach, appointment setting, and verified prospect list building.",
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
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: [
    "B2B Lead Generation",
    "Cold Email Outreach",
    "Appointment Setting",
    "Prospect List Building",
    "B2B Email Marketing",
  ],
  sameAs: [
    "https://www.linkedin.com/company/infonavigators",
    "https://clutch.co/profile/infonavigators",
  ],
  priceRange: "$$",
  knowsAbout: [
    "B2B Lead Generation",
    "Cold Email Outreach",
    "Appointment Setting",
    "Sales Development",
    "Outbound Marketing",
    "Email Deliverability",
    "Prospect List Building",
  ],
};

const faq = (name, text) => ({
  "@type": "Question",
  name,
  acceptedAnswer: { "@type": "Answer", text },
});

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    faq(
      "What is a B2B lead generation agency?",
      "A B2B lead generation agency identifies and contacts potential business clients on your behalf through targeted outreach, verified prospect data, and cold email campaigns. InfoNavigators specializes in this service exclusively for US-based B2B companies."
    ),
    faq(
      "How does cold email outreach work for B2B companies?",
      "Cold email outreach involves sending personalized emails to targeted decision-makers at companies matching your ideal customer profile. A professional cold email outreach service handles list building, inbox setup, sequence writing, and reply management to book qualified meetings."
    ),
    faq(
      "What does an appointment setting service do for B2B companies?",
      "A B2B appointment setting service manages the full prospecting process from outreach to reply handling and books qualified meetings directly onto your sales team's calendar, so your closers spend time on calls, not cold outreach."
    ),
    faq(
      "How much does B2B lead generation cost?",
      "Outsourced B2B lead generation typically costs significantly less than hiring a full-time SDR. InfoNavigators offers programs starting from $500 per month for US-based B2B companies, scaling to $2,500 per month for full-service outreach including appointment setting."
    ),
    faq(
      "How do you build a B2B prospect list?",
      "A quality B2B prospect list is built by defining your ideal customer profile first, then researching and verifying contacts one by one against those filters. InfoNavigators builds custom prospect lists from scratch using verified data sources, delivering lists with under 3% bounce rates ready for immediate outreach."
    ),
    faq(
      "How long does it take to see results from cold email outreach?",
      "Most B2B cold email campaigns begin generating replies in weeks 2 to 4. Consistent meeting bookings typically begin by month 2 to 3 as targeting and messaging are refined based on campaign data."
    ),
  ],
};