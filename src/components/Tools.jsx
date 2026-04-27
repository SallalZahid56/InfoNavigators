import Image from "next/image";

// Keep only requested tools. Use a generic placeholder for missing logos.
const tools = [
  { name: "LinkedIn Sales Navigator", img: "/linkedinn.png" },
  { name: "Apollo", img: "/apollo.jpg" },
  { name: "Seamless", img: "/seamless.png" },
  { name: "Snov", img: "/snov.jpg" },
  { name: "NeverBounce", img: "/neverbounce.png" },
  { name: "ZeroBounce", img: "/zerobounce.png" },
  { name: "Clay", img: "/clay.webp" },
  { name: "HubSpot", img: "/hubspot.png" },
  { name: "Zoho", img: "/zoho.png" },
  { name: "GHL", img: "/gohighlevel.png" },
  { name: "Brevo", img: "/brevo.png" },
  { name: "Close.io", img: "/close.jpg" },
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
          Tools we use for lead generation and data verification. Logos are shown for reference.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
        {tools.map((tool, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <Image
              src={tool.img}
              alt={tool.name}
              width={96}
              height={96}
              className="object-contain w-20 h-20 sm:w-24 sm:h-24"
            />
            <div className="text-xs text-gray-600 mt-2">{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
