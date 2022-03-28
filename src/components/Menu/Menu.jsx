import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './Menu.scss';

const Menu = ({
  openRestartGameModal,
  openSetupNewGameModal,
  closeMenuModal,
}) => {
  return (
    <Modal>
      <Button
        onClick={openRestartGameModal}
        color="orange"
        textContent="Restart"
      />
      <Button
        onClick={openSetupNewGameModal}
        color="gray"
        textContent="New Game"
      />
      <Button onClick={closeMenuModal} color="gray" textContent="Resume Game" />
    </Modal>
  );
};

export default Menu;
