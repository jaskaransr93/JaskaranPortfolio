import React from 'react'

import htmlImage from '../../../assets/images/html.png';
import cssImage from '../../../assets/images/css.png';
import jsImage from '../../../assets/images/js.png';
import nodeImage from '../../../assets/images/node.png';
import webpackImage from '../../../assets/images/webpack.png';
import reactImage from '../../../assets/images/React-icon.svg';
import classes from './AboutCube.module.scss';

const AboutCube = () => {
    return (
        <div className={classes.AboutCube}>
            <div className={[classes.Box, classes.ShowFront].join(' ')}>
                <div className={[classes.Face, classes.Front].join(' ')}>
                    <img src={htmlImage} alt="Html" />
                </div>
                <div className={[classes.Face, classes.Back].join(' ')}>
                    <img src={cssImage} alt="css" />
                </div>
                <div className={[classes.Face, classes.Right].join(' ')}>
                    <img src={jsImage} alt="JavaScript" />
                </div>
                <div className={[classes.Face, classes.Left].join(' ')}>
                    <img src={nodeImage} alt="Node" />
                </div>
                <div className={[classes.Face, classes.Top].join(' ')}>
                    <img src={webpackImage} alt="Webpack" />
                </div>
                <div className={[classes.Face, classes.Bottom].join(' ')}>
                    <img src={reactImage} alt="React" />
                </div>
            </div>
        </div>
    )
}

export default AboutCube
