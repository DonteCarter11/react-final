import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);

  const triggerSearch = (query) => {
    setSearchQuery(query);
    setSearchTriggered(true);
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSearchTriggered(false);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      searchTriggered,
      triggerSearch,
      resetSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};