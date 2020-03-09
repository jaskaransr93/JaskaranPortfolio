import React, {useRef, useState, useEffect} from 'react'

import BubbleGraph from '../UI/BubbleGraph/BubbleGraph';
import skills from './data/skills';
import classes from './Skills.module.scss';
import SectionHeading from '../UI/SectionHeading/SectionHeading';


const Skills = () => {
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
        <section className={classes.Skills}>
            <SectionHeading>Skills</SectionHeading>
            <div className={classes.Container} ref={container}>
                <BubbleGraph width={width} height={height} padding={padding} data={skills} />
            </div>
        </section>
    )
}

export default Skills
