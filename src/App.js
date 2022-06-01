import {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ResultPage from './components/ResultPage';

function App(){
  
const [searchLine,searchLineSet] = useState()
const [data,dataSet] = useState([])

  const fetchName = async () => {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await resp.json();
		const newName = data.filter(
			(person) => person.name.indexOf(searchLine) !== -1
		);
		dataSet(newName);
	};

  function searchLineChangeHandler(e){
    searchLineSet(e.target.value);
    fetchName();
  }

    return (
      <div className="app">
        <Routes>
        <Route path="/" element={<MainPage  
        searchLineChangeHandler={searchLineChangeHandler}
        searchLine={searchLine}
        data={data}
        />} />
        <Route path="/components/ResultPage" element={<ResultPage
        data={data}
        searchLine={searchLine}
        />} />
        </Routes>
        
      </div>
    );
  
}

export default App;