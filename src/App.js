import { useState } from 'react';
import './App.scss';
import GameOver from './components/GameOver/GameOver';
import SoloGameOver from './components/SoloGameOver/SoloGameOver';
import Game from './layouts/Game/Game';
import StartGame from './layouts/StartGame/StartGame';

function App() {
  const [gameOverDisplayed, setGameOverDisplayed] = useState(false);
  const displayGameOverModal = () => {
    setGameOverDisplayed(true);
  };

  return (
    <div className="App">
      {/* <StartGame /> */}
      <Game displayGameOverModal={displayGameOverModal} />
      {gameOverDisplayed && (
        <GameOver
          message="You did it!"
          description="Game over! Here's how you got on..."
        >
          <SoloGameOver />
        </GameOver>
      )}
    </div>
  );
}

export default App;
