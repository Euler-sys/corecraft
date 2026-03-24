import React from "react";
import desktopHero from "../assets/hero.avif";
import mobileHero from "../assets/hero2.avif";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
<section className="relative w-full h-[650px] overflow-hidden">
  
  {/* Background Image */}
  <picture className="absolute inset-0 w-full h-full">
    <source media="(min-width: 768px)" srcSet={desktopHero} />
    <img
      src={mobileHero}
      alt="Hero"
      className="w-full h-full object-cover"
    />
  </picture>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* 🔝 Top Text */}
  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
    <p
      className="text-yellow-400 mt-[100px] uppercase tracking-[0.35em] text-xs md:text-sm text-center"
      style={{ fontFamily: "Cinzel, serif" }}
    >
      THE #1 INTERIOR DESIGN SERVICE
    </p>
  </div>

  {/* Center Content (slightly up) */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transform -translate-y-6 md:-translate-y-8">
    
    <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight max-w-2xl mb-5">
      Designing your dream home just became a reality
    </h1>

    <div className="flex flex-col sm:flex-row gap-4 mt-2">
      <Link to="/contact">
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-yellow-600 transition">
          Get Started
        </button>
      </Link>

      <Link to="/about">
        <button className="border border-yellow-400 text-yellow-300 px-6 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-yellow-500 hover:text-black transition">
          About Us
        </button>
      </Link>
    </div>

  </div>
</section>
  );
};

export default Hero;