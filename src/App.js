import './App.scss';
import GameOver from './components/GameOver/GameOver';
import Game from './layouts/Game/Game';
import StartGame from './layouts/StartGame/StartGame';

function App() {
  return (
    <div className="App">
      {/* <StartGame /> */}
      <Game />
      <GameOver />
    </div>
  );
}

export default App;
