import React, { Component } from 'react';
import styled from 'styled-components';
import { FlexCenter, config } from '../../styles/global';
import SearchBar from '../searchbar';

const StyledApp = styled(FlexCenter)`
  min-height: 100vh;
  font-size: ${config.fontsize};
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
