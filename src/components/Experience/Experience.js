import React from 'react'

import experienceProjects from './data/experience';
import projects from './data/projects';
import Project from './Project/Project';
import classes from './Experience.module.scss';
import SectionHeading from '../UI/SectionHeading/SectionHeading';


const Experience = () => {
    return (
        <section className={classes.Experience}>
            <SectionHeading>Experience</SectionHeading>
            {
                experienceProjects.map(project => <Project key={project.title} project={project}/>)
            }
            <SectionHeading>Experience</SectionHeading>
            {
                projects.map(project => <Project key={project.title} project={project}/>)
            }
        </section>
    )
}

export default Experience;
