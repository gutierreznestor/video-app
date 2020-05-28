import React, { Component } from 'react';
import SearchBar from '../searchbar';
import { StyledApp } from './App';
import youtube from '../../apis/youtube';
import VideoList from '../videolist';

export default class App extends Component {
  state = { videos: [] };

  onFormSubmit = async (search) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: search,
      },
    });
    this.setState({ videos: data.items });
  };

  render() {
    return (
      <StyledApp>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList videos={this.state.videos} />
      </StyledApp>
    );
  }
}
