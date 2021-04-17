import { cluster } from 'd3-hierarchy';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cluster from './components/elements/Cluster/Cluster';
import Treemap from './components/elements/TreeMap/TreeMap';
import Tree from './components/modules/tree';
import data from './data/data.json';
import * as React from "react";
import { render } from "react-dom";

var parser = require('xml2json');
// const dataset = {"children":[{"name":"boss1","children":[{"name":"mister_a","group":"A","value":28,"colname":"level3"},{"name":"mister_b","group":"A","value":19,"colname":"level3"},{"name":"mister_c","group":"C","value":18,"colname":"level3"},{"name":"mister_d","group":"C","value":19,"colname":"level3"}],"colname":"level2"},{"name":"boss2","children":[{"name":"mister_e","group":"C","value":14,"colname":"level3"},{"name":"mister_f","group":"A","value":11,"colname":"level3"},{"name":"mister_g","group":"B","value":15,"colname":"level3"},{"name":"mister_h","group":"B","value":16,"colname":"level3"}],"colname":"level2"},{"name":"boss3","children":[{"name":"mister_i","group":"B","value":10,"colname":"level3"},{"name":"mister_j","group":"A","value":13,"colname":"level3"},{"name":"mister_k","group":"A","value":13,"colname":"level3"},{"name":"mister_l","group":"D","value":25,"colname":"level3"},{"name":"mister_m","group":"D","value":16,"colname":"level3"},{"name":"mister_n","group":"D","value":28,"colname":"level3"}],"colname":"level2"}],"name":"CEO"};
function Home({entries}) {
  return (
    <div className={styles.container}>
      <main>
        <Tree entries={entries}/>
        {/* <Treemap width={600} height={400} data={dataset}/> */}
        {/* <Cluster width={600} height={400} data={dataset}/> */}
        {/* <Router>
          <Link to={"/simplearrow"}>
                  <button>simple arrow</button>
          </Link>
        </Router> */}
        
      </main>
    </div>
  )
}

// pre-rendered func
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  console.log('====================================================');
  console.log(data);
  console.log('====================================================');
  const res = await fetch('http://export.arxiv.org/api/query?search_query=all:electron')
  const xml = await res.text();
  const json = JSON.parse(parser.toJson(xml));
  // const entries =  json.feed.entry;
  const entries = data;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      entries,
    },
  }
}

export default Home
