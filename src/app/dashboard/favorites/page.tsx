import FavoritePokemons from "@/pokemons/components/FavoritePokemons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemones Favoritos",
  description: "pagoina de los pokemones favoritos del usuario",
};

const FavoritesPage = () => {
  return (
    <div className=" flex h-full w-full flex-col ">
      <h1 className="text-5xl my-5 mx-4">Pokemones favoritos</h1>
      <FavoritePokemons />
    </div>
  );
};

export default FavoritesPage;
