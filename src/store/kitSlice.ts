import { createSlice } from "@reduxjs/toolkit";

import samples from "../samples";

const kitSlice = createSlice({
  name: "kit",
  initialState: {
    model: samples.tr909.model,
    assets: samples.tr909.assets,
  },
  reducers: {
    set: (state, action: { type: string; payload: { model: string; assets: any } }) => {
      state.model = action.payload.model;
      state.assets = action.payload.assets;
    },
    reset: state => {
      state = kitSlice.getInitialState();
    },
  },
});

export default kitSlice;
