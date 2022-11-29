import { useState } from "react";

import axios from "axios";

import { CgClose } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

import "./Search.css";
const Search = ({ childToParent, showSearchArea, setShowSearchArea, city }) => {
  const [value, setValue] = useState("");
  // Should store search history in local storage.
  // Should be validating input

  // Default search history is user's current city.
  const [searchHistory, setSearchHistory] = useState([
    {
      id: 1,
      searchTerm: city,
    },
  ]);

  // Suggestions data initially is an empty array
  const [suggestions, setSuggestions] = useState(null);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    setSearchHistory((prevSearchHistory) => [
      ...prevSearchHistory,

      // Generating ids manually for the list-keys
      { id: prevSearchHistory[prevSearchHistory.length - 1].id + 1, searchTerm: value },
    ]);

    getCitiesSuggestions();
    // setShowSearchArea(false);

    console.log(searchHistory);
  }

  function handleHistoryClick(searchTerm) {
    setValue(searchTerm);
    // Should also automatically search
  }

  // Function to get 5 cities suggestions from API
  async function getCitiesSuggestions() {
    try {
      const API_key = "6658b5987a716f929da6227307c0bafd";
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${value.toLowerCase()}&limit=5&appid=${API_key}`;

      const res = await axios.get(url);
      const suggestionsData = await res.data;

      // console.log(suggestionsData);

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

      {/* Search history section */}
      {suggestions === null && (
        <section className="search-history-section">
          {searchHistory.map((history) => {
            return (
              <div
                key={history.id}
                onClick={() => {
                  handleHistoryClick(history.searchTerm);
                }}
              >
                <p>{history.searchTerm}</p>
                <IoIosArrowForward className="arrow" />
              </div>
            );
          })}
        </section>
      )}

      {/* Suggestions */}
      {suggestions && (
        <section className="suggestions-section">
          {suggestions.map((suggestion) => {
            const { name, state, country, lat, lon } = suggestion;
            return (
              <div
                onClick={() => {
                  // Clicking should auto search with its respective lat and lon
                  setShowSearchArea(false);
                  childToParent(lat, lon, name, state, country);
                }}
              >
                <p>{`${name}, ${state}, ${country}`}</p>
                <IoIosArrowForward className="arrow" />
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Search;
