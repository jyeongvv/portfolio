import React from "react";
import '../css/Info.css';
import Paper from '@mui/material/Paper'; // Material-UI의 Paper 컴포넌트 가져오기

const Info = () => {

    const paperStyle = {
        backgroundColor: '#FAF5F2',
        padding: '15px',
        borderRadius: '20px',
        position: 'relative',
        left: '19%',
        width: '700px',
        top: '-13px'
    };

    return (
        <div className="info">
            <p className="main-info">성장하고 꿈꾸는 지원자 <span className="highlighted-text">김지영</span> 입니다.</p>
            <div className="sub-info">
                <p className="info-header">공감하기 위해 노력합니다.</p>
                <Paper elevation={0} sx={paperStyle} className="info-content">
                    <p>사용자의 입장에서 생각하고 서비스하기 위해 노력합니다.</p>
                </Paper>
                <p className="info-header">문제 해결을 위해 노력합니다.</p>
                <Paper elevation={0} sx={paperStyle} className="info-content">
                    <p>주어진 문제를 해결 하기 위해 관련 도메인 지식을 습득하거나, 기술을 배우는 등 문제 해결을 위해 노력합니다.</p>
                </Paper>
                <p className="info-header">원활한 의사소통과 협업을 위해 노력합니다.</p>
                <Paper elevation={0} sx={paperStyle} className="info-content">
                    <p>내가 무엇을, 어떻게 진행하였는지, 어떤 문제점이 있었는지 모든 과정을 팀원들과 공유하기 위해 기록하고 노력합니다.</p>
                </Paper>
                <div id="info-line"></div>
            </div>
        </div>
    );
}

export default Info;
