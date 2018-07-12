import React from 'react';

const VideoList = (props) => {

  var videoItems = props.videos.map((video) => {
    return <li>Video Name: {video.snippet.title}</li>;
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
};

export default VideoList;