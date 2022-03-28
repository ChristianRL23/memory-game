import './HeaderGame.scss';
import Button from './../Button/Button';
import { useMediaQuery } from 'react-responsive';

const HeaderGame = ({
  openRestartGameModal,
  openSetupNewGameModal,
  openMenuModal,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 570px)',
  });

  return (
    <header className="header-game">
      <h2>memory</h2>
      <div className="header-game__buttons">
        {isTabletOrMobile ? (
          <Button onClick={openMenuModal} color="orange" textContent="Menu" />
        ) : (
          <>
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
          </>
        )}
      </div>
    </header>
  );
};

export default HeaderGame;
