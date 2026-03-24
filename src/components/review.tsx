// Reviews.tsx
import React from "react";
import Slider from "react-slick";

// Import React Slick CSS directly in this component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Review {
  author: string;
  title: string;
  description: string;
  stars: number;
}

const reviews: Review[] = [
  {
    author: "Shaniece",
    title: "Another Masterpiece",
    description:
      "This was my second time working with the same designer with Havenly. She understands what we like more than we even understand it. I wouldn't change anything from beginning to end, the process was stellar. The level of detail of the designs and the items chosen compared to my vision are an absolute match. I will always work with Havenly for my design needs.",
    stars: 5,
  },
  {
    author: "Pam",
    title: "Amazing experience!!",
    description:
      "The entire process was seamless and fun. The designer incorporated new and existing furniture pieces, recommended changing the floorplan/layout to maximize the functionality of the space and chose beautiful accent pieces that I adore. I'm very pleased with the final result.",
    stars: 5,
  },
  {
    author: "Blaine",
    title: "What a lifesaver!",
    description:
      "Havenly saved me! I worked with Kaylee to design an entire small house in less than 1 month. It was fun, efficient and the house looks like it is out of a catalog. Thank you so much!",
    stars: 5,
  },
  {
    author: "Liz",
    title: "Best decision",
    description:
      "Buying my condo was not as stressful as trying to find the best furniture pieces to fit my home. If you have ideas but need guidance on where to find the perfect furniture within your budget, it is worth having a professional from Havenly guide you. My designer helped me find a few to pieces to make my living/dining room space cozy and tastefully me.",
    stars: 5,
  },
];

const Reviews: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold p-5 mb-2">
            Over 100,000 designs completed for happy clients.
          </h2>
         
        </div>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex items-center mb-2">
                  <span className="font-semibold mr-2">by {review.author}</span>
                  <div className="flex">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <svg
                        key={i}
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m9.573 15.285-5.32 2.97 1.016-6.291L.964 7.508l5.949-.918L9.573.865l2.66 5.725 5.95.918-4.305 4.456 1.016 6.292-5.32-2.97Z"
                          fill="#FFE657"
                        ></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                <p className="text-gray-700 flex-1">{review.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;