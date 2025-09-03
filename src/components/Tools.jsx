import Image from "next/image";

const tools = [
  "/hubspot.png",
  "/salesforce.png",
  "/linkedinn.png",
  "/excel.png",
  "/googlesheets.jpeg",
  "/Buzzsumo-Logo.png",
  "/semrush.png",
  "/ahrefs.png",
  "/moz.png",
  "/python.png",
  "/beautifulsoup.jpg",
  "/scrapyy.png",
  "/wordpress.webp",
  "/shopify.png",
  "/react.png",
];

const Tools = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          Tools We <span className="text-brandOrange">Use</span>
        </h2>
        <p className="font-sans text-gray-600 mt-4 text-base">
          We empower <span className="font-semibold">SEO</span>, lead generation,
          scraping, and web development with industry-leading tools.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
        {tools.map((tool, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src={tool}
              alt={`Tool ${i}`}
              width={96}
              height={96}
              className="object-contain w-20 h-20 sm:w-24 sm:h-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
