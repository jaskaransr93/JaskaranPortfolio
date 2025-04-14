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
                            Results-oriented Senior Developer, with 6+ years of experience in building and developing various applications on an enterprise level. Experienced in collaborating with cross-functional teams to ensure applications are user-friendly and well-designed. Ability to utilize strong communication skills to collaborate with people of diverse backgrounds and skill sets.
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
