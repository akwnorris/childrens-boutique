import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="/baby clothes.jpg" alt="Baby Clothes Image" />
      </div>
      <div>
        <img src="/toys.jpg" alt="Baby Toys Image" />
      </div>
      <div>
        <img src="/christmas.jpg" alt="Baby's First Christmas Image" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
