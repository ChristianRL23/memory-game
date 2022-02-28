import { useState } from 'react';
import './App.scss';
import SoloGameOver from './components/SoloGameOver/SoloGameOver.jsx';
import GameOver from './components/GameOver/GameOver';
import Game from './layouts/Game/Game';
import StartGame from './layouts/StartGame/StartGame';
import { useDispatch } from 'react-redux';
import { soloGameActions } from './store/soloGame';

function App() {
  const dispatch = useDispatch();
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
  const setupNewGame = () => {
    setGameInitialized(false);
    dispatch(soloGameActions.cleanResults());
    setGameOverDisplayed(false);
    closeSetupNewGameModal();
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
          {gameOverDisplayed && (
            <GameOver
              buttonLeftTextContent="Restart"
              buttonRightTextContent="Setup New Game"
              buttonRightClickFn={setupNewGame}
              message="You did it!"
              description="Game over! Here's how you got on..."
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
              buttonLeftClickFn={setupNewGame}
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
