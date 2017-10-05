import React from 'react';
import renderIf from 'render-if';

const SearchResults = ({ videos, status, id, title, channelTitle, description }) => {
  // if the Api call's status is 'FULFILLED', I render the div with data
  // if the Api call's status is 'PENDING', I render the div with loading
  if (status === 'FULFILLED') {
    return (
      <div className="videoPlayer">
        <div>
          <iframe className="player" src={`https://www.youtube.com/embed/${id}`}/>
        </div>
        <div className="videoDescription">
          <h3 className="videoTitle">{title}</h3>
          <h5>{`Channel: ${channelTitle}`}</h5>
          <p>{description}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
};

export default SearchResults;
