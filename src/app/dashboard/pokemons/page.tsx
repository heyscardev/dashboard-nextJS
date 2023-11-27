import type { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonGrid from "../../../pokemons/components/PokemonGrid";

export const revalidate = 5;
const getPokemons = async (
  offset = 0,
  limit = 20
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await res.json();
  const formatedData: SimplePokemon[] = data.results.map(({ name, url }) => ({
    id: url.split("/").at(-2)!,
    name,
  }));
  return formatedData;
};

const Pokemonspage = async () => {
  const pokemons = await getPokemons(
    Math.floor(Math.random() * (20 - 1 + 1) + 1),
    200
  );

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
