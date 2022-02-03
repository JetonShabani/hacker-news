
function News({news}){
    return (
        <li className='list-item'>
            <span><a>{news.title}</a><a>{news.url}</a></span><br/>
            <span><a>{news.author}</a><a>{news.created_at}</a></span>
        </li>

    )
}
export default News;

