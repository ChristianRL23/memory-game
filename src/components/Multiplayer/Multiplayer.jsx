import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { multiplayerGameActions } from '../../store/multiplayerGame';
import { shuffle } from '../../utils/shuffle';
import Chip from '../Chip/Chip';
import MultiplayerFooterItem from '../MultiplayerFooterItem/MultiplayerFooterItem';
import { numbers4, numbers6 } from '../Solo/numbers';
import './Multiplayer.scss';

const Multiplayer = () => {
  const [randomNumbersArr, setRandomNumebersArr] = useState([]);
  const [restoreChips, setRestoreChips] = useState(null);
  const [secondChipFlipped, setSecondChipFlipped] = useState(false);
  const [firstChipFlipped, setFirstChipFlipped] = useState({
    value: null,
    flipChipFn: null,
  });
  const gameConfigurationState = useSelector(
    (state) => state.gameConfiguration
  );
  const multiplayerGameState = useSelector((state) => state.multiplayerGame);
  const players = multiplayerGameState.slice(0, gameConfigurationState.players);
  const dispatch = useDispatch();

  const nextPlayer = () => {
    dispatch(multiplayerGameActions.nextPlayer());
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <section
        className={`multiplayer__grid--${
          gameConfigurationState.grid === 4 ? 4 : 6
        }`}
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
            nextPlayer={nextPlayer}
          />
        ))}
      </section>
      <footer className="multiplayer__footer">
        {players.map((player) => (
          <MultiplayerFooterItem
            key={player.player}
            description={`Player ${player.player}`}
            value={player.score}
            currentTurn={player.currentTurn}
          />
        ))}
      </footer>
    </>
  );
};

export default Multiplayer;
