import React, { useState, useEffect } from "react";
import axios from "axios";
import Overlay from "./Overlay";
import { useSearch } from "./Context/SearchContext";
import { useNavigate } from "react-router-dom";

function DigimonApp() {
  // Get search state from context
  const { searchQuery: contextSearchQuery, searchTriggered } = useSearch();

  // State management
  const [allDigimon, setAllDigimon] = useState([]);
  const [filteredDigimon, setFilteredDigimon] = useState([]);
  const [uniqueLevels, setUniqueLevels] = useState(["All"]);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [showNoResults, setShowNoResults] = useState(false);

  const navigate = useNavigate();

  const handleDigimonClick = (digimon) => {
    navigate(`/cards/${digimon.name.toLowerCase()}`);
  };

  // Fetch data and initialize
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://digimon-api.vercel.app/api/digimon"
        );
        setAllDigimon(data);
        setFilteredDigimon(data);

        // Get unique levels
        const levelsFromData = [...new Set(data.map((d) => d.level))];
        setUniqueLevels(["All", ...levelsFromData]);
      } catch (error) {
        console.error("Error fetching Digimon:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Apply filters from context when search is triggered
  useEffect(() => {
    if (searchTriggered && contextSearchQuery !== undefined) {
      setLocalSearchQuery(contextSearchQuery);
      applyFilters(contextSearchQuery, selectedLevel);
    }
  }, [searchTriggered, contextSearchQuery, selectedLevel, allDigimon]);

  // Apply filters for local search changes
  useEffect(() => {
    applyFilters(localSearchQuery, selectedLevel);
  }, [localSearchQuery, selectedLevel, allDigimon]);

  const applyFilters = (searchTerm, level) => {
    const filtered = allDigimon.filter((d) => {
      const matchName = d.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLevel = level === "All" || d.level === level;
      return matchName && matchLevel;
    });

    setFilteredDigimon(filtered);
    setShowNoResults(filtered.length === 0);
  };

  // Update slider label and selected level
  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value);
    setSliderValue(index);
    setSelectedLevel(uniqueLevels[index]);
  };

  // Handle form submission (Enter key)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    applyFilters(localSearchQuery, selectedLevel);
  };

  // Handle search button click
  const handleSearchClick = (e) => {
    e.preventDefault();
    applyFilters(localSearchQuery, selectedLevel);
  };

  // Handle Enter key press in input field
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      applyFilters(localSearchQuery, selectedLevel);
    }
  };

  return (
    <div className="app">
      <Overlay />
      {/* Header Section */}
      <section>
        <div className="row">
          <div className="content__wrapper align flex">
            <h1>Browse Digimon</h1>
            <div className="input__wrapper">
              <form id="search__form" onSubmit={handleSearchSubmit}>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by Name"
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  aria-label="Search Digimon by name"
                />
                <div className="search__wrapper">
                  <button
                    type="submit"
                    className="search-button"
                    onClick={handleSearchClick}
                  >
                    <svg
                      id="search__btn"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-search fa-w-16 search-icon"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div id="filter" className="content__wrapper spacer">
        <h1 className="search__info extra-h1">
          <span className="black-txt">Search results:</span>
          <span className="search__term">
            {localSearchQuery ? ` "${localSearchQuery}"` : " All Digimon"}
            {selectedLevel !== "All" ? ` (Level: ${selectedLevel})` : ""}
          </span>
        </h1>
        <div className="price__filter">
          <h2>
            Level Range: <span className="purple">All to Mega</span>
          </h2>
          <label id="levelSlider">
            Filter by Level: <span id="selectedLevel">{selectedLevel}</span>
          </label>
          {uniqueLevels.length > 1 && (
            <input
              type="range"
              id="level__filter"
              min="0"
              max={uniqueLevels.length - 1}
              value={sliderValue}
              onChange={handleSliderChange}
              step="1"
            />
          )}
        </div>
      </div>

      {/* Loading Spinner */}
      {isLoading && <div className="cards__loading">Loading...</div>}

      {/* No Results Message */}
      {showNoResults && (
        <div id="no__results" style={{ display: "block" }}>
          No Digimon found matching your search criteria
        </div>
      )}

      {/* Data Display Section */}
      <div
        className="user__list"
        style={{ display: isLoading ? "none" : "flex" }}
      >
        {filteredDigimon.map((digimon) => (
          <button
            key={`${digimon.name}-${digimon.level}`}
            className="user-card digi-card"
            onClick={() => handleDigimonClick(digimon)}
          >
            <div>
              <h3 className="digi-name">{digimon.name}</h3>
              <img className="digi-img" src={digimon.img} alt={digimon.name} />
              <p className="digi-level">Level: {digimon.level}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DigimonApp;
