import React from 'react'

import classes from './Arrow.module.scss';

const Arrow = (props) => {
    let typeCls = '';

    switch(props.type) {
        case 'up':
            typeCls = classes.ArrowUp;
            break;
        case 'down':
            typeCls = classes.ArrowDown;
            break;
        case 'right':
            typeCls = classes.ArrowRight;
            break;
        case 'left':
            typeCls = classes.ArrowLeft;
            break;
        default:
            typeCls = '';
    }
    const arrowClasses = [classes.Arrow, typeCls, ...props.otherClasses || []]
        .join(' ');
    return (
        <i className={arrowClasses}></i>
    )
}

export default Arrow
