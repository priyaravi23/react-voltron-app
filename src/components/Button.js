import React from 'react';
import {func, string, bool} from 'prop-types';

import './Button.scss';

const EMPTY_FUNC = () => {};

const Button = props => {
    const {onClick = EMPTY_FUNC, text, disabled} =  props;
    const handleClick = disabled ? EMPTY_FUNC : e => {
        e.preventDefault();
        onClick(e);
    };
    const classNames = 'btn ' + ['primary', 'disabled']
        .filter(c => props[c])
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
    primary: bool
};

export default Button;