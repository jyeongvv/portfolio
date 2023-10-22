import React from "react";
import '../css/About.css'
import CircleIcon from '@mui/icons-material/Circle';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Face3Icon from '@mui/icons-material/Face3';
import CakeIcon from '@mui/icons-material/Cake';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CallIcon from '@mui/icons-material/Call';
import SchoolIcon from '@mui/icons-material/School';


const grey = 'grey';
const orange = '#FE763B'

const About = () => {

    const paperStyle = {
        backgroundColor: '#F9EEE8',
        padding: '10px',
        borderRadius: '20px',
        position: 'relative',
        width: '300px',
        top: '-13px'
    };

    const paperStyle2 = {
        backgroundColor: '#F9EEE8',
        padding: '10px',
        borderRadius: '20px',
        position: 'relative',
        width: '600px',
        top: '-13px'
    };

    return (
        <div>
            <div className="about-head">
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon sx={{ color: grey, fontSize: 8, marginRight: 1 }} /> ABOUT ME <CircleIcon sx={{ color: grey, fontSize: 8, marginLeft: 1 }} />
                </p>
            </div>
            <Grid container spacing={1} justifyContent="center" className="about-paper">
            <Face3Icon sx={{ color: orange, fontSize: 60, marginLeft: 6, marginRight: 4 }} />
                <Grid item xs={4}>
                    <Paper elevation={0} sx={paperStyle} className="about-content">
                        <p>김지영 / KIM JI YOUNG</p>
                        </Paper>
                </Grid>
                <CakeIcon sx={{ color: orange, fontSize: 60, marginRight: 4 }} />
                <Grid item xs={3.5}>
                    <Paper elevation={0} sx={paperStyle} className="about-content">
                        <p>2001.08.15</p>
                        </Paper>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <Grid container spacing={1} justifyContent="center" className="about-paper">
            <AttachEmailIcon sx={{ color: orange, fontSize: 60, marginLeft: 6, marginRight: 4 }} />
                <Grid item xs={4}>
                    <Paper elevation={0} sx={paperStyle} className="about-content">
                        <p>kjy812467@gmail.com</p>
                        </Paper>
                </Grid>
                <CallIcon sx={{ color: orange, fontSize: 60, marginRight: 4 }} />
                <Grid item xs={3.5}>
                    <Paper elevation={0} sx={paperStyle} className="about-content">
                        <p>010-3328-8124</p>
                        </Paper>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <Grid container spacing={1} marginLeft={18} className="about-paper">
            <SchoolIcon sx={{ color: orange, fontSize: 60, marginLeft: 6, marginRight: 4 }} />
                <Grid item xs={4}>
                    <Paper elevation={0} sx={paperStyle2} className="about-content">
                        <p>한양여자대학교 시각디자인과 졸업 (2020.03 ~ 2023.02)</p>
                        <p>한국방송통신대학교 컴퓨터과학과 재학 (2024.03 ~ )</p>
                        </Paper>
                </Grid>
            </Grid>
            <div id="about-line"></div>
        </div>
    )
}

export default About;