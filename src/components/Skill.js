import '../css/Skill.css';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';

const Skill = () => {

    const grey = 'grey';
    const orange = '#FE763B';

    return (
        <div className="skill">
            <div className='skill-header'>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon sx={{ color: grey, fontSize: 8, marginRight: 1 }} /> SKILL <CircleIcon sx={{ color: grey, fontSize: 8, marginLeft: 1 }} />
                </p>
            </div>
            <div className='skill-outline'>
                <p style={{ display: 'flex', alignItems: 'center'}}><StarIcon sx={{ color: orange, fontSize: 16, marginRight: 1 }} />
                ES6 기반의 Javascript와 Typescript 사용이 가능합니다.</p>
                <p style={{ display: 'flex', alignItems: 'center'}}><StarIcon sx={{ color: orange, fontSize: 16, marginRight: 1 }} />
                Vue.js와 React 프레임 워크를 사용한 웹 개발 경험이 있습니다.</p>
            </div>
            <div className='skill-bedge'>
            <img alt="HTML5" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
            <img alt="CSS3" src ="https://img.shields.io/badge/CSS-1572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
            <img alt="SCSS" src ="https://img.shields.io/badge/SCSS-CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white"/>
            <img alt="Javascript" src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white"/>
            <img alt="Typescript" src ="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
            <img alt="Vue.js" src ="https://img.shields.io/badge/vue.js-4FC08D.svg?&style=for-the-badge&logo=vue.js&logoColor=white"/>
            <img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/>
            <img alt="NPM" src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/>
            <img alt="Axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/>
            </div>
            <div className='skill-bedge'>
            <img alt="Java" src ="https://img.shields.io/badge/java-E34F26.svg?&style=for-the-badge&logo=java&logoColor=white"/>
            <img alt="Spring" src ="https://img.shields.io/badge/spring-6DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white"/>
            <img alt="Springboot" src ="https://img.shields.io/badge/springboot-6DB33F.svg?&style=for-the-badge&logo=springboot&logoColor=white"/>
            <img alt="Python" src ="https://img.shields.io/badge/python-3776AB.svg?&style=for-the-badge&logo=python&logoColor=white"/>
            </div>
            <div className='skill-bedge'>
            <img alt="Figma" src ="https://img.shields.io/badge/figma-F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white"/>
            <img alt="adobephotoshop" src ="https://img.shields.io/badge/photoshop-31A8FF.svg?&style=for-the-badge&logo=adobephotoshop&logoColor=white"/>
            <img alt="adobeillustrator" src ="https://img.shields.io/badge/illustrator-FF9A00.svg?&style=for-the-badge&logo=adobeillustrator&logoColor=white"/>
            </div>
            <div className='skill-bedge'>
            <img alt="github" src ="https://img.shields.io/badge/github-181717.svg?&style=for-the-badge&logo=github&logoColor=white"/>
            <img alt="slack" src ="https://img.shields.io/badge/slack-A154B.svg?&style=for-the-badge&logo=slack&logoColor=white"/>
            <img alt="notion" src ="https://img.shields.io/badge/notion-000000.svg?&style=for-the-badge&logo=notion&logoColor=white"/>
            </div>
            <div id="skill-line"></div>
        </div>
    );
}

export default Skill;