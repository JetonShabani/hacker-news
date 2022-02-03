import './App.css';
import Searchbar from "./components/Searchbar"
import axios from 'axios';
import NewsList from "./components/News-List";
import {useEffect, useState} from "react";
function App() {
  let dataList=[];
  const [hits, setHits] = useState([]);
  
  async function getData(input="React"){
    let url = "http://hn.algolia.com/api/v1/search?query="+input;
    // const response = await fetch(url);
    // let data = await response.json();
    // fetch(url).then(response => response.json).then(response => setHits(response.body))
   //return dataList;
   axios.get(url)
      .then(res => {
        const hits = res.data;
        setHits(hits.hits);
      })
      // console.log(hits);
  }
  useEffect(()=>{
    getData();
    
  },[]);
  
  console.log(hits);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Searchbar/> */}
      <NewsList newsArr={hits}/>
    </div>
  );
}

export default App;