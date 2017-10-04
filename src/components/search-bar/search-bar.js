import React from 'react';

const SearchBar = ({ loadAllData }) => (
  <div id="SearchBar">
    <form onSubmit={(event) => {
      event.preventDefault();
      loadAllData(event.value);
    }}
    >
      <input
        type="text"
        id="InputBar"
        placeholder="Search your youtube videos here"
      />
      <button className="search-button">Search</button>
    </form>
  </div>
);

export default SearchBar;
