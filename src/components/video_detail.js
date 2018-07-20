import React from 'react';

const VideoDetail = (props) => {
  let video = props.video;

  let videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="col-md-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;