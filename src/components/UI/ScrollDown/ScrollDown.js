import React from 'react'

import Arrow from '../Arrow/Arrow';
import classes from './ScrollDown.module.scss';

const ScrollDown = (props) => {
    return (
    <a href={props.href} className={classes.ScrollDown} onClick={props.clicked}>
        <div>SCROLL DOWN</div>
        <Arrow type="down" otherClasses={[classes.ArrowDown]}/>
    </a>
    )
}

export default ScrollDown
