import { blogs } from "../../../data/blogs";
import Head from "next/head";

export const metadata = {
  title: "InfoNavigators Blog",
  description:
    "Explore expert tips, case studies, and guides on SEO, digital marketing, and technology trends at InfoNavigators Blog.",
  keywords:
    "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-6">{blog.date}</p>
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </>
  );
}
