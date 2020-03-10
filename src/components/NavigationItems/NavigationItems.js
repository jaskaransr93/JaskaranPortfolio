import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';
const NavigationItems = (props) => {
    return (
        <ul className={[classes.NavigationItems].concat(props.containerCls).join(' ')}>
            <NavigationItem url="#about" text="About" clicked={props.navItemClicked} />
            <NavigationItem url="#experience" text="Experience" clicked={props.navItemClicked} />
            <NavigationItem url="#projects" text="Projects" clicked={props.navItemClicked} />
            <NavigationItem url="#skills" text="Skills" clicked={props.navItemClicked} />
        </ul>
    )
}

export default NavigationItems;
