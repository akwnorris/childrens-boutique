import React, { useState } from 'react';
import styles from './ProductCarousel.module.css';

const ProductCarousel = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const products = [
    { link: '...', image: 'polkadot.jpg', name: 'Polka Dot Top' },
    { link: '...', image: 'bow.jpg', name: 'Yellow Bow' },
    { link: '...', image: 'bearjacket.jpg', name: 'Bear Jacket' },
    { link: '...', image: 'abacus.jpg', name: 'Abacus Toy' },
    { link: '...', image: 'kicks.jpg', name: 'Toddler Shoes' },
    { link: '...', image: 'jacket.jpg', name: 'Toddler Jacket' },
    { link: '...', image: 'blocks.jpg', name: 'Block Toys' }
  ];

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.productCarousel}>
      <div className={styles.headerContainer}>
        <h2>Our Best Sellers</h2>
      </div>

    {/* Commenting out the buttonContainer 
      <div className={styles.buttonContainer}>
        <button className={`${styles.slickArrow} ${styles.slickPrevBtn} ${currentProductIndex === 0 ? styles.slickDisabled : ''}`} onClick={prevProduct} aria-disabled={currentProductIndex === 0}>
          <img
            width="9"
            height="15"
            src="/arrow-default.svg"
            alt="Previous"
            style={{ transform: 'scaleX(-1)' }}
          />
        </button>
      
        <button className={`${styles.slickArrow} ${styles.slickNextBtn} ${currentProductIndex === products.length - 1 ? styles.slickDisabled : ''}`} onClick={nextProduct} aria-disabled={currentProductIndex === products.length - 1}>
          <img
            width="9"
            height="15"
            src="/arrow-default.svg"
            alt="Next"
            style={{ transform: 'scaleX(1)' }}
          />
        </button>
      </div> 
      */}

      <div className={styles.imageList}>
        {products.map((product, index) => (
          <img
            key={index}
            src={product.image}
            alt={product.name}
            className={index === currentProductIndex ? `${styles.carouselImage} ${styles.active}` : styles.carouselImage}
            style={{ width: '200px', height: '250px', marginRight: '30px', padding: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
