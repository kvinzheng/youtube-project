import React from 'react';
import RenderCards from './render-cards';
import PropTypes from 'prop-types';
import YoutubeIcon from '../../assets/Youtube-icon.png';

const ImageCard = ({videoList, selectedVideo, history}) => {
  if (!videoList.length) {
    return (<div>
      <p className='direction-search'>Please enter the video you want to search !</p>
      <img className='youtube-icon' src={YoutubeIcon} alt='' />;
    </div>)
  }
  return (
    <div className="sidebar">
      <h5>
        <b>Current Search Term:</b>
      </h5>
      <div className='cards'>
        {RenderCards(videoList, selectedVideo,history)}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  videoList: PropTypes.array.isRequired,
  selectedVideo: PropTypes.func.isRequired
}
export default ImageCard;
