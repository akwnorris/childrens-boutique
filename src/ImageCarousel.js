import React from 'react';
import { Slide, SideNav } from 'hero-slider';

const ImageCarousel = () => {
  return (
    <Slide
      settings={{
        slidingType: 'linear',
        slidingTime: 2000,
      }}
    >
      <SideNav position="bottom" numSlides={3} />
      <div
        style={{
          background: `url(${process.env.PUBLIC_URL}/baby clothes.jpg)`,
          width: '100%',
          height: '100vh',
        }}
      ></div>
      <div
        style={{
          background: `url(${process.env.PUBLIC_URL}/toys.jpg)`,
          width: '100%',
          height: '100vh',
        }}
      ></div>
      <div
        style={{
          background: `url(${process.env.PUBLIC_URL}/christmas.jpg)`,
          width: '100%',
          height: '100vh',
        }}
      ></div>
    </Slide>
  );
};

export default ImageCarousel;