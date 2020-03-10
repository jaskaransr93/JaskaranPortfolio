import React from 'react'
import classes from './Sidebar.module.scss';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Hamburger from '../Hamburger/Hamburger';
import Fade from 'react-reveal/Fade';

const Sidebar = (props) => {
    const cls = [classes.Sidebar];
    if (props.show) {
        cls.push(classes.Open);
    }
    return (
        <Fade top when={props.show}>

        <div className={cls.join(' ')}>
            <Hamburger active otherCls={classes.Hamburger} clicked={props.closeSidebar} />
            <div className={["row middle-xs center-xs", classes.Container].join(' ')}>
                <NavigationItems containerCls="column center-xs" navItemClicked={() => props.closeSidebar()} />
            </div>
        </div>
        </Fade>
    )
}

export default Sidebar
