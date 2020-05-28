import React from 'react';
import { Video, VideoDetail, Image } from './VideoItem';

const VideoItem = ({ video, selectVideo }) => {
  const { snippet } = video;

  const onSelectVideo = () => {
    selectVideo(video);
  };

  return (
    <Video onClick={onSelectVideo}>
      <Image src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <VideoDetail>{snippet.title}</VideoDetail>
    </Video>
  );
};

export default VideoItem;
