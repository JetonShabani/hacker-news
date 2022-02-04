import './App.css';
import Searchbar from "./components/Searchbar"
import axios from 'axios';
import NewsList from "./components/News-List";
import {useEffect, useState} from "react";
import Navigation from './components/Navigation';

function App() {
  const [hits, setHits] = useState([]);
  const [input, setInput] = useState("");
  // const [update, setUpdate]= useState(true)
  console.log(input)
  
  function loadData(){
    let url = "http://hn.algolia.com/api/v1/search?query=React";
    // console.log(url)
    axios.get(url)
      .then(res => {
        // const arr = ;
        setHits(res.data.hits);
        // console.log(hits);
        // console.log(arr.hits);
      })
      // setUpdate(false);
  }
  function getData(){
    let url = "http://hn.algolia.com/api/v1/search?query="+input;
    // console.log(url)
    axios.get(url)
      .then(res => {
         const arr = res.data;
        setHits(arr.hits);
        // console.log(hits);
        // console.log(arr.hits);
      })
      // setUpdate(true);
  }
  useEffect(()=>{
    loadData()
    console.log("loadGotCalled")
  },[]);
  useEffect(()=>{
    getData();
    // setUpdate(false);
   console.log("getGotCalled") 
  },[input])
  return (
    <div className="App">
      {/* <button onClick={()=>{
        setInput("HTML")}}>TEST</button> */}
      <Navigation />
      <NewsList newsArr={hits}/>
      <Searchbar input={input} getData={getData} setInput={setInput} />
    </div>
  );
}

export default App;