import { blogs } from "../../../data/blogs";
import ColdEmailOutreachBlog from "@/components/ColdEmailOutreachBlog";
import OutsourcedLeadGenBlog from "@/components/OutsourcedLeadGenBlog";

// Generate static paths
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Dynamic metadata for each blog
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

  if (slug === "cold-email-outreach-service-b2b") {
    return <ColdEmailOutreachBlog blog={blog} />;
  }

  if (slug === "out-sourced-lead-generation-service") {
    return <OutsourcedLeadGenBlog blog={blog} />;
  }


  // Default layout
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
