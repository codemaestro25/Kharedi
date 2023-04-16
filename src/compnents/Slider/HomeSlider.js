import React from "react";
import "./HomeSlider.scss";
import { sliderImages } from "../../utils/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeSlider() {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content overflow-x-hidden">
          <Slider {...settings}>
            <div className="slider-item">
                <img src={sliderImages[0]} alt="Carousel Slider" />
            </div>
            <div className="slider-item">
                <img src={sliderImages[1]} alt="Carousel Slider" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
