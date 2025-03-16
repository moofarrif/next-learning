"use client";

import { useAppSelector } from "@/store";

import { PokemonsGrid } from "./PokemonsGrid";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector((state) =>
    state.pokemons.favorites ? Object.values(state.pokemons.favorites) : []
  );

  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonsGrid pokemons={favoritePokemons} />
      )}
    </>
  );
};
