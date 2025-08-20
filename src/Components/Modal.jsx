import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div>
      <div className="nav__links">
        <ul className="nav__link--list">
          <li className="nav__link--item">
            <Link to="/" className="nav__link">
              <span className="nav__link--anchor link__hover-effect">Home</span>
            </Link>
          </li>

          <li className="nav__link--item">
            <Link to="/cards" className="nav__link">
              <span className="nav__link--anchor link__hover-effect">
                Find Your Card
              </span>
            </Link>
          </li>

          <li className="nav__link--item">
            <Link to="/contact" className="nav__link nav__link--btn" style={{}}>
              <span className="nav__link--anchor" style={{}}>
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
