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

  const innerTextStyle2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
        개인 포트폴리오를 웹형식으로 제작했습니다.
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
        <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />복잡한 템플릿이 아닌 한눈에 포트폴리오를 살펴볼 수 있습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />배포를 하고 도메인을 연결함으로써, 주소만 있으면 누구든 접속하여 둘러볼 수 있습니다.</p>
        </Paper>
      </div>
      <p className='project-element'>개발 후기</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project2-outline">
      <Paper style={paperStyle} elevation={0}>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />생각했던 것보다 구현하는데 시간이 걸려 아쉬웠습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} /><span className='highlighted-text'>프론트만 제작을 하니 확실히 간편하기도 했지만 무엇보다도 너무 즐겁게 작업하여 프론트엔드로 나아가고 싶다는 생각에 확신이 들었습니다.</span></p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />경험삼아가 아닌 완전한 결과물을 직접 배포해본 것은 처음이라 헤매고 더 좋은 방법을 사용하지 못해 아쉽습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} /><span className='highlighted-text'>이번 포트폴리오 제작을 바탕으로 더 발전된 포트폴리오를 제작하고 있습니다.</span></p>
        </Paper>
      </div>
      <div id="project-line"></div>
    </div>
  );
}

export default Project2;
