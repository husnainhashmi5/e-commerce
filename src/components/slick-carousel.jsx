import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p_img52 from "../assets/p_img52.png";

const carouselData = [
  { id: 1, image: p_img52, title: "Card 1", content: "Clark Kent" },
  { id: 2, image: p_img52, title: "Card 2", content: "Bruce Wayne" },
  { id: 3, image: p_img52, title: "Card 3", content: "Peter Parker" },
  { id: 4, image: p_img52, title: "Card 4", content: "Tony Stark" },
  { id: 5, image: p_img52, title: "Card 5", content: "Reed Richards" },
  { id: 6, image: p_img52, title: "Card 6", content: "Wade Wilson" },
];

const CircularCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto p-6">
  

      <div className="cards-container bg-gray-200 p-4 rounded-lg shadow-inner overflow-hidden">
        <Slider {...settings}>
          {carouselData.map((item) => (
            <div key={item.id} className="px-3">
              <div className="card shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  {/* <p className="text-gray-600">{item.content}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CircularCarousel;