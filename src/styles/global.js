import styled, { css } from 'styled-components';

export const BaseFlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexCenter = styled.div`
  ${BaseFlexCenter}
`;
