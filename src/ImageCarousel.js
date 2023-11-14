import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'; // Import a separate CSS file for styling

const ImageCarousel = () => {
  return (
    <Carousel className="main-carousel" autoPlay interval={3000} infiniteLoop width={1200}>
      <div>
        <img src="/baby clothes.jpg" alt="Baby Clothes Image" className="carousel-image" />
      </div>
      <div>
        <img src="/toys.jpg" alt="Baby Toys Image" className="carousel-image" />
      </div>
      <div>
        <img src="/christmas.jpg" alt="Baby's First Christmas Image" className="carousel-image" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;