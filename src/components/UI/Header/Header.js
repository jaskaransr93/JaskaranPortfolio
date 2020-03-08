import React from 'react'

import NavigationItems from '../../NavigationItems/NavigationItems';
import Hamburger from '../Hamburger/Hamburger';
import NavigationItem from '../../NavigationItems/NavigationItem/NavigationItem';
import classes from './Header.module.scss';
import Logo from '../../Logo/Logo';

const Header = (props) => {
    return (
        <nav className={[classes.Header, 'row', 'around-xs'].join(' ')}>
            <div className={["row between-xs middle-xs", classes.Content].join(' ')}>
                <div className="col-xs">
                    <Logo url="#">Jaskaran Singh</Logo>
                </div>
                <div className="col-xs">
                    <div className={[classes.DesktopOnly].join(' ')}>
                        <NavigationItems containerCls="row end-xs" />
                    </div>
                    <div className={["row end-xs", classes.NotDesktop].join(' ')}>
                        <Hamburger clicked={props.openSidebar} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
