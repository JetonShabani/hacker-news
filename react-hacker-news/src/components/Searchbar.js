
function Searchbar(){
    return(
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span>Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts" 
        />
        <button type="submit">Search</button>
    </form>
    )   
}
export default Searchbar;