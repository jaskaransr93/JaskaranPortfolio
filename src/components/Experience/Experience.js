import React from 'react'

import experienceProjects from './data/experience';
import projects from './data/projects';
import Project from './Project/Project';
import classes from './Experience.module.scss';


const Experience = () => {
    return (
        <section className={classes.Experience}>
            <h1>Experience</h1>
            {
                experienceProjects.map(project => <Project key={project.title} project={project}/>)
            }
            <h1>Projects</h1>
            {
                projects.map(project => <Project key={project.title} project={project}/>)
            }
        </section>
    )
}

export default Experience;
