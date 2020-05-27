import styled, { css } from 'styled-components';

export const config = {
  fontsize: '16px',
};

export const BaseFlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexCenter = styled.div`
  ${BaseFlexCenter}
`;

export const radius5 = css`
  border-radius: 5px;
`;
