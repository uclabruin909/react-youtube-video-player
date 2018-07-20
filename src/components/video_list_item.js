import React from 'react';

const VideoListItem = (props) => {
  let video = props.video;

  return <li>Video Name: {video.snippet.title}</li>
};

export default VideoListItem;