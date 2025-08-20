import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Evolutions from "../Components/Evolutions";

const Features = () => {
  const { digimonName } = useParams();
  const [digigmonDetails, setDigimonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(0);

  const [error, setError] = useState(null);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(parseInt(e.target.value));
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://digi-api.com/api/v1/digimon/${digimonName.toLowerCase()}`
        );
        setDigimonDetails(response.data);
      } catch (error) {
        setError("Digimon not found");
        setTimeout(() => navigate("/cards"), 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [digimonName, navigate]);

  if (loading) return <div className="loading">Loading {digimonName}... </div>;
  if (error) return <div className="error"> {error}</div>;
  if (!digigmonDetails) return <div>No data found </div>;
  <div> Loading...</div>;

  return (
    <div className="detail__page skeleton">
      <button className="back-btn" onClick={() => navigate(-1)}> Go Back </button>
      <header className="card-container">
        <h1 className="purple detail__name">{digigmonDetails.name}</h1>
        <img src={digigmonDetails.images[0]?.href} alt={digigmonDetails.name} />
      
      </header>
      <section className="digimon-info">
        <h2>Information</h2>
        {/* Language Selection */}
        <label className="" htmlFor="language-select">
          Select Language:
        </label>
        <select
          id="language-select"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          {/* Map through the first two descriptions to create options */}
          {digigmonDetails.descriptions
            .slice(0, 2)
            .map((descriptionObject, index) => (
              <option key={index} value={index}>
                {/* Display a label for each language, assuming the description object has a language identifier */}
                {descriptionObject.language || `Language ${index + 1}`}
              </option>
            ))}
        </select>
        <p>
          <strong>Level:</strong> {digigmonDetails.levels[0]?.level}
        </p>
        <p>
          <strong>Type:</strong> {digigmonDetails.types[0]?.type}
        </p>
        <p>
          <strong>Attribute:</strong> {digigmonDetails.attributes[0]?.attribute}
        </p>
        <p className="description">
          <strong>Description:</strong>{" "}
          {digigmonDetails.descriptions[selectedLanguage]?.description}
        </p>
      </section>
      <section></section>
    </div>
  );
};

export default Features;
