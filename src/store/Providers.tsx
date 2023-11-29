"use client";

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const pokemons = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(pokemons));
  });
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
