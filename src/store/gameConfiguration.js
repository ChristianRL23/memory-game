import { createSlice } from '@reduxjs/toolkit';

const gameConfigurationInitalState = {
  theme: 'Numbers',
  players: 1,
  grid: 4,
};

const gameConfigurationSlice = createSlice({
  name: 'gameConfiguration',
  initialState: gameConfigurationInitalState,
  reducers: {
    selectTheme(state, payload) {
      state.theme = payload.payload;
    },
    selectPlayers(state, payload) {
      state.players = Number(payload.payload);
    },
    selectGrid(state, payload) {
      let grid;
      if (payload.payload === '4x4') {
        grid = 4;
      } else {
        grid = 6;
      }
      state.grid = grid;
    },
    restoreConfiguration(state) {
      state.theme = 'Numbers';
      state.players = 1;
      state.grid = 4;
    },
  },
});

export const gameConfigurationActions = gameConfigurationSlice.actions;

export default gameConfigurationSlice.reducer;
