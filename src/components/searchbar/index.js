import React from 'react';
import {
  Search,
  SearchForm,
  FormField,
  Input,
  SubmitButton,
} from './SearchBar';

class SearchBar extends React.Component {
  state = { search: '' };

  onInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
          <label htmlFor='search'>Search video</label>
          <FormField>
            <Input
              onChange={this.onInputChange}
              value={this.state.search}
              type='text'
            ></Input>
            <SubmitButton onClick={this.handleSubmit}>Search</SubmitButton>
          </FormField>
        </SearchForm>
      </Search>
    );
  }
}

export default SearchBar;
