import styles from './leaf.module.css'
function Leaf(props) {
    return (
        <main>
        <div>
            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <p>{props.title}</p>
                </a>
            </div>
        </div>
        </main>
        
    )
}

export default Leaf;