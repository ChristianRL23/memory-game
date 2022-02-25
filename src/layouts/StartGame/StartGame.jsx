import Button from '../../components/Button/Button';
import StartGameField from '../../components/StartGameField/StartGameField';
import './StartGame.scss';

const StartGame = () => {
  return (
    <section className="start-game">
      <div className="start-game__content">
        <h1>memory</h1>
        <div className="start-game__content__modal">
          <StartGameField label="Select Theme">
            <Button textContent="Numbers" color="dark" />
            <Button textContent="Icons" color="light" />
          </StartGameField>
          <StartGameField label="Numbers of Players">
            <Button textContent="1" color="dark" />
            <Button textContent="2" color="light" />
            <Button textContent="3" color="light" />
            <Button textContent="4" color="light" />
          </StartGameField>
          <StartGameField label="Grid Size">
            <Button textContent="4x4" color="dark" />
            <Button textContent="6x6" color="light" />
          </StartGameField>
          <Button textContent="Start Game" color="orange" />
        </div>
      </div>
    </section>
  );
};

export default StartGame;
