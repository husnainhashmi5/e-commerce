import React from "react";
import Slider from "react-slick";
import HeaderDashed from "./HeaderDashed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p_img52 from "../assets/p_img52.png";

const image_men = "https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/464840727_8408126509282578_8313888079036204843_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FG5jAaNPepsQ7kNvgGqNyke&_nc_oc=AdjvFHYxmLDEv9-hqlEw-uGU3fRS3WxcLm_OBcNTl-BKcWPiMO6MYnoOCnjEkCgDv4g&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&_nc_gid=AyLrqMiZx-jm-8Aw-81-Tvl&oh=00_AYB84WyWNb_OHYM6y01x2m8RLl05ScAk58EJ2gnyDE4fvQ&oe=67CBE722"
const carouselData = [
  { id: 1, image: p_img52, title: "Mens", content: "Clark Kent" },
  { id: 2, image: p_img52, title: "Womens", content: "Bruce Wayne" },
  { id: 3, image: p_img52, title: "Kids", content: "Peter Parker" },
  { id: 4, image: p_img52, title: "Camp & Hike", content: "Tony Stark" },
  { id: 5, image: p_img52, title: "Fish", content: "Reed Richards" },
  { id: 6, image: p_img52, title: "Paddle", content: "Wade Wilson" },
  { id: 6, image: p_img52, title: "Rock & Snow", content: "Wade Wilson" },
  { id: 6, image: image_men, title: "Travel", content: "Wade Wilson" },
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