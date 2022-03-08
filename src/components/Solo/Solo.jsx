import Chip from '../Chip/Chip';
import FooterItem from '../FooterItem/FooterItem';
import './Solo.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { soloGameActions } from '../../store/soloGame';
import { numbers4, numbers6 } from './numbers';
import TimerContext from '../../context/timerContext';

const Solo = ({ displayGameOverModal }) => {
  const [randomNumbersArr, setRandomNumebersArr] = useState([]);
  const timerCtx = useContext(TimerContext);
  const dispatch = useDispatch();
  const soloGameState = useSelector((state) => state.soloGame);
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );
  const { numbersFinded } = soloGameState;
  const [firstChipFlipped, setFirstChipFlipped] = useState({
    value: null,
    flipChipFn: null,
  });
  const [secondChipFlipped, setSecondChipFlipped] = useState(false);

  const shuffle = useCallback((a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i].number, a[j].number] = [a[j].number, a[i].number];
    }
    return a;
  }, []);

  useEffect(() => {
    console.log('AGAIN');
    timerCtx.resetTimer();
    let numbers;
    if (gameConfigurationState.grid === 4) {
      numbers = [...numbers4];
    } else {
      numbers = [...numbers6];
    }
    setRandomNumebersArr(shuffle(numbers));

    /* const randomNumbersArr = () => {
      return shuffle(numbers);
    }; */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const numbersNeeded = gameConfigurationState.grid === 4 ? 8 : 18;
    if (numbersFinded.length === numbersNeeded) {
      /* pause(); */
      timerCtx.pauseTimer();
      setTimeout(() => {
        dispatch(
          soloGameActions.saveGameResults({
            /* time: { minutes, seconds }, */
            time: {
              minutes: timerCtx.time.minutes,
              seconds: timerCtx.time.seconds,
            },
          })
        );
        displayGameOverModal();
      }, 600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayGameOverModal, numbersFinded]);

  return (
    <>
      <section
        className={`solo__grid--${gameConfigurationState.grid === 4 ? 4 : 6}`}
      >
        {randomNumbersArr.map((number) => (
          <Chip
            grid={gameConfigurationState.grid === 4 ? 4 : 6}
            secondChipFlipped={secondChipFlipped}
            setSecondChipFlipped={setSecondChipFlipped}
            firstChipFlipped={firstChipFlipped}
            setFirstChipFlipped={setFirstChipFlipped}
            key={number.id}
            backTextContent={number.number}
          />
        ))}
      </section>
      <footer className="solo__footer">
        <FooterItem
          description="Time"
          value={`${timerCtx.time.minutes}:${
            timerCtx.time.seconds < 10
              ? '0' + timerCtx.time.seconds.toString()
              : timerCtx.time.seconds.toString()
          }`}
        />
        <FooterItem description="Moves" value={soloGameState.moves} />
      </footer>
    </>
  );
};

export default Solo;
