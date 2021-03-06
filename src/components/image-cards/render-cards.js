import React from 'react';

const RenderCards = ({ videoList, selectedVideo, history }) => {
  return (videoList.map((video, index) => (<div key={index}>
    <a
      id="card"
      className={`card${index}`}
      onClick={() => {
        selectedVideo(video);
        history.push('/video');
      }}
    >
      <img alt="" className="image" src={video.snippet.thumbnails.medium.url} />
      <div className="title-card">
        <b>{video.snippet.title}</b>
      </div>
      <div className="date-title">
        <span className="date">{video.snippet.publishedAt}</span>
      </div>
      <div className="card-description">
        <p>
          <b className="description-title">Description:
          </b>{video.snippet.description}
        </p>
      </div>
    </a>
  </div>)));
};

export default RenderCards;
