import './App.css';
import Searchbar from "./components/Searchbar"
import axios from 'axios';
import NewsList from "./components/News-List";
import React, {useEffect, useState} from "react";
import Navigation from './components/Navigation';
//import ReactPagination from "react-pagination";

function App() {
  const [hits, setHits] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const[firstLoad, setFirstLoad] = useState(0);
  console.log(input)
  
  async function loadData(){
    let url = "http://hn.algolia.com/api/v1/search?query=React";
    setIsLoading(true);
    // console.log(isLoading)
    axios.get(url)
      .then(res => {
        setHits(res.data.hits);
        setIsLoading(false);
      });
      
      console.log(isLoading)
    //  setFirstLoad(1)
  }
  async function getData(txt=""){
   setIsLoading(true);
    if(txt.trim() === ""){
      alert("Please enter a Searchtopic")
      // document.getElementById("msg").innerText="No Results Found"

    } else{
    let url = "http://hn.algolia.com/api/v1/search?query="+txt;
    axios.get(url)
      .then(res => {
         const arr = res.data;
        setHits(arr.hits);
        setIsLoading(false);
       
      })
      
    }
      
  }
  useEffect(()=>{
    // setIsLoading(true);
    // console.log(isLoading)
    loadData()
    console.log("loadGotCalled")
    // console.log(isLoading)
    // setIsLoading(false);
  },[]);
 
  return (
    <div className="App">
   
          <div>
            <Navigation />
            {isLoading ? (<p id = "msg">Loading ...</p>):(<NewsList newsArr={hits}/>)}
            <Searchbar input={input} getData={getData} setInput={setInput} />
         </div>
    
    </div>
  );
}

 export default App;