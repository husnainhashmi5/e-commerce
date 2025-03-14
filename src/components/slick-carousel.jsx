import React from "react";
import Slider from "react-slick";
import HeaderDashed from "./HeaderDashed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p_img52 from "../assets/p_img52.png";
import categoriesData  from './categoriesData';



const CircularCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
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
    <div className="container mx-auto  mt-5">
      <HeaderDashed
				head1="CURRENT"
				head2="CATEGORIES"
				paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
			/>

      <div className="cards-container bg-gray-200 p-4 rounded-lg shadow-inner overflow-hidden">
        <Slider {...settings}>
          {categoriesData.map((item) => (
            <div key={item.id} className="px-3">
              <div className="category-carousel-card card shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="category-carousel-img"
                />
                <div className="p-4">
                  <h5 className="text-lg font-bold">{item.title}</h5>
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