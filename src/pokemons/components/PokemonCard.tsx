import React from "react";
import { SimplePokemon } from "..";
import Link from "next/link";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
interface Props {
  pokemon: SimplePokemon;
}
const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60 ">
      <div className="bg-white rounded overflow-hidden  shadow-lg flex flex-col h-full">
        <div className="text-center p-6 bg-gray-800 border-b flex items-center justify-end flex-col h-full">
          <Image
            className="drop-shadow-lg "
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Saber información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dasboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-red-600">
              <IoHeartOutline c />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
