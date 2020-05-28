import React, { Component } from 'react';
import SearchBar from '../searchbar';
import { StyledApp } from './App';
import youtube from '../../apis/youtube';

export default class App extends Component {
  onFormSubmit = async (search) => {
    await youtube.get('/search', {
      params: {
        q: search,
      },
    });
  };

  render() {
    return (
      <StyledApp>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </StyledApp>
    );
  }
}
