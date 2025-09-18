"use client";
import { CheckCircle, Code2, Globe, Database } from "lucide-react";

export default function WebScrapingGuidePage({ blog }) {
  return (
    <div className="font-sans">
      {/* ✅ HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-24 px-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
            {blog.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">{blog.description}</p>
        </div>
      </section>

      {/* ✅ INTRODUCTION */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Beginner’s Guide to Web Scraping with Python
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The internet is filled with valuable data—product prices, customer
            reviews, research statistics, and more. This guide explains what web
            scraping is, why it’s useful, and how to get started with Python.
          </p>
        </div>
      </section>

      {/* ✅ WHAT IS WEB SCRAPING */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What is Web Scraping?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Web scraping is the process of automatically extracting information
            from websites. Instead of manually copying and pasting data,
            developers use Python scripts and libraries to collect structured
            information in seconds.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Price monitoring for eCommerce",
              "Market research and competitor analysis",
              "Content aggregation (job listings, news, real estate)",
              "Academic research and data science projects",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <Globe className="text-brandOrange w-6 h-6" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            ✅ Important: Always check{" "}
            <code className="bg-gray-100 px-1 rounded">robots.txt</code> and
            terms of service before scraping.
          </p>
        </div>
      </section>

      {/* ✅ WHY PYTHON */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Use Python for Web Scraping?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Easy-to-read syntax (great for beginners)",
              "Powerful libraries like requests, BeautifulSoup, and Scrapy",
              "Large community support",
              "Integration with Pandas and NumPy",
            ].map((reason, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
              >
                <CheckCircle className="text-green-600 w-6 h-6" />
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ LIBRARIES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Essential Python Libraries
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Requests – Send HTTP requests and download pages",
              "BeautifulSoup – Parse HTML and extract elements",
              "lxml – Fast parser for HTML & XML",
              "Scrapy – Powerful framework for large projects",
              "Selenium – Handle JavaScript-based sites",
            ].map((lib, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <Database className="text-indigo-600 w-6 h-6" />
                <p>{lib}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CODE EXAMPLE */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Example: Scraping Quotes with Python
          </h2>
          <pre className="bg-black text-green-400 p-6 rounded-xl overflow-x-auto text-sm">
{`import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

quotes = soup.find_all("span", class_="text")
authors = soup.find_all("small", class_="author")

for i in range(len(quotes)):
    print(f"{quotes[i].text} - {authors[i].text}")`}
          </pre>
          <p className="text-gray-600 mt-4">
            ✅ This script collects quotes and their authors from a demo site.
          </p>
        </div>
      </section>

      {/* ✅ BEST PRACTICES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Best Practices for Web Scraping
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Respect robots.txt instructions",
              "Add delays between requests",
              "Avoid overloading servers",
              "Use headers & user-agents",
              "Store data in CSV, JSON, or databases",
            ].map((tip, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CHALLENGES & APPS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Challenges & Real-Life Applications
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While powerful, web scraping has challenges like CAPTCHAs,
            anti-bot systems, and legal issues. Still, it’s widely used in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>E-commerce: price tracking</li>
            <li>Travel: flight & hotel data</li>
            <li>Marketing: leads & reviews</li>
            <li>Finance: stock & crypto monitoring</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
