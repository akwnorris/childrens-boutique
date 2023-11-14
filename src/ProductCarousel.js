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
        <h2>Current Best Sellers</h2>

      <button className="slick-prev-btn slick-arrow slick-disabled" onClick={prevProduct} aria-disabled={currentProductIndex === 0}>
      <img
          width="9"
          height="15"
          src="/arrow-default.svg"
          alt="Previous"
          style={{ transform: 'scaleX(-1)' }}
        />
      </button>
    
      <button className="slick-next-btn slick-arrow" onClick={nextProduct} aria-disabled={currentProductIndex === products.length - 1}>
      <img
          width="9"
          height="15"
          src="/arrow-default.svg"
          alt="Next"
          style={{ transform: 'scaleX(1)' }} // No transformation for the next arrow
        />
      </button>

      <div className="image-list">
        {products.map((product, index) => (
          <img
            key={index}
            src={product.image}
            alt={product.name}
            className={index === currentProductIndex ? 'carousel-image active' : 'carousel-image'}
            style={{ width: '200px', height: '200px'}}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
