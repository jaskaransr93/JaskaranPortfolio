import React from 'react'
import classes from './Sidebar.module.scss';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Hamburger from '../Hamburger/Hamburger';
const Sidebar = (props) => {
    const cls = [classes.Sidebar];
    if (props.show) {
        cls.push(classes.Open);
    }
    return (
        <div className={cls.join(' ')}>
            <Hamburger active otherCls={classes.Hamburger} clicked={props.closeSidebar} />
            <div className={["row middle-xs center-xs", classes.Container].join(' ')}>
                <NavigationItems containerCls="column center-xs" />
            </div>
        </div>
    )
}

export default Sidebar
