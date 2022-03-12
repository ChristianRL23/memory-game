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
  reducers: {
    nextPlayer(state) {
      const currentPlayerIndex = state.findIndex(
        (player) => player.currentTurn
      );
      const isAnotherPlayer =
        state[currentPlayerIndex + 1] === undefined ? false : true;
      if (isAnotherPlayer) {
        state[currentPlayerIndex].currentTurn = false;
        state[currentPlayerIndex + 1].currentTurn = true;
      } else {
        state[currentPlayerIndex].currentTurn = false;
        state[0].currentTurn = true;
      }
    },
  },
});

export const multiplayerGameActions = multiplayerGameSlice.actions;

export default multiplayerGameSlice.reducer;
