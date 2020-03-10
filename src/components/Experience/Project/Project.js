import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';

import githubImage from '../../../assets/images/github.png';
import classes from './Project.module.scss';

const Project = (props) => {
    const [image, setImage] = useState('');
    useEffect(() => {
        import(`../../../assets/images/${props.project.image}`).then(image => {
            setImage(image.default)
        });
    }, [props.project.image])
    return (
        <div className={[classes.Project].join(' ')}>
            <div className="row">
                    <div className="col-sm-5 end-sm middle-sm block-center">
                        <Fade left>
                            <div className={classes.Thumbnail}>
                                <img src={image} alt="Source: Google Images" />
                            </div>
                        </Fade>
                    </div>
                <div className="col-sm-7">
                    <Fade right>
                        <div className={classes.Content}>
                            <h3>{props.project.title}</h3>
                            <div className={classes.Duration}>{props.project.duration}</div>
                            <p>{props.project.description}</p>
                            <ul>
                                {
                                    props.project.role.map((text) => <li key={text}>{text}</li>)
                                }
                            </ul>
                            <div className="row">
                                {
                                    props.project.tags
                                        .map((text) => <div key={text} className={classes.Tag}>{text}</div>)
                                }
                                {
                                    props.project.githubUrl &&
                                        <div className={classes.Tag}>
                                            <a href={props.project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <img src={githubImage} alt="github" />
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
