"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Users, Sparkles, Globe2, Rocket, ChevronDown, ShieldCheck, Target, Database, Download, PhoneCall, Building2, LineChart, Zap, Send } from "lucide-react";

// --- Small UI helpers (can be reused across sections) ---
const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative w-full py-16 md:py-24 ${className}`}>
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm md:text-base font-medium backdrop-blur-sm">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${className}`}
  >
    {children}
  </div>
);

const Feature = ({ icon: Icon, title, children }) => (
  <Card className="h-full">
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-brandOrange p-3 text-white shadow ring-4 ring-orange-100/50">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="text-lg font-semibold font-heading text-black">{title}</h4>
        <p className="mt-2 text-black font-sans">{children}</p>
      </div>
    </div>
  </Card>
);

const FAQ = ({ q, a }) => (
  <details className="group rounded-xl border border-slate-200 bg-white p-5 transition-all open:shadow-md">
    <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-black font-heading">
      <span>{q}</span>
      <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <p className="mt-3 text-black font-sans">{a}</p>
  </details>
);

// --- Grouped Component (all sections inside one) ---
export default function LeadGenerationSections() {
  return (
    <>
      {/* HERO */}
      <Section id="hero" className="pt-20 sm:pt-16 pb-12 md:pt-24 md:pb-16 bg-white text-black">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Pill>B2B, Email Lists, Influencer Research & Cold Outreach – Done Right</Pill>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight">
              <span className="text-black">B2B Lead </span>
              <span className="text-brandOrange">Generation Services</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-black">
              With 15 years of experience and 1,000+ satisfied clients, Info Navigators is your trusted partner for accurate, targeted B2B leads.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:contact@infonavigators.com/" className="inline-flex gap-2 rounded-full bg-brandOrange px-6 py-3 text-white font-semibold">
                <Send className="h-5 w-5" /> Get Free Sample Leads
              </a>
              <a href="https://api.whatsapp.com/send?phone=923090266690" className="inline-flex gap-2 rounded-full border px-6 py-3 text-black font-semibold">
                <PhoneCall className="h-5 w-5" /> Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section id="what-we-do">
        <h2 className="text-3xl font-bold text-black">What We Do</h2>
        <div className="mt-6 grid grid-cols-1 gap-4">
          <Feature icon={Target} title="Targeted Lists">Verified prospects tailored to your ICP.</Feature>
          <Feature icon={Database} title="Clean Data">Accurate enrichment & validation.</Feature>
          <Feature icon={ShieldCheck} title="Verified Contacts">Lower bounce, higher response.</Feature>
          <Feature icon={Rocket} title="Faster Outreach">Spend less time searching, more time selling.</Feature>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <h2 className="text-3xl font-bold text-black mb-6">About Info Navigators Lead Generation</h2>
        <p className="text-black">We’ve helped businesses across industries achieve predictable growth by delivering targeted leads.</p>
      </Section>

      {/* WHY LEAD GENERATION */}
      <Section id="why">
        <h2 className="text-2xl md:text-3xl font-bold">Why Lead Generation is Vital</h2>
        <p className="mt-4 text-black">Lead generation acts as the fuel for your sales pipeline.</p>
      </Section>

      {/* INDUSTRIES */}
      <Section id="industries">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Industries We Serve</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card><h4 className="font-semibold">IT & SaaS</h4><p>B2B SaaS SEO, B2B sales examples</p></Card>
          <Card><h4 className="font-semibold">Manufacturing</h4><p>B2B manufacturing marketing strategy</p></Card>
          <Card><h4 className="font-semibold">Wholesale & Export</h4><p>Best B2B platform for export business</p></Card>
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section id="case-studies">
        <h2 className="text-2xl md:text-3xl font-bold">Case Studies</h2>
        <Card><h4 className="font-semibold">SaaS Startup</h4><p>Delivered 5,000 qualified contacts → 27% email response rate.</p></Card>
        <Card><h4 className="font-semibold">Manufacturing Supplier</h4><p>Generated $120K in new orders within first quarter.</p></Card>
      </Section>

      {/* FAQ */}
      <Section id="faqs">
        <h2 className="text-2xl md:text-3xl font-bold">FAQs</h2>
        <div className="mt-6 flex flex-col gap-4">
          <FAQ q="What’s the difference between B2B and B2C leads?" a="B2B leads = businesses, B2C leads = individual consumers." />
          <FAQ q="How do you ensure lead quality?" a="Strict data verification + targeted matching." />
        </div>
      </Section>
    </>
  );
}
