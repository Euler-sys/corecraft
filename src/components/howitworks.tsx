import React from "react";
import step1Img from "../assets/one.jpg";
import step2Img from "../assets/two.jpg";
import step3Img from "../assets/three.jpg";

// import one from '../assets'

const HowItWorks: React.FC = () => {
const steps = [
  {
    id: "01",
    title: "Match with a talented designer for your new or remodeled space.",
    description:
      "Take a style quiz to help us understand your taste, then choose your interior designer from our personalized recommendations. Whether it’s a newly built home or a remodeling project, our experienced team will help turn your vision into reality.",
    image: step1Img,
  },
  {
    id: "02",
    title: "Collaborate with your designer to create a space you love.",
    description:
      "Great design doesn’t happen alone. Work with your designer to select furniture, finishes, and layouts that fit your lifestyle. See your vision come to life with 3D renderings tailored to your new build or remodel.",
    image: step2Img,
  },
  {
    id: "03",
    title: "Shop exclusive deals and bring your design home.",
    description:
      "Access the best prices on top home brands, get exclusive discounts, and easily shop everything needed for your space. Perfect for newly built or remodeled homes—make your dream design a reality.",
    image: step3Img,
  },
];

  return (
    <>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold  text-gray-700 mb-12">
          How CoreCraft Works
        </h3>

        <div className="flex flex-col gap-16">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Number */}
              <div className="text-3xl font-bold text-yellow-500">{step.id}</div>

              {/* Text */}
              <div className="md:w-1/2 text-left">
                <h4 className="text-xl md:text-2xl mb-4">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>

              {/* Image */}
           {/* Image */}
<div className="md:w-1/2 flex justify-center">
  <img
    src={step.image}
    alt={`Step ${step.id}`}
    className="w-52 h-52 object-cover rounded-lg shadow-lg"
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  );
};

export default HowItWorks;