import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function Cluster({width, height, data}){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        const svg = d3.select(ref.current);

        // Give the data to this cluster layout:
        var root = d3.hierarchy(data).sum(function(d){ return d.value});

        var cluster = d3.cluster().size([height, width - 100]);

        // Give the data to this cluster layout:
        var root = d3.hierarchy(data, (d) => {
            return d.children;
        });
        cluster(root);

        // Select the nodes
        var nodes = svg
            .selectAll("path")
            .data(root.descendants().slice(1))

        // draw the tree
        nodes.enter()
            .append('path')
            .attr("d", function(d) {
                return "M" + d.y + "," + d.x
                        + "C" + (d.parent.y + 50) + "," + d.x
                        + " " + (d.parent.y + 150) + "," + d.parent.x // 50 and 150 are coordinates of inflexion, play with it to change links shape
                        + " " + d.parent.y + "," + d.parent.x;
                      })
            .style("fill", "none")
            .attr("stroke", "#ccc")

        nodes.enter()
            .append("g")
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")"
            })
            .append("circle")
            .attr("r", 7)
            .style("fill", "#69b3a2")
            .attr("stroke", "black")
            .style("stroke-width", 2)
    }
    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )
}

export default Cluster;