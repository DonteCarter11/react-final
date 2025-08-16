import React from "react";

function Filter() {
  return (
    <div id="filter" class="content__wrapper spacer">
      <h1 class="search__info extra-h1">
        <span class="black-txt">Search results:</span>
        <span class="search__term"></span>
      </h1>
      <div class="price__filter">
        <h2>
          Level Range: <span class="purple">Fresh to Mega</span>
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
