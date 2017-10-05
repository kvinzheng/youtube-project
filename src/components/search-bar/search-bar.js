import React from 'react';

const SearchBar = ({ loadAllData , setSearchTerm, searchTerm }) => {
  return (<div id="SearchBar">
    <form onSubmit={(event) => {
      event.preventDefault();
      loadAllData(searchTerm);
    }}
    >
      <input
        type="text"
        id="InputBar"
        placeholder="Search your youtube videos here"
        onChange={ event => setSearchTerm(event.target.value)}
      />
      <button className="search-button">Search</button>
    </form>
  </div>
);
}

export default SearchBar;