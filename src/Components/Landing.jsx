import React, { useState } from "react";
import DigiLogo from "../assets/68Yh5vE.gif";
import { FaSpinner, FaSearch } from "react-icons/fa";
import SearchAnimationGif from "../assets/does-anyone-know-if-there-is-a-gabumon-gif-like-this-one-v0-9e904pfzntwb1.gif";
import { useNavigate } from "react-router-dom";
import { useSearch } from "./Context/SearchContext";

function Landing() {
  const [isSearching, setIsSearching] = useState(false);
  const [localQuery, setLocalQuery] = useState("");
  const navigate = useNavigate();
  const { triggerSearch } = useSearch();

  const handleSearch = () => {
    if (isSearching) return;

    setIsSearching(true);

    triggerSearch(localQuery);

    setTimeout(() => {
      setIsSearching(false);
      navigate("/cards");
    }, 4000);
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section id="landing__page">
      <div className="content__wrapper flex-col align-center">
        <div className="flex-col align-center" style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <h1
                style={{
                  color: "#6030b1",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                America's most awarded Digimon information platform
              </h1>
            </div>
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <h2>
              Find your favorite Digimon with{" "}
              <span className="purple">BLINKER</span>
            </h2>
          </div>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <div className="in__wrapper">
                <input
                  className="in"
                  type="text"
                  placeholder="Search by Name"
                  onChange={(e) => setLocalQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isSearching}
                />
                <button
                  className={`search-btn ${
                    isSearching ? "search-btn--loading" : ""
                  }`}
                  onClick={handleSearch}
                >
                  {isSearching ? (
                    <>
                      <FaSpinner className="search-btn__icon spinner" />
                    </>
                  ) : (
                    <>
                      <FaSearch className="search-btn__icon" />
                    </>
                  )}
                </button>
              </div>
              {isSearching && (
                <div className="gif__animation-container">
                  <img
                    src={SearchAnimationGif}
                    alt=""
                    className="walking-gif"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image placed under everything */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <img className="egg"
            src={DigiLogo}
            alt=""
            style={{
              width: "100px",
              height: "auto",
              display: "block",
            }}
          />
        </div>
        <div className="digi__wrapper">
          <div className="digimon"></div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
