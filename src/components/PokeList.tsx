import React from 'react';
import type { Pokemon } from '../types/Pokemon';
import PokeCard from './PokeCard';

type PokeListProps = {
  pokemons: Pokemon[];
};

class PokeList extends React.Component<PokeListProps> {
  render() {
    return (
      <>
        <div className="grid grid-cols-4 gap-6 w-full my-4">
          {this.props.pokemons.length > 0 ? (
            this.props.pokemons.map((pokemon: Pokemon) => (
              <PokeCard key={pokemon.name} pokemon={pokemon} />
            ))
          ) : (
            <div className="text-white text-center">No results found</div>
          )}
        </div>
      </>
    );
  }
}

export default PokeList;
