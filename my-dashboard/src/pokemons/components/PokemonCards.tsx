import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";
interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCards = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className=" flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            alt={`image of ${name}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            priority={false}
            width={0}
            height={0}
            style={{ width: "64px", height: "auto" }}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex justify-center "
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 g-none">
                itsn favorite
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
