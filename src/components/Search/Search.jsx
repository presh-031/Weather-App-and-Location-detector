const Search = ({ showSearchArea, setShowSearchArea }) => {
  return (
    <div
      onClick={() => {
        setShowSearchArea(false);
      }}
    >
      Search
    </div>
  );
};

export default Search;
