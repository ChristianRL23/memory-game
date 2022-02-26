import { useState } from 'react';
import './Chip.scss';

const Chip = ({ backTextContent }) => {
  const [chipFlipped, setChipFlipped] = useState(false);
  const selectChip = () => {
    setChipFlipped((lastState) => !lastState);
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
