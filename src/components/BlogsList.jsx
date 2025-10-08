"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogsList({ blogs }) {
  const categories = ["All", ...new Set(blogs.map((b) => b.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
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
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.slug}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all block group"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-brandOrange transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-600 mt-2 line-clamp-2">
              {blog.description}
            </p>
            <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
            <span className="text-blue-600 font-semibold mt-4 inline-block group-hover:underline">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
