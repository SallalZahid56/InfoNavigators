// src/components/Hero.jsx
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-20 md:pt-22 lg:pt-14">
      {/* ↑ increased top padding for tablets so text doesn’t touch navbar */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
            <span className="text-brandOrange">Email Marketing</span>  & Lead Generation <span className="text-brandOrange">Agency</span>
          </h1>

          <p className="font-sans text-gray-700 mt-4 sm:mt-6 text-base sm:text-lg md:leading-relaxed">
            <span className="font-semibold text-brandOrange">InfoNav</span> is a
            results-driven Email Marketing & B2B Lead Generation agency that helps B2B
            companies generate qualified leads through targeted email outreach and
            data-driven prospect research. We specialize in{" "}
            <span className="font-semibold text-brandOrange">
              Cold Email Outreach, B2B Lead Generation, Python Scraping, and Marketing
              Automation
            </span>{" "}
            — delivering consistent, scalable growth with precision.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
              className="bg-brandOrange text-white font-heading px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow hover:bg-black transition flex items-center justify-center text-sm sm:text-base md:text-lg"
            >
              Get Free Sample ⮕
            </a>
            <a
              href="/portfolio/"
              className="bg-brandOrange text-white font-heading px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow hover:bg-black transition flex items-center justify-center text-sm sm:text-base md:text-lg"
            >
              Our Portfolio ⮕
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/heroPic.png" // ✅ put heroPic.png inside public/
            alt="Hero"
            width={500} // control responsiveness
            height={500}
            className="w-64 sm:w-80 md:w-96 lg:w-full max-w-md md:max-w-lg h-auto"
            priority // ✅ loads faster on homepage
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
