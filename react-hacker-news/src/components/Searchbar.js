
function Searchbar(){
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