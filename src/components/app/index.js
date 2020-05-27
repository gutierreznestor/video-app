import React, { Component } from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../styles/global';
import SearchBar from '../searchbar';

const StyledApp = styled(FlexCenter)`
  min-height: 100vh;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <SearchBar />
      </StyledApp>
    );
  }
}
