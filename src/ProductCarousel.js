import React, { useState } from 'react';
import './ProductCarousel.css';

const ProductCarousel = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const products = [
    { link: '...', image: 'polkadot.jpg', name: 'Polka Dot Top' },
    { link: '...', image: 'bow.jpg', name: 'Yellow Bow' },
    { link: '...', image: 'bearjacket.jpg', name: 'Bear Jacket' },
  ];

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevProduct}>Previous</button>
      <img src={products[currentProductIndex].image} alt={products[currentProductIndex].name} className="carousel-image" />
      <button className="carousel-button" onClick={nextProduct}>Next</button>
    </div>
  );
};

export default ProductCarousel;
