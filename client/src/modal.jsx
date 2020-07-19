import React from 'react';
import { modal, close, modalDiv } from './style.js';

var Modal = (props) => (
  <div id='modal' style={modalDiv}>
    <img style={close} onClick={props.closeModal}></img>
    <img style={modal}></img>
  </div>
)

export default Modal;