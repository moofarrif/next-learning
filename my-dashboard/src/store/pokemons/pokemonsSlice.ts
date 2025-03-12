import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SimplePokemon } from "@/pokemons";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": {
    id: "1",
    name: "bulbasaur",
  },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id } = action.payload;

      if (!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = action.payload;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
