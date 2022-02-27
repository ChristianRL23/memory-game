import './GameOver.scss';
import Modal from '../Modal/Modal';
import Button from './../Button/Button';

const GameOver = ({ message, description, children }) => {
  return (
    <Modal>
      <>
        <h2 className="modal__message">{message}</h2>
        <h6 className="modal__description">{description}</h6>
      </>
      {children}
      <div className="modal__buttons">
        <Button textContent="Restart" color="orange" />
        <Button textContent="Setup New Game" color="gray" />
      </div>
    </Modal>
  );
};

export default GameOver;
