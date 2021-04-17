import styles from './leaf.module.css'
function Leaf(props) {
    return (
        <div ref={props.ref} id={props.id}>
            <main>
                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <p>{props.title}</p>
                    </a>
                </div>
            </main>
        </div>
        
        
    )
}

export default Leaf;