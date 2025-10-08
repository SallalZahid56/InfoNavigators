import BlogsList from "@/components/BlogsList"; // client component
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "InfoNav Blog | Expert insights on digital marketing",
  description:
    "Explore expert tips, case studies, and guides on SEO, digital marketing, and technology trends at InfoNavigators Blog.",
  keywords:
    "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",
  alternates: {
    canonical: "https://infonavigators.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-18 mt-32 mb-10">
      <h1 className="text-4xl font-bold mb-8">Our Blogs</h1>
      {/* This part is rendered client-side for interactivity */}
      <BlogsList blogs={blogs} />
    </section>
  );
}
