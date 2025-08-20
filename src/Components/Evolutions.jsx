// components/EvolutionList.jsx
import React from 'react';

// Concept: Reusable Component
// This component only cares about displaying evolutions
const EvolutionList = ({ evolutions, title }) => {
  // Concept: Conditional Rendering
  // Only show if there are evolutions
  if (!evolutions || evolutions.length === 0) {
    return null; // Don't render anything if no evolutions
  }

  return (
    <div className="evolution-section">
      <h3>{title}</h3>
      <div className="evolution-grid">
        {/* Concept: Array Mapping */}
        {/* Transform data array into UI components */}
        {evolutions.map((evolution, index) => (
          // Concept: Unique Keys in React
          // Each child in a list needs a unique key prop
          <div key={index} className="evolution-card">
            <img 
              src={evolution.img} 
              alt={evolution.name}
              className="evolution-image"
            />
            <p className="evolution-name">{evolution.name}</p>
            {evolution.condition && (
              <p className="evolution-condition">{evolution.condition}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvolutionList;