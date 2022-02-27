import Chip from '../Chip/Chip';
import FooterItem from '../FooterItem/FooterItem';
import './Solo.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useSelector } from 'react-redux';

const Solo = ({ displayGameOverModal }) => {
  const soloGameState = useSelector((state) => state.soloGame);
  const { numbersFinded } = soloGameState;
  const { seconds, minutes, pause } = useStopwatch({ autoStart: true });
  const [firstChipFlipped, setFirstChipFlipped] = useState({
    value: null,
    flipChipFn: null,
  });
  const [secondChipFlipped, setSecondChipFlipped] = useState(false);
  const [movesCount, setMovesCount] = useState(0);
  const numbers = useMemo(() => {
    return [
      { number: 1, id: 1 },
      { number: 1, id: 2 },
      { number: 2, id: 3 },
      { number: 2, id: 4 },
      { number: 3, id: 5 },
      { number: 3, id: 6 },
      { number: 4, id: 7 },
      { number: 4, id: 8 },
      { number: 5, id: 9 },
      { number: 5, id: 10 },
      { number: 6, id: 11 },
      { number: 6, id: 12 },
      { number: 7, id: 13 },
      { number: 7, id: 14 },
      { number: 8, id: 15 },
      { number: 8, id: 16 },
    ];
  }, []);

  const shuffle = useCallback((a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i].number, a[j].number] = [a[j].number, a[i].number];
    }
    return a;
  }, []);

  const randomNumbersArr = useMemo(() => {
    return shuffle(numbers);
  }, [numbers, shuffle]);

  useEffect(() => {
    if (numbersFinded.length === 8) {
      pause();
      setTimeout(() => {
        displayGameOverModal();
      }, 600);
    }
  }, [displayGameOverModal, numbersFinded, pause]);

  return (
    <>
      <section className="solo__grid">
        {randomNumbersArr.map((number) => (
          <Chip
            secondChipFlipped={secondChipFlipped}
            setSecondChipFlipped={setSecondChipFlipped}
            firstChipFlipped={firstChipFlipped}
            setFirstChipFlipped={setFirstChipFlipped}
            setMoves={setMovesCount}
            key={number.id}
            backTextContent={number.number}
          />
        ))}
      </section>
      <footer className="solo__footer">
        <FooterItem
          description="Time"
          value={`${minutes}:${
            seconds < 10 ? '0' + seconds.toString() : seconds.toString()
          }`}
        />
        <FooterItem description="Moves" value={movesCount} />
      </footer>
    </>
  );
};

export default Solo;
