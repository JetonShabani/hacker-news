import './App.css';
import Searchbar from "./components/Searchbar"
import axios from 'axios';
import NewsList from "./components/News-List";
import {useEffect, useState} from "react";
function App() {
  const [hits, setHits] = useState([]);

  
  function getData(input = "React"){
    let url = "http://hn.algolia.com/api/v1/search?query="+input;
    console.log(url)
    axios.get(url)
      .then(res => {
        // const arr = ;
        setHits(res.data.hits);
        console.log(hits);
        // console.log(arr.hits);
      })
  }
  useEffect(()=>{
    getData();
    console.log(hits);
  },[]);
  return (
    <div className="App">
      <h1>Hello</h1>
      <Searchbar getData={getData}/>
      <NewsList newsArr={hits}/>

    </div>
  );
}

export default App;