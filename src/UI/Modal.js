import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import modelcls from './Modal.module.css';
import { UiActions } from '../Reduxstore/Ui-slice/ui-slice';

function Backdrop(props) {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(UiActions.isOpenHandle(false));
  };

  return <div className={modelcls.backdrop} onClick={closeHandler} />;
}

function ModalOverlay({ isClosing, children }) {
  return (
    <div className={`${modelcls.modal} ${isClosing ? modelcls.closing : ''}`}>
      <div className={modelcls.content}>{children}</div>
    </div>
  );
}

const portalEle = document.getElementById('overlay');

function Modal({ onClose, isClosing, children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalEle)}

      {ReactDOM.createPortal(<ModalOverlay isClosing={isClosing}>{children}</ModalOverlay>, portalEle)}
    </>
  );
}

export default Modal;
