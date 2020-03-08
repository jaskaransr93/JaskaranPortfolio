import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';
const NavigationItems = (props) => {
    return (
        <ul className={[classes.NavigationItems].concat(props.containerCls).join(' ')}>
            <NavigationItem url="#" text="About" />
            <NavigationItem url="#" text="Experience" />
            <NavigationItem url="#" text="Projects" />
            <NavigationItem url="#" text="Contact" />
        </ul>
    )
}

export default NavigationItems;
