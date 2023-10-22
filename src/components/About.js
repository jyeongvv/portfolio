import React from "react";
import '../css/About.css'
import CircleIcon from '@mui/icons-material/Circle';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const grey = 'grey';

const About = () => {

    const paperStyle = {
        backgroundColor: '#F9EEE8',
        padding: '15px',
        borderRadius: '20px',
        position: 'relative',
        width: '300px',
        top: '-13px'
    };

    return (
        <div>
            <div className="about-head">
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon sx={{ color: grey, fontSize: 8, marginRight: 1 }} /> ABOUT ME <CircleIcon sx={{ color: grey, fontSize: 8, marginLeft: 1 }} />
                </p>
            </div>
            <Grid container spacing={5} className="about-paper">
                <Grid item xs={6}>
                    <Paper elevation={0} sx={paperStyle} className="about-content"><p>1st Paper</p></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} sx={paperStyle} className="about-content"><p>1st Paper</p></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} sx={paperStyle} className="about-content"><p>1st Paper</p></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} sx={paperStyle} className="about-content"><p>1st Paper</p></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} sx={paperStyle} className="about-content"><p>1st Paper</p></Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;
