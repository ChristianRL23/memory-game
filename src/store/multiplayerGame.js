import { createSlice } from '@reduxjs/toolkit';

const multiplayerGameInitialState = {
  numbersFinded: [],
  players: [
    { player: 1, score: 0, currentTurn: true },
    { player: 2, score: 0, currentTurn: false },
    { player: 3, score: 0, currentTurn: false },
    { player: 4, score: 0, currentTurn: false },
  ],
};

const multiplayerGameSlice = createSlice({
  name: 'multiplayerGame',
  initialState: multiplayerGameInitialState,
  reducers: {
    nextPlayer(state, payload) {
      const numberOfPlayers = payload.payload;
      const currentPlayerIndex = state.players.findIndex(
        (player) => player.currentTurn
      );
      const isNotAnotherPlayer =
        state.players[currentPlayerIndex].player === numberOfPlayers;

      if (isNotAnotherPlayer) {
        state.players[currentPlayerIndex].currentTurn = false;
        state.players[0].currentTurn = true;
      } else {
        state.players[currentPlayerIndex].currentTurn = false;
        state.players[currentPlayerIndex + 1].currentTurn = true;
      }
    },
    givePoint(state) {
      const currentPlayerIndex = state.players.findIndex(
        (player) => player.currentTurn
      );
      state.players[currentPlayerIndex].score++;
    },
    cleanResults(state) {
      state.players.forEach((player) => {
        player.score = 0;
        player.currentTurn = false;
      });
      state.players[0].currentTurn = true;
      state.numbersFinded = [];
    },
    findPairOfNumber(state, payload) {
      state.numbersFinded.push(payload.payload);
    },
  },
});

export const multiplayerGameActions = multiplayerGameSlice.actions;

export default multiplayerGameSlice.reducer;
