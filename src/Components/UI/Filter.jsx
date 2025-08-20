import React from "react";

function Filter() {
  return (
    <div id="filter" className="content__wrapper spacer">
      <h1 className="search__info extra-h1">
        <span className="black-txt">Search results:</span>
        <span className="search__term"></span>
      </h1>
      <div className="price__filter">
        <h2>
          Level Range: <span className="purple">Fresh to Mega</span>
        </h2>
        <label id="levelSlider">
          Filter by Level: <span id="selectedLevel"></span>
        </label>
        <input type="range" id="level__filter" min="0" max="0" step="1" />
      </div>
    </div>
  );
}

export default Filter;
