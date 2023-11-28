import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isInitialized: boolean;
}
const initialState: CounterState = {
  count: 5,
  isInitialized: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounter: (state, action: PayloadAction<number>) => {
      if (state.isInitialized) return;
      if (typeof action.payload !== "number")
        new Error("counter must be number");
      if (action.payload <= 0) action.payload = 0;
      state.isInitialized = true;
      state.count = action.payload;
    },
    addOne: (state) => {
      state.count += 1;
    },
    substractOne: (state) => {
      if (state.count <= 0) return;
      state.count -= 1;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      if (typeof action.payload !== "number")
        new Error("counter must be number");
      if (action.payload <= 0) action.payload = 0;

      state.count = action.payload;
    },
  },
});

export const { initCounter, setCounter, addOne, substractOne } =
  counterSlice.actions;

export default counterSlice.reducer;
