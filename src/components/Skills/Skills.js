import React, {useRef, useState, useEffect} from 'react'

import BubbleGraph from '../UI/BubbleGraph/BubbleGraph';
import classes from './Skills.module.scss';
import GradientBackground from '../UI/GradientBackground/GradientBackground';


const Skills = (props) => {
    const container = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    let padding = 5;

    useEffect(() => {
        const boxDimensions = container.current.getClientRects()[0];
        setHeight(boxDimensions.height);
        setWidth(boxDimensions.width);
    }, [])


    return (
        <GradientBackground>
            <section className={classes.Skills} id="skills">
                <h1 id="#skills">Skills</h1>
                <div className={classes.Container} ref={container}>
                    <BubbleGraph width={width} height={height} padding={padding} data={props.skills} />
                </div>
            </section>
        </GradientBackground>
    )
}

export default Skills
