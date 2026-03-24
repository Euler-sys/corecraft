import React from "react";
import desktopHero from "../assets/hero.avif"; // desktop image
import mobileHero from "../assets/hero2.avif"; // mobile image
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 768px)" srcSet={desktopHero} />
        <img
          src={mobileHero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
        <div className="text-yellow-500 uppercase tracking-widest mb-4 text-sm md:text-base">
          THE #1 INTERIOR DESIGN SERVICE
        </div>
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
          Designing your dream home just became a reality.
        </h1>

        <Link to='/contact'>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
          Get Started
        </button>
        </Link>
        <Link to='/about'>
            <button className="bg-black  text-yellow-300 mt-6 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
          About Us
        </button>
        </Link>
    
      </div>
    </section>
  );
};

export default Hero;