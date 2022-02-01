import './App.css';
import Searchbar from "./components/Searchbar.js";
import NewsList from "./components/News-List.js";
import {useEffect} from "react";
function App() {
  function getData(){
    fetch("http://hn.algolia.com/api/v1/search?query=React").then(response => response.json()).then(response=> console.log(response)).catch(err=>console.log(err));

  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div className="App">
      <Searchbar/>
      <NewsList />
    </div>
  );
}

export default App;
