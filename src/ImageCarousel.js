import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

const ImageCarousel = () => {
  return (
    <Carousel className="main-carousel" autoPlay interval={3000} infiniteLoop showStatus={false}>
      <div className="carousel-item">
        <img src="/baby clothes.jpg" alt="Baby Clothes Image" className="carousel-image" />
        <button className="carousel-button">Button for Clothes</button>
      </div>
      <div className="carousel-item">
        <img src="/toys.jpg" alt="Baby Toys Image" className="carousel-image" />
        <button className="carousel-button">Button for Toys</button>
      </div>
      <div className="carousel-item">
        <img src="/babyxmas.jpg" alt="Baby's First Christmas Image" className="carousel-image" />
        <button className="carousel-button">Button for Christmas</button>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;