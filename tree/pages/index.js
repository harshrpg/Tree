import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Chart from "./Chart";
import Rectangle from "./components/elements/Rectangle/Rectangle";
import Tree from './components/modules/tree';

var parser = require('xml2json');

function Home({entries}) {
  return (
    <div className={styles.container}>
      <main>
        <Tree entries={entries}/>
      </main>
    </div>
  )
}

// pre-rendered func
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://export.arxiv.org/api/query?search_query=all:electron')
  const xml = await res.text();
  const json = JSON.parse(parser.toJson(xml));
  const entries =  json.feed.entry;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      entries,
    },
  }
}

export default Home
