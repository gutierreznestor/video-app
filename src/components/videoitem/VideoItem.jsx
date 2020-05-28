import styled from 'styled-components';
import { border, radius5 } from '../../styles/global';

export const Video = styled.div`
  ${border}
  ${radius5}
  margin: 5px;
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  ${radius5}
  max-width: 200px;
`;

export const VideoDetail = styled.div`
  ${radius5}
  display: flex;
  flex-grow: 1;
  margin: 5px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
`;
