import React from 'react'
import Project from './Project/Project';
import classes from './Experience.module.scss';
import SectionHeading from '../UI/SectionHeading/SectionHeading';


const Experience = ({ id, projects, heading}) => {
    return (

        <section id={id} className={classes.Experience}>
            <SectionHeading>{heading}</SectionHeading>
            {
                projects.map(project => <Project key={project.title} project={project}/>)
            }
        </section>
    )
}

export default Experience;
