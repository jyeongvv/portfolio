import React, { useState, useEffect } from 'react';
import '../css/Project1.css';
import CircleIcon from '@mui/icons-material/Circle';
import Paper from '@mui/material/Paper';
import CommitIcon from '@mui/icons-material/Commit';
import SquareIcon from '@mui/icons-material/Square';

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
  backgroundColor: '#FFA078',
  borderRadius: '10px', 
  height: '30px',
  marginRight: '10px',
  padding: '0 7px',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
}

const paperStyle4 = {
  backgroundColor: '#FE763B',
  borderRadius: '10px', 
  height: '30px',
  marginRight: '10px',
  padding: '0 7px',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
}

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
    'https://i.imgur.com/S7THrpm.png',
    'https://i.imgur.com/OYnpoGn.png',
    'https://i.imgur.com/cccEbjG.png',
    'https://i.imgur.com/AtqRErd.png',
    'https://i.imgur.com/bB1eMKW.png',
    'https://i.imgur.com/hfoLqwe.png',
    'https://i.imgur.com/Hpbk7L6.png',
    'https://i.imgur.com/H3gjv57.png',
    
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
          <CircleIcon sx={{ color: grey, fontSize: 8, marginRight: 1 }} /> PROJECTS <CircleIcon sx={{ color: grey, fontSize: 8, marginLeft: 1 }} />
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
        <p>웹서비스 시연 영상입니다.</p>
        <a href='https://www.youtube.com/watch?v=TbiIfIIWtDM' target='_blank'>시연 영상 링크</a>
        </Paper>
      </div>
      <p className='project-element'>개발 환경</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project1-outline">
        <Paper style={paperStyle} elevation={0}>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />개발인원 : 6인</p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />역할 : 디자인, 프론트엔드 + 백엔드(일부)</p>
          <div className='skill-icon'>
          <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>React</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>Redux</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>JavaScript</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>CSS</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>Axios</p></Paper>
            <Paper style={paperStyle3} elevation={0}>
            <p style={innerTextStyle}>NPM</p></Paper>
          </div>
          <div className='skill-icon2'>
          <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>Spring</p></Paper>
            <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>Flask</p></Paper>
            <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>Yolo8</p></Paper>
            <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>MariaDB</p></Paper>
            <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>AWS</p></Paper>
            <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>Github</p></Paper>
            <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>Slack</p></Paper>
            <Paper style={paperStyle4} elevation={0}>
            <p style={innerTextStyle}>Figma</p></Paper>
          </div>
        </Paper>
      </div>
      <p className='project-element'>주요 기능</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project1-outline">
        <Paper style={paperStyle} elevation={0}>
        <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />사진만 있으면, 보유하고 있는 술로 만들 수 있는 칵테일을 확인할 수 있습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />각 칵테일마다 제조법, 재료, 가니쉬 등 상세한 정보를 제공합니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />상세한 술 뿐만 아니라 대략적인 종류로도 칵테일을 확인할 수 있습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />칵테일 안에 들어가는 재료, 가니쉬로도 조제 가능한 칵테일을 확인할 수 있습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />몇가지 질문을 통해 자신의 취향에 맞는 칵테일을 찾을 수 있습니다. (cbti)</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />회원가입과 로그인을 통해 커뮤니티에서 게시물과 댓글을 작성할 수 있습니다.</p>
        </Paper>
      </div>
      <p className='project-element'>개발 후기</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="project1-outline">
        <Paper style={paperStyle} elevation={0}>
        <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />처음 프론트엔드를 맡아서 프로젝트를 하다보니 새로운 라이브러리를 공부하고 적응하는데 시간을 많이 할애하여 기능적 완성도가 부족했던 것 같습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />프론트엔드뿐만 아니라 전반적인 디자인, 백엔드의 몇가지 기능도 같이 구현하게 되어, 주어진 시간 내에 완벽하게 프론트 쪽에 모든 문제점들을 해결하지 못해서 아쉬웠지만 추후 팀원들과 다시 해결을 하고 회고를 하면서 더 좋은 배움이 될 수 있었습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} /><span className='highlighted-text'>서버를 spring, flask 2가지로 진행하여 클라이언트측에서 생각해야하는 부분이 많아 클라이언트 측에서도 고민해야할 부분이 많았지만 CORS 오류등을 해결해 보며 좋은 경험을 가지게 되었습니다.</span></p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} />칵테일의 제조법, 재료 등 DB양이 생각보다 방대하고 테이블 정리 등 데이터베이스 정규화에 시간을 많이 쏟게 되어 좋은 경험이였지만 헤맸던 시간들이 아쉽기도 했습니다.</p>
          <p style={innerTextStyle2}>
          <SquareIcon sx={{ color: grey, fontSize: 8, marginRight: 2 }} /><span className='highlighted-text'>경험을 바탕으로 아쉬운 부분을 보완하여 새로운 개인프로젝트를 진행할 예정입니다.</span></p>
        </Paper>
      </div>
    </div>
  );
}

export default Project1;
