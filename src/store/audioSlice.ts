import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
  name: "audio",
  initialState: {
    mute: false,
  },
  reducers: {
    set: (state, action) => {
      state.mute = action.payload;
    },
    toggle: state => {
      state.mute = !state.mute;
    },
    reset: state => {
      state = audioSlice.getInitialState();
    },
  },
});

export default audioSlice;
