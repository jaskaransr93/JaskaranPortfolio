import React, { useRef, useEffect } from 'react'
import * as d3 from "d3";

// data manipulation function takes raw data from csv and converts it into an array of node objects
// each node will store data and visualisation values to draw a bubble
// rawData is expected to be an array of data objects, read in d3.csv
// function returns the new node array, with a node for each element in the rawData input
function createNodes(rawData) {
    // use max size in the data as the max in the scale's domain
    // note we have to ensure that size is a number
    const maxSize = d3.max(rawData, d => +d.value);

    // size bubbles based on area
    const radiusScale = d3.scaleSqrt()
        .domain([0, maxSize])
        .range([0, 50])

    // use map() to convert raw data into node data
    const myNodes = rawData.map(d => ({
        ...d,
        radius: radiusScale(+d.value),
        size: +d.value,
        imageWidth: radiusScale(+d.value) * 2,
        imageHeight: radiusScale(+d.value) * 2,
        x: Math.random() * 900,
        y: Math.random() * 800
    }))

    return myNodes;
}

const ticked = (bubbles, labels, images) => {
    bubbles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)

    labels
        .attr('x', d => d.x)
        .attr('y', d => d.y)

    images
        .attr('x', d => d.x - (d.imageWidth / 2))
        .attr('y', d => d.y - (d.imageHeight / 2))

}


const charge = (d) => {
    return Math.pow(d.radius, 2.0) * 0.01
}

const BubbleGraph = (props) => {

    const container = useRef(null);
    let { width, height, padding, clusterPadding, maxRadius, data } = props;


    useEffect(() => {


        // location to centre the bubbles
        const centre = { x: width / 2, y: height / 2 };
        // strength to apply to the position forces
        const forceStrength = 0.03;
        // these will be set in createNodes and chart functions
        let containerSel = null;
        let svg = null;
        let bubbles = null;
        let labels = null;
        let images = null;
        let nodes = [];


        // create a force simulation and add forces to it
        const simulation = d3.forceSimulation()
            .force('charge', d3.forceManyBody().strength(charge))
            .force('center', d3.forceCenter(centre.x, centre.y))
            .force('x', d3.forceX().strength(forceStrength).x(centre.x))
            .force('y', d3.forceY().strength(forceStrength).y(centre.y))
            .force('collision', d3.forceCollide().radius(d => d.radius + 1));
        // force simulation starts up automatically, which we don't want as there aren't any nodes yet
        simulation.stop();

        nodes = createNodes(data);

        // Get container 
        containerSel = d3.select(container.current);

        // Remove  previous svg
        containerSel.select('svg').remove();

        // create svg element inside provided selector
        svg = containerSel
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        // bind nodes data to circle elements
        const elements = svg.selectAll('.bubble')
            .data(nodes, d => d.id)
            .enter()
            .append('g');

        bubbles = elements
            .append('circle')
            .classed('bubble', true)
            .attr('r', d => d.radius)
            .attr('fill', 'transparent');

        // labels
        labels = elements
            .append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .style('font-size', 10)
            .attr('fill', '#fff')
            .text(d => d.id)

        images = elements
            // .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            .append("svg:image")
            .attr("xlink:href", function (d) {
                if (d.image) {
                    return require('../../../assets/images/' + d.image);
                }
                return require('../../../assets/images/js.png');
            })
            .attr("width", d => d.imageWidth)
            .attr("height", d => d.imageHeight)
            .attr("x", d => d.x - d.imageWidth / 2)
            .attr("y", d => d.y - d.imageHeight / 2);

        const dragstarted = (d) => {
            d3.event.sourceEvent.stopPropagation();
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        const dragged = (d) => {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        const dragended = (d) => {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }


        bubbles.call(
            d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
        );

        images.call(
            d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
        )

        // set simulation's nodes to our newly created nodes array
        // simulation starts running automatically once nodes are set
        simulation.nodes(nodes)
            .on('tick', () => ticked(bubbles, labels, images))
            .restart();

    }, [data, height, width, maxRadius, clusterPadding, padding])


    return (
        <div ref={container} >

        </div>
    )
}

export default BubbleGraph
