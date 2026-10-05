import FinalCTA from "../../components/FinalCTA";
import ContactUs from "../../components/ContactUs";
import { contactMetadata, contactSchema } from "../../lib/page-seo";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (

    <>
<script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
      <ContactUs />
      <FinalCTA />
    </>
  );
}
