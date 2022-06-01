import ResultsItem from "./ResultsItem";

function Results({data}) {
        return ( 
            <ul className="movies">
                {data.map((movie) => (
                    <li className="movies__item">
                        <ResultsItem {...movie} />
                    </li>
                ))}
            </ul>
        );
}
 
export default Results;