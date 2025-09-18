"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "../../data/blogs";
import Head from "next/head";

export default function BlogsPage() {
  // SEO meta values
  const meta = {
    title: "InfoNavigators Blog",
    description:
      "Explore expert tips, case studies, and guides on SEO, digital marketing, and technology trends at InfoNavigators Blog.",
    keywords:
      "digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships",
  };

  // Unique categories list
  const categories = [...new Set(blogs.map((b) => b.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-18 mt-32 mb-10">
        <h1 className="text-4xl font-bold mb-8">Our Blogs</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === "All"
                ? "bg-brandOrange text-white"
                : "bg-white text-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg border ${
                selectedCategory === cat
                  ? "bg-brandOrange text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredBlogs.map((blog) => (
            <div key={blog.slug} className="bg-white rounded-xl shadow p-6">
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">{blog.title}</h3>
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
