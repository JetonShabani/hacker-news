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




   function loadData(){
     let url = "http://hn.algolia.com/api/v1/search?query=React";
      console.log(url)
     axios.get(url)
       .then(res => {
         // const arr = ;
         console.log(res.data)
         setHits(res.data.hits);
         // console.log(hits);
         // console.log(arr.hits);
       })
       // setUpdate(false);
   }
   function getData(){
     let url = "http://hn.algolia.com/api/v1/search?query=%22+input";
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