import React from 'react'
import GradientBackground from '../GradientBackground/GradientBackground'
import classes from './GradientButton.module.scss';

const GradientButton = ({ href, children}) => {
    return (
        
            <a href={href} className={classes.GradientButton}>
                <GradientBackground otherCls={classes.Content}>
                    {children}
                </GradientBackground>
            </a>
        
    )
}

export default GradientButton
