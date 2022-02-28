import './HeaderGame.scss';
import Button from './../Button/Button';

const HeaderGame = ({ openRestartGameModal, openSetupNewGameModal }) => {
  return (
    <header className="header-game">
      <h2>memory</h2>
      <div className="header-game__buttons">
        <Button
          onClick={openRestartGameModal}
          textContent="Restart"
          color="orange"
        />
        <Button
          onClick={openSetupNewGameModal}
          textContent="New Game"
          color="gray"
        />
      </div>
    </header>
  );
};

export default HeaderGame;
