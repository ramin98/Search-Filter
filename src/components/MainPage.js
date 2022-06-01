import Search from "./Search";
import Results from "./Results";

function MainPage ({data,searchLineChangeHandler,searchLine}){
        return (
            <div className="main-page">
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <Search 
                            searchLineChangeHandler={searchLineChangeHandler}
                            searchLine={searchLine}
                            data={data}
                            />
                        </div>
                        <div className="main-page__movies">
                            <Results 
                            data={data}
                            />
                        </div>
                    </section>
                </main>
            </div>
        );
}
 
export default MainPage;