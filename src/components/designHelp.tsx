// DesignHelp.tsx
import React from "react";
import { Link } from "react-router-dom";

const links = [
  "In-Person Design Services",
  "New York Interior Designers",
  "Coastal Interior Design",
  "Bedroom Design Ideas",
  "Moving Checklist",
  "Modern Design",
  "Bohemian Design",
  "Transitional Design",
  "Midcentury Modern Design",
  "Rustic Design",
  "Style Quiz",
  "Design Awards 2023",
  "Design Trends",
  "Designer Tips",
  "Performance Fabrics",
  "Pattern Play",
  "Accent Furniture",
  "Havenly App",
];

const DesignHelp: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Get design help today</h2>

      <div className="flex flex-wrap space-x-4 pb-2">
        {links.map((label, index) => (
          <Link
            key={index}
            to="/about"
            className="flex-shrink-0 px-4 py-3 mt-4 bg-white gap-4 rounded shadow text-center hover:bg-gray-100 transition whitespace-nowrap"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesignHelp;