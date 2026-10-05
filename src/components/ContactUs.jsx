import Link from "next/link";

/* ---------- EDIT THESE THREE VALUES ---------- */
const TALLY_FORM_ID = "Me9LPX"; // from your Tally share link: tally.so/r/XXXXXX  ->  XXXXXX
const PHONE = "17579369494";
const ADDRESS = "3812 Florin Rd STE 104, Sacramento, CA 95823, United States"; // keep ONLY if this is a real address you use
/* --------------------------------------------- */

const EMAIL = "contact@infonavigators.com";

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    {children}
  </svg>
);

const steps = [
  { t: "We review your request", d: "Within 1 business day we review your request and prepare for your call." },
  { t: "Discovery call", d: "A 20 to 30 minute call where we learn about your offer, your target market, and your current outbound situation." },
  { t: "You get a proposal", d: "A clear plan, timeline, and pricing. No vague retainers, no surprise fees." },
  { t: "We get to work", d: "We start building your list, setting up your infrastructure, and launching your first campaign." },
];

const coreServices = [
  { t: "B2B Lead Generation", d: "Targeted prospect lists built from your ICP and verified for accuracy. The foundation of every campaign we run as a dedicated b2b lead generation agency." },
  { t: "Cold Email Outreach", d: "Full campaign management from inbox setup to sequence writing and optimization. A proven cold email outreach service that lands in the inbox and generates replies." },
  { t: "Appointment Setting", d: "We manage replies, qualify prospects, and book confirmed meetings onto your calendar. The appointment setting service b2b sales teams rely on for consistent pipeline." },
  { t: "Prospect List Building", d: "Custom-built, verified contact lists for your exact target market. The backbone of every outsourced lead generation program we run." },
];

const card =
  "relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200";

export default function ContactUs() {
  const formReady = TALLY_FORM_ID !== "YOUR_TALLY_FORM_ID";

  return (
    <>
      {/* HERO + FORM */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-16 px-6 lg:px-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-60" />

        <div className="relative max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Build Your <span className="text-brandOrange">B2B Lead Pipeline</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            Ready to stop relying on referrals and start generating consistent, qualified leads? As a dedicated b2b lead generation agency for US companies, we build outbound systems that connect you with decision-makers who are ready to talk.
          </p>
          <p className="text-gray-600">
            Fill in the form below and we will get back to you within 1 business day.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 rounded-3xl bg-white border border-gray-200 shadow-lg p-4 md:p-6">
            {formReady ? (
              <iframe
                src={`https://tally.so/embed/${TALLY_FORM_ID}?hideTitle=1&transparentBackground=1`}
                title="InfoNavigators contact form"
                loading="lazy"
                className="w-full h-[950px] border-0"
              />
            ) : (
              <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50 p-6 text-center text-sm text-gray-700">
                Contact form will comes here
              </div>
            )}
          </div>

          {/* Contact details */}
          <aside className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white p-6 md:p-8 shadow-xl flex flex-col">
            <h2 className="font-heading text-xl font-bold mb-6">Contact Details</h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brandOrange">
                  <Svg><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-orange-300">Email</p>
                  <a href={`mailto:${EMAIL}`} className="break-all text-gray-100 hover:text-white">{EMAIL}</a>
                </div>
              </li>
              {PHONE && (
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brandOrange">
                    <Svg><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></Svg>
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-orange-300">Phone</p>
                    <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="text-gray-100 hover:text-white">{PHONE}</a>
                  </div>
                </li>
              )}
              {ADDRESS && (
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brandOrange">
                    <Svg><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Svg>
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-orange-300">Address</p>
                    <p className="text-gray-100">{ADDRESS}</p>
                  </div>
                </li>
              )}
            </ul>
            <p className="mt-auto pt-8 text-sm text-gray-400 leading-relaxed">
              We work with B2B companies across the United States. Response time: within 1 business day.
            </p>
          </aside>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="w-full bg-white py-14 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            What Happens After <span className="text-brandOrange">You Contact Us</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.t} className={card}>
                <span className="pointer-events-none absolute -top-3 right-4 select-none text-7xl font-black text-orange-100">
                  {i + 1}
                </span>
                <span className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brandOrange to-orange-400 text-white font-bold shadow-md">
                  {i + 1}
                </span>
                <h3 className="relative font-heading text-lg font-bold text-gray-900 mb-2">{s.t}</h3>
                <p className="relative text-[15px] text-gray-700 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="w-full bg-gray-50 py-14 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Core <span className="text-brandOrange">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreServices.map((s) => (
              <div key={s.t} className={`${card} border-l-4 border-l-brandOrange`}>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{s.t}</h3>
                <p className="text-gray-700 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services-page/" className="font-semibold text-brandOrange hover:underline">
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}