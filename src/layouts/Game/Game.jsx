import { useSelector } from 'react-redux';
import HeaderGame from '../../components/HeaderGame/HeaderGame';
import Multiplayer from '../../components/Multiplayer/Multiplayer';
import Solo from '../../components/Solo/Solo';
import './Game.scss';

const Game = ({
  displayGameOverModal,
  openRestartGameModal,
  openSetupNewGameModal,
  openMenuModal,
  render,
}) => {
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );

  return (
    <main className="game">
      <HeaderGame
        openMenuModal={openMenuModal}
        openSetupNewGameModal={openSetupNewGameModal}
        openRestartGameModal={openRestartGameModal}
      />
      {gameConfigurationState.players === 1 ? (
        <Solo render={render} displayGameOverModal={displayGameOverModal} />
      ) : (
        <Multiplayer
          render={render}
          displayGameOverModal={displayGameOverModal}
        />
      )}
    </main>
  );
};

export default Game;
