import MultiplayerFooterItem from '../MultiplayerFooterItem/MultiplayerFooterItem';
import './Multiplayer.scss';

const Multiplayer = () => {
  return (
    <>
      <footer className="multiplayer__footer">
        <MultiplayerFooterItem description="Player 1" value="0" />
        <MultiplayerFooterItem description="Player 1" value="0" />
        <MultiplayerFooterItem description="Player 1" value="0" />
        <MultiplayerFooterItem description="Player 2" value="0" />
      </footer>
    </>
  );
};

export default Multiplayer;
