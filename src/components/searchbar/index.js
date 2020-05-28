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

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.search);
  };

  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.onSubmit}>
          <label htmlFor='search'>Search video</label>
          <FormField>
            <Input
              onChange={this.onInputChange}
              value={this.state.search}
              type='text'
            ></Input>
            <SubmitButton onClick={this.onSubmit}>Search</SubmitButton>
          </FormField>
        </SearchForm>
      </Search>
    );
  }
}

export default SearchBar;
