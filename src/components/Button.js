import React from 'react'
import './Button.css'

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile']
const textStyles = ['capitalize', 'upper']

function Button({children, buttonSize, onClick, textStyle}) {
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkTextStyle = textStyles.includes(textStyle) ? textStyle: textStyles[0]
    return (
        <button className={`btn ${checkButtonSize} ${checkTextStyle}`} onClick={onClick}>
            {children} 
        </button>
    )
}

export default Button
