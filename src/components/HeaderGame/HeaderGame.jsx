import './HeaderGame.scss';
import Button from './../Button/Button';

const HeaderGame = () => {
  return (
    <header className="header-game">
      <h2>memory</h2>
      <div className="header-game__buttons">
        <Button textContent="Restart" color="orange" />
        <Button textContent="New Game" color="gray" />
      </div>
    </header>
  );
};

export default HeaderGame;
