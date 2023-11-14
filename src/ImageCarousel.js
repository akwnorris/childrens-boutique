import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

const ImageCarousel = () => {
  return (
    <Carousel className="main-carousel" autoPlay interval={3000} infiniteLoop showStatus={false}>
      <div className="carousel-item">
        <img src="/baby clothes.jpg" alt="Baby Clothes Image" className="carousel-image" />
        <button className="carousel-button">Shop New Arrivals</button>
      </div>
      <div className="carousel-item">
        <img src="/toys.jpg" alt="Baby Toys Image" className="carousel-image" />
        <button className="carousel-button">Explore Gifts</button>
      </div>
      <div className="carousel-item">
        <img src="/rainboots.jpg" alt="Rainboots Image" className="carousel-image" />
        <button className="carousel-button">New Rainboot Styles In Stock</button>
      </div>
      <div className="carousel-item">
        <img src="/babyxmas.jpg" alt="Baby's First Christmas Image" className="carousel-image" />
        <button className="carousel-button">Shop Our Christmas Looks</button>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;