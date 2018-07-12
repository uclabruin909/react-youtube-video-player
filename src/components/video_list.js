import React from 'react';

const VideoList = (props) => {

  var videoItems = props.videos.map((video) => {
    console.log(video);
    return <li key={video.etag}>Video Name: {video.snippet.title}</li>;
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
};

export default VideoList;