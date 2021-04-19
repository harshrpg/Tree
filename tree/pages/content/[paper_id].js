import { useRouter } from 'next/router'
import POC from "./poc";
// var parser = require('xml2json');

var ARXIV_URL = 'http://export.arxiv.org/api/query?'
var ID_LIST = 'id_list='

const Paper = ()  => {
    const router = useRouter()
    const { paper_id, dev } = router.query
    if (! dev) {
        getDataFromIds([paper_id])
        return (<div>with online</div>)
    } else {
        return ( <POC />)
    }
}

async function getDataFromIds(id_list) {
    console.log(ARXIV_URL + ID_LIST + '2104.07587');
    const res = await fetch(ARXIV_URL + ID_LIST + '2104.07587')
    const xml = await res.text();
    console.log(xml);
    // console.log(JSON.parse(parser.toJson(xml)));
}

export default Paper;