import { blogs } from "../../../data/blogs";
import Head from "next/head";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <Head>
        <title>{blog.title} | Info Navigators</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={blog.keywords} />
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
