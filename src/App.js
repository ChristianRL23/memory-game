import './App.scss';
import GameOver from './components/GameOver/GameOver';
import SoloGameOver from './components/SoloGameOver/SoloGameOver';
import Game from './layouts/Game/Game';
import StartGame from './layouts/StartGame/StartGame';

function App() {
  return (
    <div className="App">
      {/* <StartGame /> */}
      <Game />
      <GameOver
        message="You did it!"
        description="Game over! Here's how you got on..."
      >
        <SoloGameOver />
      </GameOver>
    </div>
  );
}

export default App;
