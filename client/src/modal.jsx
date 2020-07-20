import React from 'react';
import { modal, close, modalDiv } from './style.js';

var Modal = (props) => (
  <div id='modal' style={modalDiv}>
    <div style={close} onClick={props.closeModal}></div>
    <img style={modal}></img>
  </div>
)

export default Modal;