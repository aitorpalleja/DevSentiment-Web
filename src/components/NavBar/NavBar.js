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
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
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