import { createSlice } from "@reduxjs/toolkit";

import metronome from "../samples/metronome";

const metronomeSlice = createSlice({
  name: "metronome",
  initialState: {
    audio: metronome.audio,
    mute: false,
  },
  reducers: {
    set: (state, action) => {
      state.mute = action.payload;
    },
    toggle: state => {
      state.mute = !state.mute;
    },
  },
});

export default metronomeSlice;
