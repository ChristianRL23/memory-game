import HeaderGame from '../../components/HeaderGame/HeaderGame';
import Solo from '../../components/Solo/Solo';
import './Game.scss';

const Game = ({
  displayGameOverModal,
  openRestartGameModal,
  openSetupNewGameModal,
  render,
}) => {
  return (
    <main className="game">
      <HeaderGame
        openSetupNewGameModal={openSetupNewGameModal}
        openRestartGameModal={openRestartGameModal}
      />
      <Solo render={render} displayGameOverModal={displayGameOverModal} />
    </main>
  );
};

export default Game;
