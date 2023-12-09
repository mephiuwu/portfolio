import React from 'react';
import Slider from 'react-slick';

export default function Brands({ data }) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="py-3 py-md-4 brand-section gray-bg">
      <div
        className="container"
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        <Slider {...settings} className="slider-gap-50">
          {data.map((item, index) => (
            <div key={index}>
              <div className="text-center d-flex align-items-center justify-content-center w-100">
                <img src={item.src} alt={item.alt} className="w-100" style={{ height: item.height, maxWidth: item.maxWidth}}/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
