import React from "react";
import { SimplePokemon } from "..";
import Image from "next/image";
import PokemonCard from "./PokemonCard";
interface Props {
  pokemons: SimplePokemon[];
}
export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-4  justify-start">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default PokemonGrid;
