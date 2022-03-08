import React from 'react';
import { useStopwatch } from 'react-timer-hook';

const TimerContext = React.createContext({
  time: {},
  pauseTimer: () => {},
  resetTimer: () => {},
  startTimer: () => {},
});

export const TimerContextProvider = ({ children }) => {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const startTimer = () => start();
  const pauseTimer = () => pause();
  const resetTimer = () => reset();

  return (
    <TimerContext.Provider
      value={{
        time: { seconds, minutes },
        startTimer,
        pauseTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
