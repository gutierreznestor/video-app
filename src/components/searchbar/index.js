import React, { Component } from 'react';
import styled from 'styled-components';
import { FlexCenter, BaseFlexCenter, radius5 } from '../../styles/global';

const Search = styled(FlexCenter)`
  padding: 10px;
  min-width: 50vw;
`;

const SearchForm = styled.form`
  ${BaseFlexCenter}
`;

const Input = styled.input`
  ${radius5};
  padding: 5px;
`;

const SubmitButton = styled.button`
  ${radius5};
  padding: 5px;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
          <label htmlFor='search'>Search video</label>
          <FormField>
            <Input onChange={this.onInputChange} type='text'></Input>
            <SubmitButton onClick={this.handleSubmit}>Search</SubmitButton>
          </FormField>
        </SearchForm>
      </Search>
    );
  }
}
