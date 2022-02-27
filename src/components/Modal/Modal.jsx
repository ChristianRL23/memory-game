import './Modal.scss';
import ReactDOM from 'react-dom';

const Backdrop = () => {
  return <div className="backdrop" />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="modal">
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
