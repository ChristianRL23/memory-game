import { configureStore } from '@reduxjs/toolkit';
import gameConfigurationReducer from './gameConfiguration';
import soloGameReducer from './soloGame';

const store = configureStore({
  reducer: {
    gameConfiguration: gameConfigurationReducer,
    soloGame: soloGameReducer,
  },
});

export default store;
