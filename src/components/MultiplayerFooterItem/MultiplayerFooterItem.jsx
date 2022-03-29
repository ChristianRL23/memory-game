import './MultiplayerFooterItem.scss';
import { useMediaQuery } from 'react-responsive';

const MultiplayerFooterItem = ({
  description,
  value,
  currentTurn,
  players,
}) => {
  const descriptionSplitted = description.split(' ');
  let mediaQueryForLabel;
  let mediaQueryForItem;

  switch (players.length) {
    case 4:
      mediaQueryForLabel = 780;
      mediaQueryForItem = 425;
      break;
    case 2:
      mediaQueryForLabel = 450;
      mediaQueryForItem = 350;
      break;
    default:
      mediaQueryForLabel = 780;
      mediaQueryForItem = 350;
  }

  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${mediaQueryForLabel}px)`,
  });

  const isPhone = useMediaQuery({
    query: `(max-width: ${mediaQueryForItem}px)`,
  });

  let itemStateClass;
  if (currentTurn) {
    itemStateClass = `multiplayer-footer-item--${players}__item--current`;
  } else {
    itemStateClass = `multiplayer-footer-item--${players}__item`;
  }

  return (
    <div className={`multiplayer-footer-item--${players}`}>
      <div className={itemStateClass}>
        <h6
          className={`multiplayer-footer-item--${players}__item__description`}
        >
          {isPhone ? `P${descriptionSplitted[1]}` : description}
        </h6>
        <h5 className={`multiplayer-footer-item--${players}__item__value`}>
          {value}
        </h5>
      </div>
      {!isTabletOrMobile && (
        <h6
          className={`multiplayer-footer-item--${players}__current-label--${
            currentTurn ? 'visible' : 'hidden'
          }`}
        >
          CURRENT TURN
        </h6>
      )}
    </div>
  );
};
export default MultiplayerFooterItem;
