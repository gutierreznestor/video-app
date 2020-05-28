import React, { Component } from 'react';
import SearchBar from '../searchbar';
import { StyledApp, Videos } from './App';
import youtube from '../../apis/youtube';
import VideoList from '../videolist';
import VideoDetail from '../videodetail';

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit('react js');
  }

  onFormSubmit = async (search) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: search,
      },
    });
    this.setState({ videos: data.items, selectedVideo: data.items[0] });
  };

  onSelectVideo = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <StyledApp>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <Videos>
          <VideoDetail video={selectedVideo} />
          <VideoList selectVideo={this.onSelectVideo} videos={videos} />
        </Videos>
      </StyledApp>
    );
  }
}
