import { useState } from "react";

import axios from "axios";

import { CgClose } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

import "./Search.css";
import Loading from "../Loading/Loading";
const Search = ({ childToParent, showSearchArea, setShowSearchArea, city }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (value) {
      getCitiesSuggestions();
      setLoading(true);
    }
  }

  // Function to get 5 cities suggestions from API
  async function getCitiesSuggestions() {
    try {
      const API_key = "6658b5987a716f929da6227307c0bafd";
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${value.toLowerCase()}&limit=5&appid=${API_key}`;

      const res = await axios.get(url);
      const suggestionsData = await res.data;

      setLoading(false);
      setSuggestions(suggestionsData);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  }

  return (
    <>
      <section className="close-btn-section">
        <CgClose
          className="close-btn"
          color="#e7e7eb"
          onClick={() => {
            setShowSearchArea(false);
          }}
        />
      </section>

      <form onSubmit={handleSearch}>
        <div>
          <ImSearch className="search-icon" color="#616475" />
          <input type="text" onChange={handleChange} value={value} placeholder="search location" />
        </div>
        <button>Search</button>
      </form>

      {/* Suggestions */}
      {suggestions && (
        <section className="suggestions-section">
          {suggestions.map((suggestion) => {
            const { name, state, country, lat, lon } = suggestion;
            return (
              <div
                onClick={() => {
                  // Clicking should auto search with its respective lat and lon
                  childToParent(lat, lon, name, state, country);
                  setShowSearchArea(false);
                }}
              >
                <p>{`${name}, ${state}, ${country}`}</p>
                <IoIosArrowForward className="arrow" />
              </div>
            );
          })}
        </section>
      )}
      {loading && <Loading type={"bubbles"} color={"#ffffff"} />}
    </>
  );
};

export default Search;
