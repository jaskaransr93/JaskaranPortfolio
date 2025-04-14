import React from 'react'

// import githubImage from '../../../assets/images/github.png';
import classes from './Project.module.scss';
import { Fade } from 'react-awesome-reveal';

const Project = ({ project }) => {
    const { image, title, duration, description, role, tags, githubUrl  } = project
    return (
        <div className={[classes.Project].join(' ')}>
            <div className="row">
                    <div className="col-sm-5 end-sm middle-sm block-center">
                        {image && <Fade direction="left">
                            <div className={classes.Thumbnail}>
                                <img src={`/assets/images/${image}`} alt="Source: Google Images" />
                            </div>
                        </Fade>}
                    </div>
                <div className="col-sm-7">
                    <Fade direction="right">
                        <div className={classes.Content}>
                            <h3>{title}</h3>
                            <div className={classes.Duration}>{duration}</div>
                            <p>{description}</p>
                            <ul>
                                {
                                    role.map((text) => <li key={text}>{text}</li>)
                                }
                            </ul>
                            <div className="row">
                                {
                                    tags
                                        .map((text) => <div key={text} className={classes.Tag}>{text}</div>)
                                }
                                {
                                    githubUrl &&
                                        <div className={classes.Tag}>
                                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                                <img src="/assets/images/github.png" alt="github" />
                                            </a>
                                        </div>
                                }
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    )
}

export default Project
