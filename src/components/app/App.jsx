import styled from 'styled-components';
import { FlexCenter, config } from '../../styles/global';

export const StyledApp = styled(FlexCenter)`
  min-height: 100vh;
  font-size: ${config.fontsize};
  padding: 10px;
`;

export const Videos = styled.div`
  display: flex;
  flex-direction: row;
`;
