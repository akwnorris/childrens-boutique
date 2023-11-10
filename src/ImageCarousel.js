import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="/baby clothes.jpg" alt="Baby Clothes" />
      </div>
      <div>
        <img src="/toys.jpg" alt="Toys" />
      </div>
      <div>
        <img src="/christmas.jpg" alt="Christmas" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
