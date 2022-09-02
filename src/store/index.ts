import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import sampleSlice from "./sampleSlice";
import kitSlice from "./kitSlice";
import sequencerSlice from "./sequencerSlice";
import runSlice from "./runSlice";
import audioSlice from "./audioSlice";
import swingSlice from "./swingSlice";
import tempoSlice from "./tempoSlice";
import metronomeSlice from "./metronomeSlice";
import settingsSlice from "./settingsSlice";

const rootReducer = combineReducers({
  kit: kitSlice.reducer,
  sample: sampleSlice.reducer,
  sequencer: sequencerSlice.reducer,
  run: runSlice.reducer,
  audio: audioSlice.reducer,
  swing: swingSlice.reducer,
  tempo: tempoSlice.reducer,
  metronome: metronomeSlice.reducer,
  settings: settingsSlice.reducer,
});

// const persistConfig = {
//   key: "persistedReducer",
//   storage,
//   blacklist: ["sample"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [logger],
// });

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
