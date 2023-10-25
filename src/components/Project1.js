import React, { useState } from 'react';
import '../css/Project1.css'

function Project1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const images = [
    'https://dl.dropbox.com/s/2315nuj3xyepfix/image1.jpg?raw=1',
    'https://dl.dropbox.com/s/f8tnpnzfd2kn16e/image2.jpg?raw=1',
    'https://dl.dropbox.com/s/rjcb4wo9192rdnj/image3.jpg?raw=1',
    'https://dl.dropbox.com/s/oxcpep8398iwp7s/image4.jpg?raw=1',
    'https://dl.dropbox.com/s/2315nuj3xyepfix/image1.jpg?raw=1',
  ];

  return (
    <div className="project1">
      <div className="image-container">
        <button className="project1-button" onClick={previousImage}>이전</button>
        <img src={images[currentImageIndex]} alt="이미지" className="project1-image" />
        <button className="project1-button" onClick={nextImage}>다음</button>
      </div>
    </div>
  );
}

export default Project1;
