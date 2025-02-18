import React from 'react'

// import githubImage from '../../../assets/images/github.png';
import classes from './Project.module.scss';
import { Fade } from 'react-awesome-reveal';

const Project = (props) => {
    // const [image, setImage] = useState('');
    // useEffect(() => {
    //     import(`../../../assets/images/${props.project.image}`).then(image => {
    //         setImage(image.default)
    //     });
    // }, [props.project.image])
    return (
        <div className={[classes.Project].join(' ')}>
            <div className="row">
                    <div className="col-sm-5 end-sm middle-sm block-center">
                        <Fade direction="left">
                            <div className={classes.Thumbnail}>
                                <img src={`/assets/images/${props.project.image}`} alt="Source: Google Images" />
                            </div>
                        </Fade>
                    </div>
                <div className="col-sm-7">
                    <Fade direction="right">
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
