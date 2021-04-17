import Leaf from "../elements/leaf/leaf"

import { useRouter } from 'next/router'

function Tree(props) {
    return (
        <div>
            {props.entries.map((entry) => (
                <Leaf title={entry.title}/>
            ))}
        </div>
        
        
    )
}

export default Tree;