"use client";
import { useState } from "react";
import Image from "next/image";

export default function B2BProspectingAutomation() {
  const faqs = [
    {
      q: "1. What is B2B prospecting automation?",
      a: "It’s the use of software and AI tools to find, contact, and qualify business leads automatically, saving time and improving accuracy.",
    },
    {
      q: "2. Is automation suitable for small businesses?",
      a: "Yes. Even small teams can benefit from affordable automation tools to compete with larger organizations.",
    },
    {
      q: "3. What tools are best for automating prospecting?",
      a: "Popular ones include HubSpot, Apollo.io, Lemlist, and Phantombuster for LinkedIn automation.",
    },
    {
      q: "4. Can automation replace human interaction?",
      a: "No — automation enhances productivity, but human judgment and relationship-building remain essential for conversions.",
    },
    {
      q: "5. How can InfoNav help my business with B2B automation?",
      a: "We specialize in automated lead generation, LinkedIn prospecting, and data-driven outreach designed to scale your business growth efficiently.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col mt-16">
      {/* Section 1 */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Introduction: The End of Manual Prospecting as We Knew It
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            {`In the fast-evolving world of B2B lead generation, time is everything. Traditional prospecting — once dependent on manual outreach, spreadsheets, and endless follow-ups — is now being transformed by automation tools and AI-powered systems.
In 2025, B2B companies that still rely on manual prospecting are falling behind competitors who automate their workflows, personalize outreach at scale, and identify high-value leads in minutes.
At InfoNav, we’ve witnessed firsthand how automation isn’t just changing how businesses find prospects — it’s redefining how relationships are built, leads are qualified, and sales pipelines are managed.`}
          </p>
        </div>
        <Image
          src="/b2b-1.jpg"
          alt="Automation introduction"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Section 2 */}
      <section className="bg-gray-50 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/b2b-2.jpg"
          alt="Automated prospecting"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold mb-4">
            What Is Automated B2B Prospecting?
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`Automated B2B prospecting uses software, AI, and workflow tools to handle repetitive tasks like:
Collecting and verifying company contact data

Sending personalized emails or LinkedIn messages

Segmenting leads based on intent and engagement

Scheduling follow-ups automatically

Instead of spending hours researching and writing outreach messages manually, automation allows marketers to focus on strategy and closing deals.`}
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Why Automation Matters in B2B Lead Generation
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`1. Saves Time and Boosts Productivity
Automation eliminates repetitive work — freeing up hours each week. Tools like HubSpot, Apollo.io, and Lemlist can automatically find, enrich, and contact leads without manual input.
2. Improves Lead Quality
Smart automation doesn’t just increase volume; it improves accuracy and targeting. AI-based tools analyze buyer intent, firmographics, and engagement history to ensure you’re connecting with decision-makers who matter.
3. Enhances Personalization at Scale
Thanks to AI, personalization no longer means writing one-on-one emails. Modern automation tools can customize messages dynamically — including the recipient’s name, company, and industry pain points — across thousands of leads.
4. Real-Time Insights and Analytics
Automation platforms provide deep analytics into open rates, click rates, and conversion patterns, allowing teams to refine campaigns continuously for higher ROI.`}
          </p>
        </div>
        <Image
          src="/b2b-3.jpg"
          alt="Automation importance"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Section 4 - Tools (Updated with Table) */}
<section className="bg-gray-50 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
  {/* Image */}
  <Image
    src="/b2b-4.jpg"
    alt="Automation tools"
    width={600}
    height={400}
    className="rounded-2xl shadow-lg order-2 md:order-1"
  />

  {/* Content */}
  <div className="order-1 md:order-2">
    <h3 className="text-2xl font-semibold mb-6">
      Top Automation Tools for B2B Prospecting in 2025
    </h3>

    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="min-w-full text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-800 font-semibold">
          <tr>
            <th className="px-4 py-3 border-b">Tool Name</th>
            <th className="px-4 py-3 border-b">Best For</th>
            <th className="px-4 py-3 border-b">Key Features</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-3 font-medium">HubSpot Sales Hub</td>
            <td className="px-4 py-3">Complete sales automation</td>
            <td className="px-4 py-3">Lead tracking, follow-up workflows, CRM integration</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Apollo.io</td>
            <td className="px-4 py-3">Lead discovery</td>
            <td className="px-4 py-3">Verified data, email automation, analytics</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Lemlist</td>
            <td className="px-4 py-3">Cold email automation</td>
            <td className="px-4 py-3">Personalization at scale, multichannel outreach</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Phantombuster</td>
            <td className="px-4 py-3">LinkedIn automation</td>
            <td className="px-4 py-3">Data scraping, connection sequences</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Zoho CRM</td>
            <td className="px-4 py-3">SMB sales teams</td>
            <td className="px-4 py-3">Automation pipelines, lead scoring, workflows</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">LinkedIn Sales Navigator + Zapier</td>
            <td className="px-4 py-3">Smart integrations</td>
            <td className="px-4 py-3">Automate lead imports, track responses</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-6 text-gray-700">
      These tools empower teams to automate 70–80% of their manual prospecting — from finding contact data to nurturing leads until they’re sales-ready.
    </p>
  </div>
</section>


      {/* Section 5 */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            The Role of AI in Modern B2B Prospecting
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`AI is the real game-changer behind today’s automation systems. Here’s how:
Predictive Lead Scoring: AI algorithms rank prospects based on engagement signals and intent data.

Natural Language Processing (NLP): Helps personalize messages by analyzing tone and context.

Chatbots and Virtual Assistants: Instantly engage with prospects on websites, collecting key details automatically.

Data Enrichment: AI tools continuously update company databases with new job titles, company info, and social insights.

💡 Example:
Instead of manually checking 500 LinkedIn profiles weekly, AI-powered systems can automatically identify decision-makers, verify contact info, and send targeted messages — all while you focus on strategy.`}
          </p>
        </div>
        <Image
          src="/b2b-5.jpg"
          alt="AI in prospecting"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Section 6 */}
      <section className="bg-gray-50 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/b2b-6.jpg"
          alt="Automation UX"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold mb-4">
            How Automation Improves User Experience for B2B Buyers
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`Today’s B2B buyers expect speed, relevance, and personalization. Automation helps deliver that:
Instant Responses: Chatbots or automated replies ensure prospects never wait long for answers.

Consistent Follow-Ups: Automated workflows prevent missed opportunities.

Personalized Journeys: Automation tools can send custom content, case studies, or demos based on each lead’s stage in the funnel.

This creates a smoother customer experience and increases conversion rates — because buyers feel understood, not spammed.`}
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Automation + Human Touch: The Perfect Balance
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`While automation can handle data and workflows, the human element still matters. Successful agencies and sales teams combine automation with authentic communication.
Here’s how to balance both:
Automate Repetitive Tasks: Prospect data, email delivery, reminders.

Add Human Review: Personalize outreach before sending.

Engage Manually in Key Moments: Follow up after replies, schedule demos, close deals.

Automation is the assistant — not the salesperson.`}
          </p>
        </div>
        <Image
          src="/b2b-7.jpg"
          alt="Human touch automation"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Section 8 */}
      <section className="bg-gray-50 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/b2b-8.jpg"
          alt="Agencies automation"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold mb-4">
            How Agencies Use Automation to Scale B2B Services
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`Marketing and lead generation agencies — especially in Pakistan and South Asia — are using automation to handle more clients efficiently.
At InfoNav, our team integrates automation into:
LinkedIn lead generation campaigns

Email list building and validation

CRM management and follow-ups

Client reporting dashboards

The result? Higher-quality leads, faster results, and cost-effective scaling for small to mid-sized businesses.`}
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Common Mistakes to Avoid When Automating Prospecting
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`Even the best tools can fail if used incorrectly. Avoid these traps:
Over-automating outreach (makes communication robotic)

Neglecting lead data quality

Ignoring compliance (GDPR, CAN-SPAM)

Not updating automation sequences regularly

Always test, personalize, and refine.`}
          </p>
        </div>
        <Image
          src="/b2b-9.jpg"
          alt="Automation mistakes"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Section 10 */}
      <section className="bg-gray-50 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/b2b-10.jpg"
          alt="Future of prospecting"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold mb-4">
            The Future of B2B Prospecting: Smarter, Not Harder
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`By 2025 and beyond, automation will continue evolving with AI-driven personalization, predictive analytics, and self-optimizing workflows.
Businesses adopting these technologies early will not only close more deals but also build long-term relationships with qualified clients faster than ever before.`}
          </p>
        </div>
      </section>

      {/* Section 11 */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Conclusion: Embrace Automation, Empower Growth
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`Automation isn’t replacing humans — it’s empowering them.
For B2B companies, integrating the right tools means more qualified leads, less manual work, and smarter decisions.
If you’re ready to scale your outreach and maximize results, explore how InfoNav’s B2B Lead Generation Services can help you leverage automation to reach your ideal clients — efficiently and effectively.`}
          </p>
        </div>
        <Image
          src="/b2b-11.jpg"
          alt="Automation conclusion"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 max-w-5xl mx-auto px-6 py-12 rounded-2xl">
        <h3 className="text-3xl font-semibold text-center mb-8">
          FAQs About B2B Prospecting Automation
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center font-medium text-gray-800"
                onClick={() => toggleFAQ(i)}
              >
                {faq.q}
                <span className="text-xl">
                  {openFAQ === i ? "−" : "+"}
                </span>
              </button>
              {openFAQ === i && (
                <div className="px-5 pb-4 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
