import React, { Component } from 'react';
import SearchBar from '../searchbar';
import { StyledApp } from './App';
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
    return (
      <StyledApp>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          selectVideo={this.onSelectVideo}
          videos={this.state.videos}
        />
      </StyledApp>
    );
  }
}
