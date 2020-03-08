import React from 'react'
import ScrollDown from '../../components/UI/ScrollDown/ScrollDown';
import classes from './Intro.module.scss';

const Intro = (props) => {
    return (
        <div className={classes.Intro}>
            <div className={classes.Content}>
                <div className={classes.Heading}>
                    <h1>Hello, my name is Jas</h1>
                    <h1>I am a Full Stack Developer</h1>
                </div>
            </div>
            <ScrollDown clicked={() => props.setCurrentPage(1)} />
        </div>
    )
}

export default Intro;
