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
        <><p class="applications">Applications are open for YC Summer 2022</p>
        <nav class="footer-nav">
            <p>Guidelines</p>
            <p>FAQ</p>
            <p>Lists</p>
            <p>API</p>
            <p>Security</p>
            <p>Legal</p>
            <p>Apply to YC</p>
            <p>Contact</p>
        </nav>
        <form class="searchbar" action="/" method="get">
            <label htmlFor="header-search">
                <span>Search:</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts" />

            <button type="submit">Search</button>
        </form></>
    )   
}
export default Searchbar; 