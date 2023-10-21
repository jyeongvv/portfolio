import React from "react";
import '../css/Navigation.css'
import logo from '../images/logo.png';

const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

const logoStyle = {
    display: "flex",
    justifyContent: "center",
  };

const listStyle = {
    listStyle: "none", 
  };

const Navbar = () => {
    return (
        <div className="navbar">
              <ul style={listStyle}>
                <li>
                <a href="/" onClick={scrollToTop} style={logoStyle}>
                    <img src={logo} alt="Home" style={{ width: '204px', height: '92px'}} />
                </a>
                </li>
            </ul>
        </div>
      );
}

export default Navbar;