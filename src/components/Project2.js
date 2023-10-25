import React, { useState } from 'react';
import '../css/Project2.css'

function Project2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://dl.dropbox.com/s/2315nuj3xyepfix/image1.jpg?raw=1',
    'https://dl.dropbox.com/s/f8tnpnzfd2kn16e/image2.jpg?raw=1',
    'https://dl.dropbox.com/s/rjcb4wo9192rdnj/image3.jpg?raw=1',
    'https://dl.dropbox.com/s/oxcpep8398iwp7s/image4.jpg?raw=1',
  ];

  const next = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const dot = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="project2-wrapper">
        <div className="image2-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={index === activeIndex ? 'active' : ''}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>

        <button id="prev" onClick={prev}>&lt;</button>
        <button id="next" onClick={next}>&gt;</button>
    </div>
  );
}

export default Project2;
