import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="/baby clothes.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="/toys.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="/christmas.jpg" alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
