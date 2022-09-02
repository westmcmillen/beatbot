import { createSlice } from "@reduxjs/toolkit";

const runSlice = createSlice({
  name: "run",
  initialState: {
    play: false,
  },
  reducers: {
    set: (state, action) => {
      state.play = action.payload;
    },
    toggle: state => {
      state.play = !state.play;
    },
    reset: state => {
      state = runSlice.getInitialState();
    },
  },
});

export default runSlice;
