"use client";

import React, { useEffect, useRef, useState } from "react";

const tableOfContents = [
  { id: "what-does", label: "What Does a B2B Agency Do?" },
  { id: "five-things", label: "5 Things to Look For" },
  { id: "questions", label: "Questions to Ask" },
  { id: "red-flags", label: "Red Flags to Watch Out For" },
  { id: "outsourced", label: "Why Outsourced Lead Gen?" },
  { id: "infonav", label: "How InfoNav Approaches It" },
  { id: "final", label: "Final Thoughts" },
];

const fiveThings = [
  {
    num: "01",
    title: "Specialize in B2B, Not Everything",
    body: "Avoid general digital marketing agencies that offer lead generation as one of twenty services. Look for an agency that focuses specifically on B2B lead generation, cold email outreach, and appointment setting. Specialization means deeper expertise and better results.",
  },
  {
    num: "02",
    title: "Use Verified, Targeted Data",
    body: "The foundation of any successful outbound campaign is accurate data. A reliable agency uses tools like Apollo, LinkedIn Sales Navigator, and NeverBounce to verify every contact before outreach begins. Bad data means emails bounce and domains get flagged.",
  },
  {
    num: "03",
    title: "Have a Proven Cold Email Outreach Process",
    body: "Cold email is still the most effective B2B outreach channel when done correctly. Ask to see sample email sequences, open rates, and reply rates. A professional service will have a structured process, from subject line testing to follow-up sequencing.",
  },
  {
    num: "04",
    title: "Measure Success by Meetings Booked",
    body: "Be cautious of agencies that promise 'thousands of leads.' A results-driven appointment setting service measures success by one thing: qualified meetings booked with real decision-makers who have the budget and authority to buy.",
  },
  {
    num: "05",
    title: "Be Transparent About Their Process",
    body: "A trustworthy outsourced lead generation partner will walk you through their entire process before you sign anything — how they build lists, write emails, handle replies, and report results. If they're vague, walk away.",
  },
];

const questions = [
  {
    q: "What industries have you worked with?",
    a: "Look for experience in your niche or a similar one. An agency with SaaS experience may not be the best fit for a manufacturing company.",
  },
  {
    q: "How do you build and verify prospect lists?",
    a: "The answer should include specific tools and a verification step. If they say they 'buy lists,' that's a red flag.",
  },
  {
    q: "What does your cold email process look like end to end?",
    a: "They should walk you through every step — from ICP definition to campaign launch to reply handling.",
  },
  {
    q: "How many meetings can we realistically expect per month?",
    a: "An honest agency gives you a range based on your offer and niche. Most well-run campaigns generate 10–30 booked meetings per month.",
  },
  {
    q: "Can you show me results from past clients?",
    a: "Case studies, screenshots, or references from similar businesses are a strong signal of credibility.",
  },
];

const redFlags = [
  "Guaranteed results with no conditions — no agency can guarantee exact numbers without knowing your offer and market",
  "No clear process — if they can't explain how they work, they probably don't have a reliable system",
  "Focuses only on volume — sending 10,000 emails means nothing if none of them convert",
  "No data verification step — unverified lists lead to high bounce rates and damaged sender reputation",
  "Locks you into long contracts upfront — reputable agencies are confident enough to offer flexible terms",
];

export default function ChooseB2BLeadGenAgency({ blog }) {
  const [activeSection, setActiveSection] = useState("what-does");
  const [tocOpen, setTocOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = tableOfContents.map(({ id }) =>
      document.getElementById(id)
    );
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => s && observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#08090d] text-white font-sans selection:bg-[#4ade80]/20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .blog-wrap { font-family: 'DM Sans', sans-serif; }
        .blog-wrap h1, .blog-wrap h2, .blog-wrap h3, .blog-wrap .display {
          font-family: 'Syne', sans-serif;
        }

        .hero-glow {
          background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,222,128,0.12) 0%, transparent 70%);
        }

        .tag-pill {
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.25);
          color: #4ade80;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
        }

        .card-glass {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          transition: border-color 0.3s, background 0.3s;
        }
        .card-glass:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(74,222,128,0.2);
        }

        .num-badge {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #4ade80;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
          border-radius: 6px;
          padding: 0.2rem 0.55rem;
          display: inline-block;
        }

        .section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4ade80;
        }

        .prose-body {
          color: rgba(255,255,255,0.68);
          line-height: 1.8;
          font-size: 1.02rem;
        }

        .toc-link {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          transition: color 0.2s;
          cursor: pointer;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          display: block;
          border-left: 2px solid transparent;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .toc-link:hover { color: rgba(255,255,255,0.8); }
        .toc-link.active {
          color: #4ade80;
          border-left-color: #4ade80;
          background: rgba(74,222,128,0.06);
        }

        .divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 2.5rem 0;
        }

        .cta-bar {
          background: linear-gradient(135deg, rgba(74,222,128,0.1) 0%, rgba(34,197,94,0.05) 100%);
          border: 1px solid rgba(74,222,128,0.2);
          border-radius: 20px;
        }

        .btn-primary {
          background: #4ade80;
          color: #08090d;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.04em;
          padding: 0.8rem 1.8rem;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.25s;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: #86efac;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(74,222,128,0.25);
        }

        .btn-ghost {
          background: transparent;
          color: rgba(255,255,255,0.75);
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.04em;
          padding: 0.8rem 1.8rem;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.25s;
          text-decoration: none;
        }
        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.35);
          color: white;
        }

        .flag-item {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
          padding: 1rem 1.25rem;
          background: rgba(239,68,68,0.04);
          border: 1px solid rgba(239,68,68,0.12);
          border-radius: 10px;
          margin-bottom: 0.6rem;
        }
        .flag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f87171;
          flex-shrink: 0;
          margin-top: 0.45rem;
        }

        .stat-box {
          background: rgba(74,222,128,0.06);
          border: 1px solid rgba(74,222,128,0.15);
          border-radius: 14px;
          padding: 1.5rem 2rem;
          text-align: center;
        }

        .accordion-item {
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .accordion-trigger {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          color: white;
          padding: 1.25rem 0;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .accordion-body {
          color: rgba(255,255,255,0.6);
          font-size: 0.95rem;
          line-height: 1.75;
          padding-bottom: 1.25rem;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.65s ease both; }
        .fade-up-2 { animation: fadeUp 0.65s 0.12s ease both; }
        .fade-up-3 { animation: fadeUp 0.65s 0.24s ease both; }

        .mobile-toc {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
        }
      `}</style>

      <div className="blog-wrap">
        {/* ── HERO ── */}
        <div className="hero-glow pt-28 pb-16 px-5">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="tag-pill">{blog.category || "B2B Growth"}</span>
              <span
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.78rem",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {formattedDate}
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(1.9rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
                marginBottom: "1.2rem",
              }}
            >
              How to Choose a B2B Lead Generation Agency{" "}
              <span style={{ color: "#4ade80" }}>in the USA</span>
            </h1>
            <p
              className="prose-body fade-up-2"
              style={{ maxWidth: "600px", margin: "0 auto 2rem" }}
            >
              Finding the right B2B lead generation agency can be the difference
              between a pipeline full of qualified opportunities and months of
              wasted budget. This guide breaks down exactly what to look for.
            </p>
            <div className="flex items-center justify-center gap-3 fade-up-3">
              <a
                href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNav%20website."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Strategy Call →
              </a>
              <a href="https://infonavigators.com/services-page/" className="btn-ghost">
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="max-w-7xl mx-auto px-5 pb-24 flex gap-10 items-start">
          {/* Sticky TOC – desktop */}
          <aside
            className="hidden lg:block sticky top-28 w-56 flex-shrink-0"
            style={{ minWidth: "200px" }}
          >
            <p className="section-label mb-3" style={{ paddingLeft: "0.75rem" }}>
              Contents
            </p>
            <nav>
              {tableOfContents.map(({ id, label }) => (
                <a
                  key={id}
                  onClick={() =>
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`toc-link ${activeSection === id ? "active" : ""}`}
                >
                  {label}
                </a>
              ))}
            </nav>
            {/* Mini CTA */}
            <div
              style={{
                marginTop: "2rem",
                background: "rgba(74,222,128,0.07)",
                border: "1px solid rgba(74,222,128,0.18)",
                borderRadius: "12px",
                padding: "1.1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  marginBottom: "0.5rem",
                }}
              >
                Ready to grow?
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                  marginBottom: "0.9rem",
                }}
              >
                Book a free strategy call with InfoNav.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNav%20website."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#4ade80",
                  color: "#08090d",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  textAlign: "center",
                  padding: "0.6rem 0",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                Book Free Call →
              </a>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main style={{ flex: 1, minWidth: 0 }}>
            {/* Mobile TOC */}
            <div className="lg:hidden mobile-toc mb-8">
              <button
                className="accordion-trigger px-4"
                onClick={() => setTocOpen((p) => !p)}
                style={{ fontSize: "0.85rem" }}
              >
                <span>Table of Contents</span>
                <span style={{ color: "#4ade80" }}>{tocOpen ? "−" : "+"}</span>
              </button>
              {tocOpen && (
                <div style={{ padding: "0 0.5rem 0.75rem" }}>
                  {tableOfContents.map(({ id, label }) => (
                    <a
                      key={id}
                      onClick={() => {
                        document
                          .getElementById(id)
                          ?.scrollIntoView({ behavior: "smooth" });
                        setTocOpen(false);
                      }}
                      className={`toc-link ${activeSection === id ? "active" : ""}`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* ── SECTION 1 ── */}
            <section id="what-does" style={{ marginBottom: "3.5rem" }}>
              <p className="section-label mb-3">Overview</p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,1.85rem)",
                  fontWeight: 700,
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                What Does a B2B Lead Generation Agency Actually Do?
              </h2>
              <p className="prose-body" style={{ marginBottom: "1rem" }}>
                A B2B lead generation agency helps businesses identify, research,
                and connect with their ideal prospects. Instead of your sales team
                spending hours finding contacts and writing outreach emails, the
                agency handles the entire process — from building verified prospect
                lists to launching cold email outreach campaigns that generate
                qualified replies and booked meetings.
              </p>
              <p className="prose-body">
                The best agencies don't just hand you a list of names. They operate
                as a{" "}
                <span style={{ color: "#4ade80", fontWeight: 500 }}>
                  full outsourced lead generation partner
                </span>{" "}
                — managing data, outreach, follow-ups, and optimization so your
                team shows up to conversations, not inboxes.
              </p>
            </section>

            <hr className="divider" />

            {/* ── SECTION 2 ── */}
            <section id="five-things" style={{ marginBottom: "3.5rem" }}>
              <p className="section-label mb-3">What to Look For</p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,1.85rem)",
                  fontWeight: 700,
                  marginBottom: "1.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                5 Things to Look for When Choosing a B2B Lead Generation Agency
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {fiveThings.map((item) => (
                  <div key={item.num} className="card-glass" style={{ padding: "1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1.1rem",
                      }}
                    >
                      <span className="num-badge">{item.num}</span>
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Syne',sans-serif",
                            fontWeight: 700,
                            fontSize: "1.02rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p className="prose-body" style={{ fontSize: "0.94rem" }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="divider" />

            {/* ── SECTION 3 ── */}
            <section id="questions" style={{ marginBottom: "3.5rem" }}>
              <p className="section-label mb-3">Due Diligence</p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,1.85rem)",
                  fontWeight: 700,
                  marginBottom: "1.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Questions to Ask Before Hiring a B2B Lead Generation Agency
              </h2>
              <div>
                {questions.map((item, i) => (
                  <QuestionAccordion key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </section>

            <hr className="divider" />

            {/* ── SECTION 4 ── */}
            <section id="red-flags" style={{ marginBottom: "3.5rem" }}>
              <p className="section-label mb-3">Warning Signs</p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,1.85rem)",
                  fontWeight: 700,
                  marginBottom: "1.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Red Flags to Watch Out For
              </h2>
              <p className="prose-body" style={{ marginBottom: "1.25rem" }}>
                Not every agency that claims to be a B2B lead generation agency
                delivers real results. Watch out for these warning signs:
              </p>
              {redFlags.map((flag, i) => (
                <div key={i} className="flag-item">
                  <span className="flag-dot" />
                  <span style={{ color: "rgba(255,255,255,0.68)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {flag}
                  </span>
                </div>
              ))}
            </section>

            <hr className="divider" />

            {/* ── SECTION 5 ── */}
            <section id="outsourced" style={{ marginBottom: "3.5rem" }}>
              <p className="section-label mb-3">Cost vs. Value</p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,1.85rem)",
                  fontWeight: 700,
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Why Outsourced Lead Generation Makes Sense for US B2B Companies
              </h2>
              <p className="prose-body" style={{ marginBottom: "1rem" }}>
                Building an in-house lead generation team is expensive. You need a
                data researcher, a copywriter, a campaign manager, and outreach
                tools — all before a single email goes out. For most B2B companies,
                outsourced lead generation is a smarter, faster, and more
                cost-effective alternative.
              </p>
              <p className="prose-body" style={{ marginBottom: "2rem" }}>
                A specialized B2B email marketing agency already has the team,
                tools, and processes in place. You plug in your offer and target
                market; they handle the rest.
              </p>
              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div className="stat-box">
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#4ade80",
                      lineHeight: 1,
                    }}
                  >
                    10–30
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "0.4rem" }}>
                    Meetings booked / month
                  </p>
                </div>
                <div className="stat-box">
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#4ade80",
                      lineHeight: 1,
                    }}
                  >
                    3×
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "0.4rem" }}>
                    Faster than in-house setup
                  </p>
                </div>
                <div className="stat-box">
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#4ade80",
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "0.4rem" }}>
                    Focus on qualified meetings
                  </p>
                </div>
              </div>
            </section>

            <hr className="divider" />

            {/* ── SECTION 6 ── */}
            <section id="infonav" style={{ marginBottom: "3.5rem" }}>
              <p className="section-label mb-3">Our Approach</p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,1.85rem)",
                  fontWeight: 700,
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                How InfoNav Approaches B2B Lead Generation
              </h2>
              <p className="prose-body" style={{ marginBottom: "1rem" }}>
                At InfoNav, we operate as a dedicated outsourced lead generation
                partner for B2B companies looking to build predictable pipelines.
                Our process combines verified prospect data, personalized cold
                email outreach, and continuous campaign optimization to generate
                consistent, qualified meetings for your sales team.
              </p>
              <p className="prose-body" style={{ marginBottom: "2rem" }}>
                We don't sell lists. We build outbound systems — and we measure
                our success by the meetings we book for you.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  { icon: "🔍", label: "Verified Prospect Data" },
                  { icon: "✉️", label: "Personalized Cold Outreach" },
                  { icon: "📊", label: "Continuous Optimization" },
                  { icon: "📅", label: "Meetings Booked for You" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card-glass"
                    style={{ padding: "1.25rem", textAlign: "center" }}
                  >
                    <div style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>{item.icon}</div>
                    <p
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="divider" />

            {/* ── SECTION 7 ── */}
            <section id="final" style={{ marginBottom: "3.5rem" }}>
              <p className="section-label mb-3">Conclusion</p>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,1.85rem)",
                  fontWeight: 700,
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Final Thoughts
              </h2>
              <p className="prose-body" style={{ marginBottom: "1rem" }}>
                Choosing the right B2B lead generation agency is not about finding
                the cheapest option or the one with the flashiest website. It's
                about finding a partner who understands your market, uses verified
                data, runs proven cold email outreach campaigns, and measures
                success by real pipeline results.
              </p>
              <p className="prose-body">
                Take your time, ask the right questions, and choose an agency that
                operates with full transparency — because the right partner will
                become one of your most valuable growth assets.
              </p>
            </section>

            {/* ── CTA BAR ── */}
            <div className="cta-bar" style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(1.2rem,3vw,1.6rem)",
                  fontWeight: 800,
                  marginBottom: "0.6rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Ready to see what a results-driven agency can do for your pipeline?
              </p>
              <p
                className="prose-body"
                style={{ maxWidth: "480px", margin: "0 auto 1.75rem", fontSize: "0.95rem" }}
              >
                Let's design a cold email outreach system that brings you consistent
                meetings with qualified buyers.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNav%20website."
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Strategy Call →
                </a>
                <a
                  href="https://infonavigators.com/services-page/"
                  className="btn-ghost"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ── Accordion component for questions ── */
function QuestionAccordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setOpen((p) => !p)}>
        <span style={{ paddingRight: "1rem" }}>{q}</span>
        <span
          style={{
            color: "#4ade80",
            fontSize: "1.25rem",
            flexShrink: 0,
            transition: "transform 0.25s",
            display: "inline-block",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {open && <p className="accordion-body">{a}</p>}
    </div>
  );
}