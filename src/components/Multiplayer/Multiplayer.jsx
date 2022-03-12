import { useSelector } from 'react-redux';
import MultiplayerFooterItem from '../MultiplayerFooterItem/MultiplayerFooterItem';
import './Multiplayer.scss';

const Multiplayer = () => {
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );

  return (
    <>
      <footer className="multiplayer__footer">
        {[...Array(gameConfigurationState.players).keys()].map((number) => (
          <MultiplayerFooterItem
            description={`Player ${number + 1}`}
            value="0"
          />
        ))}
      </footer>
    </>
  );
};

export default Multiplayer;
