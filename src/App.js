import { useState } from 'react';
import './App.scss';
import GameOver from './components/GameOver/GameOver';
import SoloGameOver from './components/SoloGameOver/SoloGameOver';
import Game from './layouts/Game/Game';
import StartGame from './layouts/StartGame/StartGame';

function App() {
  const [gameOverDisplayed, setGameOverDisplayed] = useState(false);
  const [restartGameDisplayed, setRestartGameDisplayed] = useState(false);
  const [setupNewGameDisplayed, setSetupNewGameDisplayed] = useState(false);
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
      {/* <StartGame /> */}
      <Game
        openRestartGameModal={openRestartGameModal}
        openSetupNewGameModal={openSetupNewGameModal}
        displayGameOverModal={displayGameOverModal}
      />
      {gameOverDisplayed && (
        <GameOver
          message="'You did it!'"
          description="Game over! Here's how you got on..."
          buttonLeftTextContent="Restart"
          buttonRightTextContent="Setup New Game"
        >
          <SoloGameOver />
        </GameOver>
      )}

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
    </div>
  );
}

export default App;
