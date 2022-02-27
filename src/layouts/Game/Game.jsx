import HeaderGame from '../../components/HeaderGame/HeaderGame';
import Solo from '../../components/Solo/Solo';
import './Game.scss';

const Game = ({ displayGameOverModal }) => {
  return (
    <main className="game">
      <HeaderGame />
      <Solo displayGameOverModal={displayGameOverModal} />
    </main>
  );
};

export default Game;
