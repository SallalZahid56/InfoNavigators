"use client";
import { ChevronDown, CheckCircle } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full py-16 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const FeatureCard = ({ title, children }) => (
  <Card className="flex flex-col gap-2">
    <h3 className="text-lg font-heading font-semibold text-black">{title}</h3>
    <p className="text-black font-sans">{children}</p>
  </Card>
);

const FAQItem = ({ question, answer }) => (
  <details className="group rounded-xl border border-gray-200 bg-white p-5 transition-all open:shadow-md">
    <summary className="flex cursor-pointer justify-between text-left font-heading font-semibold text-black">
      <span>{question}</span>
      <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <p className="mt-3 text-black font-sans">{answer}</p>
  </details>
);

export default function EmailListPage() {
  const faqItems = [
    {
      q: "How do you source your email lists?",
      a: "We use trusted B2B & B2C databases, manual research, and verified tools.",
    },
    {
      q: "Are your email lists GDPR compliant?",
      a: "Yes, all our lists follow GDPR, CAN-SPAM, and CCPA regulations.",
    },
    {
      q: "Can I request a custom list for my niche?",
      a: "Absolutely — we specialize in customized contact lists for specific industries.",
    },
    {
      q: "How do you verify email addresses?",
      a: "We use multi-step verification with tools like Hunter.io, ZeroBounce, and manual checks.",
    },
    {
      q: "Can you build both local and international email lists?",
      a: "Yes — we can target specific countries, regions, or global markets.",
    },
    {
      q: "Do you provide opt-in lists?",
      a: "Yes — we can build permission-based email lists for higher engagement rates.",
    },
    {
      q: "How fast can I get my list?",
      a: "Most projects are completed in 3–5 business days.",
    },
    { q: "What’s the minimum order size?", a: "We can provide lists starting from 500 contacts." },
    {
      q: "Will my email list be ready to upload to my CRM?",
      a: "Yes — our lists are CRM-ready for platforms like HubSpot, Salesforce, and Zoho.",
    },
    {
      q: "Can you also run email campaigns for me?",
      a: "Yes — we offer end-to-end email marketing services including content writing, design, and sending.",
    },
  ];

  return (
    <div className="bg-white text-black font-sans mt-8">

      {/* Hero */}
      <Section id="hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
            Professional Contact Email List Building Services to Boost Your
            Outreach
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed">
            At Info Navigators, we help businesses connect directly with
            decision-makers and buyers by building verified, targeted email
            lists tailored to their exact needs. Whether you need B2B email
            marketing lists for corporate outreach or B2C consumer lists for
            promotions, our email list building services ensure your campaigns
            hit the right inboxes every time.
          </p>
        </div>
      </Section>

      {/* Why Email List Building */}
      <Section id="why-email">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          Why Email List Building Is Crucial for Business Growth
        </h2>
        <div className="mt-6 max-w-4xl mx-auto space-y-4 text-black font-sans">
          <p>
            Email remains one of the highest-ROI marketing channels in 2025,
            with an average return of $36 for every $1 spent. A well-built
            contact email list enables you to:
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Reach your exact target audience without wasting ad spend.",
              "Personalize marketing campaigns for higher engagement.",
              "Increase deliverability rates by avoiding invalid emails.",
              "Drive conversions with data-backed targeting.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brandOrange mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          What We Offer in Our Email List Building Services
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "B2B Email Marketing Lists",
              desc: "Verified lists of business decision-makers.",
            },
            {
              title: "B2C Consumer Email Lists",
              desc: "Targeted contacts for product promotions and events.",
            },
            {
              title: "Industry-Specific Email Databases",
              desc: "From SaaS to retail, tailored for your niche.",
            },
            {
              title: "Geo-Targeted Email Lists",
              desc: "Local, national, or international targeting.",
            },
            {
              title: "Opt-In Email Lists",
              desc: "Compliant with GDPR, CAN-SPAM, and privacy laws.",
            },
          ].map((item, idx) => (
            <FeatureCard key={idx} title={item.title}>
              {item.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          Our Proven Email List Building Process
        </h2>
        <div className="mt-6 space-y-4 max-w-3xl mx-auto">
          {[
            {
              step: "Step 1: Defining Your Audience",
              desc: "Identify your ideal customer profile (ICP) — including industry, location, and role.",
            },
            {
              step: "Step 2: Data Research & Collection",
              desc: "Using trusted databases and manual research, we find verified contact information.",
            },
            {
              step: "Step 3: Verification & Validation",
              desc: "We run each contact through Hunter.io, NeverBounce, and ZeroBounce to ensure 99% deliverability.",
            },
            {
              step: "Step 4: Segmentation & Formatting",
              desc: "Organize your email list into custom segments for targeted outreach.",
            },
            {
              step: "Step 5: Delivery",
              desc: "Send the ready-to-use list in CSV, Excel, or Google Sheets format.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <h3 className="font-heading font-semibold text-black">
                {item.step}
              </h3>
              <p className="text-black mt-1">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section id="tools">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          Tools & Technology We Use
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {[
            "Apollo.io – Prospect data enrichment",
            "Hunter.io – Email finding & verification",
            "Contact-Out – Professional email sourcing",
            "ZeroBounce – Deliverability checks",
            "LinkedIn Sales Navigator – B2B targeting",
            "Mailchimp – Campaign automation",
          ].map((tool, idx) => (
            <Card key={idx}>{tool}</Card>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          Industries We Serve
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            "SaaS & Tech Companies",
            "E-commerce Stores",
            "Healthcare & Medical Services",
            "Finance & Insurance",
            "Real Estate Agencies",
            "Education & Training Providers",
          ].map((industry, idx) => (
            <Card key={idx}>{industry}</Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          Benefits of Choosing Info Navigators
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            "100% Verified Contacts – Avoid wasted effort on fake or invalid addresses.",
            "Custom Targeting – Get lists aligned with your exact audience.",
            "Compliance-Ready Data – GDPR & CAN-SPAM compliant.",
            "High ROI – Better targeting = more conversions.",
            "Fast Delivery – Ready-to-use in days, not weeks.",
          ].map((benefit, idx) => (
            <Card key={idx} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-brandOrange mt-1" />
              <span>{benefit}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="cases">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          Case Studies – Our Email List Building Success
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="font-heading font-semibold">
              E-commerce Fashion Brand
            </h3>
            <p className="mt-1 text-black">
              A US-based fashion retailer needed a list of female shoppers aged
              25–40. We delivered 25,000 targeted contacts that generated $85K
              in sales in 60 days.
            </p>
          </Card>
          <Card>
            <h3 className="font-heading font-semibold">B2B SaaS Company</h3>
            <p className="mt-1 text-black">
              A B2B SaaS startup used our email marketing database to run cold
              outreach and secured 50+ product demos in the first month.
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faqs">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </Section>
    </div>
  );
}
