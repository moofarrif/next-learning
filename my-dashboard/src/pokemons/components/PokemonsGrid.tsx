import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCards } from "./PokemonCards";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCards key={pokemon.id} pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};
