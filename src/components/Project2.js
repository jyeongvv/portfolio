import React, { useState } from 'react';
import '../css/Project2.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const orange = '#FE763B';

function Project2() {
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
    <div className="project2">
      <div className='project2-name'>
              <p>
                my web portfolio
              </p>
      </div>
      <div className="image-container">
        <NavigateBeforeIcon
          sx={{ color: orange, fontSize: 40, marginRight: 1 }}
          onClick={previousImage}
          className="project2-button"
        />
        <img src={images[currentImageIndex]} alt="이미지" className="project2-image" />
        <NavigateNextIcon
          sx={{ color: orange, fontSize: 40, marginLeft: 1 }}
          onClick={nextImage}
          className="project2-button"
        />
      </div>
      <div id="project-line"></div>
    </div>
  );
}

export default Project2;
