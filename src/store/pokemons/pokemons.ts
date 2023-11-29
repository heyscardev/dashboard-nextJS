import { SimplePokemon } from "@/pokemons";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
interface FavoritePokemons {
  [key: string]: SimplePokemon;
}
interface PokemonState {
  favorites: FavoritePokemons;
}

const initialState: PokemonState = { favorites: {} };

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons: (state, action: PayloadAction<FavoritePokemons>) => {
      state.favorites = action.payload;
    },
    togglePokemon: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = pokemon;
    },
  },
});

export const { setFavoritePokemons, togglePokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
