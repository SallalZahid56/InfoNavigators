import SeoTipsPage from "@/components/SeoTipsPage";
import SeoBoostTipsPage from "@/components/SeoBoostTipsPage";
import WebScrapingGuidePage from "@/components/WebScrapingGuidePage";
import AiToolsPakistanPage from "@/components/AiToolsPakistanPage";
import { blogs } from "../../../data/blogs"; // adjust path if different
import InternetResearchPage from "@/components/InternetResearchBlog";
import DigitalMarketingBlog from "@/components/DigitalMarketingBlog";
import CoreWebVitals2025Page from "@/components/CoreWebVitals2025Page";
import B2BLeadGeneration2025 from "@/components/B2BLeadGeneration2025";
import ChangingNatureOfSearchPage from "@/components/ChangingNatureOfSearchPage";
import HelpfulContentEEAT2025 from "@/components/HelpfulContentEEAT2025";
import EmailVsLinkedin2025 from "@/components/EmailVsLinkedin2025";
import InternetResearchTask from "@/components/InternetResearchTask";
import AutomationToolsLeadGen2025 from "@/components/BestAutomationtools";
import VirtualAssistantServicesPage from "@/components/VirtualAssistantServicesPage";


// ✅ Generate static paths
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ Dynamic metadata for each blog
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | InfoNavigators",
      description: "Sorry, this blog post could not be found.",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description:
      blog.metaDescription ||
      blog.excerpt ||
      "Read this blog post on InfoNavigators.",
    keywords:
      blog.keywords ||
      "SEO, digital marketing, web scraping, business growth",
    alternates: {
      canonical: blog.canonical || `https://infonavigators.com/blogs/${slug}`,
    },
  };
}


export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Blog not found</p>;

  // ✅ Special component pages
  if (slug === "seo-tips") {
    return <SeoTipsPage blog={blog} />;
  }

  if (slug === "seo-boost-tips") {
    return <SeoBoostTipsPage blog={blog} />;
  }

  if (slug === "beginners-guide-web-scraping-python") {
    return <WebScrapingGuidePage blog={blog} />;
  }

  if (slug === "ai-tools-freelancers-pakistan-2025") {
    return <AiToolsPakistanPage blog={blog} />;
  }

  if (slug === "internet-research-services") {
    return <InternetResearchPage blog={blog} />;
  }

  if (slug === "digital-marketing-agency") {
    return <DigitalMarketingBlog blog={blog} />;
  }

  if (slug === "core-web-vitals-2025") {
    return <CoreWebVitals2025Page blog={blog} />;
  }

  if (slug === "b2b-lead-generation-2025") {
    return <B2BLeadGeneration2025 blog={blog} />;
  }

  if (slug === "changing-nature-of-search-ai-2025") {
    return <ChangingNatureOfSearchPage blog={blog} />;
  }

  if (slug === "google-helpful-content-update-eeat")
    return <HelpfulContentEEAT2025 blog={blog} />;

  if (slug === "email-vs-linkedin-lead-generation-2025") {
    return <EmailVsLinkedin2025 blog={blog} />;
  }

  if (slug === "top-internet-research-tasks") {
    return <InternetResearchTask blog={blog} />;
  }


  if (slug === "automation-tools-lead-generation-2025") {
    return <AutomationToolsLeadGen2025 blog={blog} />;
  }


  if (slug === "virtual-assistent-services") {
    return <VirtualAssistantServicesPage blog={blog} />;
  }


  // ✅ Default layout
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 mt-14">
      <h1 className="text-4xl font-bold text-center mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-center mb-6">{blog.date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
