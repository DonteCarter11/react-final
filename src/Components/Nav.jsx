import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./UI/ThemeContext";
import Logo from "../assets/whitelogo.39850b27.png";
import DarkLogo from "../assets/blinker-icon.4f9b2663.png";

const Nav = () => {
  const { theme } = useContext(ThemeContext);
  const navClass = `nav-${theme}`;
  const currentLogo = theme === 'dark' ? Logo : DarkLogo;

  // Button style based on theme
  const buttonStyles = {
    light: {
      color: "#333",
      hoverColor: "#0066cc",
      bgColor: "rgba(255,255,255,0.9)"
    },
    dark: {
      color: "#fff",
    }
  };

  const currentStyle = buttonStyles[theme];

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="row nav__row">
        <Link to="/" className="logo-link">
          <div className="nav__logo">
            <img 
              className="nav__logo--img" 
              src={currentLogo} 
              alt="logo" 
              key={theme}
            />
          </div>
        </Link>
        
        <div className="nav__links">
          <ul className="nav__link--list">
            <li className="nav__link--item">
              <Link 
                to="/" 
                className="nav__link"
                style={{
                  color: currentStyle.color,
                  backgroundColor: currentStyle.bgColor
                }}
              >
                <span 
                  className="nav__link--anchor link__hover-effect"
                  style={{
                    '--hover-color': currentStyle.hoverColor
                  }}
                >
                  Home
                </span>
              </Link>
            </li>
            
            <li className="nav__link--item">
              <Link 
                to="/cards" 
                className="nav__link"
                style={{
                  color: currentStyle.color,
                  backgroundColor: currentStyle.bgColor
                }}
              >
                <span 
                  className="nav__link--anchor link__hover-effect"
                  style={{
                    '--hover-color': currentStyle.hoverColor
                  }}
                >
                  Find Your Card
                </span>
              </Link>
            </li>
            
            <li className="nav__link--item">
              <Link 
                to="/contact" 
                className="nav__link nav__link--btn"
                style={{
                }}
              >
                <span 
                  className="nav__link--anchor"
                  style={{
                  }}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;