import React, { Component } from 'react';
import SearchBar from '../searchbar';
import { StyledApp } from './App';
import youtube from '../../apis/youtube';

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
        <p>I have {this.state.videos.length} videos</p>
      </StyledApp>
    );
  }
}
