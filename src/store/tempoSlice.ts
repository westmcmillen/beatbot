import { createSlice } from "@reduxjs/toolkit";

const tempoSlice = createSlice({
  name: "tempo",
  initialState: {
    bpm: 120,
    input: "120",
  },
  reducers: {
    set: (state, action) => {
      state.bpm = +action.payload;
      state.input = action.payload;
    },
    input: (state, action) => {
      state.input = action.payload;
    },
    increment: (state, action) => {
      state.bpm = state.bpm + 1;
    },
    decrememt: (state, action) => {
      state.bpm = state.bpm - 1;
    },
    reset: state => {
      state = tempoSlice.getInitialState();
    },
  },
});

export default tempoSlice;
