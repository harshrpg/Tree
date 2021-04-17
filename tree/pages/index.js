import Head from 'next/head'
import styles from '../styles/Home.module.css'

var parser = require('xml2json');

function Home({posts}) {
  return (
    <div className={styles.container}>
      hello
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://export.arxiv.org/api/query?search_query=all:electron')
  const xml = await res.text();
  const json = parser.toJson(xml);
  console.log(json);
  // const posts = await res.json()
  const posts = {}

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Home
