import React from 'react';
import type { Pokemon } from '../types/Pokemon';

interface PokeCardProps {
  pokemon: Pokemon;
}

class PokeCard extends React.Component<PokeCardProps> {
  render() {
    return (
      <div className="w-full border border-amber-400 rounded-md p-2 flex flex-col items-center justify-center min-h-[300px] min-w-[200px] text-white font-bold cursor-not-allowed capitalize text-lg  transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:rotate-z-2 saturate-50">
        <img
          src={this.props.pokemon.img}
          alt={this.props.pokemon.name}
          className="w-[150px] h-auto object-cover"
        />
        <div className="text-center">{this.props.pokemon.name}</div>
      </div>
    );
  }
}

export default PokeCard;
