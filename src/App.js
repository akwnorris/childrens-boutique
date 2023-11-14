import React from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';
import ProductCarousel from './ProductCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src="BB Logo.png" alt="logo" />
        </div>
        <nav>
          <ul className="nav">
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Girls</a></li>
            <li><a href="#">Boys</a></li>
            <li><a href="#">Accesories</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Toys & Gifts</a></li>
            <li><a href="#">Holiday</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </nav>
      </header>
      <ImageCarousel />
      <ProductCarousel />
    </div>
  );
}

export default App;
