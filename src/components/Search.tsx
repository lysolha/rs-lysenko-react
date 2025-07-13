import React from 'react';
import { fetchSearchByName } from '../API/PokeApi';
import type { Pokemon } from '../types/Pokemon';
import Button from './ui/Button';
import Input from './ui/Input';

type SearchProps = {
  searchPokemonListByName: (pokemons: Pokemon[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  onError: (message: string) => void;
};

class Search extends React.Component<SearchProps> {
  state = {
    input: '',
  };

  componentDidMount() {
    this.setState({ input: localStorage.getItem('searchValue') || '' }, () => {
      this.search();
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      'searchValue',
      this.state.input.trim().replace(/\s+/g, ' ')
    );
  }

  displaySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  search = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    this.props.setIsLoading(true);

    try {
      const pokemons = await fetchSearchByName({
        search: this.state.input.trim().replace(/\s+/g, ' '),
      });
      setTimeout(() => {
        this.props.searchPokemonListByName(pokemons);
      }, 500);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred while searching for Pokémon.';
      this.props.onError(errorMessage);
    } finally {
      this.props.setIsLoading(false);
    }
  };

  reset = () => {
    this.setState({ input: '' }, () => {
      this.search();
    });
  };

  render() {
    return (
      <form className="flex flex-row gap-2 w-full">
        <Input
          id="search"
          text={this.state.input}
          changeInput={this.displaySearch}
          placeholder="Enter pokemon name here"
        />
        <Button
          type="submit"
          onClick={this.search}
          disabled={this.state.input.trim().replace(/\s+/g, ' ').length === 0}
        >
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
