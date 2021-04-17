// import Xarrow from "../elements/arrow/arrow"
// import Xarrow from "react-xarrows/lib"
import Leaf from "../elements/leaf/leaf"
import dynamic from 'next/dynamic';
import React, { useRef } from "react";

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

function Tree(props) {
    const parent_child = new Map()
    props.entries.map((entry) => {
        if (entry.parent !== '') {
            parent_child.set(entry.parent, entry.id);
        }
    });
  return (
    <div id="canvas">
        {
            props.entries.map((entry) => (
                <Leaf ref={useRef(null)} id={entry.id} title={entry.title}/>
            ))
        }
    
    {/* <Leaf ref={useRef(null)} id={"box2"} /> */}
    {[...parent_child.entries()].map((pc) => (
        <Xarrow start={pc[0]} end={pc[1]} />
    ))}
    
  </div>
  );
    
}

export default Tree;