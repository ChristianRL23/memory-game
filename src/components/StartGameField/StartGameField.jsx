import './StartGameField.scss';

const StartGameField = ({ children, label }) => {
  return (
    <div className="start-game-field">
      <h6 className="start-game-field__label">{label}</h6>
      <div className="start-game-field__buttons">{children}</div>
    </div>
  );
};

export default StartGameField;
