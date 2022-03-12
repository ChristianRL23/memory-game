import { createSlice } from '@reduxjs/toolkit';

const multiplayerGameInitialState = [
  { player: 1, score: 0, currentTurn: true },
  { player: 2, score: 0, currentTurn: false },
  { player: 3, score: 0, currentTurn: false },
  { player: 4, score: 0, currentTurn: false },
];

const multiplayerGameSlice = createSlice({
  name: 'multiplayerGame',
  initialState: multiplayerGameInitialState,
  /* reducers: {}, */
});

export const multiplayerGameActions = multiplayerGameSlice.actions;

export default multiplayerGameSlice.reducer;
