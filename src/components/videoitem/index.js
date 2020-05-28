import React from 'react';
import { Video, VideoDetail, Image } from './VideoItem';

const VideoItem = ({ video, selectVideo }) => {
  const onSelectVideo = () => {
    selectVideo(video);
  };

  return (
    <Video onClick={onSelectVideo}>
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <VideoDetail>{video.snippet.title}</VideoDetail>
    </Video>
  );
};

export default VideoItem;
