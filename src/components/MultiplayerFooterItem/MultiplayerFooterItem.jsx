import './MultiplayerFooterItem.scss';

const MultiplayerFooterItem = ({ description, value, currentTurn }) => {
  let itemStateClass;
  if (currentTurn) {
    itemStateClass = 'multiplayer-footer-item__item--current';
  } else {
    itemStateClass = 'multiplayer-footer-item__item';
  }

  return (
    <div className="multiplayer-footer-item">
      <div className={itemStateClass}>
        <h6 className="multiplayer-footer-item__item__description">
          {description}
        </h6>
        <h5 className="multiplayer-footer-item__item__value">{value}</h5>
      </div>
      <h6
        className={`multiplayer-footer-item__current-label--${
          currentTurn ? 'visible' : 'hidden'
        }`}
      >
        CURRENT TURN
      </h6>
    </div>
  );
};
export default MultiplayerFooterItem;
