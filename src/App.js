import React, { useState } from 'react';
import './App.css';
import Searchfield from './components/Searchfield/Searchfield';
import MovieCard from './components/Moviecard/MovieCard';

function MovieFinder() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSearch = async () => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setIsLoading(false);
  }

  return (
    <div>
        <h1>Movie Finder</h1>
        <Searchfield query={query} setQuery={setQuery} handleSearch={handleSearch}/>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <MovieCard movies={movies}/>
        )}
    </div>
  );
}

export default MovieFinder;
