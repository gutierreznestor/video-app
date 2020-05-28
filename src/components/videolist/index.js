import React from 'react';
import VideoItem from '../videoitem';

const VideoList = ({ videos = [], selectVideo }) => {
  const onSelectVideo = (video) => {
    selectVideo(video);
  };
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        selectVideo={onSelectVideo}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
