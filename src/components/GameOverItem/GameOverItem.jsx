import './GameOverItem.scss';

const GameOverItem = ({ title, value, winner }) => {
  const divClassName = winner ? 'game-over-item--winner' : 'game-over-item';

  return (
    <div className={divClassName}>
      <h6 className="game-over-item__title">{title}</h6>
      <h3 className="game-over-item__value">{value}</h3>
    </div>
  );
};

export default GameOverItem;
