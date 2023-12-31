import React from "react";
import Navbar from "./components/Navigation";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Skill from "./components/Skill";
import Archive from "./components/Archive";
import "./css/Main.css"

function Main() {
  return (
    <div className="Main">
      <Navbar></Navbar> 
      <Info></Info>
      <About></About>
      <Project1></Project1>
      <Project2></Project2>
      <Skill></Skill>
      <Archive></Archive>
      <Footer></Footer>
    </div>
  );
}

export default Main;
