import Link from "next/link";

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {children}
  </svg>
);

const IconBadge = ({ children }) => (
  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brandOrange to-orange-400 text-white shadow-md">
    {children}
  </div>
);

const whatWeDo = [
  "Building verified, targeted prospect lists matched to your ideal customer profile",
  "Setting up email infrastructure that lands in the inbox, not spam",
  "Writing and launching personalized cold email sequences",
  "Managing replies and qualifying interested prospects",
  "Booking confirmed meetings directly onto your sales team's calendar",
];

const pillars = [
  { t: "The right people", d: "Your ICP" },
  { t: "The right message", d: "Relevant and direct" },
  { t: "The right timing", d: "Consistent follow-up" },
];

const values = [
  {
    t: "Accuracy over volume",
    d: "A targeted list of 500 verified prospects outperforms a generic list of 5,000 every time.",
    icon: <Svg><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></Svg>,
  },
  {
    t: "Inbox first",
    d: "Every campaign we run is built on proper infrastructure. Deliverability is not optional.",
    icon: <Svg><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>,
  },
  {
    t: "Transparency always",
    d: "You see every metric, every reply, every result. No black boxes.",
    icon: <Svg><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></Svg>,
  },
  {
    t: "Focus",
    d: "We do outbound lead generation. Nothing else. That focus is why we are good at it.",
    icon: <Svg><path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" /></Svg>,
  },
];

const cardBase =
  "group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200";

export default function AboutContent() {
  return (
    <>
      {/* WHAT WE DO + WHO WE WORK WITH */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 px-6 lg:px-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-60" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What We Do - dark featured card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-6 md:p-8 text-white shadow-xl">
            <span className="pointer-events-none absolute -top-4 right-4 select-none text-8xl font-black text-white opacity-5">01</span>
            <h2 className="font-heading text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-300 leading-relaxed mb-5">
              We operate as your fully outsourced lead generation partner. That means we handle the complete outbound process from start to finish:
            </p>
            <ol className="space-y-4 mb-6">
              {whatWeDo.map((w, n) => (
                <li key={w} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brandOrange text-sm font-bold">
                    {n + 1}
                  </span>
                  <span className="text-gray-200 leading-snug pt-1">{w}</span>
                </li>
              ))}
            </ol>
            <p className="font-semibold text-orange-300">
              You focus on closing. We handle everything before the conversation starts.
            </p>
          </div>

          {/* Who We Work With */}
          <div className={cardBase}>
            <span className="pointer-events-none absolute -top-4 right-4 select-none text-8xl font-black text-orange-100">02</span>
            <IconBadge>
              <Svg><circle cx="9" cy="8" r="3.5" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" /><path d="M17 11a3 3 0 1 0 0-6M22 20c0-2.6-1.6-4.6-4-5.5" /></Svg>
            </IconBadge>
            <h2 className="relative font-heading text-2xl font-bold text-gray-900 mb-4">Who We Work With</h2>
            <p className="relative text-gray-700 leading-relaxed mb-4">
              Our clients are US-based B2B companies that need a reliable, repeatable source of qualified leads without the cost and complexity of building an internal SDR team from scratch.
            </p>
            <p className="relative text-gray-700 leading-relaxed">
              We work across industries including SaaS, financial services, professional services, logistics, healthcare IT, and business consulting. We also specialize in affordable b2b lead generation for startups and small businesses looking to build their first consistent outbound pipeline. If you sell B2B and need more qualified meetings, we are built for your business.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="w-full bg-white py-14 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={cardBase}>
            <IconBadge>
              <Svg><path d="M4 21V4M4 4h13l-2 4 2 4H4" /></Svg>
            </IconBadge>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To help B2B businesses build consistent, predictable pipeline through honest outreach, verified data, and a cold email outreach service that treats every prospect with respect and every client revenue goal as our own.
            </p>
          </div>
          <div className={cardBase}>
            <IconBadge>
              <Svg><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></Svg>
            </IconBadge>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted b2b lead generation agency for US-based companies that need outbound systems that actually work. Not vanity metrics, not inflated reports, not empty promises. Just meetings, pipeline, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="w-full bg-gray-50 py-14 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Our <span className="text-brandOrange">Philosophy</span>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-8">
            We believe the best outbound is built on three things: the right people which is your ICP, the right message which is relevant and direct, and the right timing which is consistent follow-up. Our entire appointment setting service b2b process is built around this principle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {pillars.map((p, n) => (
              <div key={p.t} className="rounded-2xl bg-white border border-gray-200 p-5 text-center shadow-sm">
                <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brandOrange text-white font-bold">
                  {n + 1}
                </span>
                <p className="font-semibold text-gray-900">{p.t}</p>
                <p className="text-sm text-gray-600">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
            We are a client-first team. We report transparently, test constantly, and measure ourselves by one metric only: qualified meetings booked for your business.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="w-full bg-white py-14 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Our <span className="text-brandOrange">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.t} className={cardBase}>
                <IconBadge>{v.icon}</IconBadge>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{v.t}</h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-700">
            InfoNavigators is headquartered in the United States and serves B2B companies across North America.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact-us/"
              className="px-6 py-3 rounded-lg bg-brandOrange text-white font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}