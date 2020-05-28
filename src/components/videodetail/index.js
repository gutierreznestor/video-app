import React from 'react';
import { Container, Title } from './VideoDetail';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  return (
    <Container>
      <Title>{video.snippet.title}</Title>
      <p>{video.snippet.description}</p>
    </Container>
  );
};

export default VideoDetail;
