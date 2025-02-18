import React from 'react'
import { Fade } from 'react-awesome-reveal';

import AboutCube from './AboutCube/AboutCube';
import classes from './About.module.scss';
import GradientBackground from '../UI/GradientBackground/GradientBackground';

const Skills = () => {
    return (
        <GradientBackground>
            <section className={classes.About} id="about">
            <div className="row center-xs">
                <h1>About Me</h1>
                <div className="row">
                    <Fade direction="left">
                        <p className="col-sm col-xs-12">
                            Hi, I am a Full Stack Developer from Toronto, Canada.
                            Passionate about developing a product through different cycles of Software development.
                            As a Web Developer, I am well organized, have ability to work independently,
                            a problem solver and have high attention to details.
                            Interested in learning more about Javascript libraries and cloud related technologies.
                        </p>
                    </Fade>
                    <div className="col-sm col-xs-12">
                        <Fade direction="right">
                            <div className="center-block">
                                <AboutCube />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            </section>
        </GradientBackground>
    )
}

export default Skills;
