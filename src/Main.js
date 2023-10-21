import React from "react";
import Navbar from "./components/Navigation";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";
import "./css/Main.css"

function Main() {
  return (
    <div className="Main">
      <Navbar></Navbar> 
      <Info></Info>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default Main;
