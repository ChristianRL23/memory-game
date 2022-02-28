import { useState } from 'react';
import './App.scss';
import GameOver from './components/GameOver/GameOver';
import Game from './layouts/Game/Game';
import StartGame from './layouts/StartGame/StartGame';

function App() {
  const [gameOverDisplayed, setGameOverDisplayed] = useState(false);
  const [restartGameDisplayed, setRestartGameDisplayed] = useState(false);
  const [setupNewGameDisplayed, setSetupNewGameDisplayed] = useState(false);
  const [gameInitialized, setGameInitialized] = useState(false);
  const displayGameOverModal = () => {
    setGameOverDisplayed(true);
  };
  const openRestartGameModal = () => {
    setRestartGameDisplayed(true);
  };
  const closeRestartGameModal = () => {
    setRestartGameDisplayed(false);
  };
  const openSetupNewGameModal = () => {
    setSetupNewGameDisplayed(true);
  };
  const closeSetupNewGameModal = () => {
    setSetupNewGameDisplayed(false);
  };

  return (
    <div className="App">
      {!gameInitialized ? (
        <StartGame setGameInitialized={setGameInitialized} />
      ) : (
        <>
          <Game
            openRestartGameModal={openRestartGameModal}
            openSetupNewGameModal={openSetupNewGameModal}
            displayGameOverModal={displayGameOverModal}
          />
          {restartGameDisplayed && (
            <GameOver
              buttonLeftTextContent="Restart"
              buttonRightTextContent="Cancel"
              message="Are you sure you want to restart the game?"
              description="Your progress will be lost"
              buttonRightClickFn={closeRestartGameModal}
            />
          )}
          {setupNewGameDisplayed && (
            <GameOver
              message="Are you sure you want to setup a new game?"
              description="Your progress will be lost"
              buttonLeftTextContent="Setup New Game"
              buttonRightTextContent="Cancel"
              buttonRightClickFn={closeSetupNewGameModal}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
