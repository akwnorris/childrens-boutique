import React, { useState } from 'react';

const images = [
  "/images/baby clothes.jpg",
  "/images/toys.jpg",
  "/images/christmas.jpg",
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
      <button id="prev-button" onClick={prevSlide}>Previous</button>
      <button id="next-button" onClick={nextSlide}>Next</button>
    </div>
  );
}

export default HeroSlider;