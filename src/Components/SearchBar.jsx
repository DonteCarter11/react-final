import React from 'react'

function SearchBar({ searchValue, onSearchChange}) {
  return (
   <input
      type="text"
      placeholder="Search Digimon..."
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  )
}

export default SearchBar
