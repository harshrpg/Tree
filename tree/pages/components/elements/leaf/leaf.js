import styles from './leaf.module.css'
function Leaf(props) {
    const [, setRender] = useState({});
    const forceRerender = () => setRender({});
    return (
        <div ref={props.ref} id={props.id} style={{left:props.position_left, top:props.position_top}}>
            <div className={styles.grid}>
                <a href="" className={styles.card}>
                    <p>{props.title}</p>
                </a>
            </div>
        </div>
    )
}

export default Leaf;