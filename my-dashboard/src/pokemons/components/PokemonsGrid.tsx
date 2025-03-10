
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCards } from "./PokemonCards";


interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCards key={pokemon.id} pokemon={pokemon} />
        </div>
      ))}
    </>
  );
};
