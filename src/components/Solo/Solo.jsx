import Chip from '../Chip/Chip';
import FooterItem from '../FooterItem/FooterItem';
import './Solo.scss';

const Solo = () => {
  return (
    <>
      <section className="solo__grid">
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </section>
      <footer className="solo__footer">
        <FooterItem description="Time" value="0:00" />
        <FooterItem description="Moves" value="0" />
      </footer>
    </>
  );
};

export default Solo;
