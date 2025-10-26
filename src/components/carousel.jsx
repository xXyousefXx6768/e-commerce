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
    className: '',
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <div className='carousel-container' style={{width: '70%;',marginTop:'3rem'}}>
      <Slider {...settings}>
        {imgs.map((item, index) => (
          <img key={index} src={item} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
