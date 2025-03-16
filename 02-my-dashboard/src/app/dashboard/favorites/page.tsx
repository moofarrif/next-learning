import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export const metadata = {
  title: "Favoritos",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col ">
      <span className="text-4xl font-bold text-center text-gray-800 p-2 ">
        Favorites Pokémons <small className="text-blue-400">Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}
