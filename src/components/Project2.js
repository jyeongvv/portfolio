import React, { useState, useEffect } from 'react';
import '../css/Project2.css';
import Paper from '@mui/material/Paper';
import CommitIcon from '@mui/icons-material/Commit';
import SquareIcon from '@mui/icons-material/Square';

const orange = '#FE763B';
const grey = 'grey';

function Project2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);


  const paperStyle = {
    backgroundColor: '#FAF5F2',
    padding: '20px',
    borderRadius: '10px',
    width: '700px',
    top: '20px',
    textAlign: 'left'
};

  const paperStyle2 = {
    backgroundColor: '#F9EEE8',
    padding: '20px',
    borderRadius: '10px',
    width: '700px',
    top: '20px'
  };

  const paperStyle3 = {
    backgroundColor: '#FE763B',
    borderRadius: '10px', 
    height: '30px',
    marginRight: '10px',
    padding: '0 7px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  };

  const innerTextStyle = {
    padding: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: 'white'
  }

  const images = [
    'https://i.imgur.com/URK0A0u.png',
    'https://i.imgur.com/tf1rLL8.png',
    'https://i.imgur.com/0MPm6DM.png',
    'https://i.imgur.com/vfD2mPs.png',
    'https://i.imgur.com/9PQg1qV.png',
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
    <div className="project2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='project2-name'>
        <p>
          my web portfolio
        </p>
      </div>
      <div className="image2-container">
      <CommitIcon
          sx={{ color: orange, fontSize: 40, marginRight: 1 }}
          className="project1-button"
        />
        <img src={images[currentImageIndex]} alt="이미지" className="project2-image" />
        <CommitIcon
          sx={{ color: orange, fontSize: 40, marginRight: 1 }}
          className="project1-button"
        />
      </div>
      <p className='slide-etc2'>* 이미지에 마우스 커서를 올리면 이미지가 정지됩니다.</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }} className="project2-outline">
        <Paper style={paperStyle2} elevation={0}>
        찰칵 웹서비스는 집에서 보유하고 있는 보드카, 코냑등의 술의 사진을 찍어서 업로드 하면, 보유한 술로 만들 수 있는 칵테일을 검색해 주는 서비스입니다.
        </Paper>
      </div>
      <p className='project-element'>개발 환경</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project2-outline">
        <Paper style={paperStyle} elevation={0}>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />개발인원 : 1인</p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />역할 : 디자인, 프론트엔드, 배포</p>
          <div className='skill-icon'>
          <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>react</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>JavaScript</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>css</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>Node.js</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>Figma</p></Paper>
          </div>
        </Paper>
      </div>
      <p className='project-element'>주요 기능</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project2-outline">
        <Paper style={paperStyle} elevation={0}>
        찰칵 웹서비스는 집에서 보유하고 있는 보드카, 코냑등의 술의 사진을 찍어서 업로드 하면, 보유한 술로 만들 수 있는 칵테일을 검색해 주는 서비스입니다.
        </Paper>
      </div>
      <p className='project-element'>개발 후기</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project2-outline">
        <Paper style={paperStyle} elevation={0}>
        찰칵 웹서비스는 집에서 보유하고 있는 보드카, 코냑등의 술의 사진을 찍어서 업로드 하면, 보유한 술로 만들 수 있는 칵테일을 검색해 주는 서비스입니다.
        </Paper>
      </div>
      <div id="project-line"></div>
    </div>
  );
}

export default Project2;
