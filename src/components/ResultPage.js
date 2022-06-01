import Search from "./Search";

function ResultPage({data,searchLine}){
        return (
            <div className="list-page">
                <Search searchLine={searchLine}/>
                <ul>
                    {data.map((item) => {
                        return (
                            <li>
                                <h3 className="movie-item__title">{item.name}</h3>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
}
 
export default ResultPage;