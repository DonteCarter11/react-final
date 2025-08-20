import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./UI/ThemeContext";
import Logo from "../assets/whitelogo.39850b27.png";
import DarkLogo from "../assets/blinker-icon.4f9b2663.png";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const { theme } = useContext(ThemeContext);
  const navClass = `nav-${theme}`;
  const currentLogo = theme === "dark" ? Logo : DarkLogo;

  // Button style based on theme
  const buttonStyles = {
    light: {
      color: "#333",
      hoverColor: "#0066cc",
      bgColor: "rgba(255,255,255,0.9)",
    },
    dark: {
      color: "#fff",
    },
  };

  const currentStyle = buttonStyles[theme];

  function openMenu() {
    document.body.classList += "menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

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
                  backgroundColor: currentStyle.bgColor,
                }}
              >
                <span
                  className="nav__link--anchor link__hover-effect"
                  style={{
                    "--hover-color": currentStyle.hoverColor,
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
                  backgroundColor: currentStyle.bgColor,
                }}
              >
                <span
                  className="nav__link--anchor link__hover-effect"
                  style={{
                    "--hover-color": currentStyle.hoverColor,
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
                style={{}}
              >
                <span className="nav__link--anchor" style={{}}>
                  Contact
                </span>
              </Link>
            </li>
            <div id="phone__nav">
              <div className="menu show__animation" onClick={openMenu}>
                <div className="item item1">Item 1</div>
                <div className="item item2">Item 2</div>
                <div className="item item3">Item 3</div>
                <div className="item item4">Item 4</div>
                <div className="item item5">Item 5</div>
                <div className="item item6">Item 6</div>
                <div className="item item7">Item 7</div>
                <div className="item item8">Item 8</div>
                <div className="item item9">Item 9</div>
              </div>
            </div>
          </ul>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <svg
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark "
                role="img"
                viewBox="0 0 384 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"
                ></path>
              </svg>
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link">
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/cards" className="menu__link">
                  Find your card
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/contact" className="menu__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
