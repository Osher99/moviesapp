import './App.css';
import Movie from './containers/Movie';
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from './actions';
import React, { useEffect, useState } from 'react';
import _ from 'underscore';

function App() {
  const [moviesState, setMoviesState] = useState([]);
  const [isFirstTime, setisFirstTime] = useState(true);

  const dispatch =  useDispatch();
  const movies = useSelector((state) => state.movies.movies, _.isEqual);

  useEffect(() => {
    if (isFirstTime) {
      dispatch(getMovies(''));
      setisFirstTime(false)
    }
   setMoviesState(movies);
  }, [dispatch, isFirstTime, movies]);
  
  const handleOnChange = (e) => {
    dispatch(getMovies(e.target.value));
    setMoviesState(movies);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <header>
      <h2>Movies Database&nbsp;&nbsp;
      <span className="appAuther">By Osher Dror</span>
      </h2>
      <form onSubmit={handleOnSubmit}>
      <input className="search" type="search" placeholder="Search..." onChange={handleOnChange}/>
        </form>
    </header>
    <div className="movie-container">
     {moviesState && moviesState.length > 0 && moviesState.map((movie) => {
       return <Movie key={movie.id} {...movie} />
     })}
    </div>
    </>
  );
}

export default App;
