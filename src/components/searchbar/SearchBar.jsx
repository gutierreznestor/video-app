import styled from 'styled-components';
import {
  FlexCenter,
  BaseFlexCenter,
  radius5,
  border,
} from '../../styles/global';

export const Search = styled(FlexCenter)`
  padding: 10px;
  min-width: 50vw;
  ${border}
  border-radius: 5px;
`;

export const SearchForm = styled.form`
  ${BaseFlexCenter}
`;

export const Input = styled.input`
  ${radius5};
  padding: 5px;
`;

export const SubmitButton = styled.button`
  ${radius5};
  padding: 5px;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;
