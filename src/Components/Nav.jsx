import React from "react";
import Logo from "../assets/whitelogo.39850b27.png"


const Nav = () => {
  return (
    <nav>
      <div className="row nav__row">
        <div className="nav__logo">
          <img className="nav__logo--img" src={Logo} alt="logo" />
        </div>
        <div className="nav__links">
          <ul className="nav__link--list">
            <li className="nav__link">
              <a href="#" className="nav__link--anchor link__hover-effect">
                About
              </a>
            </li>
            <li className="nav__link">
              <a href="#projects" className="nav__link--anchor link__hover-effect">
                Find Your Card
              </a>
            </li>
            <li className="nav__link">
              <a href="#" className="nav__link--anchor nav__link--btn">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="phone__nav">
        <div className="menu show__animation">
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
      
    </nav>
    
  );
};

export default Nav;
