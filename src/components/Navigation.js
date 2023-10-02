import React from "react";
import '../../public/css/Navigation.css'
import { Link } from 'react-router-dom';
import homeIconImage from '';

const Navbar = () => {
    return (
        <div className="nav-container">
          <div className="nav-content">
            <nav id="primary_nav_wrap">
              <ul>
                <li>
                  <Link to="/">
                    <img src={homeIconImage} alt="Home" style={{ width: '40px'}} />
                  </Link>
                </li>
                <li className={activeMenu === '/about' ? 'current-menu-item' : ''}>
                  <Link to="/about">About</Link>
                </li>
                <li className={activeMenu === '/project' ? 'current-menu-item' : ''}>
                  <Link to="/project">Project</Link>
                </li>
                <li className={activeMenu === '/skill' ? 'current-menu-item' : ''}>
                  <Link to="/board">Skill</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
}

export default Navbar;