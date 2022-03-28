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
      <div className="menu">
        <Button
          menu
          onClick={openRestartGameModal}
          color="orange"
          textContent="Restart"
        />
        <Button
          menu
          onClick={openSetupNewGameModal}
          color="gray"
          textContent="New Game"
        />
        <Button
          menu
          onClick={closeMenuModal}
          color="gray"
          textContent="Resume Game"
        />
      </div>
    </Modal>
  );
};

export default Menu;
