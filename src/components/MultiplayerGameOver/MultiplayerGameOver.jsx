import { useSelector } from 'react-redux';
import GameOverItem from '../GameOverItem/GameOverItem';
import './MultiplayerGameOver.scss';

const MultiplayerGameOver = () => {
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );
  const multiplayerGameState = useSelector((state) => state.multiplayerGame);
  let players = multiplayerGameState.players.slice(
    0,
    gameConfigurationState.players
  );
  players = players.sort((a, b) => b.score - a.score);
  console.log(players);

  return (
    <div className="multiplayer-game-over">
      {players.map((player, index) => {
        if (index === 0) {
          return (
            <GameOverItem
              winner
              key={player.player}
              title={`Player ${player.player} (Winner!)`}
              value={`${player.score} Pairs`}
            />
          );
        }
        return (
          <GameOverItem
            key={player.player}
            title={`Player ${player.player}`}
            value={`${player.score} Pairs`}
          />
        );
      })}
    </div>
  );
};

export default MultiplayerGameOver;
