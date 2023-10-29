import React, { useState, useEffect } from 'react';
import '../css/Project1.css';
import CircleIcon from '@mui/icons-material/Circle';

// const orange = '#FE763B';
const grey = 'grey';

function Project1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);


  const images = [
    'https://dl.dropbox.com/s/2315nuj3xyepfix/image1.jpg?raw=1',
    'https://dl.dropbox.com/s/f8tnpnzfd2kn16e/image2.jpg?raw=1',
    'https://dl.dropbox.com/s/rjcb4wo9192rdnj/image3.jpg?raw=1',
    'https://dl.dropbox.com/s/oxcpep8398iwp7s/image4.jpg?raw=1',
    'https://dl.dropbox.com/s/2315nuj3xyepfix/image1.jpg?raw=1',
  ];

  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          setCurrentImageIndex(0);
        }
      }, 1500); // 1.5초
    }

    return () => {
      clearInterval(interval);
    }
  }, [currentImageIndex, autoplay, images.length]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <div className="project1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project-head">
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircleIcon sx={{ color: grey, fontSize: 8, marginRight: 1 }} /> PROJECT <CircleIcon sx={{ color: grey, fontSize: 8, marginLeft: 1 }} />
        </p>
      </div>
      <div className='project1-name'>
        <p>
          chalcock (찰칵)
        </p>
      </div>
      <div className="image-container">
        <img src={images[currentImageIndex]} alt="이미지" className="project1-image" />
      </div>
    </div>
  );
}

export default Project1;
