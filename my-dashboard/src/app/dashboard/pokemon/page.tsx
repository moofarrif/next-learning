import { NextPage } from "next";
import { PokemonsGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Pokemon Page",
  description: "Static Pokemon page",
};

const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Error al obtener los pokemons");

  return pokemons;
};

const PokemonsPage: NextPage = async () => {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col items-center  ">
      <span className="text-4xl font-bold text-center text-gray-800 p-2">
        Listado de Pókemons <small>estático</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonsGrid pokemons={pokemons} />
      </div>
    </div>
  );
};

export default PokemonsPage;
