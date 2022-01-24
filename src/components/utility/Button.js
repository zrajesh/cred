import React from 'react';

import "./Button.scss";
import "../../utility/common.scss"

const Button = ({buttonText, onClick, customClass, prefix}) => {
    return (
        <div 
        className={`flex absolute-center button-wrapper ${customClass}`}
        onClick={onClick}
        >
        {prefix} {buttonText}
        </div>
    );
};

export default Button;

