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
    nextPlayer(state, payload) {
      const numberOfPlayers = payload.payload;
      const currentPlayerIndex = state.findIndex(
        (player) => player.currentTurn
      );
      const isNotAnotherPlayer =
        state[currentPlayerIndex].player === numberOfPlayers;

      if (isNotAnotherPlayer) {
        state[currentPlayerIndex].currentTurn = false;
        state[0].currentTurn = true;
      } else {
        state[currentPlayerIndex].currentTurn = false;
        state[currentPlayerIndex + 1].currentTurn = true;
      }
    },

    givePoint(state) {
      const currentPlayerIndex = state.findIndex(
        (player) => player.currentTurn
      );
      state[currentPlayerIndex].score++;
    },

    cleanResults(state) {
      state.forEach((player) => {
        player.score = 0;
        player.currentTurn = false;
      });
      state[0].currentTurn = true;
    },
  },
});

export const multiplayerGameActions = multiplayerGameSlice.actions;

export default multiplayerGameSlice.reducer;
