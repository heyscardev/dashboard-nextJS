"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid, SimplePokemon } from "..";
import { useEffect, useState } from "react";
import { IoHeart, IoHeartCircle, IoHeartCircleOutline } from "react-icons/io5";

interface PokemonsObj {
  [id: string]: SimplePokemon;
}

const FavoritePokemons = () => {
  const favorites = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  return favorites.length ? (
    <PokemonGrid pokemons={favorites} />
  ) : (
    <NoFavorites />
  );
};

export const NoFavorites = () => {
  return (
    <div className="h-full w-full flex justify-center items-center text-4xl font-bold shadow-inner text-slate-300 ">
      <IoHeartCircleOutline className="mr-2 text-6xl" />
      <h5 className=" ">No hay Favoritos</h5>
    </div>
  );
};
export default FavoritePokemons;
