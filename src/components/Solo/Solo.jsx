import Chip from '../Chip/Chip';
import FooterItem from '../FooterItem/FooterItem';
import './Solo.scss';

const Solo = () => {
  const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const randomNumbersArr = shuffle(numbers);

  return (
    <>
      <section className="solo__grid">
        {randomNumbersArr.map((number) => (
          <Chip
            key={'id' + Math.random().toString(16).slice(2)}
            backTextContent={number}
          />
        ))}
      </section>
      <footer className="solo__footer">
        <FooterItem description="Time" value="0:00" />
        <FooterItem description="Moves" value="0" />
      </footer>
    </>
  );
};

export default Solo;
