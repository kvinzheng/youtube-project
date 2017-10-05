import React from 'react';
import RenderYouTubeCards from './video-cards';

const SideBar = props => {
  if(!props.videoList){
    return <div />
  }
  return (
    <div className="sidebar">
      <h5><b>Current Search Term:</b></h5>
      <div className='cards'>
      {RenderYouTubeCards(props)}
      </div>
    </div>
  );
};

export default SideBar;
