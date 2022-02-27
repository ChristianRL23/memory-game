import { useState } from 'react';
import './Chip.scss';

const Chip = ({ backTextContent, setMoves }) => {
  const [chipFlipped, setChipFlipped] = useState(false);
  const selectChip = () => {
    if (!chipFlipped) {
      setChipFlipped((lastState) => !lastState);
      setMoves((lastState) => ++lastState);
    }
  };

  return (
    <div className="chip">
      <div
        className={`chip__inner--${chipFlipped ? 'flipped' : 'no-flipped'}`}
        onClick={selectChip}
      >
        <div className="chip__inner__front"></div>
        <div className="chip__inner__back">{backTextContent}</div>
      </div>
    </div>
  );
};

export default Chip;
