// import Xarrow from "../elements/arrow/arrow"
// import Xarrow from "react-xarrows/lib"
// import Leaf from "../elements/leaf/leaf"
import dynamic from 'next/dynamic';
import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import styles from './tree.module.css';
import Link from 'next/link';

const Xarrow = dynamic(() => import('react-xarrows'), {
    ssr: false
  }); 
  
const Box = (props) => {
return (
    <div ref={props.ref} id={props.id} style={boxStyle}>
    {props.id}
    </div>
);
};
const boxStyle = {
    position: "absolute",
    border: "1px #999 solid",
    borderRadius: "10px",
    textAlign: "center",
  };
function Tree(props) {
    
    const parent_child = new Map()
    
    props.entries.map((entry) => {
        if (entry.parent !== '') {
            parent_child.set(entry.parent, entry.id);
        }
    });
    const [, setRender] = useState({});
  const forceRerender = () => setRender({});
    const boxes = [
        { id: "https://arxiv.org/abs/2104.07587", title: "Applying Personal Knowledge Graphs to Health", x: 150, y: 20, ref: useRef(null) },
        { id: "https://arxiv.org/abs/2004.00071", title: "Personal Health Knowledge Graphs for Patients", x: 80, y:200, ref: useRef(null) },
        { id: "https://arxiv.org/abs/1707.05340", title: "PDD Graph: Bridging Electonic Medical Redords ...", x: 650, y: 200, ref: useRef(null) },
        { id: "https://arxiv.org/abs/2004.06203", title: "knowledge Graphs for Processing scientific ...", x: 80, y: 350, ref: useRef(null) },
        { id: "https://arxiv.org/abs/2004.05648", title: "A comparative analysis of knowledge Graph ...", x: 80, y: 550, ref: useRef(null) },
        { id: "https://arxiv.org/abs/1912.08010", title: "Quering Linked Data: An Experimental Evaluation ...", x: 650, y: 350, ref: useRef(null) },
        { id: "https://arxiv.org/abs/2002.09172", title: "Star Pattern Fragments: Accessing Knowledge ...", x: 650, y: 550, ref: useRef(null) },
        { id: "https://arxiv.org/abs/1807.08461", title: "A Cache-based Optimizer for Quering Enhanced ...", x: 1150, y: 550, ref: useRef(null) },
        { id: "https://arxiv.org/abs/2102.13027", title: "A survey of RDF stores & SPARQL Engines for ...", x: 1150, y: 350, ref: useRef(null) },
      ];

      const [lines] = useState([
        {
          start: "https://arxiv.org/abs/2104.07587",
          end: "https://arxiv.org/abs/2004.00071",
        },
        {
            start: "https://arxiv.org/abs/2104.07587",
            end: "https://arxiv.org/abs/1707.05340",
        },
        {
            start: "https://arxiv.org/abs/2004.00071",
            end: "https://arxiv.org/abs/2004.06203",
        },
        {
            start: "https://arxiv.org/abs/2004.06203",
            end: "https://arxiv.org/abs/2004.05648",
        },
        {
            start: "https://arxiv.org/abs/2004.06203",
            end: "https://arxiv.org/abs/1912.08010",
        },
        {
            start: "https://arxiv.org/abs/1912.08010",
            end: "https://arxiv.org/abs/2002.09172",
        },
        {
            start: "https://arxiv.org/abs/2002.09172",
            end: "https://arxiv.org/abs/1807.08461",
        },
        {
            start: "https://arxiv.org/abs/1807.08461",
            end: "https://arxiv.org/abs/2102.13027",
        },
        
      ]);
  return (
    <div id="canvas">
        {
            boxes.map((box, i) => (
                // <Leaf
                //     key={i}
                //   id={entry.id}
                //   position_left={ entry.x}
                //   position_top={entry.y}
                //     />
                
                    <Draggable onStop={forceRerender} onDrag={forceRerender} key={i}>
                        <Link 
                            href={{
                                pathname: '../../content/[paper_id]',
                                query: {paper_id:box.id, dev: true}
                            }}>
                        <div
                        id={box.id}
                        className={styles.card}
                        style={{ ...boxStyle, left: box.x, top: box.y }}
                        >
                            {box.title}
                        </div>
                        </Link>
                    </Draggable>
                
                
            ))
        }
    
    {/* <Leaf ref={useRef(null)} id={"box2"} /> */}
    {/* {[...parent_child.entries()].map((pc, i) => (
        <Xarrow key={i} start={pc[0]} end={pc[1]} />
    ))} */}
    {
        lines.map((line, i) => (
            <Xarrow key={i} {...line} />
        ))
    }
    
  </div>
  );
    
}

export default Tree;