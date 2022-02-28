import './SoloGameOver.scss';
import GameOverItem from '../GameOverItem/GameOverItem';
import { useSelector } from 'react-redux';

const SoloGameOver = () => {
  const state = useSelector((state) => state.soloGame);

  return (
    <div className="solo-game-over">
      <GameOverItem
        title="Time Elapsed"
        value={`${state.time.minutes}:${state.time.seconds}`}
      />
      <GameOverItem title="Moves Taken" value={`${state.moves} Moves`} />
    </div>
  );
};

export default SoloGameOver;
