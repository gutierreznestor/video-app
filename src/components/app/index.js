import React, { Component } from 'react';
import SearchBar from '../searchbar';
import { StyledApp } from './App';

export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <SearchBar />
      </StyledApp>
    );
  }
}
