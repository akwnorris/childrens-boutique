import React, { useState } from 'react';
import './ProductCarousel.module.css';

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
    <div className="product-carousel">
      <button className="slick-prev-btn slick-arrow slick-disabled" aria-disabled="true" onClick={prevProduct}></button>
      <div className="product-image-list">
        {products.map((product, index) => (
          <img
            key={index}
            src={product.image}
            alt={product.name}
            className={index === currentProductIndex ? 'carousel-image active' : 'carousel-image'}
            style={{ width: '150px', height: '200px' }} 
          />
        ))}
      </div>
      <button className="arrow-button" onClick={nextProduct}>
        &#8594; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default ProductCarousel;
