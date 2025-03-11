import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 10,
  isReady: false,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },

    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count--;
    },
    reset: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) state.count = 0;
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, reset, init } = CounterSlice.actions;

export default CounterSlice.reducer;
