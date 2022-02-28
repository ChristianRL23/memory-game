import { createSlice } from '@reduxjs/toolkit';

const soloGameInitialState = {
  numbersFinded: [],
  time: { minutes: 0, seconds: 0 },
  moves: 0,
};

const soloGameSlice = createSlice({
  name: 'soloGame',
  initialState: soloGameInitialState,
  reducers: {
    findPairOfNumber(state, payload) {
      state.numbersFinded.push(payload.payload);
    },
    saveGameResults(state, payload) {
      state.moves = payload.payload.moves;
      state.time.minutes = payload.payload.time.minutes;
      state.time.seconds = payload.payload.time.seconds;
    },
    cleanResults(state) {
      state.numbersFinded = [];
      state.time = { minutes: 0, seconds: 0 };
      state.moves = 0;
    },
  },
});

export const soloGameActions = soloGameSlice.actions;

export default soloGameSlice.reducer;
