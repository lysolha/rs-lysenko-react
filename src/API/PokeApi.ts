import type { Pokemon } from '../types/Pokemon';

const fetchAllPokemons = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch all pokemons', { cause: error });
  }
};

export default fetchAllPokemons;

const getPokemonByURL = async (url: string) => {
  try {
    const response = await fetch(url);
    const pokemon = {
      name: '',
      img: '',
      color: '',
    };

    const data = await response.json();
    pokemon.name = data.name;
    pokemon.img = data.sprites.front_default;

    const color = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
    );
    const colorData = await color.json();
    pokemon.color = colorData.color.name;
    return pokemon;
  } catch (error) {
    throw new Error('Failed to fetch pokemon by url', { cause: error });
  }
};

export const fetchSearchByName = async ({
  search = '',
}: {
  search?: string;
}) => {
  try {
    const response = await fetchAllPokemons();
    const searchedPokemons = response.filter((pokemon: Pokemon) => {
      if (pokemon.name.includes(search)) {
        return pokemon;
      }
    });

    const pokemonData = await Promise.all(
      searchedPokemons.map((pokemon: Pokemon) => getPokemonByURL(pokemon.url))
    );
    return pokemonData;
  } catch (error) {
    throw new Error('Failed to fetch search by name', { cause: error });
  }
};
