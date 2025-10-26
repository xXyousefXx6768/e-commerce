import React from 'react';
import Slider from 'react-slick';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import './styles/carousel.css'

function Carousel() {
  const imgs = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {imgs.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;