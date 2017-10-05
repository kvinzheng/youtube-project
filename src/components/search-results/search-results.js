import React from 'react';
import renderIf from 'render-if';

const SearchResults = ({ videos, status }) => {


  // if the Api call's status is 'FULFILLED', I render the div with data
  // if the Api call's status is 'PENDING', I render the div with loading
  if(status === 'FULFILLED'){
    return (<div>Hello there</div>)
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
};

export default SearchResults;
