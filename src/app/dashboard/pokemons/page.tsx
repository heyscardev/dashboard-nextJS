import type { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonGrid from "../../../pokemons/components/PokemonGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "200 pokemones",
  description: "pagina para 200 pokemones",
};
export const revalidate = 100000;
const getPokemons = async (
  offset = 0,
  limit = 200
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    { cache: "force-cache", next: { revalidate: 60 * 60 * 30 } }
  );
  const data: PokemonsResponse = await res.json();
  const formatedData: SimplePokemon[] = data.results.map(({ name, url }) => ({
    id: url.split("/").at(-2)!,
    name,
  }));
  return formatedData;
};

const Pokemonspage = async () => {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col items-center p-2">
      <span className="text-xl">
        Listado de pokemones <small>estaticos</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
};

export default Pokemonspage;
