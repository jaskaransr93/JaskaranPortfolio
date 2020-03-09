import React from 'react'

import classes from './SectionHeading.module.scss';

const SectionHeading = (props) => {
    return (
        <h1 className={classes.SectionHeading}>
            {props.children}
        </h1>
    )
}

export default SectionHeading
