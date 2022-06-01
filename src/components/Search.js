import {Link} from "react-router-dom"

function Search({searchLineChangeHandler,searchLine}){
        return (
            <div className="search-box">
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Search"
                            onChange={searchLineChangeHandler}
                        />
                    <Link to="/components/ResultPage">
                        Search
                    </Link>
            </div>
        );
}
 
export default Search;