

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form
        className="search-form d-flex align-items-center"
      >
        <input
          type="text"
          placeholder="Search"
          title="recherche"
        />
        <button type="search" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
