import HeaderGame from '../../components/HeaderGame/HeaderGame';
import Solo from '../../components/Solo/Solo';
import './Game.scss';

const Game = ({
  displayGameOverModal,
  openRestartGameModal,
  openSetupNewGameModal,
}) => {
  return (
    <main className="game">
      <HeaderGame
        openSetupNewGameModal={openSetupNewGameModal}
        openRestartGameModal={openRestartGameModal}
      />
      <Solo displayGameOverModal={displayGameOverModal} />
    </main>
  );
};

export default Game;
