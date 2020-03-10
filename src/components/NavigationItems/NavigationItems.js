import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';
const NavigationItems = (props) => {
    return (
        <ul className={[classes.NavigationItems].concat(props.containerCls).join(' ')}>
            <NavigationItem url="#about" text="About" />
            <NavigationItem url="#experience" text="Experience" />
            <NavigationItem url="#projects" text="Projects" />
            <NavigationItem url="#skills" text="Skills" />
        </ul>
    )
}

export default NavigationItems;
