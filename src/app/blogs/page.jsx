import Link from "next/link";
import Image from "next/image";
import { blogs } from "../../data/blogs";
import Head from "next/head";

export const metadata = {
  title: "InfoNavigators Blog",
  description:
    "Explore expert tips, case studies, and guides on SEO, digital marketing, and technology trends at InfoNavigators Blog.",
  keywords:
    "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",
};

export default function BlogsPage() {
  return (

    <><Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
    </Head>
      <section className="max-w-6xl mx-auto px-6 py-18 mt-32 mb-10">
        <h1 className="text-4xl font-bold mb-8">Our Blogs</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.slug} className="bg-white rounded-xl shadow p-6">
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-600 font-semibold mt-4 block hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
