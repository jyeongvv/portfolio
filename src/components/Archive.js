import React from 'react';
import '../css/Archive.css';
import CircleIcon from '@mui/icons-material/Circle';
import Paper from '@mui/material/Paper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import image from '../images/notion.svg'

const orange = '#FE763B';
const grey = 'grey';


function Archive() {
  
    const paperStyle = {
      backgroundColor: '#F9EEE8',
      padding: '35px',
      borderRadius: '20px',
      width: '700px',
      top: '20px',
      margin: '15px'
  };

    return (
      <div className="archive">
        <div className="archive-header">
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircleIcon sx={{ color: grey, fontSize: 8, marginRight: 1 }} /> ARCHIVE <CircleIcon sx={{ color: grey, fontSize: 8, marginLeft: 1 }} />
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="archive-content">
          <Paper style={paperStyle} elevation={0}>
          <p style={{ display: 'flex', alignItems: 'center'}}><EmojiEventsIcon sx={{ color: orange, fontSize: 50,marginLeft: 7, marginRight: 3 }}/>정보처리기능사</p>
          <p style={{ display: 'flex', alignItems: 'center'}}><EmojiEventsIcon sx={{ color: orange, fontSize: 50,marginLeft: 7, marginRight: 3 }}/>SQLD (sql 개발자)</p>
          <p style={{ display: 'flex', alignItems: 'center'}}><EmojiEventsIcon sx={{ color: orange, fontSize: 50,marginLeft: 7, marginRight: 3 }}/>Adsp (데이터분석 준전문가)</p>
          <p style={{ display: 'flex', alignItems: 'center'}}><EmojiEventsIcon sx={{ color: orange, fontSize: 50,marginLeft: 7, marginRight: 3 }}/>Adobe photoshop 1급</p>
          </Paper>
          <Paper style={paperStyle} elevation={0}>
          <div className='archive-img'>
            <a href="https://www.notion.so" target="_blank" rel="noreferrer noopener">
            <img src={image} alt="Notion" style={{ width: '80px', height: '80px', marginBottom: 60, marginTop: 50 }}/>
            </a>
            </div>
            <div className='archive-img'>
                <a href='https://github.com/jyeongvv' target="_blank" rel="noreferrer noopener">
                <GitHubIcon sx={{ color: 'black', fontSize: 80, marginBottom: 5}}/>
                </a>
                </div>
          </Paper>
        </div>
      </div>
    );
  }
  
  export default Archive;
  