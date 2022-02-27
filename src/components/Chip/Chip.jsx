import { useState } from 'react';
import './Chip.scss';

const Chip = ({
  backTextContent,
  setMoves,
  setFirstChipFlipped,
  firstChipFlipped,
  secondChipFlipped,
  setSecondChipFlipped,
}) => {
  const [chipFlipped, setChipFlipped] = useState(false);
  const [chipPair, setChipPair] = useState(false);
  const selectChip = () => {
    if (!secondChipFlipped) {
      if (!chipFlipped) {
        setChipFlipped((lastState) => !lastState);
        setMoves((lastState) => ++lastState);
        if (firstChipFlipped.value === null) {
          setFirstChipFlipped({
            value: backTextContent,
            flipChipFn: setChipFlipped,
            setChipPair,
          });
        } else {
          setSecondChipFlipped(true);
          if (firstChipFlipped.value !== backTextContent) {
            setTimeout(() => {
              setChipFlipped((lastState) => !lastState);
              firstChipFlipped.flipChipFn(false);
              setTimeout(() => {
                setSecondChipFlipped(false);
              }, 300);
              setFirstChipFlipped({ value: null, flipChipFn: null });
            }, 700);
          } else {
            setFirstChipFlipped({ value: null, flipChipFn: null });
            setTimeout(() => {
              setTimeout(() => {
                setSecondChipFlipped(false);
              }, 300);
              firstChipFlipped.setChipPair(true);
              setChipPair(true);
            }, 700);
          }
        }
      }
    }
  };

  let chipClassName;
  if (!chipPair) {
    chipClassName = 'chip__inner__back';
  } else {
    chipClassName = 'chip__inner__back--pair';
  }

  return (
    <div className="chip">
      <div
        className={`chip__inner--${chipFlipped ? 'flipped' : 'no-flipped'}`}
        onClick={selectChip}
      >
        <div className="chip__inner__front"></div>
        <div className={chipClassName}>{backTextContent}</div>
      </div>
    </div>
  );
};

export default Chip;
