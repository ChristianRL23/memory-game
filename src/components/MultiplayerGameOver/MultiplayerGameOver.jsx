import GameOverItem from '../GameOverItem/GameOverItem';
import './MultiplayerGameOver.scss';

const MultiplayerGameOver = ({ players }) => {
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
            winner={player.score === players[0].score}
            key={player.player}
            title={`Player ${player.player} ${
              player.score === players[0].score && '(Winner!)'
            }`}
            value={`${player.score} Pairs`}
          />
        );
      })}
    </div>
  );
};

export default MultiplayerGameOver;
