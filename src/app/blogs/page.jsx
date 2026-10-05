import BlogsList from "@/components/BlogsList"; // client component
import { blogs } from "@/data/blogs";
import { blogIndexMetadata } from "../../lib/page-seo";
export const metadata = blogIndexMetadata;

export default function BlogsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-18 mt-32 mb-10">
      <h1 className="text-4xl font-bold mb-8">Our Blogs</h1>
      {/* This part is rendered client-side for interactivity */}
      <BlogsList blogs={blogs} />
    </section>
  );
}
