import Link from "next/link";

const services = [
  {
    heading: "B2B Lead Generation",
    intro: [
      "We identify and qualify the right prospects for your business based on your ideal customer profile including industry, company size, job title, geography, and technology stack. Everything starts here. Without the right target, no outreach strategy produces results.",
    ],
    bullets: [
      "Hand-researched, verified prospect lists built to your exact ICP",
      "Decision-maker contact data including direct emails and LinkedIn profiles",
      "Lists segmented and ready for immediate outbound campaign use",
      "Ongoing list refresh as your campaigns run",
    ],
    outro:
      "We work with B2B companies across industries including SaaS, financial services, IT services, logistics, healthcare technology, and professional services. Whether you need b2b lead generation for a startup finding its first clients or a scaling company entering new markets, our process adapts to your ICP and your goals.",
  },
  {
    heading: "Cold Email Outreach Service",
    intro: [
      "We design, build, and run your complete cold email outreach system from the ground up. That includes domain setup, inbox warm-up, sequence writing, personalization, sending, and ongoing optimization. Everything a professional cold email outreach service requires to land in the inbox and generate replies.",
    ],
    bullets: [
      "Dedicated sending domains configured with SPF, DKIM, and DMARC",
      "Inbox warm-up before any campaign launches",
      "Multi-touch email sequences of 3 to 5 steps written for your specific offer",
      "Personalization at scale using prospect-specific data points",
      "Weekly performance reporting with reply rates, open rates, and meeting data",
      "Continuous A/B testing on subject lines and copy",
    ],
    outro:
      "Cold email outreach works best when infrastructure, targeting, and copy are all working together. Most B2B companies that struggle with cold email are missing one of these three. Our cold email outreach service for US companies is built around all three from day one.",
  },
  {
    heading: "Appointment Setting Service B2B",
    intro: [
      "We do not just send emails and hand replies back to you. We manage the full reply flow, qualifying interested prospects, answering initial questions, and booking confirmed meetings directly onto your sales team's calendar.",
      "Your closers show up to calls with decision-makers who already know what you do and have agreed to learn more.",
    ],
    bullets: [
      "Full reply management and follow-up handling",
      "Prospect qualification before any meeting is booked",
      "Calendar integration and meeting confirmation sent to both sides",
      "Weekly report of meetings booked, cancelled, and rescheduled",
    ],
    outro:
      "Our appointment setting service b2b sales teams rely on covers every industry where decision-makers respond to direct outreach including SaaS, financial services, HR tech, logistics, manufacturing, IT services, and professional services.",
  },
  {
    heading: "Prospect List Building",
    intro: [
      "Clean, accurate, verified data is what separates a 4% reply rate from a 0.4% one. Our prospect list building service gives your outreach a foundation that actually performs.",
    ],
    bullets: [
      "Custom contact lists built from scratch, not recycled databases",
      "Verified emails with low bounce rate under 3%",
      "LinkedIn profile URLs, company data, and decision-maker titles included",
      "Segmentation by industry, revenue, geography, company size, and tech stack",
      "Delivery within 3 to 5 business days",
    ],
    outro:
      "We build b2b prospect lists and b2b email lists for outreach campaigns, LinkedIn outreach, cold calling, and account-based marketing. Every list is custom-built, not pulled from a recycled database, and verified before delivery.",
  },
  {
    heading: "B2B Email Marketing and Outbound Strategy",
    intro: [
      "For companies that want a more strategic engagement, we act as a full b2b email marketing agency usa businesses rely on, building the complete outbound playbook, not just running individual campaigns.",
    ],
    bullets: [
      "Full outbound strategy built around your offer and target market",
      "Multi-channel sequence planning with email-first and LinkedIn touchpoints",
      "Messaging frameworks and value proposition development",
      "Campaign calendar and execution roadmap",
      "Monthly performance reviews and optimization",
    ],
    outro: null,
  },
];

const reasons = [
  "100% focused on B2B outbound, no distractions, no generalist services",
  "US market experience, we understand how American buyers respond to outreach",
  "Full-funnel ownership, from list to booked meeting, we handle it all",
  "Transparent reporting, you see exactly what is working and what we are testing",
  "No long-term lock-in, we earn your continued business through results",
];

// ---------- small inline SVG icons (no extra packages needed) ----------
const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {children}
  </svg>
);
const icons = [
  // B2B Lead Generation - target
  <Svg key="a"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></Svg>,
  // Cold Email - envelope
  <Svg key="b"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>,
  // Appointment Setting - calendar check
  <Svg key="c"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4M16 2v4M3 10h18M9 15l2 2 4-4" /></Svg>,
  // Prospect List - list
  <Svg key="d"><path d="M8 6h13M8 12h13M8 18h13" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></Svg>,
  // Strategy - trending up
  <Svg key="e"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></Svg>,
];

const Check = ({ dark }) => (
  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? "bg-brandOrange text-white" : "bg-orange-100 text-brandOrange"}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  </span>
);

// Desktop placement: cards 1+2 stacked on the left, card 3 tall on the right,
// then cards 4 and 5 side by side. On mobile everything stacks in one column.
const placement = [
  "md:col-start-1 md:row-start-1",
  "md:col-start-1 md:row-start-2",
  "md:col-start-2 md:row-start-1 md:row-span-2",
  "md:col-start-1 md:row-start-3",
  "md:col-start-2 md:row-start-3",
];

// Card 3 (appointment setting) is the tall featured card, so it gets a
// process timeline at the bottom that fills the extra space with real content.
const flow = [
  { t: "Reply management", d: "Every interested reply handled and followed up" },
  { t: "Qualification", d: "Prospects qualified before any meeting is booked" },
  { t: "Meeting booked", d: "Confirmed on your sales team's calendar" },
];

export default function ServicesContent() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 px-6 lg:px-20">
        {/* soft background glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-60" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const dark = i === 2; // featured tall card
            return (
              <div
                key={s.heading}
                className={`${placement[i]} group relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col transition duration-300 hover:-translate-y-1 ${
                  dark
                    ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-200"
                }`}
              >
                {/* big faint number */}
                <span
                  className={`pointer-events-none absolute -top-4 right-4 select-none text-8xl font-black ${
                    dark ? "text-white opacity-5" : "text-orange-100"
                  }`}
                >
                  0{i + 1}
                </span>
                {/* accent glow on hover */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brandOrange opacity-0 blur-3xl transition duration-500 group-hover:opacity-20" />

                {/* icon badge */}
                <div
                  className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    dark
                      ? "bg-brandOrange text-white"
                      : "bg-gradient-to-br from-brandOrange to-orange-400 text-white shadow-md"
                  }`}
                >
                  {icons[i]}
                </div>

                <h2 className={`relative font-heading text-xl md:text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
                  {s.heading}
                </h2>

                {s.intro.map((p) => (
                  <p key={p} className={`relative font-sans text-base leading-relaxed mb-3 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                    {p}
                  </p>
                ))}

                <h3 className={`relative mt-3 mb-3 text-xs font-bold uppercase tracking-widest ${dark ? "text-orange-300" : "text-brandOrange"}`}>
                  What you get
                </h3>
                <ul className="relative space-y-2.5 mb-5">
                  {s.bullets.map((b) => (
                    <li key={b} className={`flex gap-3 text-[15px] leading-snug ${dark ? "text-gray-200" : "text-gray-700"}`}>
                      <Check dark={dark} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {s.outro && (
                  <p className={`relative font-sans text-base leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"} ${dark ? "" : "mt-auto pt-4 border-t border-gray-100"}`}>
                    {s.outro}
                  </p>
                )}

                {/* process timeline fills the tall card */}
                {dark && (
                  <div className="relative mt-auto pt-6">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-300">
                        How a meeting gets booked
                      </p>
                      <ol className="relative space-y-5">
                        <span className="absolute left-[15px] top-2 bottom-2 w-px bg-white/20" />
                        {flow.map((f, n) => (
                          <li key={f.t} className="relative flex gap-4">
                            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brandOrange text-sm font-bold text-white">
                              {n + 1}
                            </span>
                            <div>
                              <p className="font-semibold text-white leading-tight">{f.t}</p>
                              <p className="text-sm text-gray-400">{f.d}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-white py-14 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Why US B2B Companies Choose <span className="text-brandOrange">InfoNav</span>
          </h2>
          <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed mb-5">
            As a fully outsourced lead generation partner, we replace the need to hire, train, and
            manage an internal SDR team. You get the expertise of a dedicated outbound team at a
            fraction of the cost from week one.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="font-sans text-gray-900 font-medium mb-5">
            Tell us about your target market and we will show you exactly how we would approach your
            lead generation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us/"
              className="px-6 py-3 rounded-lg bg-brandOrange text-white font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us/"
              className="px-6 py-3 rounded-lg border border-brandOrange text-brandOrange font-semibold hover:bg-brandOrange hover:text-white transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}