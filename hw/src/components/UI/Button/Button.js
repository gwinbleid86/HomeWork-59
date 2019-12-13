import React from 'react';
import './Button.css';

const Button = props => (
    <button
        disabled = {props.disabled}
        onClick={props.onClick}
        className={['Button', props.type].join(' ')}
    >
        {props.label}
    </button>
);

export default Button;