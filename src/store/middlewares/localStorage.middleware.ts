import type { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import type { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action<string>) => {
    next(action);
    console.log(action);
    if (action.type && action.type.startsWith("pokemons/")) {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(pokemons.favorites)
      );
      return;
    }
  };
};
