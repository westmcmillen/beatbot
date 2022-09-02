import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    menu: false,
  },
  reducers: {
    set: (state, action) => {
      state.menu = action.payload;
    },
    toggle: state => {
      state.menu = !state.menu;
    },
    reset: state => {
      state = settingsSlice.getInitialState();
    },
  },
});

export default settingsSlice;
