import React, { useState, useEffect } from "react";
import Navbar from "./components/Navigation";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Skill from "./components/Skill";
import Archive from "./components/Archive";
import "./css/Main.css";
import { backToTop, getScrollPosition, setScrollTop } from "./components/Top";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Main() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollPosition = getScrollPosition();

    if (scrollPosition > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 페이지가 새로고침되었을 때 스크롤 위치를 상단으로 이동
    if (window.performance) {
      if (performance.navigation.type === 1) {
        setScrollTop(0);
        // 처음에는 버튼을 보이지 않도록 설정
        setShowBackToTop(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Main">
      <Navbar></Navbar>
      <Info></Info>
      <About></About>
      <Project1></Project1>
      <Project2></Project2>
      <Skill></Skill>
      <Archive></Archive>
      <div className="footer">
        <Footer></Footer>
      </div>
      <div className={`top-button ${showBackToTop ? "visible" : ""}`} onClick={backToTop}>
        <ArrowCircleUpIcon sx={{ fontSize: 80 }}></ArrowCircleUpIcon>
      </div>
    </div>
  );
}

export default Main;
