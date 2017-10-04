import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchForImages }) => (
  <div id="SearchBar">
    <form onSubmit={(event) => {
      event.preventDefault();
      // searchForImages(event.target.InputBar.value);
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
