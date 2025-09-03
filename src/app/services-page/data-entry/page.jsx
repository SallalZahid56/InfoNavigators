"use client"; // for useState

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import {
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiMail,
  FiGlobe,
  FiBarChart,
  FiDatabase,
  FiSettings,
  FiLayers,
  FiBriefcase,
  FiClock,
  FiShield,
  FiShoppingCart,
  FiHeart,
  FiFileText,
  FiHome,
} from "react-icons/fi";
import FinalCTA from "../../../components/FinalCTA";

const StatCard = ({ icon, value, label }) => (
  <div className="h-24 flex flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur border border-white/10 text-white transition transform hover:scale-105 hover:bg-brandOrange hover:border-brandOrange/50 shadow-lg hover:shadow-xl">
    <div className="text-white mb-1">{icon}</div>
    <span className="text-lg font-bold">{value}</span>
    <span className="text-xs">{label}</span>
  </div>
);

const FeatureCard = ({ icon, title, children }) => (
  <div className="p-6 bg-white rounded-xl shadow hover:shadow-md border border-gray-100 text-left">
    <div className="mb-4 text-brandOrange text-2xl">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    {children && <p className="text-gray-600">{children}</p>}
  </div>
);

const SmallCard = ({ icon, title }) => (
  <div className="p-4 rounded-xl shadow hover:shadow-md border border-gray-100 bg-white transition flex items-start gap-3">
    <div className="text-brandOrange text-xl">{icon}</div>
    <p className="text-gray-700">{title}</p>
  </div>
);

export default function DataEntryPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (i) => setFaqOpen(faqOpen === i ? null : i);

  const stats = [
    { icon: <FiUsers size={18} />, value: "1,000+", label: "Clients" },
    { icon: <FiTrendingUp size={18} />, value: "15+", label: "Years" },
    { icon: <FiMail size={18} />, value: "5M+", label: "Emails" },
    { icon: <FiGlobe size={18} />, value: "50+", label: "Countries" },
    { icon: <FiCheckCircle size={18} />, value: "98%", label: "Accuracy" },
    { icon: <FiBarChart size={18} />, value: "3x", label: "ROI" },
  ];

  const faqs = [
    {
      q: "Do you provide remote data entry services?",
      a: "Yes. Our team works on remote data entry jobs and offers flexible solutions to clients worldwide.",
    },
    {
      q: "Can you handle industry-specific projects like healthcare or finance?",
      a: "Absolutely. We have experience in medical data entry, financial records, and other sector-specific requirements.",
    },
    {
      q: "Do you offer freelance or part-time data entry support?",
      a: "Yes. You can hire us for freelance, part-time, or full-time support depending on workload and project needs.",
    },
    {
      q: "Why outsource data entry to a professional agency?",
      a: "Outsourcing ensures speed, cost savings, and error-free records—freeing your internal teams for higher-value tasks.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Head>
        <title>Professional Data Entry Services for Businesses | Info Navigators</title>
        <meta
          name="description"
          content="Get reliable and accurate data entry services from Info Navigators. We offer CRM data entry, data cleaning, and database management with scalable, cost-effective solutions. Start your project today!"
        />
        <meta
          name="keywords"
          content="data entry services, CRM data entry, data cleaning & formatting, database entry, remote data entry, freelance data entry, e-commerce data entry, healthcare data entry, virtual data entry, part-time data entry jobs"
        />
      </Head>

      {/* HERO */}
      <section className="relative overflow-hidden p-6 md:p-10 lg:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-brandOrange/10 via-orange-200/30 to-white" />
        <div className="container mx-auto px-6 py-16 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
                Professional <span className="text-brandOrange">Data Entry Services</span> for Businesses
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                In today’s digital marketplace, data entry services play a critical role in helping businesses maintain accurate records,
                streamline workflows, and improve decision-making. <span className="text-brandOrange font-semibold">Info Navigators</span> is a trusted data entry
                company offering reliable, scalable, and cost-effective solutions to organizations worldwide.
                Whether it’s <span className="text-brandOrange font-semibold">CRM Data Entry</span>, <span className="text-brandOrange font-semibold">Data Cleaning & Formatting</span>,
                or <span className="text-brandOrange font-semibold">Database Entry</span>, our expert team ensures every project is delivered with accuracy, speed, and confidentiality.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website." className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition">
                  Book a Free Consultation
                </a>
                <Link href="/services-page" className="px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition">
                  Explore Services
                </Link>
              </div>

              <div className="mt-6 flex gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><FiUsers /> 1,000+ Clients</div>
                <div className="flex items-center gap-2"><FiCheckCircle /> 15+ Years</div>
                <div className="flex items-center gap-2"><FiTrendingUp /> Millions of Records Managed</div>
              </div>

              <div className="mt-6 text-sm">
                <Link href="/services/CRMDataEntry" className="text-brandOrange font-semibold inline-block mr-4">👉 Related: CRM Data Entry</Link>
                <Link href="/services/DataCleaning" className="text-brandOrange font-semibold inline-block">| Data Cleaning & Formatting</Link>
              </div>
            </div>

            {/* Right: KPI Dashboard */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-black via-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {stats.map((s, i) => (
                      <StatCard key={i} icon={s.icon} value={s.value} label={s.label} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-brandOrange text-xl" />
                  <div className="text-sm">
                    <div className="font-semibold">Verified Records</div>
                    <div className="text-gray-600">Lower bounce, higher ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Why Data Entry Matters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-heading font-extrabold mb-4">
              Why Data Entry Matters for{" "}
              <span className="text-brandOrange">Business Growth</span>
            </h2>
            <p className="text-gray-700 mb-4">
              Businesses often deal with large volumes of information—customer details, sales data, market research, and financial records.
              Inaccuracies or delays in data input jobs can lead to missed opportunities and poor decisions. That’s why outsourcing to a professional
              data entry agency like <span className="font-semibold">Info Navigators</span> makes sense.
            </p>
            <p className="text-gray-700 mb-4">
              From remote data entry jobs to database entry services, our team handles every detail, allowing businesses to focus on growth.
            </p>
            <Link href="/services/lead-generation" className="text-brandOrange font-semibold">
              👉 Related: Lead Generation Services
            </Link>
          </div>

          <div className="text-center">
            <Image
              src="/dataentry.webp"
              alt="Data entry importance"
              className="rounded-2xl w-full"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-extrabold mb-6">
            Our Core <span className="text-brandOrange">Data Entry Solutions</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<FiUsers />} title="CRM Data Entry">
              Accurate CRM Data Entry helps businesses build stronger relationships with clients — importing Excel/CSV into Salesforce, HubSpot, Zoho and managing history.
              <div className="mt-3">
                <Link href="/services/CRMDataEntry" className="text-brandOrange font-semibold">
                  👉 Learn more: CRM Data Entry
                </Link>
              </div>
            </FeatureCard>

            <FeatureCard icon={<FiSettings />} title="Data Cleaning & Formatting">
              Remove duplicates, fix inconsistencies, and format data for analytics or outreach.
              <div className="mt-3">
                <Link href="/services/DataCleaning" className="text-brandOrange font-semibold">
                  👉 Learn more: Data Cleaning &amp; Formatting
                </Link>
              </div>
            </FeatureCard>

            <FeatureCard icon={<FiDatabase />} title="Database Management & Entry">
              Secure, structured data handling for industry-specific needs (medical, finance, e-commerce), with fast turnaround.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Flexible Engagement Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading font-extrabold mb-4">
                Flexible Engagement <span className="text-brandOrange">Models</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Info Navigators understands that not all businesses need full-time staff. That’s why we offer flexible options so you can scale on demand and save costs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <SmallCard icon={<FiFileText />} title="Freelance data entry" />
                <SmallCard icon={<FiClock />} title="Part-time / remote data entry jobs" />
                <SmallCard icon={<FiHome />} title="Virtual data entry jobs" />
                <SmallCard icon={<FiUsers />} title="Data entry work from home / part-time support" />
              </div>
            </div>

            <div>
              <Image
                src="/data-entry-operator.jpeg.webp"
                alt="Flexible engagement"
                className="rounded-2xl w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-extrabold mb-6">
            Who Benefits from Our <span className="text-brandOrange">Data Entry Services</span>?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Professional data entry solutions are valuable across industries — from startups to enterprise.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl shadow hover:shadow-md border border-gray-100 bg-white">
              <div className="text-brandOrange text-2xl mb-3"><FiUsers /></div>
              <h4 className="font-semibold mb-1">Startups &amp; SMEs</h4>
              <p className="text-gray-600 text-sm">Handling entry-level data entry jobs and daily record updates.</p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-md border border-gray-100 bg-white">
              <div className="text-brandOrange text-2xl mb-3"><FiShoppingCart /></div>
              <h4 className="font-semibold mb-1">E-commerce</h4>
              <p className="text-gray-600 text-sm">Product uploads, inventory management, online form filling jobs.</p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-md border border-gray-100 bg-white">
              <div className="text-brandOrange text-2xl mb-3"><FiHeart /></div>
              <h4 className="font-semibold mb-1">Healthcare</h4>
              <p className="text-gray-600 text-sm">Medical data entry, patient records, compliance documentation.</p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-md border border-gray-100 bg-white">
              <div className="text-brandOrange text-2xl mb-3"><FiBriefcase /></div>
              <h4 className="font-semibold mb-1">Corporate Clients</h4>
              <p className="text-gray-600 text-sm">Remote typing jobs, payroll, HR systems and secure record-keeping.</p>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/services/SEOPage" className="text-brandOrange font-semibold">
              👉 Related: E-commerce SEO | Web Development Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-extrabold mb-8">
            Why Choose <span className="text-brandOrange">Info Navigators</span>?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "100% Accuracy", icon: <FiCheckCircle />, desc: "Dedicated data entry specialists." },
              { title: "Global Reach", icon: <FiGlobe />, desc: "Serving USA, Europe & Asia." },
              { title: "Affordable", icon: <FiBarChart />, desc: "Cost-effective pricing options." },
              { title: "Confidentiality", icon: <FiShield />, desc: "Secure handling of sensitive information." },
              { title: "Scalability", icon: <FiLayers />, desc: "From single tasks to enterprise projects." },
              { title: "Flexible Delivery", icon: <FiClock />, desc: "Freelance, part-time, or long-term support." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md flex flex-col items-center text-center">
                <div className="text-brandOrange text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-extrabold mb-6 text-center">
            FAQs – Data Entry Services
          </h2>

          <div className="flex justify-center">
            <div className="space-y-4 max-w-3xl w-full">
              {faqs.map((f, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button onClick={() => toggleFaq(i)} className="w-full text-left p-4 flex items-center justify-between bg-white hover:bg-gray-50">
                    <div>
                      <div className="font-semibold">{f.q}</div>
                    </div>
                    <div className="text-brandOrange font-bold">{faqOpen === i ? "−" : "+"}</div>
                  </button>
                  {faqOpen === i && <div className="p-4 bg-gray-50 text-gray-700">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
