import './MultiplayerFooterItem.scss';

const MultiplayerFooterItem = ({ description, value }) => {
  return (
    <div className="multiplayer-footer-item">
      <div className="multiplayer-footer-item__item--current">
        <h6 className="multiplayer-footer-item__item__description">
          {description}
        </h6>
        <h5 className="multiplayer-footer-item__item__value">{value}</h5>
      </div>
      <h6 className="multiplayer-footer-item__current-label">CURRENT TURN</h6>
    </div>
  );
};
export default MultiplayerFooterItem;
