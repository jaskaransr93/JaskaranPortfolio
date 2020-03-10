import React from 'react'

import classes from './SocialButton.module.scss';

const SocialButton = (props) => {
    return (
        <a href={props.url} className={classes.SocialButton} target="__blank">
            {props.children}
        </a>
    )
}

export default SocialButton
