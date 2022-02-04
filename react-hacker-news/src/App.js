import './App.css';
import Searchbar from "./components/Searchbar"
import axios from 'axios';
import NewsList from "./components/News-List";
import {useEffect, useState} from "react";
import Navigation from './components/Navigation';

function App() {
  const [hits, setHits] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const[firstLoad, setFirstLoad] = useState(0);
  console.log(input)
  
  function loadData(){
    let url = "http://hn.algolia.com/api/v1/search?query=React";
    setIsLoading(true);
    axios.get(url)
      .then(res => {
        setHits(res.data.hits);
;
      })
     ;
     setIsLoading(false);
    //  setFirstLoad(1)
  }
  function getData(txt=""){
    if(txt.trim() === ""){
      alert("Please enter a Searchtopic")
    } else{
      setIsLoading(true);
    let url = "http://hn.algolia.com/api/v1/search?query="+txt;
    axios.get(url)
      .then(res => {
         const arr = res.data;
        setHits(arr.hits);
      })}
      setIsLoading(false);
  }
  useEffect(()=>{
    loadData()
    console.log("loadGotCalled")
  },[]);
  return (
    <div className="App">
      {isLoading ? (
         <p>Loading ...</p>):(  
          <div>
            <Navigation />
            <NewsList newsArr={hits}/>
            <Searchbar input={input} getData={getData} setInput={setInput} />
         </div>)}
    
    </div>
  );
}

export default App;