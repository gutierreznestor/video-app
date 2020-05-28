import React from 'react';
import { Container, Title } from './VideoDetail';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Container>
      <div>
        <iframe
          title={video.snippet.title}
          width='560'
          height='315'
          src={videoSrc}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <Title>{video.snippet.title}</Title>
        <p>{video.snippet.description}</p>
      </div>
    </Container>
  );
};

export default VideoDetail;
