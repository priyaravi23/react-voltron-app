import React from 'react';
import {oneOf, arrayOf, string, func, object} from 'prop-types';

import './Modal.scss';
import Button from "./Button";
import {EMPTY_FUNC} from "../utils/utils";

const Modal = (props) => {
    const {title, onClose = EMPTY_FUNC, actionButtons = null} = props;
    return (
        <div className="modal-backdrop">
            <section className={'modal'}>
                {title && <h2>{title}</h2>}
                {props.children}
                <div className="action-buttons">
                    <Button text={'close'} onClick={onClose}/>
                    {actionButtons}
                </div>
            </section>
        </div>
    );
};

Modal.propTypes = {
    title: oneOf([string, object]),
    onClose: func,
    actionButtons: arrayOf(object)
};

export default Modal;