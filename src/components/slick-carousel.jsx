import React from "react";
import Slider from "react-slick";
import HeaderDashed from "./HeaderDashed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p_img52 from "../assets/p_img52.png";
import { categories } from './images';


const carouselData = [
  { id: 1, image: categories[0], title: "Mens", content: "Clark Kent" },
  { id: 2, image: categories[1], title: "Womens", content: "Bruce Wayne" },
  { id: 3, image: categories[2], title: "Kids", content: "Peter Parker" },
  { id: 4, image: categories[3], title: "Camp & Hike", content: "Tony Stark" },
  { id: 5, image: categories[4], title: "Fish", content: "Reed Richards" },
  { id: 6, image: categories[5], title: "Paddle", content: "Wade Wilson" },
  { id: 6, image: categories[6], title: "Rock & Snow", content: "Wade Wilson" },
  { id: 6, image: categories[7], title: "Travel", content: "Wade Wilson" },
];

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
				head1="LATEST"
				head2="COLLECTIONS"
				paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
			/>

      <div className="cards-container bg-gray-200 p-4 rounded-lg shadow-inner overflow-hidden">
        <Slider {...settings}>
          {carouselData.map((item) => (
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