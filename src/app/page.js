// src/app/page.js
import Hero from "../components/Hero";
import Strategy from "../components/Strategy";
import Services from "../components/Services";
import Tools from "../components/Tools";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Strategy />
      <Services />
      <Tools />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
