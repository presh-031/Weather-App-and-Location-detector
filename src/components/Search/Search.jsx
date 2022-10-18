import { useState, useCallback } from "react";
import { CgClose } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

import "./Search.css";
const Search = ({ showSearchArea, setShowSearchArea, city }) => {
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

    console.log(searchHistory);
  }

  function handleHistoryClick(searchTerm) {
    setValue(searchTerm);
    // Should also automatically search
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
    </>
  );
};

export default Search;
