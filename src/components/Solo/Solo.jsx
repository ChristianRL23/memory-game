import Chip from '../Chip/Chip';
import FooterItem from '../FooterItem/FooterItem';
import './Solo.scss';
import { useContext, useEffect, useState } from 'react';
import { shuffle } from './../../utils/shuffle';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { soloGameActions } from '../../store/soloGame';
import { numbers4, numbers6 } from './numbers';
import TimerContext from '../../context/timerContext';

const Solo = ({ displayGameOverModal, render }) => {
  const [restoreChips, setRestoreChips] = useState(null);
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

  useEffect(() => {
    timerCtx.resetTimer();
    let numbers;
    if (gameConfigurationState.grid === 4) {
      numbers = [...numbers4];
    } else {
      numbers = [...numbers6];
    }
    if (restoreChips === null) {
      setRandomNumebersArr(shuffle(numbers));
      setRestoreChips(false);
    } else {
      setRestoreChips((lastState) => !lastState);
      setTimeout(() => {
        setRandomNumebersArr(shuffle(numbers));
      }, 700);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  useEffect(() => {
    const numbersNeeded = gameConfigurationState.grid === 4 ? 8 : 18;
    if (numbersFinded.length === numbersNeeded) {
      timerCtx.pauseTimer();
      setTimeout(() => {
        dispatch(
          soloGameActions.saveGameResults({
            time: {
              minutes: timerCtx.time.minutes,
              seconds: timerCtx.time.seconds,
            },
          })
        );
        displayGameOverModal('SOLO');
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
            restoreChips={restoreChips}
            grid={gameConfigurationState.grid === 4 ? 4 : 6}
            secondChipFlipped={secondChipFlipped}
            setSecondChipFlipped={setSecondChipFlipped}
            firstChipFlipped={firstChipFlipped}
            setFirstChipFlipped={setFirstChipFlipped}
            key={number.id}
            internNumber={number.number}
            icons={gameConfigurationState.theme === 'Icons' ? true : false}
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
