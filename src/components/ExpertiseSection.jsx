// src/components/ExpertiseSection.jsx
import React from "react";
import Image from "next/image";

const ExpertiseSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-brandOrange">Core Expertise</span>
        </h2>
        <p className="text-gray-700 mt-4 text-base md:text-lg font-sans max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold">InfoNav</span>, we combine
          innovation, strategy, and technology to deliver solutions that drive
          measurable business results. Our team focuses on understanding your
          unique needs and crafting services that build long-term success.
        </p>
      </div>

      {/* Images Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/success.png" // put the image in public folder
            alt="Client Success"
            width={400}       // adjust width
            height={256}      // adjust height to maintain aspect ratio
            className="object-contain"
          />
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Driving client success through tailored strategies.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/computer.png"
            alt="Technology Solutions"
            width={400}
            height={256}
            className="object-contain"
          />
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Leveraging technology for innovative solutions.
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/stars.png"
            alt="Trusted Partnerships"
            width={400}
            height={256}
            className="object-contain"
          />
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Building trust through quality and transparency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
