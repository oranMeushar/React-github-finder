import React from 'react';
import './Modal.css';

const Modal = (props) =>{
    return(
        <div className="Modal">
            <div className={"Modal-message"}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;