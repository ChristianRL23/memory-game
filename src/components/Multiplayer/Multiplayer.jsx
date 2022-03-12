import { useDispatch, useSelector } from 'react-redux';
import { multiplayerGameActions } from '../../store/multiplayerGame';
import MultiplayerFooterItem from '../MultiplayerFooterItem/MultiplayerFooterItem';
import './Multiplayer.scss';

const Multiplayer = () => {
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );
  const multiplayerGameState = useSelector((state) => state.multiplayerGame);
  const players = multiplayerGameState.slice(0, gameConfigurationState.players);
  const dispatch = useDispatch();

  const nextPlayer = () => {
    dispatch(multiplayerGameActions.nextPlayer());
  };

  return (
    <>
      <button onClick={nextPlayer}>Next Player</button>
      <footer className="multiplayer__footer">
        {players.map((player) => (
          <MultiplayerFooterItem
            key={player.player}
            description={`Player ${player.player}`}
            value={player.score}
            currentTurn={player.currentTurn}
          />
        ))}
      </footer>
    </>
  );
};

export default Multiplayer;
