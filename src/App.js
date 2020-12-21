import './App.css';
import {Data} from './data';
import {MovieList} from './Component/MovieList';
import {FilterV2} from './Component/FilterV2';
import {useState} from 'react';

function App() {
  const [anime, setAnime] = useState(Data);
  const [rateValue, setRateValue] = useState(5);
  const [inputFilter, setInputFilter] = useState('');
  const filterHandler = (searchTerm) => {
    setInputFilter(searchTerm);
  }
  return (
    <div className="App">
      <FilterV2 ratevalue={rateValue} setratevalue={setRateValue} searching={filterHandler}/>
      <MovieList animelist={anime.filter(el => el.rate <= rateValue && el.title.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()))} setanime={setAnime} />
    </div>
  );
}

export default App;
