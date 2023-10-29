import React, { useState, useEffect } from 'react';
import '../css/Project1.css';
import CircleIcon from '@mui/icons-material/Circle';
import Paper from '@mui/material/Paper';
import CommitIcon from '@mui/icons-material/Commit';

const orange = '#FE763B';
const grey = 'grey';

function Project1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const paperStyle = {
    backgroundColor: '#FAF5F2',
    padding: '20px',
    borderRadius: '10px',
    width: '700px',
    top: '20px'
};

const paperStyle2 = {
  backgroundColor: '#F9EEE8',
  padding: '20px',
  borderRadius: '10px',
  width: '700px',
  top: '20px'
};

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
      <div className="image1-container">
      <CommitIcon
          sx={{ color: orange, fontSize: 40, marginRight: 1 }}
          className="project1-button"
        />
        <img src={images[currentImageIndex]} alt="이미지" className="project1-image" />
        <CommitIcon
          sx={{ color: orange, fontSize: 40, marginRight: 1 }}
          className="project1-button"
        />
      </div>
      <p className='slide-etc1'>* 이미지에 마우스 커서를 올리면 이미지가 정지됩니다.</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }} className="project1-outline">
        <Paper style={paperStyle2} elevation={0}>
        찰칵 웹서비스는 집에서 보유하고 있는 보드카, 코냑등의 술의 사진을 찍어서 업로드 하면, 보유한 술로 만들 수 있는 칵테일을 검색해 주는 서비스입니다.
        </Paper>
      </div>
      <p className='project-element'>개발 환경</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project1-outline">
        <Paper style={paperStyle} elevation={0}>
        찰칵 웹서비스는 집에서 보유하고 있는 보드카, 코냑등의 술의 사진을 찍어서 업로드 하면, 보유한 술로 만들 수 있는 칵테일을 검색해 주는 서비스입니다.
        </Paper>
      </div>
      <p className='project-element'>주요 기능</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project1-outline">
        <Paper style={paperStyle} elevation={0}>
        찰칵 웹서비스는 집에서 보유하고 있는 보드카, 코냑등의 술의 사진을 찍어서 업로드 하면, 보유한 술로 만들 수 있는 칵테일을 검색해 주는 서비스입니다.
        </Paper>
      </div>
      <p className='project-element'>개발 후기</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project1-outline">
        <Paper style={paperStyle} elevation={0}>
        찰칵 웹서비스는 집에서 보유하고 있는 보드카, 코냑등의 술의 사진을 찍어서 업로드 하면, 보유한 술로 만들 수 있는 칵테일을 검색해 주는 서비스입니다.
        </Paper>
      </div>
    </div>
  );
}

export default Project1;
