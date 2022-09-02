import { createSlice } from "@reduxjs/toolkit";

const sequencerSlice = createSlice({
  name: "sequencer",
  initialState: {
    sequences: new Array(16).fill(new Array(16).fill(false)),
  },
  reducers: {
    set: (state, action: { type: string; payload: { row: number; column: number; value: boolean } }) => {
      state.sequences[action.payload.row][action.payload.column] = action.payload.value;
    },
    reset: state => {
      state.sequences = new Array(16).fill(new Array(16).fill(false));
    },
  },
});

export default sequencerSlice;
