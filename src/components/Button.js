import React from 'react';
import {func, string, bool} from 'prop-types';
import {EMPTY_FUNC} from "../utils/utils";

import './Button.scss';

const Button = props => {
    const {onClick = EMPTY_FUNC, text, disabled, className} =  props;
    const handleClick = disabled ? EMPTY_FUNC : e => {
        e.preventDefault();
        onClick(e);
    };
    const classNames = 'btn ' + ['primary', 'disabled']
        .filter(c => props[c])
        .concat(className)
        .join(' ');
    return (
        <a className={classNames} href={'#'} onClick={handleClick}>
            {text}
        </a>
    );
};

Button.propTypes = {
    onClick: func,
    text: string,
    disabled: bool,
    primary: bool,
    className: string
};

export default Button;