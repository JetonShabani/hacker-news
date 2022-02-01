import './App.css';
import Searchbar from "./components/Searchbar"

import NewsList from "./components/News-List";
import {useEffect} from "react";
function App() {
  let dataList=[];
  
  async function getData(input="React"){
    let url = "http://hn.algolia.com/api/v1/search?query="+input;
    const response = await fetch(url);
    let data = await response.json();
    console.log(data.hits);
   
   return data;
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Searchbar/> */}
      {/* <NewsList newsArr={dataList.hits}/> */}
    </div>
  );
}

export default App;
