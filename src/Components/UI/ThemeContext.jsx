// UI/ThemeContext.js
import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // List of routes that should use dark theme
    const darkRoutes = ['/cards'];
    const newTheme = darkRoutes.includes(location.pathname) ? 'dark' : 'light';
     console.log('Current path:', location.pathname, 'Theme:', newTheme);
    setTheme(newTheme);
  }, [location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};