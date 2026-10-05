import Link from "next/link";

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {children}
  </svg>
);

const IconBadge = ({ children }) => (
  <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brandOrange to-orange-400 text-white shadow-md">
    {children}
  </div>
);

const Check = ({ dark }) => (
  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? "bg-brandOrange text-white" : "bg-orange-100 text-brandOrange"}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  </span>
);

const emailBullets = [
  "Dedicated sending domain setup and inbox warm-up",
  "Personalized sequences written for your specific offer and target audience",
  "Subject line and copy A/B testing throughout the campaign",
  "Full reply management through to booked meetings",
  "Weekly performance reporting with open rates, reply rates, and meetings booked",
];

const listBullets = [
  "Contacts matched to your exact ICP including industry, title, company size, and geography",
  "Verified emails with low bounce rates",
  "LinkedIn profile URLs and company data included",
  "Segmentation ready for campaign launch",
  "Delivery within 3 to 5 business days",
];

// NOTE: these are the figures from the content plan. Only keep numbers you can
// stand behind. Edit or delete any item here and the page updates automatically.
const results = [
  { v: "3 to 8%", l: "reply rates on targeted, well-written sequences" },
  { v: "1 to 3%", l: "of total prospects convert to booked meetings" },
  { v: "8 to 25", l: "qualified meetings per month at standard outreach volume" },
  { v: "Month 3+", l: "improving results as targeting and messaging are refined" },
];

const cardBase =
  "group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200";

export default function PortfolioSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-12 px-6 lg:px-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-60" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brandOrange">
            Portfolio Highlights
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            B2B Lead Generation and <span className="text-brandOrange">Cold Email Campaign Results</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a dedicated b2b lead generation agency, every campaign we run is built around one outcome: getting qualified decision-makers onto your sales team&apos;s calendar. Below are examples of the work we do for US-based B2B companies.
          </p>
        </div>
      </section>

      <section className="w-full bg-white pb-14 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Email Campaigns + Lead Gen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={cardBase}>
              <span className="pointer-events-none absolute -top-4 right-4 select-none text-8xl font-black text-orange-100">01</span>
              <IconBadge>
                <Svg><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
              </IconBadge>
              <h2 className="relative font-heading text-xl md:text-2xl font-bold text-gray-900 mb-4">Email Campaigns</h2>
              <p className="relative text-gray-700 leading-relaxed mb-4">
                We design and execute multi-touch cold email sequences as a specialized b2b email marketing agency usa businesses rely on. Every campaign starts with verified prospect data, moves through a personalized 3 to 5 step sequence, and is continuously optimized based on real reply and meeting data.
              </p>
              <h3 className="relative mb-3 text-xs font-bold uppercase tracking-widest text-brandOrange">What our email campaigns include</h3>
              <ul className="relative space-y-2.5 mb-5">
                {emailBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-snug text-gray-700"><Check /><span>{b}</span></li>
                ))}
              </ul>
              <p className="relative border-t border-gray-100 pt-4 text-gray-600 leading-relaxed">
                Our cold email outreach service is built to generate conversations with decision-makers, not vanity metrics.
              </p>
            </div>

            <div className={cardBase}>
              <span className="pointer-events-none absolute -top-4 right-4 select-none text-8xl font-black text-orange-100">02</span>
              <IconBadge>
                <Svg><path d="M8 6h13M8 12h13M8 18h13" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></Svg>
              </IconBadge>
              <h2 className="relative font-heading text-xl md:text-2xl font-bold text-gray-900 mb-4">Lead Generation and Prospect List Building</h2>
              <p className="relative text-gray-700 leading-relaxed mb-4">
                We build custom, verified contact lists that give your sales team direct access to the right decision-makers at the right companies. This is the core of what makes InfoNav a trusted b2b lead generation agency: accuracy-first prospecting that your outreach can actually rely on.
              </p>
              <h3 className="relative mb-3 text-xs font-bold uppercase tracking-widest text-brandOrange">What our list building delivers</h3>
              <ul className="relative space-y-2.5">
                {listBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-snug text-gray-700"><Check /><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Appointment Setting - dark featured, full width */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-6 md:p-10 text-white shadow-xl">
            <span className="pointer-events-none absolute -top-4 right-6 select-none text-8xl font-black text-white opacity-5">03</span>
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brandOrange opacity-20 blur-3xl" />
            <div className="relative max-w-3xl">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Appointment Setting</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our appointment setting service b2b clients rely on covers the full funnel from first outreach email to confirmed meeting on your calendar. We manage every reply, qualify every interested prospect, and hand your sales team only conversations that are worth their time.
              </p>
            </div>
            <h3 className="relative mb-4 text-xs font-bold uppercase tracking-widest text-orange-300">What appointment setting results look like</h3>
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4">
              {results.map((r) => (
                <div key={r.v} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-brandOrange">{r.v}</p>
                  <p className="mt-2 text-sm text-gray-300 leading-snug">{r.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outsourced partnership */}
          <div className={cardBase}>
            <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
              <IconBadge>
                <Svg><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></Svg>
              </IconBadge>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-4">Outsourced Lead Generation Partnership</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For companies that want a long-term outbound partner rather than a one-off campaign, we operate as a fully outsourced lead generation team. We handle strategy, data, outreach, and optimization on an ongoing basis.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This model replaces the need to hire, train, and manage an internal SDR team. You get dedicated outbound expertise from week one at a fraction of the cost of a full-time hire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white pb-16 px-6 lg:px-20">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-brandOrange to-orange-500 px-6 py-12 md:px-12 text-center text-white shadow-xl">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white opacity-10 blur-2xl" />
          <h2 className="relative font-heading text-2xl md:text-3xl font-bold mb-4">
            Ready to See What We Can Do for Your Business?
          </h2>
          <p className="relative mx-auto max-w-2xl leading-relaxed mb-8 text-white/90">
            Every campaign we run is built around your offer, your market, and your revenue goals. Contact us to discuss how we approach your specific situation.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <Link href="/contact-us/" className="rounded-lg bg-white px-6 py-3 font-semibold text-brandOrange hover:bg-gray-100 transition">
              Get in Touch
            </Link>
            <Link href="/services-page/" className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-brandOrange transition">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}