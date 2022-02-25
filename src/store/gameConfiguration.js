import { createSlice } from '@reduxjs/toolkit';

const gameConfigurationInitalState = {
  theme: 'Numbers',
  players: 1,
  grid: 4,
};

const gameConfigurationSlice = createSlice({
  name: 'gameConfiguration',
  initialState: gameConfigurationInitalState,
  reducers: {},
});

export const gameConfigurationActions = gameConfigurationSlice.actions;

export default gameConfigurationSlice.reducer;
