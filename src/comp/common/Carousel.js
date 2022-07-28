import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";
export default function Carousel({ children, slidesToShow, slidesToScroll }) {
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 100,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    className: "rts",
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll || 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="rts-slider">
      <Slider {...settings}>{children}</Slider>;
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", color: "yellow" }}
      style={{ paddingLeft: 20, marginTop: -20 }}
      onClick={onClick}
    >
      <i className="bg-primary  rounded-pill bi bi-arrow-left-circle fs-3 text-white"></i>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", color: "yellow" }}
      onClick={onClick}
      style={{ paddingRight: 40, marginTop: -20 }}
    >
      <i className="bg-primary  rounded-pill bi bi-arrow-right-circle  fs-3 text-white"></i>
    </div>
  );
};
