import styled from 'styled-components';
import { border, radius5, FlexCenter } from '../../styles/global';

export const Container = styled(FlexCenter)`
  ${radius5}
  padding: 15px 10px;
  margin: 5px;
  ${border}
`;

export const Title = styled.h3`
  align-items: left;
`;
