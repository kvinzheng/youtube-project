import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ status, id, title, channelTitle, description, history }) => {
  // if the user has selected a video, I render the video player
  // if the the user has not selected a video, display message
  if (status === 'FULFILLED') {
    return (
      <div>
        <div className="video-player">
          <div>
            <iframe title={title} className="player" src={`https://www.youtube.com/embed/${id}`} />
          </div>
          <div className="video-description">
            <h3 className="video-title">{title}</h3>
            <h4>{`Channel: ${channelTitle}`}</h4>
            <p>{description}</p>
          </div>
        </div>
        <button className="back-to-home" onClick={() => history.push('/')}>
          Back To Youtube Home Page
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="back-to-home-container"> Please go back to home page and select a video</div>
        <button className="back-to-home" onClick={() => history.push('/')}>
          Back To Youtube Home Page
        </button>
      </div>
    );
  }
};

VideoPlayer.propTypes = {
  status: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default VideoPlayer;
