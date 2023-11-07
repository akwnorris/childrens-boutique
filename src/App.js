import React from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';

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
          </ul>
        </nav>
      </header>
      <ImageCarousel />
    </div>
  );
}

export default App;
