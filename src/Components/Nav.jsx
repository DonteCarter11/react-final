import React from "react";
import Logo from "../assets/whitelogo.39850b27.png"


const Nav = () => {
  return (
    <nav>
      <div class="row nav__row">
        <div class="nav__logo">
          <img class="nav__logo--img" src={Logo} alt="logo" />
        </div>
        <div class="nav__links">
          <ul class="nav__link--list">
            <li class="nav__link">
              <a href="#" class="nav__link--anchor link__hover-effect">
                About
              </a>
            </li>
            <li class="nav__link">
              <a href="#projects" class="nav__link--anchor link__hover-effect">
                Find Your Card
              </a>
            </li>
            <li class="nav__link">
              <a href="#" class="nav__link--anchor nav__link--btn">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="phone__nav">
        <div class="menu show__animation">
          <div class="item item1">Item 1</div>
          <div class="item item2">Item 2</div>
          <div class="item item3">Item 3</div>
          <div class="item item4">Item 4</div>
          <div class="item item5">Item 5</div>
          <div class="item item6">Item 6</div>
          <div class="item item7">Item 7</div>
          <div class="item item8">Item 8</div>
          <div class="item item9">Item 9</div>
        </div>
      </div>
      
    </nav>
    
  );
};

export default Nav;
