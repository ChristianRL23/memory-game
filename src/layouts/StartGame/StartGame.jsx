import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import StartGameField from '../../components/StartGameField/StartGameField';
import { gameConfigurationActions } from '../../store/gameConfiguration';
import './StartGame.scss';

const StartGame = () => {
  const dispatch = useDispatch();
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );

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
            <Button
              selected={gameConfigurationState.theme === 'Numbers'}
              textContent="Numbers"
              onClick={selectTheme}
            />
            <Button
              selected={gameConfigurationState.theme === 'Icons'}
              textContent="Icons"
              onClick={selectTheme}
            />
          </StartGameField>
          <StartGameField label="Numbers of Players">
            <Button
              selected={gameConfigurationState.players === 1}
              textContent="1"
              onClick={selectPlayers}
            />
            <Button
              selected={gameConfigurationState.players === 2}
              textContent="2"
              onClick={selectPlayers}
            />
            <Button
              selected={gameConfigurationState.players === 3}
              textContent="3"
              onClick={selectPlayers}
            />
            <Button
              selected={gameConfigurationState.players === 4}
              textContent="4"
              onClick={selectPlayers}
            />
          </StartGameField>
          <StartGameField label="Grid Size">
            <Button
              selected={gameConfigurationState.grid === 4}
              textContent="4x4"
              onClick={selectGrid}
            />
            <Button
              selected={gameConfigurationState.grid === 6}
              textContent="6x6"
              onClick={selectGrid}
            />
          </StartGameField>
          <Button textContent="Start Game" color="orange" />
        </div>
      </div>
    </section>
  );
};

export default StartGame;
