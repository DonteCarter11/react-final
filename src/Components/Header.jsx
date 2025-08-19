import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Header({ data, onFilter }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!onFilter || typeof onFilter !== "function") {
        console.error("onFilter is not a function");
        return;
      }
      
      if (search.trim() === "") {
        onFilter(data);
      } else {
        const filtered = data.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.level.toLowerCase().includes(search.toLowerCase())
        );
        onFilter(filtered);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [search, data, onFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="row">
        <div className="content__wrapper align flex">
          <h1>Browse Digimon</h1>
          <div className="input__wrapper">
            <form id="search__form" onSubmit={handleSubmit}>
              <input 
                id="search" 
                type="text" 
                placeholder="Search by Name" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search Digimon by name or level"
                className="search-input"  // Added class name
              />
              <div className="search__wrapper">
                <button type="submit" className="search-button" aria-label="Search">
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
  );
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Header;