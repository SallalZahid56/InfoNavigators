"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    feedback:
      "InfoNav transformed our online presence! Their SEO and lead generation strategies brought us consistent traffic and high-quality leads.",
    name: "John Smith",
    position: "CEO, TechWave Solutions",
  },
  {
    feedback:
      "The team is highly professional and result-oriented. Their web development and SEO expertise helped scale our eCommerce store rapidly.",
    name: "Emily Johnson",
    position: "Founder, TrendyCart",
  },
  {
    feedback:
      "We rely on InfoNav for data extraction and Python scraping — their automation saves us hours every week. Outstanding support!",
    name: "Michael Lee",
    position: "Operations Manager, DataFlow Inc.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          What Our <span className="text-brandOrange">Clients Say</span>
        </h2>
        <p className="font-sans text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
          We take pride in delivering exceptional results. Here’s what our
          clients have to say about working with InfoNav.
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-white border border-gray-200 rounded-2xl shadow p-10">
                {/* Feedback */}
                <p className="font-sans bg-gray-100 text-gray-700 italic text-lg leading-relaxed mb-6 rounded-xl p-6">
                  "{t.feedback}"
                </p>
                <div className="text-center">
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {t.name}
                  </h3>
                  <p className="font-sans text-sm text-gray-500">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
