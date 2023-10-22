import React from "react";
import '../css/About.css'
import CircleIcon from '@mui/icons-material/Circle';

const grey = 'grey';

const About = () => {
    return (
        <div>
            <div className="about-head">
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon sx={{ color: grey, fontSize: 8, marginRight: 1 }} /> ABOUT ME <CircleIcon sx={{ color: grey, fontSize: 8, marginLeft: 1 }} />
                </p>
            </div>
        </div>
    )
}

export default About;
