// Footer.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import usa from '../assets/us_flag_small.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi"; // US flag icon

type Tab = {
  title: string;
  links: { label: string; flag?: boolean }[];
};

const tabs: Tab[] = [
  {
    title: "Company",
    links: [
      { label: "Careers" },
      { label: "Design Careers" },
      { label: "Reviews" },
      { label: "Pricing" },
      { label: "Blog" },
      { label: "Press Inquiries" },
      { label: "Contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Style Quiz" },
      { label: "Financing" },
      { label: "Gift Cards" },
      { label: "Refer & Earn" },
      { label: "Help Center" },
      { label: "Promotions" },
      { label: "Havenly AI" },
    ],
  },
  {
    title: "In-Person Locations",
    links: [
      { label: "USA - 123 Main St, New York, NY", flag: true },
      { label: "China - 88 Nanjing Rd, Shanghai" },
      { label: "UK - 10 Downing St, London" },
    ],
  },
  {
    title: "Our Brands",
    links: [
      { label: "Interior Define" },
      { label: "The Citizenry" },
      { label: "Burrow" },
      { label: "The Inside" },
      { label: "St. Frank" },
    ],
  },
];

const socialIcons = [
  { icon: <FaFacebookF />, name: "Facebook" },
  { icon: <FaTwitter />, name: "Twitter" },
  { icon: <FaInstagram />, name: "Instagram" },
  { icon: <FaPinterestP />, name: "Pinterest" },
];

const Footer: React.FC = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (title: string) => {
    setOpenTab(openTab === title ? null : title);
  };

  return (
    <footer className="bg-white text-gray-800 shadow-inner border-t border-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {tabs.map((tab) => (
          <div key={tab.title}>
            {/* Mobile Accordion */}
            <button
              className="flex justify-between w-full md:hidden font-semibold mb-2 text-lg"
              onClick={() => toggleTab(tab.title)}
            >
              {tab.title}
              <span className="ml-2">{openTab === tab.title ? "−" : "+"}</span>
            </button>

            {/* Desktop Title */}
            <p className="hidden md:block font-bold text-lg mb-3">{tab.title}</p>

            {/* Links */}
            <ul
              className={`${
                openTab === tab.title ? "block" : "hidden"
              } md:block space-y-2`}
            >
              {tab.links.map((link) => (
                <li key={link.label} className="flex items-center">
                  <Link
                    to="/contact"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.flag && (
                    <GiUsaFlag className="ml-2 text-red-500 text-xl" title="USA" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0 text-blue-600">
          {socialIcons.map((social) => (
            <Link
              key={social.name}
              to="/contact"
              className="hover:text-blue-800 transition-colors text-xl"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Verified look */}
       

        {/* Copyright */}
        <div className="text-sm text-gray-500">
         
          <div className="flex flex-wrap gap-4 mt-1">
            <Link to="/contact" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              ADA Accessibility
            </Link>
           
          </div>
        </div>
      </div>
       <div className="flex m-auto justify-center mt-8 items-center space-x-2 mb-4 md:mb-0 text-sm text-gray-500">
  <img src={usa} alt="USA Flag" className="w-5 " />
  <span className="flex items-center space-x-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span>Verified Business</span>
  </span>

</div>
   <p className="text-center text-gray-500 text-sm">© 2026 Havenly Inc., All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;