import React from 'react';

const RenderYouTubeCards = props => {
  console.log('props=', props);
  return (props.videoList.items.map(video => <div>
    <a id='card'>
      <img className="image" src={video.snippet.thumbnails.medium.url}/>
      <div className='title-card'>
        <b>{video.snippet.title}</b>
      </div>
      <div>
        <span className='date'>{video.snippet.publishedAt}</span>
      </div>
      <div className='card-description'>
        <p>
          <b>Description:
          </b>{video.snippet.description}</p>
      </div>
    </a>
  </div>));
}

export default RenderYouTubeCards;
