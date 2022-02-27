import './SoloGameOver.scss';
import GameOverItem from '../GameOverItem/GameOverItem';

const SoloGameOver = () => {
  return (
    <div className="solo-game-over">
      <GameOverItem title="Time Elapsed" value="1:53" />
      <GameOverItem title="Moves Taken" value="39 Moves" />
    </div>
  );
};

export default SoloGameOver;
