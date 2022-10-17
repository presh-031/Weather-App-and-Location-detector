import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import "./Search.css";
const Search = ({ showSearchArea, setShowSearchArea, city }) => {
  const [value, setValue] = useState("");
  // Should store search history in local storage.

  // Default search history
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
      { id: prevSearchHistory[prevSearchHistory.length - 1].id + 1, searchTerm: value },
    ]);

    console.log(searchHistory);
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
            <div key={history.id}>
              <p>{history.searchTerm}</p>
              <p>Arrow</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Search;
