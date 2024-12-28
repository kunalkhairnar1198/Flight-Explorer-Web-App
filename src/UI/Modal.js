import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import modelcls from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div
      className={modelcls.backdrop}
      onClick={props.onClose} 
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={`${modelcls.modal} ${props.isClosing ? modelcls.closing : ''}`}>
      <div className={modelcls.content}>{props.children}</div>
    </div>
  );
};

const portalEle = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEle)}
      {ReactDOM.createPortal(
        <ModalOverlay isClosing={props.isClosing}>{props.children}</ModalOverlay>,
        portalEle
      )}
    </Fragment>
  );
};

export default Modal;
