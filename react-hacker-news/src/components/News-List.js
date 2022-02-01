import News from "./News";

function NewsList({newsArr}){
    return (
        <ul>
            {newsArr.map(news => (
                <News 
                   // key={news.id} 
                    news={news} 
                    
                    />
            ))}
        </ul>
    )
}
export default NewsList;