import React, { useState } from "react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="font-sans text-gray-800 bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black text-yellow-700 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <Link to='/'> <img src={logo} alt="Logo" width={100} />

          </Link>
         
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="hover:text-gray-500 cursor-pointer">How It Works</li>
            <li className="hover:text-gray-500 cursor-pointer">Services</li>
            <li className="hover:text-gray-500 cursor-pointer">Portfolio</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer w-6 h-6 justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger / X */}
            <span
              className={`block h-0.5 w-6 bg-yellow-600 transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-yellow-600 my-1 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-yellow-600 transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-8 text-xl z-40">
          <p className="cursor-pointer" onClick={() => setIsOpen(false)}>Home</p>
          <p className="cursor-pointer" onClick={() => setIsOpen(false)}>How It Works</p>
          <p className="cursor-pointer" onClick={() => setIsOpen(false)}>Services</p>
          <p className="cursor-pointer" onClick={() => setIsOpen(false)}>Portfolio</p>
          <p className="cursor-pointer" onClick={() => setIsOpen(false)}>Contact</p>
        </div>
      )}
    </div>
  );
};

export default Header;