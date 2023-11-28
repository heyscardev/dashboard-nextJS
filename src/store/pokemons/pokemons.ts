import { SimplePokemon } from "@/pokemons";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
interface PokemonState {
  [key: string]: SimplePokemon;
}
const initialState: PokemonState = {
  // 1: { id: "1", name: "bulbasor" }
};

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    togglePokemon: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    },
  },
});

export const { togglePokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
