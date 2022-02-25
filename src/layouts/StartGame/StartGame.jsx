import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import StartGameField from '../../components/StartGameField/StartGameField';
import { gameConfigurationActions } from '../../store/gameConfiguration';
import './StartGame.scss';

const StartGame = () => {
  const dispatch = useDispatch();

  const selectTheme = (e) => {
    dispatch(gameConfigurationActions.selectTheme(e.target.textContent));
  };
  const selectPlayers = (e) => {
    dispatch(gameConfigurationActions.selectPlayers(e.target.textContent));
  };
  const selectGrid = (e) => {
    dispatch(gameConfigurationActions.selectGrid(e.target.textContent));
  };

  return (
    <section className="start-game">
      <div className="start-game__content">
        <h1>memory</h1>
        <div className="start-game__content__modal">
          <StartGameField label="Select Theme">
            <Button textContent="Numbers" color="dark" onClick={selectTheme} />
            <Button textContent="Icons" color="light" onClick={selectTheme} />
          </StartGameField>
          <StartGameField label="Numbers of Players">
            <Button textContent="1" color="dark" onClick={selectPlayers} />
            <Button textContent="2" color="light" onClick={selectPlayers} />
            <Button textContent="3" color="light" onClick={selectPlayers} />
            <Button textContent="4" color="light" onClick={selectPlayers} />
          </StartGameField>
          <StartGameField label="Grid Size">
            <Button textContent="4x4" color="dark" onClick={selectGrid} />
            <Button textContent="6x6" color="light" onClick={selectGrid} />
          </StartGameField>
          <Button textContent="Start Game" color="orange" />
        </div>
      </div>
    </section>
  );
};

export default StartGame;
