import { createSlice } from '@reduxjs/toolkit';

const soloGameInitialStete = {
  numbersFinded: [],
  time: 0,
  moves: 0,
};

const soloGameSlice = createSlice({
  name: 'soloGame',
  initialState: soloGameInitialStete,
  reducers: {
    findPairOfNumber(state, payload) {
      state.numbersFinded.push(payload.payload);
    },
  },
});

export const soloGameActions = soloGameSlice.actions;

export default soloGameSlice.reducer;
