import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";
interface PokemonState {
  [key: string]: SimplePokemon;
}
const initialState: PokemonState = { 1: { id: "1", name: "bulbasor" } };

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
