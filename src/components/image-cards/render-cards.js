import React from 'react';

const RenderCards = (videoList, selectedVideo) => {
  return (videoList.map(video => <div key={video.id.videoId}>
    <a id='card' onClick={() => selectedVideo(video)}>
      <img alt='' className="image" src={video.snippet.thumbnails.medium.url}/>
      <div className='title-card'>
        <b>{video.snippet.title}</b>
      </div>
      <div>
        <span className='date'>{video.snippet.publishedAt}</span>
      </div>
      <div className='card-description'>
        <p>
          <b>Description:
          </b>{video.snippet.description}
        </p>
      </div>
    </a>
  </div>));
}

export default RenderCards;
