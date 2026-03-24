// About.tsx (Core Values redesigned with images)
import React from "react";
import ceo from '../assets/ceo.png';

import img1 from '../assets/interior1.jpg';
import img2 from '../assets/interior2.jpg';
import img3 from '../assets/interior13.jpg';
import img4 from '../assets/interior14.jpg';

const About: React.FC = () => {
  const coreValues = [
    {
      title: "Creative Design",
      description: "We craft spaces that are not only beautiful but also functional, reflecting your style and personality.",
      image: img1,
    },
    {
      title: "Comfort & Functionality",
      description: "Every room is designed to feel welcoming and practical for everyday living.",
      image: img2,
    },
    {
      title: "Innovative Solutions",
      description: "We stay ahead of trends and bring unique ideas to make your space stand out.",
      image: img3,
    },
    {
      title: "Client Collaboration",
      description: "We work closely with you every step of the way to ensure your vision becomes reality.",
      image: img4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-10 space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 text-lg">
            At CoreCraft, we believe that every space should tell a story. Our mission is to bring your vision to life with elegant, functional, and personalized interior designs.
          </p>
        </div>

        {/* Core Values Section with Images */}
        <div className="grid md:grid-cols-2 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src={value.image} alt={value.title} className="w-full h-48 object-cover"/>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            To transform spaces into inspiring environments that enhance daily life and express individuality.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-600">
            To be recognized as a leading interior design brand, creating timeless, elegant, and sustainable spaces.
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={ceo}
            alt="Donna M Hicks"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Donna M Hicks</h3>
            <p className="text-gray-500 mb-2">Founder & CEO</p>
            <p className="text-gray-600">
              Donna M Hicks is the visionary behind CoreCraft. With over 15 years 
              of experience in interior design, she combines creativity, functionality, 
              and elegance to bring unique spaces to life. Her passion is helping clients 
              create homes that inspire and delight.
            </p>
          </div>
        </div>

        {/* Images / Gallery Section */}
        <div className="space-y-6">
          {/* <h2 className="text-2xl font-bold text-gray-800">Our Work</h2> */}
          <p className="text-gray-600">
            Here’s a glimpse of some of the interior spaces we’ve transformed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <img src={img1} alt="Interior 1" className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition transform" />
            <img src={img2} alt="Interior 2" className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition transform" />
            <img src={img3} alt="Interior 3" className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition transform" />
            <img src={img4} alt="Interior 4" className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;