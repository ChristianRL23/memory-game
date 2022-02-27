import './GameOverItem.scss';

const GameOverItem = ({ title, value }) => {
  return (
    <div className="game-over-item">
      <h6 className="game-over-item__title">{title}</h6>
      <h3 className="game-over-item__value">{value}</h3>
    </div>
  );
};

export default GameOverItem;
