import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Data() {
  const [digimon, setDigimon] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchDigimon() {
    const { data } = await axios.get(
      "https://digimon-api.vercel.app/api/digimon"
    );
    setDigimon(data);
  }
  useEffect(() => {
    setTimeout(() => {
      fetchDigimon();
    }, 500);
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilter(digimon);
    } else {
      const filtered = digimon.filter(
        (digimon) =>
          digimon.name.toLowerCase().included(search.toLowerCase()) ||
          digimon.level.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filtered);
    }
  }, [search, digimon]);

  return (
    <>
      <Header />
      <div className="user__list">
        {digimon.map((digimon) => {
          return (
            <div>
              <div className="user-card">
                <h3>{digimon?.name}</h3>
                <img src={digimon?.img} />
                <p>{digimon?.level}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;
