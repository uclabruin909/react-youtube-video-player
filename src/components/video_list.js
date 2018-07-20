import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {

  var onVideoSelect = props.onVideoSelect;

  var videoItems = props.videos.map((video) => {
    return <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;