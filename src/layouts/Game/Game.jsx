import HeaderGame from '../../components/HeaderGame/HeaderGame';
import Solo from '../../components/Solo/Solo';
import './Game.scss';

const Game = () => {
  return (
    <main className="game">
      <HeaderGame />
      <Solo />
    </main>
  );
};

export default Game;
