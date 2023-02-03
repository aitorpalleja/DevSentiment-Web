import './NavBar.scss'

import { useState } from "react";
import { Link } from "react-scroll";

import logo from '../../assets/logo.png'

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation_container">
      <img className="navigation_logo" src={logo} alt="logo"></img>
      <button
        className="navigation_hamburger-button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {isNavExpanded ? 'X' : '☰'}
      </button>

      <div
        className={
          isNavExpanded ? "navigation_menu expanded" : "navigation_menu"
        }
      >
        <ul>
          <li className='navigation_li'>
            <Link
              activeClass="active"
              to="sentimentanalysis"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Sentiment Analysis
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Job Trends
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Spam Detection
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;