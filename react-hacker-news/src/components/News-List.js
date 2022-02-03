import News from "./News";
function NewsList({newsArr}){
    return (
        <ol>
            {newsArr.map(news => (
                <News 
                    key={news.objectID} 
                    news={news} 

                    />
            ))}
        </ol>
    )
}
export default NewsList;