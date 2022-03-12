import { useSelector } from 'react-redux';
import HeaderGame from '../../components/HeaderGame/HeaderGame';
import Multiplayer from '../../components/Multiplayer/Multiplayer';
import Solo from '../../components/Solo/Solo';
import './Game.scss';

const Game = ({
  displayGameOverModal,
  openRestartGameModal,
  openSetupNewGameModal,
  render,
}) => {
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );
  console.log(gameConfigurationState.players);

  return (
    <main className="game">
      <HeaderGame
        openSetupNewGameModal={openSetupNewGameModal}
        openRestartGameModal={openRestartGameModal}
      />
      {gameConfigurationState.players === 1 ? (
        <Solo render={render} displayGameOverModal={displayGameOverModal} />
      ) : (
        <Multiplayer render={render} />
      )}
    </main>
  );
};

export default Game;
