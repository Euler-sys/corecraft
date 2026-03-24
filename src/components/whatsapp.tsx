import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon: React.FC = () => {
  return (
<>
  {/* WhatsApp Button (Right) */}
  <a
    href="https://wa.me/+2087411896"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-[420px] right-2 bg-[#000] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
  >
    <FaWhatsapp />
  </a>

  {/* Phone Call Button (Left) */}
  <a
    href="tel:+2087411896"
    className="fixed bottom-[420px] left-2 bg-[#000] text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 z-50"
  >
    <FaPhone />
  </a>
</>
  
  );
};

export default WhatsAppIcon;
