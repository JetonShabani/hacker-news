import './App.css';
import Searchbar from "./components/Searchbar.js";
import NewsList from "./components/News-List.js";
function App() {
  return (
    <div className="App">
      <Searchbar/>
      <NewsList />
    </div>
  );
}

export default App;
