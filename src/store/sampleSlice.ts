import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    asset: { id: NaN, char: "", audio: new Audio(), type: "" },
  },
  reducers: {
    set: (state, action) => {
      state.asset = action.payload;
    },
  },
});

export default sampleSlice;
