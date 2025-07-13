import React from 'react';
import ErrorToast from './components/ErrorToast';
import PokeList from './components/PokeList';
import PokeListSkeleton from './components/PokeListSkeleton';
import ResultHeader from './components/ResultHeader';
import Search from './components/Search';
import Button from './components/ui/Button';
import type { Pokemon } from './types/Pokemon';

class App extends React.Component {
  state = {
    pokemons: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
    showErrorToast: false,
  };

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading: isLoading });
  };

  searchPokemonListByName = (pokemons: Pokemon[]) => {
    this.setState({ pokemons: pokemons });
  };

  showError = (message: string) => {
    this.setState({
      errorMessage: message,
      showErrorToast: true,
    });
  };

  hideError = () => {
    this.setState({
      showErrorToast: false,
      errorMessage: '',
    });
  };

  throwError = () => {
    throw new Error('Test error');
  };

  render() {
    return (
      <div className="container mt-10">
        <Button
          className="fixed top-10 right-60 z-10"
          type="button"
          onClick={() => {
            this.setState({ isError: true }, () => {
              this.throwError();
            });
          }}
        >
          Trigger Error
        </Button>
        <h1 className="text-4xl font-bold text-center text-white my-10">
          Poke Search
        </h1>
        <Search
          searchPokemonListByName={this.searchPokemonListByName}
          setIsLoading={this.setIsLoading}
          onError={this.showError}
        />
        <ResultHeader isLoading={this.state.isLoading} />
        {this.state.isLoading ? (
          <PokeListSkeleton />
        ) : (
          <PokeList pokemons={this.state.pokemons} />
        )}

        <ErrorToast
          message={this.state.errorMessage}
          isVisible={this.state.showErrorToast}
          onClose={this.hideError}
        />
      </div>
    );
  }
}

export default App;
