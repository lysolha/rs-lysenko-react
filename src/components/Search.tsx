import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

class Search extends React.Component {
  state = {
    input: '',
  };

  componentDidMount() {
    this.setState({ input: localStorage.getItem('searchValue') || '' });
  }

  componentDidUpdate() {
    localStorage.setItem('searchValue', this.state.input);
  }

  displaySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  search = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('searching:', this.state.input);
  };

  reset = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <form className="flex flex-row gap-2 w-full">
        <Input
          id="search"
          text={this.state.input}
          changeInput={this.displaySearch}
          placeholder="Enter your text here"
        />
        <Button type="submit" onClick={this.search}>
          <span>Search</span>
        </Button>
        <Button type="reset" onClick={this.reset}>
          <span>Reset</span>
        </Button>
      </form>
    );
  }
}

export default Search;
