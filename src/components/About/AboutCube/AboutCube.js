import React from 'react';
import classes from './AboutCube.module.scss';
import Image from 'next/image';
import config from '../../../../next.config.mjs';

const { basePath } = config;

const AboutCube = () => {
    return (
        <div className={classes.AboutCube}>
            <div className={[classes.Box, classes.ShowFront].join(' ')}>
                <div className={[classes.Face, classes.Front].join(' ')}>
                    <Image width={180} height={180} src={`${basePath}/assets/images/angular_gradient.png`} alt="Html" />
                </div>
                <div className={[classes.Face, classes.Back].join(' ')}>
                    <Image width={180} height={180} src={`${basePath}/assets/images/css.png`} alt="css" />
                </div>
                <div className={[classes.Face, classes.Right].join(' ')}>
                    <Image width={180} height={180} src={`${basePath}/assets/images/js.png`} alt="JavaScript" />
                </div>
                <div className={[classes.Face, classes.Left].join(' ')}>
                    <Image width={180} height={180} src={`${basePath}/assets/images/node.png`} alt="Node" />
                </div>
                <div className={[classes.Face, classes.Top].join(' ')}>
                    <Image width={180} height={180} src={`${basePath}/assets/images/webpack.png`} alt="Webpack" />
                </div>
                <div className={[classes.Face, classes.Bottom].join(' ')}>
                    <Image width={180} height={180} src={`${basePath}/assets/images/react.png`} alt="React" />
                </div>
            </div>
        </div>
    )
}

export default AboutCube
