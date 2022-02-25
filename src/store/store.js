import { configureStore } from '@reduxjs/toolkit';
import gameConfigurationReducer from './gameConfiguration';

const store = configureStore({
  reducer: { gameConfiguration: gameConfigurationReducer },
});

export default store;
