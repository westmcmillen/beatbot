import { createSlice } from "@reduxjs/toolkit";

const swingSlice = createSlice({
  name: "swing",
  initialState: {
    eighth: false,
  },
  reducers: {
    set: (state, action) => {
      state.eighth = action.payload;
    },
    reset: state => {
      state = swingSlice.getInitialState();
    },
  },
});

export default swingSlice;
