import React from 'react'

import AboutCube from  './AboutCube/AboutCube';
import classes from './About.module.scss';
const Skills = () => {
    return (
        <section className={classes.About}>
            <div className="row center-xs" >
            <h1>About Me</h1>
            <div className="row">
            <p className="col-sm col-xs-12">
                Hi, I am a Full Stack Developer from Toronto, Canada. 
                Passionate about developing a product through different cycles of Software development.
                As a Web Developer, I am well organized, have ability to work independently,
                a problem solver and have high attention to details.
                Interested in learning more about Javascript libraries and cloud related technologies.
            </p>
                <div className="col-sm col-xs-12">
                    <div className="center-block">
                        <AboutCube/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Skills;
