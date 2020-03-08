import React from 'react'

import classes from './NavigationItem.module.scss';
const NavigationItem = (props) => {
    return (
         <li className={classes.NavigationItem}>
             <a href={props.url}>{props.text}</a>
        </li>
    )
}

export default NavigationItem
