import React from 'react'
import Fade from 'react-reveal/Fade';

import ScrollDown from '../UI/ScrollDown/ScrollDown';
import GradientButton from '../UI/GradientButton/GradientButton';
import classes from './Intro.module.scss';
import resume from '../../assets/pdf/Jaskaran Singh_Resume.pdf';

const Intro = (props) => {
    return (
        <Fade bottom>
        <div className={classes.Intro}>
            <div className={classes.Content}>
                <div className={classes.Heading}>
                    <h1>Hello, my name is Jas</h1>
                    <h1>I am a Full Stack Developer</h1>
                    <GradientButton href={resume}>Download my Resume</GradientButton>
                </div>
            </div>
            <ScrollDown href="#about" />
        </div>
        </Fade>
    )
}

export default Intro;
