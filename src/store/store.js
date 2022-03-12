import { configureStore } from '@reduxjs/toolkit';
import gameConfigurationReducer from './gameConfiguration';
import soloGameReducer from './soloGame';
import multiplayerGameReducer from './multiplayerGame';

const store = configureStore({
  reducer: {
    gameConfiguration: gameConfigurationReducer,
    soloGame: soloGameReducer,
    multiplayerGame: multiplayerGameReducer,
  },
});

export default store;
