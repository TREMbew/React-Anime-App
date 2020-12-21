import './App.css';
import {Data} from './data';
import {MovieList} from './Component/MovieList';
import {useState} from 'react';

function App() {
  const [anime, setAnime] = useState(Data)
  return (
    <div className="App">
      <MovieList animelist={anime} setanime={setAnime} />
    </div>
  );
}

export default App;
