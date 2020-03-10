import React from 'react'

import classes from './GradientBackground.module.scss';

const GradientBackground = (props) => {
    return (
        <div className={[classes.GradientBackground, props.otherCls].join(' ')}>
            {props.children}
        </div>
    )
}

export default GradientBackground;
