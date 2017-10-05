import React from 'react';
import RenderCards from './render-cards';
import PropTypes from 'prop-types';

const ImageCard = ({videoList, selectedVideo}) => {
  if (!videoList.length) {
    return <div/>
  }
  return (
    <div className="sidebar">
      <h5>
        <b>Current Search Term:</b>
      </h5>
      <div className='cards'>
        {RenderCards(videoList, selectedVideo)}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  videoList: PropTypes.array.isRequired,
  selectedVideo: PropTypes.func.isRequired
}
export default ImageCard;
