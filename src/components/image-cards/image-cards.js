import React from 'react';
import RenderCards from './render-cards';

const ImageCard = props => {
  if(!props.videoList){
    return <div />
  }
  return (
    <div className="sidebar">
      <h5><b>Current Search Term:</b></h5>
      <div className='cards'>
      {RenderCards(props)}
      </div>
    </div>
  );
};

export default ImageCard;
