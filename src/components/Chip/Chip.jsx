import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { soloGameActions } from '../../store/soloGame';
import './Chip.scss';

const Chip = ({
  backTextContent,
  setFirstChipFlipped,
  firstChipFlipped,
  secondChipFlipped,
  setSecondChipFlipped,
  grid,
}) => {
  const dispatch = useDispatch();
  const [chipFlipped, setChipFlipped] = useState(false);
  const [chipPair, setChipPair] = useState(false);
  const selectChip = () => {
    if (!secondChipFlipped) {
      if (!chipFlipped) {
        setChipFlipped((lastState) => !lastState);
        dispatch(soloGameActions.addMove());
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
              dispatch(soloGameActions.findPairOfNumber(backTextContent));
            }, 700);
          }
        }
      }
    }
  };

  let chipClassName;
  if (!chipPair) {
    chipClassName = `chip--${grid === 4 ? '4' : '6'}__inner__back`;
  } else {
    chipClassName = `chip--${grid === 4 ? '4' : '6'}__inner__back--pair`;
  }

  return (
    <div className={`chip--${grid === 4 ? '4' : '6'}`}>
      <div
        className={`chip--${grid === 4 ? '4' : '6'}__inner--${
          chipFlipped ? 'flipped' : 'no-flipped'
        }`}
        onClick={selectChip}
      >
        <div className={`chip--${grid === 4 ? '4' : '6'}__inner__front`}></div>
        <div className={chipClassName}>{backTextContent}</div>
      </div>
    </div>
  );
};

export default Chip;
