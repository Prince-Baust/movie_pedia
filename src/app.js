import React, {useState, useEffect} from 'react';
import './app.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searhTerm, setSearchTerm] = useState('');

  const API_URL = 'http://www.omdbapi.com/?apikey=5656a896';
  const searchMovie = async (title) => {
    const url = `${API_URL}&s=${title}`;

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.Search);
  }

  useEffect(() => {
      searchMovie('spider-man');
  }, []);

  return (
    <div className="app">
      <h1>MoviePidea</h1>

      <div className="search">
        <input type="text" placeholder="Search for Movies" value={searhTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <img src={searchIcon} alt="search" onClick={()=> {}}/>
      </div>
      {
        movies?.length > 0
        ? (
            <div className="container">
              {movies.map((movie, index) => (
                <MovieCard movie={movie} key={index}/>
              ))}
            </div>
          ) : (
            <div className="empty">
              No Movies Found!
            </div>
          )
      }


    </div>
  );
};

export default App;
