import React from 'react';
import VideoItem from '../videoitem';
import { Container } from '../videodetail/VideoDetail';

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
  return <Container>{renderedList}</Container>;
};

export default VideoList;
