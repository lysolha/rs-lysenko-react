import React from 'react';
import PokeList from './components/PokeList';
import PokeListSkeleton from './components/PokeListSkeleton';
import ResultHeader from './components/ResultHeader';
import Search from './components/Search';
import type { Pokemon } from './types/Pokemon';

class App extends React.Component {
  state = {
    pokemons: [],
    isLoading: false,
  };

  componentDidMount() {}

  componentDidUpdate() {
    console.log('updated');
  }

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading: isLoading });
  };

  searchPokemonListByName = (pokemons: Pokemon[]) => {
    this.setState({ pokemons: pokemons });
    this.setIsLoading(false);
  };

  render() {
    return (
      <div className="container mt-10">
        <h1 className="text-4xl font-bold text-center text-white my-10">
          Poke Search
        </h1>
        <Search
          searchPokemonListByName={this.searchPokemonListByName}
          setIsLoading={this.setIsLoading}
        />
        <ResultHeader isLoading={this.state.isLoading} />
        {this.state.isLoading ? (
          <PokeListSkeleton />
        ) : (
          <PokeList pokemons={this.state.pokemons} />
        )}
      </div>
    );
  }
}

export default App;
