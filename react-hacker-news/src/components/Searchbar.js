import { useState} from 'react'

function Searchbar(props){
    const [input, setInput] = useState(" ");

    function onInputChange(e) {
         setInput(e.target.value)
         console.log(input)
      }
    //   function onClick(){
    //     let url = "http://hn.algolia.com/api/v1/search?query="+document.getElementById("header-search").value;
    //     console.log(url);
    //     console.log(url)
    //     axios.get(url)
    //       .then(res => {
    //         //const hits = res.data;
    //         props.handelChange(res.data.hits);
            
    //       })
    //       console.log(" Get got called");
          
    //   }
      
    return(
        <form>
        <label htmlFor="header-search">
            <span>Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts" 
            onChange={onInputChange}
        />
        <button onClick={()=>props.getData(input)} type="submit">Search</button>
    </form>
    )   
}
export default Searchbar; 