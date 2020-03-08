import React from 'react'

import classes from './Hamburger.module.scss';
const Hamburger = (props) => {
    const cls = [classes.Hamburger, props.otherCls || ''];
    if (props.active) {
        cls.push(classes.Active);
    }
    return (
        <div className={cls.join(' ')} onClick={props.clicked}>
            <div></div>
        </div>
    )
}

export default Hamburger;
