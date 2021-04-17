import React, { useEffect, RefObject } from 'react'
import { select } from 'd3-selection'
import * as d3 from 'd3'

var treeData = [
  {
    "name": "Top Level",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  }
];

var margin = {top: 20, right: 120, bottom: 20, left: 120},
 width = 960 - margin.right - margin.left,
 height = 500 - margin.top - margin.bottom;
 
var i = 0;


var tree = d3.tree().size([height, width]);

var svg = await d3.svg


root = treeData[0];
  
update(root);

const Rectangle = () => {
  const ref = React.createRef()
  useEffect(() => {
    draw()
  })
  const draw = () => {
    select(ref.current).append('p').text('Hello World')
    select('svg').append('g').attr('transform', 'translate(250, 0)').append('rect').attr('width', 500).attr('height', 500).attr('fill', 'tomato')
  }

  const treeDraw = () => {
    tree.
  }
  return (
    <div className="Rectangle" ref={ref}>
      <svg width="500" height="500">
        <g transform="translate(0, 0)">
          <rect width="500" height="500" fill="green" />
        </g>
      </svg>
    </div>
  )
}

export default Rectangle