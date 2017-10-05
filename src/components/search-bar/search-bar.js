import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({loadAllData, setSearchTerm, searchTerm}) => {
  return (
    <div id="SearchBar">
      <form onSubmit={(event) => {
        event.preventDefault();
        loadAllData(searchTerm);
      }}>
        <input type="text" id="InputBar" placeholder="Search your youtube videos here" onChange={event => setSearchTerm(event.target.value)}/>
        <button className="search-button">Search</button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  loadAllData: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default SearchBar;
