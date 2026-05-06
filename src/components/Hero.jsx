// src/components/Hero.jsx
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-28 md:pt-32 lg:pt-28">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">

          {/* Headline */}
          <h1 className="font-heading font-bold leading-snug text-gray-900">
            {/* Line 1 - orange, largest */}
            <span className="block text-brandOrange text-3xl sm:text-4xl lg:text-5xl">
              B2B Lead Generation
            </span>
            {/* Line 2 - dark, same size */}
            <span className="block text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
              &amp; Cold Email Outreach
            </span>
            {/* Line 3 - orange, smaller */}
            <span className="block text-brandOrange text-xl sm:text-2xl lg:text-3xl mt-1 font-semibold leading-snug">
              That Fills Your Sales Pipeline
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-gray-800 mt-4 sm:mt-5 text-base sm:text-lg font-semibold md:leading-relaxed">
            <span className="text-brandOrange">InfoNav</span> is a dedicated b2b lead generation agency helping companies book qualified sales meetings through targeted cold email outreach service and verified prospect data.
          </p>

          {/* Support Line */}
          <p className="font-sans text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:leading-relaxed border-l-4 border-brandOrange pl-4 italic">
            We don't just generate leads. We build outbound systems that bring consistent replies, conversations, and revenue opportunities, acting as your fully outsourced lead generation partner from day one.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNave%20website."
              className="bg-brandOrange text-white font-heading px-5 py-2 rounded-full shadow hover:bg-black transition flex items-center justify-center text-sm"
            >
              Book a Strategy Call ⮕
            </a>
            <a
              href="/portfolio/"
              className="border-2 border-brandOrange text-brandOrange font-heading px-5 py-2 rounded-full shadow hover:bg-brandOrange hover:text-white transition flex items-center justify-center text-sm"
            >
              Get a Free Outreach Plan ⮕
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/heroPic.png"
            alt="Hero"
            width={500}
            height={500}
            className="w-64 sm:w-80 md:w-96 lg:w-full max-w-md md:max-w-lg h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;