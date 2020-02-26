import React from 'react';
import {oneOf, arrayOf, string, func, object} from 'prop-types';

import './Modal.scss';
import Button from "./Button";
import {EMPTY_FUNC} from "../utils/utils";

const Modal = (props) => {
    const {title, className, onClose = EMPTY_FUNC, actionButtons = null, errMessage} = props;
    return (
        <div className="modal-backdrop">
            <section className={`modal ${className}`}>
                {title && <h2 className={'title'}>{title}</h2>}
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="action-buttons">
                    {errMessage && <div className="error-message">{errMessage}</div>}
                    <Button text={'close'} onClick={onClose}/>
                    {actionButtons}
                </div>
            </section>
        </div>
    );
};

Modal.propTypes = {
    title: string,
    onClose: func,
    actionButtons: arrayOf(object),
    errMessage: string
};

export default Modal;