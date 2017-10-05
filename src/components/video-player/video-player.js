import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({status, id, title, channelTitle, description, history}) => {
  // if the Api call's status is 'FULFILLED', I render the div with data
  // if the Api call's status is 'PENDING', I render the div with loading
  if (status === 'FULFILLED') {
    return (
      <div>
      <div className="videoPlayer">
        <div>
          <iframe title={title} className="player" src={`https://www.youtube.com/embed/${id}`}/>
        </div>
        <div className="videoDescription">
          <h3 className="videoTitle">{title}</h3>
          <h5>{`Channel: ${channelTitle}`}</h5>
          <p>{description}</p>
        </div>
      </div>
      <button className='back-to-home' onClick={() => history.push('/')}>
        Back To Youtube Search Home Page
      </button>
    </div>
    )
  } else {
    return (
      <div> </div>
    )
  }
};

VideoPlayer.propTypes = {
  status: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default VideoPlayer;
